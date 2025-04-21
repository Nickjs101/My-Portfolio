import React from 'react'
import { projectStyles as styles } from './ProjectStyles'

import AIAppointmentSetterCoverImage from '../../assets/Works/AIAppointmentSetterCoverImage.png'
import ManyChatAIReply from '../../assets/Works/ManyChatAIReply.png'
import n8nAppointmentSetterRAGAgent from '../../assets/Works/n8nAppointmentSetterRAGAgent.png'
import n8nSetAppointmentTool from '../../assets/Works/n8nSetAppointmentTool.png'
import n8nCheckAvailabilityTool from '../../assets/Works/n8nCheckAvailabilityTool.png'

const AI_RAG_AppointmentSystem = () => {
  const skills = [
    'ManyChat',
    'n8n',
    'Google Sheets',
    'OpenAI GPT-4',
    'Cal.com'
  ]

  const links = [
    { label: 'View Repository', href: '#' },
    { label: 'Try Live Demo', href: '#' },
    { label: 'Read the Docs', href: '#' }
  ]

  const contentSections = [
    {
      heading: 'Project Overview',
      paragraphs: `The AI RAG & Appointment System is an innovative solution designed to enhance communication between service providers and potential customers. By integrating AI-driven chat capabilities with appointment scheduling, this system ensures that leads generated from social media advertisements are swiftly converted into customers, thereby maximizing the return on marketing investments.`
    },
    {
      heading: 'Purpose and Goals',
      paragraphs: [
        `In today's digital landscape, many service providers struggle to convert leads into customers despite running effective advertising campaigns. This system addresses that gap by providing an automated gateway through which inquiries can be handled efficiently. When a lead interacts with a service provider's advertisement, they are directed to a messaging platform where the AI system, powered by ManyChat and n8n, engages them in a conversation and facilitates appointment scheduling.`
      ],
      image: { src: ManyChatAIReply, alt: 'Manychat Automation Builder – RAG & Appointment' }
    },
    {
      heading: 'Key Features / Workflow',
      paragraphs: [
        'The workflow encompasses several critical components:',
        '1. ManyChat Integration: The system captures inputs from potential customers via a chatbot interface, streamlining the conversational flow.',
        "2. AI Conversational Agent: Utilizes OpenAI's capabilities to engage leads, answering their queries and guiding them through the appointment-setting process.",
        '3. Appointment Setting: Works seamlessly with Cal.com and Google Sheets for checking availability and recording appointments.'
      ],
      image: { src: n8nAppointmentSetterRAGAgent, alt: 'AI Rag & Appointment Setter Workflow' }
    },
    {
      heading: 'Architecture / Logic / Design',
      paragraphs: [
        'The underlying architecture of the AI RAG & Appointment System is orchestrated through n8n, which serves as the automation tool connecting various app integrations.',
      ],
      image: { src: n8nSetAppointmentTool, alt: 'Set Appointment Tool' }
    },
    {
      heading: '',
      paragraphs: [
        "The system's logic involves checking appointment availability directly through Google Sheets, using techniques to collect and analyze scheduled data, enabling a smooth user experience."
      ],
      image: { src: n8nCheckAvailabilityTool, alt: 'Check Availability Tool' }
    },
    {
      heading: 'Results / Evaluation',
      paragraphs: [
        'Feedback from initial integrations indicates a substantial improvement in lead conversion rates. Users reported quicker response times and a streamlined booking process, showcasing the effectiveness of automating customer communication.'
      ]
    },
    {
      heading: 'Try it Out / View the Project',
      paragraphs: []
    }
  ]

  return (
    <div className="font-sans leading-relaxed tracking-wide flex flex-col items-center">
      <div className="max-w-4xl w-full p-0 md:p-6 rounded-lg">

        <img src={AIAppointmentSetterCoverImage} alt="Njs Dental Clinic Facebook page showcasing the digital automation interface" className="w-full h-auto mb-6 rounded-lg" />

        <h1 style={styles.heading} className="text-3xl lg:text-5xl font-bold mb-4">
          AI RAG & Appointment System
        </h1>

        {contentSections.map((section, idx) => (
          <section key={idx} className="mb-6">
            {section.heading && (
              <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
                {section.heading}
              </h2>
            )}

            {Array.isArray(section.paragraphs) ? (
              section.paragraphs.map((para, pIdx) => (
                <p style={styles.text} className="mb-4" key={pIdx}>
                  {para}
                </p>
              ))
            ) : (
              <p style={styles.text} className="mb-4">{section.paragraphs}</p>
            )}

            {section.image && (
              <img src={section.image.src} alt={section.image.alt} className="w-full h-auto mb-6 rounded-lg" />
            )}
          </section>
        ))}

        <div className="flex flex-col sm:flex-row justify-center gap-4 my-8">
          {links.map(({ label, href }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold py-2 px-4 rounded-lg shadow-lg transition-colors duration-300"
              style={{
                backgroundColor: 'var(--accent-primary)',
                color: 'var(--text-primary)'
              }}
            >
              {label}
            </a>
          ))}
        </div>

        <h2 style={styles.heading} className="text-2xl font-bold mb-4">Skills & Technologies Used</h2>
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

export default AI_RAG_AppointmentSystem