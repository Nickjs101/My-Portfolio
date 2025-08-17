import React, { useState } from 'react'
import C2 from '../assets/Certificates/Connect&Protect.jpg'
import C3 from '../assets/Certificates/Foundation.jpg'
import C4 from '../assets/Certificates/Playitsafe.jpg'
import C5 from '../assets/Certificates/Sound.jpg'
import C6 from '../assets/Certificates/ATV.jpg'
import C7 from '../assets/Certificates/Tools.jpg'
import C8 from '../assets/Certificates/JavaExplorer.jpg'
import C9 from '../assets/Certificates/Onset.jpg'

import Modal from './subcomponents/imagemodal'
const Courses = () => {
  const certifications = [
    {
      id: 2,
      title: "Connect & Protect: Networks & Network Security",
      issuer: "Google",
      date: "2023",
      image: C2,
      hasLink: true,
      link: "https://coursera.org/share/cb618813ca3f1139df72a1dd5fcf4cc3"
    },
    {
      id: 3,
      title: "Foundations of Cybersecurity",
      issuer: "Google",
      date: "2023",
      image: C3,
      hasLink: true,
      link: "https://coursera.org/share/91d567af5011cdb524f4293113e39260"
    },
    {
      id: 4,
      title: "Play It Safe: Manage Security Risks",
      issuer: "Google",
      date: "2023",
      image: C4,
      hasLink: true,
      link: "https://coursera.org/share/69b3c411e254e679811adaaedf35076b"
    },
    {
      id: 5,
      title: "Sound the Alarm: Detection and Response",
      issuer: "Google",
      date: "2023",
      image: C5,
      hasLink: true,
      link: "https://coursera.org/share/e074d29b212fdc742f4bce993114b230"
    },
    {
      id: 6,
      title: "Assets, Threats, and Vulnerabilities",
      issuer: "Google",
      date: "2023",
      image: C6,
      hasLink: true,
      link: "https://coursera.org/share/d288f3f61c9e6c47a7ff8f3414c51c16"
    },
    {
      id: 7,
      title: "Tools of the Trade: Linux and SQL",
      issuer: "Google",
      date: "2023",
      image: C7,
      hasLink: true,
      link: "https://coursera.org/share/c55b2a188baaef58b85b6364e2b05635"
    },
    {
      id: 8,
      title: "Java Explorer",
      issuer: "Oracle",
      date: "2023",
      image: C8,
      hasLink: false,
      link: "#"
    },
    {
      id: 9,
      title: "ONE STI Educators Training Starter",
      issuer: "STI",
      date: "2023",
      image: C9,
      hasLink: false,
      link: "#"
    }
  ]

  const [selectedCert, setSelectedCert] = useState(null)
  
    const openModal = (cert) => {
      setSelectedCert(cert)
    }
  
    const closeModal = () => {
      setSelectedCert(null)
    }
  
  return (
    <section id='Certifications' className="min-h-screen py-20 px-4 sm:px-6 lg:px-8" style={{
      backgroundColor: 'var(--bg-primary)'
    }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-4" style={{
            color: 'var(--text-primary)'
          }}>
            Courses & Trainings
          </h2>
          <div className="h-1 w-20" style={{ 
            backgroundColor: 'var(--accent-primary)',
            margin: '0 auto'
          }}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="card p-6 rounded-lg border transition-all duration-300"
              style={{
                borderColor: 'var(--card-border)',
                '&:hover': { borderColor: 'var(--accent-primary)' }
              }}
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div className="inline-block p-2 rounded-lg mb-4 bg-emerald-400/10">
                    <svg
                      className="w-10 h-10"
                      fill="none"
                      stroke="var(--accent-primary)"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 transition-colors" style={{
                    color: 'var(--text-primary)',
                    '&:hover': { color: 'var(--accent-primary)' }
                  }}>
                    {cert.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    Issued by {cert.issuer} • {cert.date}
                  </p>
                </div>
                <div className="mt-auto">
                  <button
                    onClick={() => openModal(cert)}
                    className="text-sm font-medium inline-flex items-center transition-colors"
                    style={{ color: 'var(--accent-primary)' }}
                  >
                    View Certificate
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Modal isOpen={!!selectedCert} onClose={closeModal}>
          {selectedCert && (
            <div className="space-y-4">
              <h3 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                {selectedCert.title}
              </h3>
              <div className="aspect-[16/9] rounded-lg overflow-hidden" style={{
                backgroundColor: 'var(--bg-tertiary)'
              }}>
                <img
                  src={selectedCert.image}
                  alt={`${selectedCert.title} Certificate`}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex justify-between items-center">
                <p style={{ color: 'var(--text-secondary)' }}>
                  Issued by {selectedCert.issuer} • {selectedCert.date}
                </p>
                {selectedCert.hasLink && <a
                  href={selectedCert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 rounded-lg transition-colors"
                  style={{
                    backgroundColor: 'var(--accent-primary)',
                    color: 'var(--text-primary)'
                  }}
                >
                  Verify Certificate
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>}
              </div>
            </div>
          )}
        </Modal>
      </div>
    </section>
  )
}

export default Courses
