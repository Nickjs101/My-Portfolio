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
    <section id='Education' className="min-h-screen bg-slate-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Education
          </h2>
          <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-slate-700 hover:border-emerald-500 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-2">
                Bachelor of Science in Information Technology
              </h3>
              <div className="flex items-center gap-2 mb-6">
                <span className="text-emerald-400 font-semibold">
                  STI College-Angeles
                </span>
                <span className="text-slate-400">•</span>
                <span className="text-slate-400">2019 - 2023</span>
              </div>
              
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1.5">
                      <svg
                        className="w-4 h-4 text-emerald-500"
                        fill="none"
                        stroke="currentColor"
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
                    <p className="text-slate-300">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative aspect-square rounded-lg overflow-hidden group">
                <div className="absolute inset-0 bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors duration-300 z-10"></div>
                <img
                  src={comp}
                  alt="Computer Laboratory Session"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden group">
                <div className="absolute inset-0 bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors duration-300 z-10"></div>
                <img
                  src={org}
                  alt="Tech Matrix Group"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden group">
              <div className="absolute inset-0 bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors duration-300 z-10"></div>
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

