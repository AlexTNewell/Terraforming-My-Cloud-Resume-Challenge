terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
}

module "template_files" {
  source   = "hashicorp/dir/template"
  base_dir = "${path.module}/website-resources"
}



##################### S3 #####################

resource "aws_s3_bucket" "hosting_bucket" {
  bucket = var.bucket_name
}

resource "aws_s3_bucket_cors_configuration" "hosting_bucket_cors" {
  bucket = aws_s3_bucket.hosting_bucket.id

  cors_rule {
    allowed_origins = ["*"]  
    allowed_methods = ["GET"]
    allowed_headers = ["*"]
  }
}

resource "aws_s3_bucket_ownership_controls" "hosting_bucket_ownership" {
  bucket = aws_s3_bucket.hosting_bucket.id

  rule {
    object_ownership = "ObjectWriter"
  }
}

resource "aws_s3_bucket_public_access_block" "hosting_bucket_public_access" {
  bucket = aws_s3_bucket.hosting_bucket.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_acl" "hosting_bucket_acl" {
  bucket = aws_s3_bucket.hosting_bucket.id
  acl    = "public-read"
}

resource "aws_s3_bucket_policy" "hosting_bucket_policy" {
  bucket = aws_s3_bucket.hosting_bucket.id
  policy = jsonencode({
    "Version" : "2012-10-17",
    "Id" : "MyPolicy",
    "Statement" : [
      {
        "Sid" : "PublicReadForGetBucketObjects",
        "Effect" : "Allow",
        "Principal" : "*",
        "Action" : "s3:GetObject",
        "Resource" : "arn:aws:s3:::hms-victory/*",
        "Condition" : {
          "StringEquals" : {
            "aws:SourceOrigin": [
              "https://alexandertnewell.com",
              "https://fonts.googleapis.com",
              "https://unpkg.com"
            ]
          }
        }
      }
    ]
  })
}


resource "aws_s3_bucket_website_configuration" "hosting_bucket_website_configuration" {
  bucket = aws_s3_bucket.hosting_bucket.id
  index_document {
    suffix = "index.html"
  }
}

resource "aws_s3_object" "hosting_bucket_files" {
  bucket       = aws_s3_bucket.hosting_bucket.id
  for_each     = module.template_files.files
  key          = each.key
  content_type = each.value.content_type
  source       = each.value.source_path
  content      = each.value.content
  etag         = each.value.digests.md5

}

resource "aws_s3_object" "object" {
  for_each = fileset("./website-resources", "*")
  bucket   = "hms-victory"
  key      = each.value
  source   = "./website-resources/${each.value}"
}


##################### CLOUDFRONT DISTRIBUTION #####################


locals {
  s3_origin_id = "hms-victory.s3-website.eu-west-2.amazonaws.com"
}

resource "aws_cloudfront_distribution" "s3_distribution" {
  origin {
    domain_name = aws_s3_bucket.hosting_bucket.bucket_regional_domain_name
    origin_id   = local.s3_origin_id
    custom_origin_config {
      origin_protocol_policy = "match-viewer"
      http_port              = 80
      https_port             = 443
      origin_ssl_protocols   = ["SSLv3"]
    }
  }


  enabled             = true
  is_ipv6_enabled     = true
  comment             = "Some comment"
  default_root_object = "index.html"

  default_cache_behavior {
    allowed_methods  = ["DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = local.s3_origin_id

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 0
    max_ttl                = 0
  }

  price_class = "PriceClass_100"

  restrictions {
    geo_restriction {
      restriction_type = "whitelist"
      locations        = ["US", "CA", "AU", "NZ", "GB", "NO", "SE", "IE", "DE", "DK", "NL"]
    }
  }

  viewer_certificate {
    acm_certificate_arn = "arn:aws:acm:us-east-1:952832413145:certificate/6998680e-fdf8-400b-8f03-a9e5630e5254"
    ssl_support_method  = "sni-only"
  }

  aliases = ["alexandertnewell.com"]
}


##################### Route 53 #####################

resource "aws_route53_zone" "MyRoute53Zone" {
  name = "alexandertnewell.com"
}

resource "aws_route53_record" "MyRoute53Record" {
  zone_id = aws_route53_zone.MyRoute53Zone.zone_id
  name    = aws_route53_zone.MyRoute53Zone.name
  type    = "A"
  alias {
    name = aws_cloudfront_distribution.s3_distribution.domain_name
    zone_id = aws_cloudfront_distribution.s3_distribution.hosted_zone_id
    evaluate_target_health = false
  }
}

##################### ACM #####################

resource "aws_acm_certificate" "MyCertificate" {
  domain_name       = "alexandertnewell.com"
  validation_method = "DNS"
}

resource "aws_acm_certificate_validation" "MyCertificateValidation" {
  certificate_arn = aws_acm_certificate.MyCertificate.arn
}

##################### DynamoDB #####################

resource "aws_dynamodb_table" "basic-dynamodb-table" {
  name         = "VisitorsTable"
  billing_mode = "PAY_PER_REQUEST"
  hash_key     = "UserId"
  range_key    = "ID"

  attribute {
    name = "UserId"
    type = "S"
  }

  attribute {
    name = "ID"
    type = "S"
  }
}


##################### IAM #####################

resource "aws_iam_role" "role" {
  name = "Superior"
  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Sid    = ""
        Principal = {
          Service = "lambda.amazonaws.com"
        }
      },
    ]
  })
}

