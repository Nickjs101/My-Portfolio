import React from 'react'
import aboutImg from '../assets/about.jpg'
import SectionHeading from './ui/SectionHeading'

export default function About() {
  return (
    <section id='About' className="min-h-screen py-24 md:py-20 px-4 sm:px-6 lg:px-8" style={{
      backgroundColor: 'var(--bg-primary)'
    }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8">
            <SectionHeading
              eyebrow="About"
              title="About Me"
              align="left"
              className="mb-0"
            />

            <div className="prose prose-invert max-w-none">
              <p style={{ color: 'var(--text-secondary)' }} className="text-base sm:text-lg leading-relaxed">
                I am <span style={{ color: 'var(--accent-primary)' }} className="font-semibold">Nick Joshua Montemayor</span>,
                a freelance developer specializing in
                <span style={{ color: 'var(--accent-primary)' }}> AI automation</span>,
                <span style={{ color: 'var(--accent-primary)' }}> workflow engineering</span>, and
                <span style={{ color: 'var(--accent-primary)' }}> web development</span>.
              </p>

              <p style={{ color: 'var(--text-secondary)' }} className="text-base sm:text-lg leading-relaxed mt-4">
                I build systems that do real work for real businesses: AI agents that coordinate
                appointments over SMS, content pipelines that publish themselves, and integrations
                that keep your tools in sync — so you and your team can focus on the work only
                humans can do.
              </p>
            </div>

            <div className="space-y-3">
              <div style={{ color: 'var(--text-secondary)' }} className="text-base sm:text-lg leading-relaxed">
                <p>
                  My background spans software development, IT instruction, and cybersecurity,
                  which means the automations I ship are not just clever — they are documented,
                  secure, and built to keep running after I hand them over. I work with n8n,
                  Make, Zapier, the OpenAI API, and custom code when the problem calls for it.
                </p>
                <p className="mt-4">
                  If a task in your business happens more than once a week, there is a good
                  chance I can automate it. Tell me about it — I enjoy the puzzle.
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