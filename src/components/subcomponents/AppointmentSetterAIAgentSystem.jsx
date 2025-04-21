import React from 'react'
import { projectStyles as styles } from './ProjectStyles'

import AIAppointmentSetterCoverImage from '../../assets/Works/AIAppointmentSetterCoverImage.png'
import n8nSetAppointmentTool from '../../assets/Works/n8nSetAppointmentTool.png'
import n8nCheckAvailabilityTool from '../../assets/Works/n8nCheckAvailabilityTool.png'
import n8nAppointmentSetterRAGAgent from '../../assets/Works/n8nAppointmentSetterRAGAgent.png'
import ManyChatAIReply from '../../assets/Works/ManyChatAIReply.png'

const AIAppointmentSystem = () => {
  const skills = [
    'ManyChat',
    'n8n',
    'Google Sheets',
    'Cal.com',
    'OpenAI GPT-4o'
  ]

  const links = []

  const contentSections = [
    {
      heading: 'Overview',
      paragraphs: 'The AI RAG & Appointment System addresses a pressing issue faced by many service providers who run ads on social media without a systematic approach to converting leads into customers. This innovative solution enables service providers to engage with leads, answer inquiries, and set appointments seamlessly.'
    },
    {
      heading: 'Goals',
      paragraphs: 'The primary goal is to create an interactive and automated system that facilitates the conversion of leads by providing timely responses and scheduling capabilities without manual intervention.'
    },
    {
      heading: 'Features / Workflow',
      paragraphs: [
        'Lead Engagement: Upon clicking an ad, leads are directed to a messaging interface where the AI system is poised to respond.',
        'Dynamic Responses: The AI utilizes service providers\' data to answer questions effectively.',
        'Appointment Scheduling: The system not only provides information but also actively sets appointments by verifying availability and confirming schedules.'
      ]
    },
    {
      heading: 'Architecture / Logic / Design',
      paragraphs: [
        'The architecture comprises multiple interconnected tools:',
        'ManyChat: Used for building the chatbot interface that connects social media interactions with the appointment system.',
        'n8n: This workflow automation tool initiates the AI responses and manages the appointment setting process.',
        'Check Availability Tool: Verifies appointment availability against existing bookings using data stored in Google Sheets.',
        'Set Appointment Tool: Integrates with Cal.com to facilitate calendar operations and records appointments in Google Sheets.'
      ]
    },
    {
      heading: 'Architecture / Logic / Design',
      paragraphs: 'The workflows involve various components, including:',
      images: [
        { src: n8nAppointmentSetterRAGAgent, alt: 'n8n Workflow for AI RAG & Appointment Setter' }
      ]
    },
    {
      heading: 'Workflow Visualizations',
      paragraphs: '',
      images: [
        { src: n8nCheckAvailabilityTool, alt: 'n8n Check Availability Tool' }
      ]
    },
    {
      heading: 'Availability Check and Scheduling',
      paragraphs: '',
      images: [
        { src: n8nSetAppointmentTool, alt: 'n8n Set Appointment Tool' }
      ]
    },
    {
      heading: 'Results / Evaluation',
      paragraphs: 'The implementation of the AI RAG & Appointment System has shown promising results in enhancing customer conversion rates for service providers. Notable improvements include rapid response times and efficient appointment scheduling.'
    },
    {
      heading: 'Challenges & Learnings',
      paragraphs: [
        'Some challenges faced included:',
        'Integrating multiple tools to work seamlessly.',
        'Ensuring the AI\'s ability to respond accurately to diverse inquiries.',
        'Learnings gained from the project emphasize the value of automation in customer interactions and the importance of maintaining updated service provider information.'
      ]
    }
  ]

  return (
    <div className="font-sans leading-relaxed tracking-wide flex flex-col items-center">
      <div className="max-w-4xl w-full p-0 md:p-6 rounded-lg">

        {/* COVER IMAGE */}
        <img src={AIAppointmentSetterCoverImage} alt="Njs Dental Clinic Facebook business page showcasing modern dental equipment and a welcoming chat interface" className="w-full h-auto mb-6 rounded-lg" />

        {/* PROJECT TITLE */}
        <h1 style={styles.heading} className="text-3xl lg:text-5xl font-bold mb-4">
          AI RAG & Appointment System
        </h1>

        {/* CONTENT SECTIONS */}
        {contentSections.map((section, idx) => (
          <div key={idx} className="mb-8">
            <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
              {section.heading}
            </h2>
            {Array.isArray(section.paragraphs) ? (
              section.paragraphs.map((para, pidx) => (
                <p key={pidx} style={styles.text} className="mb-4">
                  {para.includes(':') && !para.startsWith('Some challenges faced') ? (
                    <>
                      <strong>{para.split(':')[0]}:</strong> {para.slice(para.indexOf(':') + 1).trim()}
                    </>
                  ) : (
                    para
                  )}
                </p>
              ))
            ) : (
              section.paragraphs && <p style={styles.text} className="mb-4">{section.paragraphs}</p>
            )}

            {section.image && (
              <img src={section.image.src} alt={section.image.alt} className="w-full h-auto mb-6 rounded-lg" />
            )}
            {section.images && section.images.map((img, iidx) => (
              <img key={iidx} src={img.src} alt={img.alt} className="w-full h-auto mb-6 rounded-lg" />
            ))}
          </div>
        ))}

        {/* Call to Action Buttons */}
        {links.length > 0 && (
          <div className="flex flex-col sm:flex-row justify-center gap-4 my-8">
            {links.map((link, lidx) => (
              <a
                key={lidx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold py-2 px-4 rounded-lg shadow-lg transition-colors duration-300"
                style={{ backgroundColor: 'var(--accent-primary)', color: 'var(--text-primary)' }}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}

        {/* SKILLS & TECHNOLOGIES */}
        <h2 style={styles.heading} className="text-2xl font-bold mb-4">Skills & Technologies Used</h2>
        <div className="flex flex-wrap mb-4">
          {skills.map((skill, sidx) => (
            <span
              key={sidx}
              className="py-1 px-3 m-1 rounded-full font-semibold transition-colors duration-300"
              style={styles.tag}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AIAppointmentSystem