resource "aws_iam_policy" "policy" {
  name        = "Burgundy"
  path        = "/"
  description = "Update count in a dynamodb table"
  policy = jsonencode(
    {
      Version = "2012-10-17"
      Statement = [
        {
          Action = [
            "dynamodb:GetItem",
            "dynamodb:DeleteItem",
            "dynamodb:PutItem",
            "dynamodb:Scan",
            "dynamodb:Query",
            "dynamodb:UpdateItem",
            "dynamodb:BatchWriteItem",
            "dynamodb:BatchGetItem",
            "dynamodb:DescribeTable",
            "dynamodb:ConditionCheckItem"
          ],
          Resource = [
            "arn:aws:dynamodb:eu-west-2:952832413145:table/VisitorsTable",
            "arn:aws:dynamodb:eu-west-2:952832413145:table/VisitorsTable/index/*"
          ],
          Effect = "Allow"
        }
      ]

  })
}

resource "aws_iam_role_policy_attachment" "lambda_logs" {
  role       = aws_iam_role.role.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}


##################### Lambda #####################


resource "aws_lambda_function" "counter" {
  filename      = "app.zip"
  function_name = "Alder"
  role          = aws_iam_role.role.arn
  handler       = "app.count_function"

  runtime = "python3.9"

  architectures = ["x86_64"]

}

resource "aws_cloudwatch_log_group" "count_function_log" {
  name = "/aws/lambda/${aws_lambda_function.counter.function_name}"

  retention_in_days = 1
}

data "archive_file" "lambda" {
  type        = "zip"
  source_file = "app.zip"
  output_path = "app.zip"
}

resource "aws_lambda_permission" "apigw_lambda" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.counter.function_name
  principal     = "apigateway.amazonaws.com"
}


##################### API Gateway #####################


resource "aws_api_gateway_rest_api" "counter_api" {
  name = "Kildare"
  endpoint_configuration {
    types = ["REGIONAL"]
  }
}

resource "aws_api_gateway_resource" "resource" {
  path_part   = "get"
  parent_id   = aws_api_gateway_rest_api.counter_api.root_resource_id
  rest_api_id = aws_api_gateway_rest_api.counter_api.id
}

resource "aws_api_gateway_method" "get" {
  rest_api_id      = aws_api_gateway_rest_api.counter_api.id
  resource_id      = aws_api_gateway_resource.resource.id
  http_method      = "GET"
  authorization    = "NONE"
  api_key_required = false
}

resource "aws_api_gateway_integration" "integration_get" {
  rest_api_id             = aws_api_gateway_rest_api.counter_api.id
  resource_id             = aws_api_gateway_resource.resource.id
  http_method             = aws_api_gateway_method.get.http_method
  integration_http_method = "POST"
  type                    = "AWS_PROXY"
  uri                     = aws_lambda_function.counter.invoke_arn
}

resource "aws_api_gateway_method" "post" {
  rest_api_id      = aws_api_gateway_rest_api.counter_api.id
  resource_id      = aws_api_gateway_resource.resource.id
  http_method      = "POST"
  authorization    = "NONE"
  api_key_required = false
}

resource "aws_api_gateway_integration" "integration_post" {
  rest_api_id             = aws_api_gateway_rest_api.counter_api.id
  resource_id             = aws_api_gateway_resource.resource.id
  http_method             = aws_api_gateway_method.post.http_method
  integration_http_method = "POST"
  type                    = "AWS_PROXY"
  uri                     = aws_lambda_function.counter.invoke_arn
}



################ Deployment of API gateway ################

resource "aws_api_gateway_deployment" "deployment1" {
  rest_api_id = aws_api_gateway_rest_api.counter_api.id

  depends_on = [aws_api_gateway_integration.integration_get]
  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_api_gateway_stage" "example" {
  deployment_id = aws_api_gateway_deployment.deployment1.id
  rest_api_id   = aws_api_gateway_rest_api.counter_api.id
  stage_name    = "test"
}





