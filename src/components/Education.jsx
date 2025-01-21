import React from 'react'
import gradpic from '../assets/gradpic.JPG'
import org from '../assets/org.jpg'
import comp from '../assets/comp.jpg'

const achievements = [
  "Graduated Magna Cum Laude",
  "Competed in Huawei Cloud ICT competition",
  "Served as President of the ICT organization, Tech Matrix"
]

export default function Education() {
  return (
    <section id='Education' className="min-h-screen py-24 md:py-20 px-4 sm:px-6 lg:px-8" style={{
      backgroundColor: 'var(--bg-primary)'
    }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{
            color: 'var(--text-primary)'
          }}>
            Education
          </h2>
          <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-center">
          <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8">
            <div className="card p-6 sm:p-8 rounded-lg border hover:border-emerald-500 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-2" style={{
                color: 'var(--text-primary)'
              }}>
                Bachelor of Science in Information Technology
              </h3>
              <div className="flex flex-wrap items-center gap-2 mb-4 sm:mb-6">
                <span style={{ color: 'var(--accent-primary)' }} className="font-semibold">
                  STI College-Angeles
                </span>
                <span style={{ color: 'var(--text-secondary)' }} className="hidden sm:inline">•</span>
                <span style={{ color: 'var(--text-secondary)' }}>2019 - 2023</span>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1">
                      <svg
                        className="w-4 h-4 flex-shrink-0"
                        fill="none"
                        stroke="var(--accent-primary)"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4"
                        />
                      </svg>
                    </div>
                    <p style={{ color: 'var(--text-secondary)' }} className="text-sm sm:text-base">
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-3 sm:gap-4">
            <div className="space-y-3 sm:space-y-4">
              <div className="relative aspect-square rounded-lg overflow-hidden group">
                <div className="absolute inset-0 transition-colors duration-300 z-10"
                  style={{
                    backgroundColor: 'var(--accent-primary)',
                    opacity: 0.05,
                    ':hover': { opacity: 0.1 }
                  }}
                ></div>
                <img
                  src={comp}
                  alt="Computer Laboratory Session"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden group">
                <div className="absolute inset-0 bg-emerald-500/5 group-hover:bg-emerald-500/10 transition-colors duration-300 z-10"></div>
                <img
                  src={org}
                  alt="Tech Matrix Group"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden group">
              <div className="absolute inset-0 bg-emerald-500/5 group-hover:bg-emerald-500/10 transition-colors duration-300 z-10"></div>
              <img
                src={gradpic}
                alt="Graduation"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}