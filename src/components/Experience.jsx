import React from "react"
import Timeline from "./subcomponents/Timeline"

const experiences = [
  {
    title: "IT Instructor",
    company: "SYLLABUS Inc. (STI College-Angeles)",
    period: "Aug 2023 - Jun 2024",
    year: "2024",
    content: (
      <div>
        <ul className="list-disc pl-5 space-y-2 text-sm md:text-base" style={{ color: 'var(--text-secondary)' }}>
          <li>
            Designed and implemented comprehensive course materials for subjects such as Computer Programming, Computer
            Graphics, Game Development, and Human-Computer Interaction.
          </li>
          <li>Guided students in creating innovative web portfolios, programming projects, and capstone projects.</li>
          <li>
            Organized and conducted workshops on emerging technologies, providing hands-on experience with tools like
            Unity, Android Studio, and various programming languages.
          </li>
          <li>
            Acted as a mentor and advisor for students, providing guidance on academic and career development in the IT
            field.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Service Crew",
    company: "Fusion Manpower (Jollibee)",
    period: "Jul 2019 - Sep 2019",
    year: "2019",
    content: (
      <div>
        <ul className="list-disc pl-5 space-y-2 text-sm md:text-base" style={{ color: 'var(--text-secondary)' }}>
          <li>
            Delivered exceptional customer service, ensuring a positive dining experience and maintaining high
            satisfaction rates.
          </li>
          <li>
            Assisted in various operational tasks, including food preparation, order management, and cleanliness
            maintenance, contributing to a well-organized and efficient work environment.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "IT Technician (OJT)",
    company: "PC Bytes",
    period: "Oct 2018 - Dec 2018",
    year: "2018",
    content: (
      <div>
        <ul className="list-disc pl-5 space-y-2 text-sm md:text-base" style={{ color: 'var(--text-secondary)' }}>
          <li>
            Provided comprehensive IT support to clients, including hardware troubleshooting, system diagnostics, and
            software installation.
          </li>
          <li>Performed routine maintenance on computer systems, ensuring optimal performance and reliability.</li>
          <li>
            Engaged with clients to understand their technical needs, offering tailored solutions and fostering positive
            client relationships.
          </li>
          <li>Set up and configured local area networks (LAN), optimizing connectivity and security.</li>
        </ul>
      </div>
    ),
  },
]

export default function ExperienceTimeline() {
  return (
    <section id="Experience" className="py-24 md:py-32">
      <Timeline data={experiences} />
    </section>
  )
}

