import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Portfolio Page</title>
        <meta property="og:title" content="Portfolio Page" />
      </Helmet>
      <div data-role="Header" className="home-navbar-container">
        <div className="home-navbar">
          <div className="home-links-container"></div>
          <div data-role="BurgerMenu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="home-mobile-menu">
            <div className="home-container01">
              <span className="Card-Heading home-heading">Logo</span>
              <div data-role="CloseMobileMenu" className="home-close-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon2">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="home-links-container1">
              <span className="home-link Navbar-Link">About</span>
              <span className="home-link1 Navbar-Link">Experience</span>
              <span className="home-link2 Navbar-Link">Portofolio</span>
              <span className="Navbar-Link">Contact</span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section-separator"></div>
      <div className="home-section-separator1"></div>
      <div className="home-intro">
        <div className="home-hero">
          <div className="home-hero-text-container">
            <h1 className="home-heading1 Section-Heading">Alexander Newell</h1>
            <h1 className="home-text">DevOps Engineer</h1>
            <span className="home-text001">
              Motivated DevOps Engineer with 18 months experience in designing,
              implementing, and maintaining CI/CD pipelines, infrastructure
              automation, and cloud environments. Adept at optimising
              development workflows, enhancing system reliability, and ensuring
              seamless application deployment. Proficient in crafting monitoring
              and alerting setups using CloudWatch. Committed to skill growth
              and continuous learning. Strong communicator, enjoys working in a
              team and independent problem-solving.
            </span>
            <div className="home-cta-btn-container">
              <a href="#portfolio" className="home-cta-btn Anchor button">
                <span className="home-text002">PORTFOLIO</span>
              </a>
              <a href="#hire-me" className="home-cta-btn1 button Anchor">
                Hire Me As A Freelancer
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="cv" className="home-cv">
        <div className="home-container02"></div>
        <h1 className="home-text003">Professional Experience</h1>
        <div className="home-container03">
          <h1 className="home-text004">Skills</h1>
          <div className="home-container04">
            <span className="home-text005">OS</span>
            <ul className="home-ul list">
              <li className="list-item">
                <span>MacOS</span>
              </li>
              <li className="list-item">
                <span>Linux</span>
              </li>
            </ul>
          </div>
          <div className="home-container05">
            <span className="home-text008">Cloud Platforms</span>
            <ul className="home-ul01 list">
              <li className="list-item">
                <span>AWS</span>
              </li>
              <li className="list-item"></li>
            </ul>
          </div>
          <div className="home-container06">
            <span className="home-text010">Infrastructure as Code</span>
            <ul className="home-ul02 list">
              <li className="list-item">
                <span>CloudFormation</span>
              </li>
              <li className="list-item">
                <span>Linux</span>
              </li>
            </ul>
          </div>
          <div className="home-container07">
            <span className="home-text013">DevOps Tools</span>
            <ul className="home-ul03 list">
              <li className="list-item">
                <span>Docker</span>
              </li>
              <li className="list-item">
                <span>Kubernetes</span>
              </li>
            </ul>
          </div>
          <div className="home-container08">
            <span className="home-text016">CI/CD Automation</span>
            <ul className="home-ul04 list">
              <li className="list-item">
                <span>GitHub Actions</span>
              </li>
              <li className="list-item"></li>
            </ul>
          </div>
          <div className="home-container09">
            <span className="home-text018">Monitoring</span>
            <ul className="home-ul05 list">
              <li className="list-item">
                <span>CloudWatch</span>
              </li>
              <li className="list-item"></li>
            </ul>
          </div>
          <div className="home-container10">
            <span className="home-text020">Scripting</span>
            <ul className="home-ul06 list">
              <li className="list-item">
                <span>Bash</span>
              </li>
              <li className="list-item">
                <span>Python</span>
              </li>
            </ul>
          </div>
          <div className="home-container11">
            <span className="home-text023">Languages</span>
            <ul className="home-ul07 list">
              <li className="list-item">
                <span>Python</span>
              </li>
              <li className="list-item">
                <span>Javascript</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>SQL</span>
              </li>
            </ul>
          </div>
          <div className="home-container12">
            <span className="home-text029">Version Control</span>
            <ul className="home-ul08 list">
              <li className="list-item">
                <span>Git</span>
              </li>
              <li className="list-item">
                <span>GitHub</span>
              </li>
            </ul>
          </div>
          <div className="home-container13">
            <span className="home-text032">Databases</span>
            <ul className="home-ul09 list">
              <li className="list-item">
                <span>RDS</span>
              </li>
              <li className="list-item">
                <span>DynamoDB</span>
                <span>MongoDB</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="home-container14">
          <div className="home-container15">
            <h1>Certifications</h1>
            <img
              src="/cloud-pract-300h.png"
              alt="image"
              className="home-image"
            />
            <img
              src="/aws-solu-arch-300h.png"
              alt="image"
              className="home-image1"
            />
          </div>
        </div>
        <div className="home-container16">
          <h1 className="home-text037">Freelance DevOps Engineer</h1>
          <span className="home-text038">May 2022. - Present</span>
          <ul className="list">
            <li className="list-item">
              <span>
                Experienced in designing, developing and maintaining CI/CD
                pipelines for various applications using automation tools such
                as GitHub Actions.
              </span>
            </li>
            <li className="list-item">
              <span>
                Wrote unit and integration tests to ensure seamless application
                deployments. 
              </span>
            </li>
            <li className="list-item">
              <span>
                Adept at automated infrastructure provisioning using Terraform,
                CloudFormation, AWS SAML and AWS Vault. 
              </span>
            </li>
            <li className="list-item">
              <span>
                Proficient in building and deploying containerised applications
                using Docker and Docker compose.
              </span>
            </li>
            <li className="list-item">
              <span>
                Skilled in designing and implementing efficient multi-stage
                Docker builds to optimize the containerization process.
              </span>
            </li>
            <li className="list-item">
              <span>
                Competent in building, deploying and troubleshooting Kubernetes
                clusters and applications.
              </span>
            </li>
            <li className="list-item">
              <span>
                Proficient in establishing application, infrastructure, network
                and cost monitoring systems to ensure swift resolution of
                issues.
              </span>
            </li>
            <li className="list-item">
              <span>
                Adhired to Git workflows and best practices, enhancing code
                collaboration and version control.
              </span>
            </li>
            <li className="list-item"></li>
            <li className="list-item">
              <span>
                Utilized effective dependency-management strategies to ensure
                applications were tested in production-like environments prior
                to deployment. 
              </span>
            </li>
            <li className="list-item">
              <span>
                Effective configuration and management of servers to ensure
                seamless and efficient operation of cloud-based applications. 
              </span>
            </li>
            <li className="list-item">
              <span>
                Led capacity planning discussions and architected
                highly-available, scalable, cost-optimised,
                operationally-efficient and secure solutions.
              </span>
            </li>
            <li className="list-item">
              <span>
                Proactively communicated with clients to track progress towards
                key project milestones.
              </span>
            </li>
            <li className="list-item">
              <span>
                Continuously researched and evaluated new technologies to
                improve system performance and reliability.
              </span>
            </li>
            <li className="list-item">
              <span>
                Cognizant of others while working, for example, by writing
                meaningful commit messages.
              </span>
            </li>
          </ul>
          <h1 className="home-text053">Education</h1>
          <div className="home-container17">
            <div className="home-container18">
              <a
                href="https://www.tcd.ie/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link4"
              >
                Trinity College Dublin
              </a>
              <span className="home-text054">Sep. 2015 - May 2019</span>
              <span className="home-text055">Colchester Sixth Form</span>
              <span className="home-text056">Sep. 2012 - June 2014</span>
              <span className="home-text057">Helena Romanes School</span>
              <span className="home-text058">Sep. 2007 - June 2012</span>
            </div>
            <div className="home-container19">
              <span className="home-text059">History, Upper Second (2:1)</span>
              <span className="home-text060">
                Finalist Oxford Intervaristy Debating Competition
              </span>
              <span className="home-text061">International Baccalaureate</span>
              <span className="home-text062">
                38/45 points: top 4%. UCAS Equivalent: A* A* A* A.
              </span>
              <span className="home-text063">GCSEs</span>
              <span className="home-text064">10 GCSEs 3 A*s 7As. </span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-learning">
        <div className="home-container20">
          <h1 className="home-text065 Section-Heading">
            My Learning &amp; Certification Pipeline
          </h1>
          <div className="home-steps">
            <div className="home-container21">
              <div className="home-step">
                <h1 className="home-text066">Sep. 2023</h1>
                <span className="home-text067">
                  <span>DCA</span>
                  <br></br>
                  <span>CKAD</span>
                  <br></br>
                  <span className="home-text072">LPIC-01</span>
                  <br className="home-text073"></br>
                  <span className="home-text074">Jenkins (CJE)</span>
                  <br></br>
                </span>
              </div>
              <div className="home-step1">
                <h1 className="home-text076">Oct. 2023</h1>
                <span className="home-text077">
                  <span className="home-text078">Ansible</span>
                  <br className="home-text079"></br>
                  <span className="home-text080">Prometheus</span>
                  <br></br>
                </span>
              </div>
              <div className="home-step2">
                <h1 className="home-text082">Nov. 2023</h1>
                <span className="home-text083">
                  <span className="home-text084">
                    AWS Developer Certifictaion
                  </span>
                  <br></br>
                </span>
              </div>
              <div className="home-step3">
                <h1 className="home-text086">Dec. 2023</h1>
                <span className="home-text087">
                  AWS SysOps Administator Certification
                </span>
              </div>
              <div className="home-step4">
                <h1 className="home-text088">Jan. 2024</h1>
                <span className="home-text089">
                  <span className="home-text090">AWS DevOps Certification</span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-services">
        <div className="home-heading-container">
          <h1 id="portfolio" className="home-text092 Section-Heading">
            Portfolio
          </h1>
        </div>
        <div className="home-pricing-card-container">
          <div className="home-card">
            <div className="home-card-heading">
              <span className="home-price Section-Heading">
                Cloud Resume Challenge
              </span>
            </div>
            <div className="home-card-content">
              <div className="home-feature">
                <span className="home-name">
                  The Cloud Resume Challenge is a series of challenges designed
                  to develop your proficiency in AWS, infrastructure as code and
                  CI/CD.
                </span>
              </div>
              <button className="home-choose button">ENTIRE PORTFOLIO</button>
              <a
                href="https://github.com/AlexTNewell/Cloud-Resume-Challenge-CloudFormation"
                target="_blank"
                rel="noreferrer noopener"
                className="home-choose01 button Anchor"
              >
                THIS PROJECT
              </a>
            </div>
          </div>
          <div className="home-card1">
            <div className="home-card-heading1">
              <span className="home-price1">
                Terraforming My Cloud Resume Challenge
              </span>
            </div>
            <div className="home-card-content1">
              <div className="home-feature1">
                <span className="home-name1">
                  This project takes the Cloud Resume Challenge one step further
                  by using Terraform. 
                </span>
              </div>
              <button className="home-choose02 button">ENTIRE PORTFOLIO</button>
              <a
                href="https://github.com/AlexTNewell/Terraforming-My-Cloud-Resume-Challenge"
                target="_blank"
                rel="noreferrer noopener"
                className="home-choose03 button Anchor"
              >
                THIS PROJECT
              </a>
            </div>
          </div>
          <div className="home-card2">
            <div className="home-card-heading2">
              <span className="home-price2">
                Multi-AZ WordPress Site Hosted on EC2
              </span>
            </div>
            <div className="home-card-content2">
              <div className="home-feature2">
                <span className="home-name2">
                  Developed for a media client, this multi-AZ project allows you
                  to host a WordPress Site on EC2 instances in private subnets.
                  Automated provisioning via GitHub Actions &amp; Terraform. 
                </span>
              </div>
              <button className="home-choose04 button">ENTIRE PORTFOLIO</button>
              <button className="home-choose05 button">THIS PROJECT</button>
            </div>
          </div>
        </div>
        <div className="home-pricing-card-container1">
          <div className="home-card3">
            <div className="home-card-heading3">
              <span className="home-price3 Section-Heading">
                Dockerised NGINX Web App Hosted on EC2
              </span>
            </div>
            <div className="home-card-content3">
              <div className="home-feature3">
                <span className="home-name3">
                  Developed for a Running Club to host their application which
                  presented members with running tips and techniques, a
                  leaderboard and a race calendar. 
                </span>
              </div>
              <button className="home-choose06 button">ENTIRE PORTFOLIO</button>
              <a
                href="https://github.com/AlexTNewell/The_London_System"
                target="_blank"
                rel="noreferrer noopener"
                className="home-choose07 button"
              >
                THIS PROJECT
              </a>
            </div>
          </div>
          <div className="home-card4">
            <div className="home-card-heading4">
              <span className="home-price4 Section-Heading">
                Dockerised Microservices
              </span>
            </div>
            <div className="home-card-content4">
              <div className="home-feature4">
                <span className="home-name4">
                  A project to demonstrate my proficiency in Docker. Built as
                  part of the &quot;Docker &amp; Kubernetes: The Practical
                  Guide&quot; course taught my Maximilian Schwarzmüller,
                  available on Udemy. 
                </span>
              </div>
              <button className="home-choose08 button">ENTIRE PORTFOLIO</button>
              <a
                href="https://github.com/AlexTNewell/3_Docker_Microservices"
                target="_blank"
                rel="noreferrer noopener"
                className="home-choose09 button"
              >
                THIS PROJECT
              </a>
            </div>
          </div>
          <div className="home-card5">
            <div className="home-card-heading5">
              <span className="home-price5">The Kubernetes Project</span>
            </div>
            <div className="home-card-content5">
              <div className="home-feature5">
                <span className="home-name5">
                  A project to demonstrate my proficiency with Kubernetes. Built
                  as part of the &quot;Docker &amp; Kubernetes: The Practical
                  Guide&quot; course taught my Maximilian Schwarzmüller,
                  available on Udemy. 
                </span>
              </div>
              <button className="home-choose10 button">ENTIRE PORTFOLIO</button>
              <button className="home-choose11 button">THIS PROJECT</button>
            </div>
          </div>
        </div>
      </div>
      <div className="home-hire">
        <div className="home-container22">
          <div className="home-pricing-card">
            <span className="home-text093">Hire by the hour</span>
            <div className="home-container23">
              <span className="home-text094">£</span>
              <span className="home-text095">19</span>
              <span className="home-text096">/ hour</span>
            </div>
            <div className="home-container24">
              <span className="home-text097">
                ✔ Schedule chunks of time and use them however you want
              </span>
              <span className="home-text098">
                ✔ FREE 30 minute consultation
              </span>
              <span className="home-text099">
                ✔ Daily timesheet &amp; work report to track hours and progress
              </span>
              <span className="home-text100">
                ✔ No HR or administration costs
              </span>
              <span className="home-text101">✔ Cyber Liability Insured</span>
              <span className="home-text102">✔ Subject to availability</span>
            </div>
            <button className="home-button button">Learn More</button>
          </div>
          <h1 id="hire-me" className="home-text103">
            Choose What Works For You
          </h1>
          <div className="home-container25">
            <div className="home-container26"></div>
          </div>
          <div className="home-pricing-card1">
            <span className="home-text104">full time</span>
            <span className="home-text105">160 hours / month</span>
            <div className="home-container27">
              <span className="home-text106">£</span>
              <span className="home-text107">2600</span>
              <span className="home-text108">/ month</span>
            </div>
            <div className="home-container28">
              <span className="home-text109">
                ✔ Guaranteed 160 hours of work each month
              </span>
              <span className="home-text110">
                ✔ FREE 30 minute consultation
              </span>
              <span className="home-text111">
                ✔ Daily timesheet &amp; work report to track hours and progress
              </span>
              <span className="home-text112">✔ Stop service anytime</span>
              <span className="home-text113">
                ✔ No HR or administration costs
              </span>
              <span className="home-text114">✔ Cyber Liability Insured</span>
            </div>
            <button className="home-button1 button">Learn More</button>
          </div>
          <div className="home-pricing-card2">
            <span className="home-text115">part time</span>
            <span className="home-text116">80 hours / month</span>
            <div className="home-container29">
              <span className="home-text117">£</span>
              <span className="home-text118">1500</span>
              <span className="home-text119">/ month</span>
            </div>
            <div className="home-container30">
              <span className="home-text120">
                ✔ Guaranteed 160 hours of work each month
              </span>
              <span className="home-text121">
                ✔ FREE 30 minute consultation
              </span>
              <span className="home-text122">
                ✔ Daily timesheet &amp; work report to track hours and progress
              </span>
              <span className="home-text123">
                ✔ No HR or administration costs
              </span>
              <span className="home-text124">✔ Cyber Liability Insured</span>
            </div>
            <button className="home-button2 button">Learn More</button>
          </div>
        </div>
      </div>
      <footer className="home-footer">
        <div className="home-container31">
          <div className="home-logo"></div>
          <div className="home-links-container">
            <div className="home-container32">
              <div className="home-company-container">
                <a href="#cv" className="home-link5">
                  CV
                </a>
                <a href="#portfolio" className="home-link6">
                  Portfolio
                </a>
                <a href="#hire-me" className="home-link7">
                  Hire Me
                </a>
              </div>
            </div>
            <div className="home-container33">
              <div className="home-contact">
                <span className="home-text125">Contact Us</span>
                <span className="home-text126">anewell.cloud@gmail.com</span>
              </div>
              <div className="home-socials"></div>
            </div>
          </div>
        </div>
        <div className="home-separator"></div>
      </footer>
    </div>
  )
}

export default Home
