import React from 'react'
import { projectStyles as styles } from './ProjectStyles'

import AIAppointmentSetterCoverImage from '../../assets/Works/AIAppointmentSetterCoverImage.png'
import ManyChatAIReply from '../../assets/Works/ManyChatAIReply.png'
import n8nAppointmentSetterRAGAgent from '../../assets/Works/n8nAppointmentSetterRAGAgent.png'
import n8nCheckAvailabilityTool from '../../assets/Works/n8nCheckAvailabilityTool.png'
import n8nSetAppointmentTool from '../../assets/Works/n8nSetAppointmentTool.png'

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
      paragraphs: 'The AI RAG & Appointment System addresses the common challenge faced by many service providers who run advertisements on social media but lack an effective method to convert leads into customers. This innovative solution enables service providers to engage with potential clients through automated interactions, ultimately facilitating appointment scheduling.'
    },
    {
      heading: 'Goals',
      paragraphs: [
        'To streamline the lead conversion process from social media ads to actual appointments.',
        'To enhance customer engagement by providing prompt and informative responses.',
        'To automate the management of appointments, reducing manual workload for service providers.'
      ]
    },
    {
      heading: 'Features / Workflow',
      paragraphs: [
        'Upon clicking the advertisement, leads are directed to a messaging interface where the AI system is ready to assist. The system handles inquiries regarding services and consultations by:',
        '1. Responding with tailored information based on the service provider\'s offerings.',
        '2. Conducting interactive conversations to establish rapport.',
        '3. Finalizing appointments through an automated scheduling function.',
        '',
        'Key Workflow Components:',
        '- ManyChat for seamless integration with social media platforms.',
        '- n8n as an automation agent that manages user interactions and responses.',
        '- Google Sheets as a backend database for tracking appointments and availability.'
      ]
    },
    {
      heading: 'Architecture / Logic / Design',
      paragraphs: [
        'The system\'s architecture comprises various interconnected components:',
        '1. ManyChat Integration: Captures user messages when triggered by an ad click.',
        '2. Automated Response Generation: Using AI models (like GPT-4o) for intelligent conversations.',
        '3. Appointment Management:',
        '   - check_availability_tool checks whether requested time slots are available.',
        '   - set_appointment_tool finalizes the appointment and updates both the calendar and Google Sheets.'
      ],
      images: [
        { src: ManyChatAIReply, alt: 'ManyChat Automation Workflow - "RAG & Appointment"' },
        { src: n8nAppointmentSetterRAGAgent, alt: 'AI Rag & Appointment Setter Workflow - n8n' }
      ]
    },
    {
      heading: 'Results / Evaluation',
      paragraphs: 'The implementation of this system has led to improved lead engagement rates, notably increasing the conversion of inquiries to confirmed appointments. Feedback from service providers indicates a marked reduction in the time spent managing leads, allowing them to focus on delivering quality services.'
    },
    {
      heading: 'Challenges & Learnings',
      paragraphs: [
        'Technical Integration: Integrating multiple platforms (ManyChat, Google Sheets, Cal.com) required meticulous planning and execution.',
        'User Interaction Design: Ensuring the AI system could adequately understand and respond to diverse inquiries was a key challenge that involved continuous refinement of the training data.'
      ],
      images: [
        { src: n8nCheckAvailabilityTool, alt: 'check_availability_tool' },
        { src: n8nSetAppointmentTool, alt: 'set_appointment_tool' }
      ]
    }
  ]

  return (
    <div className="font-sans leading-relaxed tracking-wide flex flex-col items-center">
      <div className="max-w-4xl w-full p-0 md:p-6 rounded-lg">
        <img src={AIAppointmentSetterCoverImage} alt="Facebook business profile interface for a dental clinic" className="w-full h-auto mb-6 rounded-lg" />

        <h1 style={styles.heading} className="text-3xl lg:text-5xl font-bold mb-4">
          AI RAG & Appointment System
        </h1>

        {contentSections.map((section, idx) => (
          <section key={idx} className="mb-8">
            <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
              {section.heading}
            </h2>
            {Array.isArray(section.paragraphs) ? (
              section.paragraphs.map((para, index) =>
                para.trim().startsWith('1.') || para.trim().startsWith('-') || para.trim().match(/^\d\./) ? (
                  <p key={index} style={styles.text} className="mb-2 whitespace-pre-line">
                    {para}
                  </p>
                ) : (
                  <p key={index} style={styles.text} className="mb-4">
                    {para}
                  </p>
                )
              )
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
            {section.images && section.images.length > 0 && (
              <div className="flex flex-col gap-6 mb-6">
                {section.images.map((img, i) => (
                  <img
                    key={i}
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-auto rounded-lg"
                  />
                ))}
              </div>
            )}
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

export default AIAppointmentSystem