import React from 'react'

import { Helmet } from 'react-helmet'

import './nginx-ec2.css'

const NGINXEC2 = (props) => {
  return (
    <div className="nginxec2-container">
      <Helmet>
        <title>NGINX-EC2 - Portfolio Page</title>
        <meta property="og:title" content="NGINX-EC2 - Portfolio Page" />
      </Helmet>
      <div className="nginxec2-container1">
        <div className="nginxec2-container2">
          <h1 className="nginxec2-text">Cloud Resume Challenge</h1>
        </div>
        <a
          href="https://github.com/AlexTNewell/Cloud-Resume-Challenge-CloudFormation"
          target="_blank"
          rel="noreferrer noopener"
          className="nginxec2-link"
        >
          <img alt="image" src="/github-200h.png" className="nginxec2-image" />
        </a>
      </div>
      <h2 className="nginxec2-text01">Using Terraform</h2>
      <span className="nginxec2-text02">
        <span>Website Hosted on EC2 using NGINX &amp; Docker</span>
        <br></br>
        <br></br>
        <span>Key Points:</span>
        <br></br>
        <span>
          - Provisioned via GitHub Actions using Terraform
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <br></br>
        <span>- Route53: Allow access via a clean domain name.</span>
        <br></br>
        <span>- SSL certificate: Encrypt HTTP traffic.</span>
        <br></br>
        <span>
          - ALB: ensure individual EC2s are not overloaded and remain
          responsive.
        </span>
        <br></br>
        <span>
          - Subnets &amp;amp; Bastion hosts: Allows the ec2s to run securely in
          the backend.
        </span>
        <br></br>
        <span>
          - EC2 user data: Automatically pull the docker image from Dockerhub
          and run a container upon instantiation
        </span>
        <br></br>
        <span>
          - ASG: Ensures the system scales to meet demand and that new EC2s
          automatically.
        </span>
        <br></br>
        <span>- Multi-AZ: Provisioned across two AZs for fault tolerance</span>
        <br></br>
        <br></br>
        <span>Room for Expansion</span>
        <br></br>
        <span>
          - Lacks application, infrastructure, network and expenditure
          monitoring/alerts
        </span>
        <br></br>
        <span>- Lacks build pipeline unit and integration tests.</span>
        <br></br>
        <span>
          - Potentially create separate development and production environments.
          For example, in its current configuration the files being served are
          copied to the docker container. Although this may be desirable for
          production, in development, a bind
        </span>
        <br></br>
        <span>
          mount might be preferred so that code changes take place as they are
          pushed.
        </span>
        <br></br>
        <br></br>
        <span className="nginxec2-text36">Frontend: Javascript, HTML, CSS</span>
        <br className="nginxec2-text37"></br>
        <span className="nginxec2-text38">Backend: Node.js, Python</span>
        <br className="nginxec2-text39"></br>
        <span className="nginxec2-text40">Database: DynamoDB / noSQL</span>
        <br className="nginxec2-text41"></br>
        <span className="nginxec2-text42">Deployment: GitHub Actions</span>
        <br></br>
        <br></br>
        <span>The code: </span>
        <a
          href="https://github.com/AlexTNewell/Cloud-Resume-Challenge-CloudFormation"
          target="_blank"
          rel="noreferrer noopener"
          className="nginxec2-link1"
        >
          https://github.com/AlexTNewell/Cloud-Resume-Challenge-CloudFormation
        </a>
        <span>.</span>
        <br></br>
        <span>
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <br></br>
        <br></br>
        <span className="nginxec2-text51">Tech Stack:</span>
        <br></br>
        <br></br>
      </span>
    </div>
  )
}

export default NGINXEC2
