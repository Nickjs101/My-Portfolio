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

export default function ProfessionalExperience() {
  return (
    <section id='Experience' className="min-h-screen bg-slate-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional Experience
          </h2>
          <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-emerald-500/20"></div>

          <div className="space-y-16">
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-4 h-4 bg-emerald-500 rounded-full"></div>
                </div>

                {/* Content card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 hover:border-emerald-500 transition-all duration-300">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white">
                          {experience.title}
                        </h3>
                        <p className="text-emerald-400">{experience.company}</p>
                      </div>
                      <span className="text-sm text-slate-400 bg-slate-800 px-3 py-1 rounded-full">
                        {experience.period}
                      </span>
                    </div>

                    <ul className="space-y-4">
                      {experience.responsibilities.map((resp, idx) => (
                        <li key={idx} className="space-y-1">
                          <h4 className="text-emerald-400 font-medium">
                            {resp.title}
                          </h4>
                          <p className="text-slate-300 text-sm leading-relaxed">
                            {resp.description}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

