import React from 'react'

const experiences = [
  {
    id: 1,
    title: "IT Instructor",
    company: "SYLLABUS Inc. (STI College-Angeles)",
    period: "Aug 2023 - Jun 2024",
    current: true,
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
    ]
  },
  {
    id: 2,
    title: "Service Crew",
    company: "Fusion Manpower (Jollibee)",
    period: "Jul 2019 - Sep 2019",
    responsibilities: [
      {
        title: "Customer Service Excellence",
        description: "Delivered exceptional customer service, ensuring a positive dining experience and maintaining high satisfaction rates."
      },
      {
        title: "Operational Efficiency",
        description: "Assisted in various operational tasks, including food preparation, order management, and cleanliness maintenance, contributing to a well-organized and efficient work environment."
      }
    ]
  },
  {
    id: 3,
    title: "IT Technician (OJT)",
    company: "PC Bytes",
    period: "Oct 2018 - Dec 2018",
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
    ]
  }
]

export default function Experience() {
  return (
    <section id="Experience" className="py-24 md:py-32" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: 'var(--text-primary)' }}>
          Experience
        </h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="card p-6 rounded-lg transition-all duration-300">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                    {exp.title}
                  </h3>
                  <p className="text-lg" style={{ color: 'var(--accent-primary)' }}>
                    {exp.company}
                  </p>
                </div>
                <p style={{ color: 'var(--text-secondary)' }}>
                  {exp.period}
                </p>
              </div>
              
              <div className="space-y-4">
                {exp.responsibilities.map((resp, idx) => (
                  <div key={idx} className="space-y-1">
                    <h4 className="font-medium text-sm sm:text-base" style={{ color: 'var(--accent-primary)' }}>
                      {resp.title}
                    </h4>
                    <p className="text-xs sm:text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {resp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}