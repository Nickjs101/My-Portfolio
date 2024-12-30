import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download } from 'lucide-react'
import { TypeAnimation } from 'react-type-animation'
import heroimage from '../assets/headshot.JPG'
import resume from '../assets/NICK_JOSHUA_MONTEMAYOR_RESUME.pdf'

export default function Hero() {

  const gotoSection = (event, id) => {
    event.preventDefault();
    const section = document.getElementById(id);
    
    window.scrollTo({
      top: section.offsetTop, // adjust the scroll position
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
      href: 'mailto:nick@example.com', 
      onclick: (e) => gotoSection(e, 'Contact'),
      label: 'Email Contact',
      color: 'hover:text-emerald-400'
    },
    { 
      icon: Download, 
      href: resume,
      onclick: () => {},
      label: 'Download Resume',
      color: 'hover:text-emerald-400'
    }
  ]

  const techStack = [
    'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'HTML/CSS'
  ]

  return (
    <section id='Home' className="min-h-screen flex items-center justify-center bg-slate-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 md:order-1"
          >
            <h2 className="text-emerald-400 text-lg font-medium mb-2">
              Hi there! 👋 I'm
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Nick Joshua
            </h1>
            <div className="text-xl md:text-2xl text-slate-300 mb-6">
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
            <p className="text-slate-400 text-lg mb-8 max-w-xl">
            I specialize in supporting applications and developing tools that enhance workflows and productivity within organizations. With expertise in software development and cloud operations, I prioritize security in every aspect of my work to deliver reliable and efficient solutions.
            </p>
            
            {/* Tech Stack */}
            <div className="mb-8">
              <h3 className="text-slate-300 font-medium mb-3">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm"
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
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-emerald-400/20">
              <img
                src={heroimage}
                alt="Profile"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-400/10 to-slate-900/50" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

