import React from 'react'
import { projectStyles as styles } from './ProjectStyles'

import AIAppointmentSetterCoverImage from '../../assets/Works/AIAppointmentSetterCoverImage.png'
import ManyChatAIReply from '../../assets/Works/ManyChatAIReply.png'
import n8nCheckAvailabilityTool from '../../assets/Works/n8nCheckAvailabilityTool.png'
import n8nSetAppointmentTool from '../../assets/Works/n8nSetAppointmentTool.png'
import n8nAppointmentSetterRAGAgent from '../../assets/Works/n8nAppointmentSetterRAGAgent.png'

const AIRAGAppointmentSystem = () => {
  const skills = [
    'ManyChat',
    'n8n',
    'Google Sheets',
    'Cal.com',
    'OpenAI GPT-4'
  ]

  const links = []

  const contentSections = [
    {
      heading: 'Overview',
      paragraphs:
        'The AI RAG & Appointment System is designed to assist service providers in transforming social media leads into customers. By implementing advanced AI technology, the system enables potential clients to interact with service providers, ask relevant questions, and seamlessly set appointments.'
    },
    {
      heading: 'Goals',
      paragraphs:
        'The primary objective of the project is to enhance lead conversion rates for service providers through automated, intelligent customer interactions, thus streamlining the appointment setting process.'
    },
    {
      heading: 'Features / Workflow',
      paragraphs: [
        'Leads are directed from social media ads to a message interface managed by the AI system.',
        'The system engages leads by answering inquiries about service offerings, conducting conversations, and scheduling appointments.',
        'Automation Flows in ManyChat handle incoming messages and provide responses based on user interactions.'
      ],
      image: { src: ManyChatAIReply, alt: 'Manychat Automation Flow - "RAG & Appointment"' }
    },
    {
      heading: 'Architecture / Logic / Design',
      paragraphs: [
        'The architecture leverages multiple tools:',
        'ManyChat for initial social media connection and user interaction.',
        'n8n for orchestrating workflows, including:',
        'Check Availability Tool: Verifies appointment slots against existing commitments by querying a Google Sheets database.',
        'Set Appointment Tool: Utilizes Cal.com to formally schedule appointments and log them in Google Sheets.'
      ],
      images: [
        { src: n8nCheckAvailabilityTool, alt: 'check_availability_tool' },
        { src: n8nSetAppointmentTool, alt: 'n8nSetAppointmentTool' }
      ]
    },
    {
      heading: 'Results / Evaluation',
      paragraphs:
        'By implementing the AI RAG & Appointment System, service providers experienced increased efficiency in handling inquiries and appointment scheduling, significantly boosting customer engagement and satisfaction.'
    },
    {
      heading: 'Challenges & Learnings',
      paragraphs:
        'The integration of multiple platforms (ManyChat, n8n, Google Sheets, and Cal.com) presented challenges in ensuring seamless communication between components. Developing robust error-handling and testing protocols was essential for smooth operations.',
      image: { src: n8nAppointmentSetterRAGAgent, alt: 'AI Rag & Appointment Setter' }
    }
  ]

  return (
    <div className="font-sans leading-relaxed tracking-wide flex flex-col items-center">
      <div className="max-w-4xl w-full p-0 md:p-6 rounded-lg">
        <img
          src={AIAppointmentSetterCoverImage}
          alt="Njs Dental Clinic"
          className="w-full h-auto mb-6 rounded-lg"
        />

        <h1
          style={styles.heading}
          className="text-3xl lg:text-5xl font-bold mb-4"
        >
          AI RAG & Appointment System
        </h1>

        {contentSections.map((section, index) => (
          <section key={index} className="mb-8">
            <h2
              style={styles.heading}
              className="text-2xl font-semibold mb-4"
            >
              {section.heading}
            </h2>
            {Array.isArray(section.paragraphs) ? (
              section.paragraphs.map((para, i) => (
                <p style={styles.text} className="mb-3" key={i}>
                  {para}
                </p>
              ))
            ) : (
              <p style={styles.text} className="mb-4">
                {section.paragraphs}
              </p>
            )}

            {section.image && (
              <img
                src={section.image.src}
                alt={section.image.alt}
                className="w-full h-auto mb-6 rounded-lg"
              />
            )}

            {section.images &&
              section.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto mb-6 rounded-lg"
                />
              ))}
          </section>
        ))}

        {links.length > 0 && (
          <div className="flex flex-col sm:flex-row justify-center gap-4 my-8">
            {links.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold py-2 px-4 rounded-lg shadow-lg transition-colors duration-300"
                style={{
                  backgroundColor: 'var(--accent-primary)',
                  color: 'var(--text-primary)'
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}

        <h2 style={styles.heading} className="text-2xl font-bold mb-4">
          Skills & Technologies Used
        </h2>
        <div className="flex flex-wrap mb-4">
          {skills.map((skill, index) => (
            <span
              key={index}
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

export default AIRAGAppointmentSystem