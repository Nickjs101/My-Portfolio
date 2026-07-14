import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, FileText, ArrowRight } from 'lucide-react'
import { TypeAnimation } from 'react-type-animation'
import heroimage from '../assets/headshot.jpg'
import resume from '../assets/NICK_JOSHUA_MONTEMAYOR_RESUME.pdf'
import { InteractiveHoverButton } from '../components/subcomponents/interactive-hover-button'

export default function Hero({ onWantToKnowMoreClick }) {
  const gotoSection = (event, id) => {
    event.preventDefault();
    const section = document.getElementById(id);

    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth',
    });
  }

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/Nickjs101',
      onclick: () => {},
      label: 'GitHub Profile',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/nickjmont',
      onclick: () => {},
      label: 'LinkedIn Profile',
    },
    {
      icon: Mail,
      href: '#contact',
      onclick: (e) => gotoSection(e, 'Contact'),
      label: 'Email Contact',
    },
    {
      icon: FileText,
      href: resume,
      onclick: () => {},
      label: 'Download Resume',
    }
  ]

  const Ican = [
    'AI Agents & Chatbots', 'n8n / Make / Zapier', 'API Integrations', 'Web Scraping', 'React Web Apps'
  ]

  return (
    <section id='Home' className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24 md:py-24" style={{
      backgroundColor: 'var(--bg-primary)'
    }}>
      <div className="max-w-7xl w-full">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-3/5 order-2 md:order-1"
          >
            <div
              className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full text-xs sm:text-sm font-medium border"
              style={{ borderColor: 'var(--accent-primary)', color: 'var(--accent-primary)' }}
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                  style={{ backgroundColor: 'var(--accent-primary)' }}
                />
                <span
                  className="relative inline-flex rounded-full h-2 w-2"
                  style={{ backgroundColor: 'var(--accent-primary)' }}
                />
              </span>
              Available for freelance projects
            </div>

            <h2 className="text-base sm:text-lg font-medium mb-2" style={{ color: 'var(--accent-primary)' }}>
              Hi there! I'm
            </h2>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Nick Joshua
            </h1>
            <div className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 min-h-[3.5rem] md:min-h-[2.5rem]" style={{ color: 'var(--text-secondary)' }}>
              I build{' '}
              <TypeAnimation
                sequence={[
                  'AI agents that work 24/7',
                  2500,
                  'n8n automations end to end',
                  2500,
                  'integrations between your apps',
                  2500,
                  'web apps that convert',
                  2500,
                ]}
                repeat={Infinity}
                style={{ color: 'var(--accent-primary)' }}
              />
            </div>
            <p className="text-base sm:text-lg mb-6 sm:mb-8 max-w-xl" style={{ color: 'var(--text-secondary)' }}>
              I help businesses automate the work that eats their day — from AI agents that
              schedule appointments over SMS to hands-off content pipelines. You describe the
              process; I design, build, and maintain an automation that runs it for you.
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-6 sm:mb-8">
              <button
                onClick={(e) => gotoSection(e, 'Contact')}
                className="button inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold"
              >
                Start a Project
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={(e) => gotoSection(e, 'Work')}
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold border-2 transition-colors duration-300"
                style={{ borderColor: 'var(--accent-primary)', color: 'var(--text-primary)' }}
              >
                See My Work
              </button>
              <InteractiveHoverButton onClick={onWantToKnowMoreClick} text="Ask My AI" className="primary-color border-primary"/>
            </div>

            {/* Tech Stack */}
            <div className="mb-6 sm:mb-8">
              <h3 className="font-medium mb-2 sm:mb-3" style={{ color: 'var(--text-primary)' }}>What I Automate & Build</h3>
              <div className="flex flex-wrap gap-2">
                {Ican.map((tech) => (
                  <span
                    key={tech}
                    className="button px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  onClick={social.onclick}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300"
                  style={{ color: 'var(--text-secondary)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-primary)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-2/5 order-1 md:order-2 flex justify-center mb-8 md:mb-0"
          >
            <div
              className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-5/6 md:h-5/6 rounded-full overflow-hidden border-4"
              style={{ borderColor: 'var(--accent-primary)', opacity: 0.8 }}
            >
              <img
                src={heroimage}
                alt="Nick Joshua - AI Automation Specialist"
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
