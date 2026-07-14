import React from "react"
import Timeline from "./subcomponents/Timeline"

const experiences = [
  {
    title: "AI Automation Specialist",
    company: "Freelance",
    period: "Dec 2024 - Present",
    year: "Now",
    responsibilities: [
      {
        title: "AI Agents & Workflow Automation",
        description: "Design and ship automation systems for business clients using n8n and Make.com — from multi-agent SMS schedulers to hands-off content pipelines."
      },
      {
        title: "Operational Impact",
        description: "Achieved up to a 90% reduction in operational time on automated processes and boosted client workflow efficiency by 45%."
      },
      {
        title: "Systems Integration",
        description: "Connect CRMs, spreadsheets, calendars, email, SMS, and scraping pipelines into single automated flows with error handling and human approval gates."
      },
      {
        title: "Process Discovery",
        description: "Collaborate directly with owners and teams to identify the highest-leverage automation opportunities before writing a single node."
      }
    ]
  },
  {
    title: "DevOps Engineer",
    company: "Qstrike Innovations Phils. OPC",
    period: "Aug 2025 - Jun 2026",
    year: "2026",
    responsibilities: [
      {
        title: "AWS Cloud Infrastructure",
        description: "Designed, implemented, and maintained AWS infrastructure for high-availability web applications — EC2, Auto Scaling, ALB, Aurora MySQL, CloudWatch, S3, CloudFront, IAM, SSM, EventBridge, and Secrets Manager."
      },
      {
        title: "CI/CD Pipelines",
        description: "Built and standardized deployment pipelines with Jenkins and GitHub Actions, improving deployment reliability across projects."
      },
      {
        title: "Automation & Tooling",
        description: "Automated infrastructure management, deployments, reporting, and server administration with Bash and the AWS CLI — cutting a 10-minute operational task to under 1 minute (90%+ faster)."
      },
      {
        title: "Server Administration",
        description: "Administered Linux and FreeBSD servers running Nginx, PHP-FPM, Redis, and Supervisor; managed production incidents across servers, databases, and cloud services."
      },
      {
        title: "Cost & Performance Optimization",
        description: "Optimized AWS infrastructure for performance, scalability, and cost efficiency, including Aurora MySQL backup, restoration, and synchronization."
      }
    ]
  },
  {
    title: "Application Support Engineer - DevOps",
    company: "Qstrike Innovations Phils. OPC",
    period: "Aug 2024 - Aug 2025",
    year: "2025",
    responsibilities: [
      {
        title: "Expert-Level Platform Support",
        description: "Supported U.S.-based employees and end-users of a sports apparel customization platform, collaborating with developers, QA, and project managers to resolve technical issues fast."
      },
      {
        title: "DevOps Support",
        description: "Troubleshot servers, databases, and AWS cloud infrastructure to keep the platform performant and reliable."
      },
      {
        title: "Automation Tooling",
        description: "Developed and deployed the automation tool that cut command execution from 10 minutes to under 1 minute, transforming developer workflow."
      },
      {
        title: "Infrastructure Delivery",
        description: "Designed cloud infrastructure for new company projects and client-facing websites using Jenkins, GitHub Actions, Ansible, Terraform, and Bash."
      }
    ]
  },
  {
    title: "IT Instructor",
    company: "SYLLABUS Inc. (STI College-Angeles)",
    period: "Aug 2023 - Jun 2024",
    year: "2024",
    responsibilities: [
      {
        title: "Curriculum Development",
        description: "Designed and implemented comprehensive course materials for subjects such as Computer Programming, Computer Graphics, Game Development, and Human-Computer Interaction."
      },
      {
        title: "Project Supervision",
        description: "Guided students in creating innovative web portfolios, programming projects, and capstone projects."
      },
      {
        title: "Technical Workshops",
        description: "Organized and conducted workshops on emerging technologies, providing hands-on experience with tools like Unity and Android Studio."
      },
      {
        title: "Mentorship",
        description: "Acted as a mentor for students, providing guidance on academic and career development."
      }
    ]
  },
  {
    title: "Service Crew",
    company: "Fusion Manpower (Jollibee)",
    period: "Jun 2019 - Sep 2019",
    year: "2019",
    responsibilities: [
      {
        title: "Customer Service Excellence",
        description: "Delivered exceptional customer service, ensuring a positive dining experience."
      },
      {
        title: "Operational Efficiency",
        description: "Assisted in various operational tasks, including food preparation and order management."
      }
    ]
  },
  {
    title: "IT Technician",
    company: "PC Bytes",
    period: "Oct 2018 - Dec 2018",
    year: "2018",
    responsibilities: [
      {
        title: "Technical Support",
        description: "Provided IT support to clients, including hardware troubleshooting, system diagnostics, and software installation."
      },
      {
        title: "System Maintenance",
        description: "Performed routine maintenance on computer systems."
      },
      {
        title: "Customer Service",
        description: "Engaged with clients to understand their technical needs and offer tailored solutions."
      },
      {
        title: "Network Configuration",
        description: "Set up and configured local area networks (LAN) with optimal connectivity and security."
      }
    ]
  }
]

export default function ExperienceTimeline() {
  return (
    <section id="Experience" className="py-24 md:py-32">
      <Timeline data={experiences} />
    </section>
  )
}
