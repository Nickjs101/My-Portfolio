import React from 'react'
import { motion } from 'framer-motion'
import { Bot, Workflow, Plug, MonitorSmartphone, ArrowRight } from 'lucide-react'
import { useNavigation } from '../contexts'

const services = [
  {
    icon: Bot,
    title: 'AI Agents & Chatbots',
    description:
      'Custom GPT-powered agents that handle real conversations — SMS, email, or web chat — with tools, memory, and guardrails so they act, not just answer.',
    tools: ['OpenAI', 'n8n Agents', 'MCP'],
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description:
      'End-to-end pipelines that connect your apps and remove manual busywork — lead intake, scheduling, content publishing, reporting, and more.',
    tools: ['n8n', 'Make', 'Zapier'],
  },
  {
    icon: Plug,
    title: 'API & System Integration',
    description:
      'Custom REST and webhook integrations, web scraping, and data syncs across CRMs, spreadsheets, calendars, email, and phone systems.',
    tools: ['REST APIs', 'Webhooks', 'Google Workspace'],
  },
  {
    icon: MonitorSmartphone,
    title: 'Web Development',
    description:
      'Fast, responsive React websites and dashboards — like this one — designed to present your business clearly and convert visitors.',
    tools: ['React', 'Tailwind CSS', 'Netlify'],
  },
]

export default function Services() {
  const { scrollToSection } = useNavigation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id='Services' className="py-24 md:py-20 px-4 sm:px-6 lg:px-8" style={{
      backgroundColor: 'var(--bg-primary)'
    }}>
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center" style={{ color: 'var(--text-primary)' }}>
            What I Can Do for You
          </h2>
          <div className="h-1 w-20 mx-auto rounded-full" style={{ backgroundColor: 'var(--button-bg)' }}></div>
          <p className="mt-4 text-base sm:text-lg text-center max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
            I take repetitive processes off your plate and turn them into systems that run on their own.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="rounded-xl border p-5 sm:p-6 flex flex-col"
              style={{
                backgroundColor: 'var(--card-bg)',
                borderColor: 'var(--card-border)',
              }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: 'var(--bg-tertiary)' }}
              >
                <service.icon className="w-6 h-6" style={{ color: 'var(--accent-primary)' }} />
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                {service.title}
              </h3>
              <p className="text-sm mb-4 flex-grow" style={{ color: 'var(--text-secondary)' }}>
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2 py-0.5 rounded-full text-xs font-medium"
                    style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mt-8 sm:mt-12"
        >
          <button
            onClick={() => scrollToSection('Contact')}
            className="button group inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium"
          >
            Have something to automate? Let's talk
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
