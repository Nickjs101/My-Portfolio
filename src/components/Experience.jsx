import React from "react"
import Timeline from "./subcomponents/Timeline"

const experiences = [
  {
    title: "Freelance Automation Specialist",
    company: "Self-Employed",
    period: "2024 - Present",
    year: "2025",
    responsibilities: [
      {
        title: "Workflow Automation",
        description: "Designed and implemented automated workflows for small businesses using tools like n8n, Zapier, and custom Python scripts to reduce manual tasks."
      },
      {
        title: "Data Integration",
        description: "Integrated APIs, databases, and cloud services to enable seamless data synchronization between platforms."
      },
      {
        title: "Custom Tool Development",
        description: "Created tailored automation scripts and utilities to solve client-specific challenges and boost operational efficiency."
      },
      {
        title: "Reporting & Analytics Automation",
        description: "Automated generation of business reports and analytics dashboards to support data-driven decision-making."
      }
    ]
  },
  {
    title: "DevOps Engineer",
    company: "Qstrike Innovations Phils. OPC",
    period: "Aug 2024 - Present",
    year: "2025",
    responsibilities: [
      {
        title: "Technical Support & Incident Management",
        description: "Provide expert-level technical support to U.S.-based employees and end-users, diagnosing and resolving issues across the platform’s customization tools and infrastructure."
      },
      {
        title: "Infrastructure & Cloud Management",
        description: "Manage and configure AWS infrastructure—including EC2 instances, VPC networks, S3 storage, Route 53 DNS, and CloudFront CDN—ensuring high availability, scalability, and security."
      },
      {
        title: "CI/CD & Automation",
        description: "Implement and maintain CI/CD pipelines using Jenkins, GitHub Actions, and Ansible to streamline code deployment, testing, and infrastructure provisioning."
      },
      {
        title: "Infrastructure as Code",
        description: "Use Terraform and Bash scripting to automate provisioning, configuration, and deployment processes, reducing manual intervention and improving system reliability."
      },
      {
        title: "Monitoring & Maintenance",
        description: "Set up monitoring tools (e.g., CloudWatch) for system performance tracking, proactively address issues, and perform regular maintenance to ensure optimal performance."
      },
      {
        title: "Custom Automation Tool Development",
        description: "Developed a custom automation tool that reduced command execution times by 90%, significantly improving developer productivity and operational efficiency."
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
    period: "Jul 2019 - Sep 2019",
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
