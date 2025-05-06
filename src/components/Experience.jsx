import React from "react"
import Timeline from "./subcomponents/Timeline"

const experiences = [
  {
    title: "Application Support Engineer",
    company: "Qstrike Innovations Phils. OPC",
    period: "Aug 2024 - Present",
    year: "2025",
    responsibilities: [
      {
        title: "Technical Support",
        description: "Provide expert-level support to U.S.-based employees and end-users, diagnosing and resolving software issues across the platform’s customization tools and interfaces."
      },
      {
        title: "Ticket Management & Documentation",
        description: "Document support interactions in the ticketing system, escalate complex issues to software engineers or development teams, and collaborate with Developers, QA, WebGA, and Project Managers to drive timely resolutions."
      },
      {
        title: "Infrastructure Management",
        description: "Manage and configure AWS infrastructure—including EC2 instances, VPC networks, S3 storage, Route 53 DNS, and CloudFront CDN—to meet developer requirements and ensure operational reliability."
      },
      {
        title: "Automation & Tool Development",
        description: "Design and implement automations using Jenkins, GitHub Actions, Ansible, Terraform, and Bash; created a custom automation tool that reduced command execution times by 90%, significantly boosting developer productivity."
      },
      {
        title: "Application Integration & Maintenance",
        description: "Improve application integration, perform routine maintenance tasks, and monitor system health to uphold high service availability and performance standards."
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
        description: "Designed and implemented comprehensive course materials for subjects such as Computer Programming, Computer Graphics, Game Development, and Human-Computer Interaction, ensuring alignment with industry standards and best practices."
      },
      {
        title: "Project Supervision",
        description: "Guided students in creating innovative web portfolios, programming projects, and capstone projects, fostering critical thinking and problem-solving skills."
      },
      {
        title: "Technical Workshops",
        description: "Organized and conducted workshops on emerging technologies, providing hands-on experience with tools like Unity, Android Studio, and various programming languages."
      },
      {
        title: "Mentorship",
        description: "Acted as a mentor and advisor for students, providing guidance on academic and career development in the IT field."
      }
    ],
  },
  {
    title: "Service Crew",
    company: "Fusion Manpower (Jollibee)",
    period: "Jul 2019 - Sep 2019",
    year: "2019",
    responsibilities: [
      {
        title: "Customer Service Excellence",
        description: "Delivered exceptional customer service, ensuring a positive dining experience and maintaining high satisfaction rates."
      },
      {
        title: "Operational Efficiency",
        description: "Assisted in various operational tasks, including food preparation, order management, and cleanliness maintenance, contributing to a well-organized and efficient work environment."
      }
    ],
  },
  {
    title: "IT Technician (OJT)",
    company: "PC Bytes",
    period: "Oct 2018 - Dec 2018",
    year: "2018",
    responsibilities: [
      {
        title: "Technical Support",
        description: "Provided comprehensive IT support to clients, including hardware troubleshooting, system diagnostics, and software installation."
      },
      {
        title: "System Maintenance",
        description: "Performed routine maintenance on computer systems, ensuring optimal performance and reliability."
      },
      {
        title: "Customer Service",
        description: "Engaged with clients to understand their technical needs, offering tailored solutions and fostering positive client relationships."
      },
      {
        title: "Network Configuration",
        description: "Set up and configured local area networks (LAN), optimizing connectivity and security."
      }
    ],
  },
]

export default function ExperienceTimeline() {
  return (
    <section id="Experience" className="py-24 md:py-32">
      <Timeline data={experiences} />
    </section>
  )
}

