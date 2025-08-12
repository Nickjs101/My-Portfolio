import React from 'react'
import { projectStyles as styles } from './ProjectStyles'
import CoverImage from '../../assets/Works/AppointmentSetterAgentCover.png'
import ManyChatFlow from '../../assets/Works/ManyChatAIReply.png'
import N8nWorkflow from '../../assets/Works/n8nAppointmentSetterRAGAgent.png'
import CheckAvailability from '../../assets/Works/n8nCheckAvailabilityTool.png'
import SetAppointment from '../../assets/Works/n8nSetAppointmentTool.png'

const AIRagAppointmentSystem = () => {
  const skills = [
    'ManyChat',
    'n8n',
    'Retrieval-Augmented Generation (RAG)',
    'OpenAI (gpt4o / 4o mini)',
    'Cal.com (API)',
    'Google Sheets',
    'Webhooks & HTTP APIs',
    'JSON & structured output parsing',
    'Workflow orchestration',
    'Prompt engineering'
  ]

  const contentSections = [
    {
      heading: 'Overview',
      paragraphs: [
        "Service providers often run ads that generate leads but lack an automated system to engage those leads and convert them into booked customers. This project implements a conversational AI Retrieval-Augmented Generation (RAG) agent that captures leads from social media, answers service questions using provider data, checks schedule availability, and books appointments — end-to-end."
      ],
      image: { src: CoverImage, alt: 'AI RAG & Appointment System - chat UI on smartphone' }
    },
    {
      heading: 'Goals',
      paragraphs: [
        'Convert ad-driven leads into scheduled customers automatically.',
        'Provide accurate answers about services using provider data (RAG).',
        "Validate availability and set appointments on providers' calendars.",
        'Log appointments for reporting and reconciliation.'
      ]
    },
    {
      heading: 'Features / Workflow',
      paragraphs: [
        'Lead enters via social media messaging (ManyChat) after clicking an ad.',
        "ManyChat funnels the message to an n8n webhook where the AI Agent handles the conversation.",
        'The agent uses RAG to answer service-specific questions and calls specialized tools to check availability and set appointments.',
        'When an appointment is confirmed, the agent sends a confirmation message back through ManyChat and records the booking in Google Sheets and Cal.com.'
      ],
      image: { src: ManyChatFlow, alt: 'ManyChat RAG & Appointment Automation Flow' }
    },
    {
      heading: 'Architecture / Logic / Design',
      paragraphs: [
        'Frontend entry: ManyChat (connects Facebook Messenger, Instagram Direct, etc.) → triggers a POST webhook to n8n.',
        "Core orchestration: n8n workflow runs an AI Tools Agent (4o mini / GPT models + memory) that performs RAG lookups against provider data to answer queries, calls the availability tool to validate requested date/time, and calls the appointment tool to create bookings in Cal.com and append records to Google Sheets.",
        'Response path: Depending on whether the lead has an existing user ID, responses are posted back to ManyChat via API or returned through the webhook.'
      ],
      image: { src: N8nWorkflow, alt: 'AI Rag & Appointment Setter - Workflow in n8n' }
    },
    {
      heading: 'Tool-specific Workflows',
      paragraphs: [
        'check_availability_tool: aggregates appointments from Google Sheets, uses an OpenAI chat model and structured output parsing to determine availability or return alternative times.',
        'set_appointment_tool: sends a POST to Cal.com to create the event and appends the booking row to Google Sheets for auditing and calendar sync.'
      ],
      images: [
        { src: CheckAvailability, alt: 'n8n check_availability_tool workflow' },
        { src: SetAppointment, alt: 'n8n set_appointment_tool workflow' }
      ]
    },
    {
      heading: 'Results / Evaluation',
      paragraphs: [
        'Automated 24/7 lead engagement and booking reduces manual follow-up.',
        'Consistent, data-grounded answers about services (via RAG) improve lead trust.',
        'Centralized booking records (Google Sheets + Cal.com) simplify reporting and reconciliation.',
        'Modular tools allow swapping models, calendars, or databases with minimal changes.'
      ]
    },
    {
      heading: 'Challenges & Learnings',
      paragraphs: [
        'Timezones and ambiguous user time expressions require robust parsing and normalization.',
        'Concurrency and race conditions when multiple leads request the same slot demand quick availability checks and optimistic locking strategies.',
        'Prompt engineering and structured output parsing are essential to reliably extract availability decisions from the AI.',
        'Privacy and data handling (lead PII) must be addressed when logging to third-party tools.'
      ]
    }
  ]

  return (
    <div className="font-sans leading-relaxed tracking-wide flex flex-col items-center p-4">
      <div className="max-w-4xl w-full p-0 md:p-6 rounded-lg">
        <img src={CoverImage} alt="AI RAG & Appointment System cover" className="w-full h-auto mb-6 rounded-lg shadow-md" />

        <h1 style={styles.heading} className="text-3xl lg:text-5xl font-bold mb-6">
          AI RAG & Appointment System
        </h1>

        {contentSections.map((section, idx) => (
          // eslint-disable-next-line react/no-array-index-key
          <section key={idx} className="mb-8">
            <h2 style={styles.heading} className="text-2xl font-semibold mb-3">
              {section.heading}
            </h2>

            {Array.isArray(section.paragraphs)
              ? section.paragraphs.map((para, pIdx) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <p key={pIdx} style={styles.text} className="mb-3 text-gray-800">
                    {para}
                  </p>
                ))
              : (
                <p style={styles.text} className="mb-3 text-gray-800">
                  {section.paragraphs}
                </p>
              )}

            {section.image && (
              <img
                src={section.image.src}
                alt={section.image.alt}
                className="w-full h-auto mb-4 rounded-lg shadow-sm"
              />
            )}

            {section.images && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {section.images.map((img, i) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <img key={i} src={img.src} alt={img.alt} className="w-full h-auto rounded-lg shadow-sm" />
                ))}
              </div>
            )}
          </section>
        ))}

        <h2 style={styles.heading} className="text-2xl font-bold mb-4">Skills & Technologies Used</h2>
        <div className="flex flex-wrap mb-6">
          {skills.map((skill, index) => (
            <span
              key={skill}
              className="py-1 px-3 m-1 rounded-full font-semibold text-sm"
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

export default AIRagAppointmentSystem