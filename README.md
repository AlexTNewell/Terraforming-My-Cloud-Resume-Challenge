# Terraforming-My-Cloud-Resume-Challenge

## Background
The Cloud Resume Challenge is a series of challenges designed to develop your proficiency in AWS, infrastructure as code and CI/CD.

The original challenge is to provision all the infrastructure using CloudFormation.  

This version is an extension to the original challenge where you use Terraform instead. 

For my completed version of the original challenge using CloudFormation see:  
https://github.com/AlexTNewell/Cloud-Resume-Challenge-CloudFormation

For more information on the original challenge see:  
https://cloudresumechallenge.dev/docs/the-challenge/aws/

For more information on the Terraform extension to the original challenge see: 
https://cloudresumechallenge.dev/docs/extensions/terraform-getting-started/.

## A Note About Infrastructure as Code
In reality all the below steps are completed simultaneously using Terraform. However, they are presented here in an artifically chronological order for simplicity. 

## Frontend
- Use AWS Vault and SAM deploy the HTML, CSS and JavaScript to an S3 bucket.
- Create a Cloudfront Distribution.
- The S3 website URL should use HTTPS for security.
- Point a custom DNS domain name to the CloudFront distribution.

## Backend
- Deploy a DynamoDB table to store the visitor count.
- Use AWS API Gateway and AWS Lambda to update and retrieve the visitor count. 
- Update frontend Javascript to fetch the API.

## Automation & Testing
- Create a GitHub repository.
- Write an integration test to ensure visitor counter works.
- Setup GitHub Actions such that when you push an update to your Serverless Application Model template, your tests are run.
- Congifure the deployment pipeline such that when the tests pass the push goes ahead. If it fails the deployment should rollback. 

## Skills and Technologies Used:
Software Development (Frontend / Backend)  
IaC (Infrastructure as Code) using Terraform
CI/CD (GitHub Actions)  
Serverless Architecture on AWS (Lambda, API Gateway, DynamoDB, S3)  
Security (IAM, bucket policies, API authentication/authorization)  
Networking (DNS using Route53)
