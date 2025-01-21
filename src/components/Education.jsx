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
        <div className="mb-2 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{
                  color: 'var(--text-primary)'
                }}>
                  Education
          </h1>
          <div className="h-1 w-28" style={{ backgroundColor: 'var(--accent-primary)' }}></div>
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

          <div className="relative h-[60vh] w-full md:w-2/3 my-[50px] px-[10px] lg:w-1/3 md:mx-auto">
            <img className='absolute top-[-30px] left-2 w-auto h-2/5 rounded-xl border border-white shadow-2xl' style={{
                borderColor: 'var(--card-border)'
              }} src={comp} alt="About " width={300} height={300} />
            <img className='absolute top-1/4 right-3 lg:right-0 w-auto h-3/5 z-10 rounded-xl border border-white shadow-2xl' style={{
                borderColor: 'var(--card-border)'
              }} src={gradpic} alt="About " width={300} height={300} />
            <img className='absolute bottom-[-50px] lg:bottom-[-30px] left-2 lg:left-[-20px] w-auto h-2/5 rounded-xl border border-white shadow-2xl' style={{
                borderColor: 'var(--card-border)'
              }} src={org} alt="About " width={300} height={300} />
          </div>
        </div>
      </div>
    </section>
  )
}