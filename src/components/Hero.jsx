import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, FileText } from 'lucide-react'
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
      color: 'hover:text-emerald-400'
    },
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/nickjmont', 
      onclick: () => {},
      label: 'LinkedIn Profile',
      color: 'hover:text-emerald-400'
    },
    { 
      icon: Mail, 
      href: '#contact', 
      onclick: (e) => gotoSection(e, 'Contact'),
      label: 'Email Contact',
      color: 'hover:text-emerald-400'
    },
    { 
      icon: FileText, 
      href: resume,
      onclick: () => {},
      label: 'Download Resume',
      color: 'hover:text-emerald-400'
    }
  ]

  const Ican = [
    'Cloud', 'AI Automation', 'Cybersecurity', 'Software Development'
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
            transition={{ duration: 3 }}
            className="w-full md:w-3/5 order-2 md:order-1"
          >
            <h2 className="text-base sm:text-lg font-medium mb-2" style={{ color: 'var(--accent-primary)' }}>
              Hi there! 👋 I'm
            </h2>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Nick Joshua
            </h1>
            <div className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 h-8" style={{ color: 'var(--text-secondary)' }}>
              <TypeAnimation
                sequence={[
                  'Full-Stack Developer',
                  2000,
                  'DevOps',
                  2000,
                  'Cybersecurity Enthusiast',
                  2000,
                ]}
                repeat={Infinity}
              />
            </div>
            <p className="text-slate-400 text-base sm:text-lg mb-6 sm:mb-8 max-w-xl">
              I specialize in supporting applications and developing tools that enhance workflows and productivity within organizations. With expertise in software development and cloud operations, I prioritize security in every aspect of my work to deliver reliable and efficient solutions.
            </p>

            <InteractiveHoverButton onClick={onWantToKnowMoreClick} text="Try Me!" className="mb-6 sm:mb-8 primary-color border-primary"/>
            
            {/* Tech Stack */}
            <div className="mb-6 sm:mb-8">
              <h3 className="font-medium mb-2 sm:mb-3" style={{ color: 'var(--text-primary)' }}>What I Do?</h3>
              <div className="flex flex-wrap gap-2">
                {Ican.map((tech) => (
                  <span
                    key={tech}
                    className="button px-2 sm:px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-xs sm:text-sm"
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
                  className={`text-slate-400 transition-colors duration-300 ${social.color}`}
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
            transition={{ duration: 3 }}
            className="w-full md:w-2/5 order-1 md:order-2 flex justify-center mb-8 md:mb-0"
          >
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-5/6 md:h-5/6 rounded-full overflow-hidden border-4 border-emerald-400/20">
              <img
                src={heroimage}
                alt="Profile"
                className="object-cover w-full h-full"
              />
              
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}