import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, FileText, ArrowRight, Bot, Workflow } from 'lucide-react'
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
    <section id='Home' className="hero-bg grid-overlay min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24 md:py-24" style={{
      backgroundColor: 'var(--bg-primary)'
    }}>
      <div className="max-w-7xl w-full relative">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-3/5 order-2 md:order-1"
          >
            <div
              className="inline-flex items-center gap-2 px-3 py-1 mb-5 rounded-full text-xs sm:text-sm font-semibold glass-chip"
              style={{ color: 'var(--accent-primary)' }}
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

            <p className="eyebrow mb-3">AI Automation &amp; Workflow Engineering</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-[1.05]" style={{ color: 'var(--text-primary)' }}>
              Nick Joshua
            </h1>
            <div className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 min-h-[3.5rem] md:min-h-[2.5rem] font-medium" style={{ color: 'var(--text-secondary)' }}>
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
            <p className="text-base sm:text-lg mb-6 sm:mb-8 max-w-xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              I help businesses automate the work that eats their day — from AI agents that
              schedule appointments over SMS to hands-off content pipelines. You describe the
              process; I design, build, and maintain an automation that runs it for you.
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-6 sm:mb-8">
              <button
                onClick={(e) => gotoSection(e, 'Contact')}
                className="button inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full text-sm sm:text-base font-bold shadow-lg"
              >
                Start a Project
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={(e) => gotoSection(e, 'Work')}
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full text-sm sm:text-base font-bold border-2 transition-all duration-300 hover:-translate-y-0.5"
                style={{ borderColor: 'var(--accent-primary)', color: 'var(--text-primary)' }}
              >
                See My Work
              </button>
              <InteractiveHoverButton onClick={onWantToKnowMoreClick} text="Ask My AI" className="primary-color border-primary"/>
            </div>

            {/* Tech Stack */}
            <div className="mb-6 sm:mb-8">
              <h3 className="font-semibold mb-2 sm:mb-3 text-sm uppercase tracking-wider" style={{ color: 'var(--text-primary)' }}>What I Automate &amp; Build</h3>
              <div className="flex flex-wrap gap-2">
                {Ican.map((tech) => (
                  <span
                    key={tech}
                    className="button px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold"
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
            <div className="relative">
              <div className="portrait-glow" />
              <div className="portrait-ring w-52 h-52 sm:w-72 sm:h-72 lg:w-96 lg:h-96">
                <div className="w-full h-full rounded-full overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
                  <img
                    src={heroimage}
                    alt="Nick Joshua - AI Automation Specialist"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Floating credential chips */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="glass-chip hidden sm:flex items-center gap-2 absolute -left-10 top-8 px-3 py-2 rounded-xl text-xs font-bold"
                style={{ color: 'var(--text-primary)' }}
              >
                <Workflow className="w-4 h-4" style={{ color: 'var(--accent-primary)' }} />
                n8n Automation Expert
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="glass-chip hidden sm:flex items-center gap-2 absolute -right-6 bottom-12 px-3 py-2 rounded-xl text-xs font-bold"
                style={{ color: 'var(--text-primary)' }}
              >
                <Bot className="w-4 h-4" style={{ color: 'var(--accent-primary)' }} />
                GPT Agents in Production
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
