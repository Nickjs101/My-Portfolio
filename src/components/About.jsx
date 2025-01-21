import React from 'react'
import aboutImg from '../assets/about.jpg'

export default function About() {
  return (
    <section id='About' className="min-h-screen py-24 md:py-20 px-4 sm:px-6 lg:px-8" style={{
      backgroundColor: 'var(--bg-primary)'
    }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{
                color: 'var(--text-primary)'
              }}>
                About Me
              </h1>
              <div className="h-1 w-20" style={{ backgroundColor: 'var(--accent-primary)' }}></div>
            </div>

            <div className="prose prose-invert max-w-none">
              <p style={{ color: 'var(--text-secondary)' }} className="text-base sm:text-lg leading-relaxed">
                I am <span style={{ color: 'var(--accent-primary)' }} className="font-semibold">Nick Joshua Montemayor</span>, 
                an IT professional from Angeles City, Pampanga, with a passion for 
                <span style={{ color: 'var(--accent-primary)' }}> software development</span>, 
                <span style={{ color: 'var(--accent-primary)' }}> cybersecurity</span>, and 
                <span style={{ color: 'var(--accent-primary)' }}> innovative technology solutions</span>.
              </p>
              
              <p style={{ color: 'var(--text-secondary)' }} className="text-base sm:text-lg leading-relaxed mt-4">
                With a strong foundation in programming and hands-on experience in developing 
                a variety of projects, I am driven by the desire to create impactful and 
                efficient technological solutions.
              </p>
            </div>

            <div className="space-y-3">
              <div style={{ color: 'var(--text-secondary)' }} className="text-base sm:text-lg leading-relaxed">
                <p>
                  My expertise spans multiple programming languages and technologies. I have 
                  successfully led and contributed to projects involving game development, 
                  AI chatbots, and mobile applications. In addition to my development skills, 
                  I excel in troubleshooting and computer maintenance, ensuring optimal 
                  performance and resolving technical issues efficiently.
                </p>
                <p className="mt-4">
                  I am constantly seeking new challenges and opportunities to apply my skills 
                  in dynamic and growth-oriented tech environments.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative group mt-8 lg:mt-0">
            <div className="absolute -inset-1 rounded-lg blur transition duration-1000 group-hover:duration-200"
              style={{
                background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))',
                opacity: 0.25
              }}
            >
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <img
                src={aboutImg}
                alt="Developer workspace"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{
                background: 'linear-gradient(to top, var(--bg-primary) 0%, transparent 100%)',
                opacity: 0.8
              }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}