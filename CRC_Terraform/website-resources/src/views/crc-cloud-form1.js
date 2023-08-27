import React from 'react'

import { Helmet } from 'react-helmet'

import './crc-cloud-form1.css'

const CRCCloudForm1 = (props) => {
  return (
    <div className="crc-cloud-form1-container">
      <Helmet>
        <title>CRC-CloudForm1 - Portfolio Page</title>
        <meta property="og:title" content="CRC-CloudForm1 - Portfolio Page" />
      </Helmet>
      <div className="crc-cloud-form1-container1">
        <div className="crc-cloud-form1-container2">
          <h1 className="crc-cloud-form1-text">Cloud Resume Challenge</h1>
        </div>
        <a
          href="https://github.com/AlexTNewell/Cloud-Resume-Challenge-CloudFormation"
          target="_blank"
          rel="noreferrer noopener"
          className="crc-cloud-form1-link"
        >
          <img
            alt="image"
            src="/github-200h.png"
            className="crc-cloud-form1-image"
          />
        </a>
      </div>
      <h2 className="crc-cloud-form1-text01">Using CloudFormation</h2>
      <span className="crc-cloud-form1-text02">
        <span>
          The Cloud Resume Challenge comprises a series of technical challenges,
          each of which is designed to test one&apos;s ability in IaC, AWS and
          CI/CD. 
        </span>
        <span>
          The main goal of the challenge is to deploy a static website on AWS
          using CloudFormation and GitHub Actions. 
        </span>
        <br></br>
        <br></br>
        <span className="crc-cloud-form1-text07">
          Frontend: Javascript, HTML, CSS
        </span>
        <br className="crc-cloud-form1-text08"></br>
        <span className="crc-cloud-form1-text09">Backend: Node.js, Python</span>
        <br className="crc-cloud-form1-text10"></br>
        <span className="crc-cloud-form1-text11">
          Database: DynamoDB / noSQL
        </span>
        <br className="crc-cloud-form1-text12"></br>
        <span className="crc-cloud-form1-text13">
          Deployment: GitHub Actions
        </span>
        <br></br>
        <br></br>
        <span>The code: </span>
        <a
          href="https://github.com/AlexTNewell/Cloud-Resume-Challenge-CloudFormation"
          target="_blank"
          rel="noreferrer noopener"
          className="crc-cloud-form1-link1"
        >
          https://github.com/AlexTNewell/Cloud-Resume-Challenge-CloudFormation
        </a>
        <span>.</span>
        <br></br>
        <br></br>
        <span>
          A useful guide to the challenge has been provided here:
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <a
          href="https://www.youtube.com/watch?v=e7vZe7qZFmE&amp;list=PLEk97Q5Nj5oesA1WNk7DzaUpZUnCsQFVQ"
          target="_blank"
          rel="noreferrer noopener"
          className="crc-cloud-form1-link2"
        >
          https://www.youtube.com/watch?v=e7vZe7qZFmE&amp;list=PLEk97Q5Nj5oesA1WNk7DzaUpZUnCsQFVQ.
        </a>
        <br></br>
        <br></br>
        <span>Prelude: </span>
        <span>
          All AWS resources should be deployed using the template.yaml as a part
          of the Infrastructure as Code requirement.
        </span>
        <br></br>
        <br></br>
        <span>Phase 1 - Creating the Front End</span>
        <br></br>
        <span>
          1. Build the visual representation of resume using plain HTML, CSS and
          JavaScript.
        </span>
        <br></br>
        <span>
          2. Using AWS Vault and SAM deploy the HTML, CSS and JavaScript to an
          S3 bucket. The S3 website URL should use HTTPS for security.
        </span>
        <br></br>
        <span>
          3. Point a custom DNS domain name to the CloudFront distribution.
        </span>
        <br></br>
        <br></br>
        <span>Phase 2 - Creating the Back End</span>
        <br></br>
        <span>
          1. Deploy a DynamoDB table. This will store a website visitor-count.
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <br></br>
        <span>
          2. Use AWS API Gateway and AWS Lambda to create an API that accepts
          requests from your web app and communicates with the database to
          return the visitor-count value.
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <br></br>
        <span>
          3. Use Javascript to fetch the API and in so doing, the visitor-count
          value.
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <br></br>
        <br></br>
        <span>Phase 3 - Automation &amp; Testing</span>
        <br></br>
        <span>1. Create a GitHub repository for your code.</span>
        <br></br>
        <span>2. Write an integration test for your Python code.</span>
        <br></br>
        <span>
          3. Set up GitHub Actions such that when you push an update to your
          Serverless Application Model template, your tests are run.
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <br></br>
        <br></br>
        <span className="crc-cloud-form1-text54">Tech Stack:</span>
        <br></br>
        <span>
          AWS (CloudFront, Certificate Manager, Route53, API Gateway, Lambda,
          DynamoDB, S3, IAM, Security Groups).
        </span>
        <br></br>
        <span>AWS Vault, </span>
        <span>AWS SAML and </span>
        <span>
          CloudFormation to deploy all AWS resources (S3, CloudFront, Route 53,
          DynamoDB, API Gateway, Certificate Manager and AWS Lambda).
        </span>
        <br></br>
        <span>CI/CD via GitHub Actions.</span>
        <br></br>
        <span>Scripting using BASH.</span>
        <br></br>
        <span>Software Development (Python, Javascript, CSS, HTML).</span>
        <br></br>
        <span>
          Serverless Architecture (Lambda, API Gateway, DynamoDB, S3).
        </span>
        <br></br>
        <span>Lambda Functions, Python, Boto3.</span>
        <br></br>
        <span>
          Security (IAM, bucket policies, API authentication/authorization).
        </span>
        <br></br>
        <span>Networking (DNS using Route53).</span>
        <br></br>
      </span>
    </div>
  )
}

export default CRCCloudForm1
