import React from 'react'

import HCIA from '../assets/Certificates/HCIAlogo.svg'
import GCC from '../assets/Certificates/GCClogo.png'

import Courses from "./Courses";

const Certs = () => {
  const certifications = [
    {
      id: 1,
      title: "HCIA - Cloud Computing",
      badge: HCIA,
      link: "https://e.huawei.com/en/talent/#/cert/certificate-verification",
      inProgress: false,
    },
    {
      id: 2,
      title: "Google Cybersecurity Professional Certificate",
      badge: GCC,
      link: "#",
      inProgress: true,
    },
  ]

  return (
    <section
      id="Certifications"
      className="py-24 md:py-20 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundColor: "var(--bg-primary)",
      }}
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4" style={{
            color: 'var(--text-primary)'
          }}>
            Professional Certifications
        </h2>
        <div className="h-1 w-20 mx-auto rounded-full mb-8"style={{
            backgroundColor: 'var(--button-bg)'
          }}></div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 place-items-center">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className={`bg-transparent rounded-lg shadow-sm flex items-center justify-center p-2 transition-all duration-300 hover:shadow-md ${
                cert.inProgress ? "opacity-60" : ""
              }`}
            >
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full aspect-square"
                title={cert.title}
              >
                <img src={cert.badge || "/placeholder.svg"} alt={cert.title} fill className="object-contain" />
              </a>
            </div>
          ))}
        </div>
      </div>
      <Courses />
    </section>
  )
  
}

export default Certs
