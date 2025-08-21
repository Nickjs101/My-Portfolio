import { projectStyles as styles } from './ProjectStyles'
import AppointmentSetterAgentCover from '/tmp/portfolio/src/assets/Works/AppointmentSetterAgentCover.png'
import ManyChatAIReply from '/tmp/portfolio/src/assets/Works/ManyChatAIReply.png'
import N8nAppointmentSetterRAGAgent from '/tmp/portfolio/src/assets/Works/n8nAppointmentSetterRAGAgent.png'
import N8nCheckAvailabilityTool from '/tmp/portfolio/src/assets/Works/n8nCheckAvailabilityTool.png'
import N8nSetAppointmentTool from '/tmp/portfolio/src/assets/Works/n8nSetAppointmentTool.png'

const AIRAGAppointmentSystem = () => {
  const title = 'AI RAG & Appointment System'

  const skills = [
    'ManyChat (Messenger/Instagram automation)',
    'n8n (AI Tools Agent, Webhooks, HTTP, branching)',
    'OpenAI GPT‑4o',
    'Retrieval-Augmented Generation (RAG)',
    'Google Sheets (appointment database)',
    'Cal.com (calendar scheduling)',
    'Structured output parsing',
    'REST APIs and webhooks',
    'Prompt design and conversation memory',
    'Error handling and retries'
  ]

  const links = []

  const contentSections = [
    {
      heading: 'Overview',
      paragraphs: [
        'Service providers often pay for social media ads but lack a reliable, automated path to convert inbound messages into confirmed appointments. This system combines an AI RAG agent, channel automations, and scheduling tools to answer FAQs with provider-specific data, check real-time availability, and book appointments—directly inside the messaging experience.'
      ]
    },
    {
      heading: 'Goals',
      bullets: [
        'Respond instantly to inbound leads on social channels',
        'Answer service/consultation questions using provider data (RAG)',
        'Check calendar availability and propose alternatives',
        'Book appointments automatically and log them for tracking',
        'Reduce drop-off between ad click and confirmed booking'
      ]
    },
    {
      heading: 'Features / Workflow',
      image: { src: ManyChatAIReply, alt: 'ManyChat RAG and Appointment automation flow' },
      bullets: [
        'Lead taps an ad and messages the page (e.g., Messenger/Instagram).',
        'ManyChat runs a guided flow to capture context and route the conversation.',
        'The AI agent answers questions using provider-specific RAG context.',
        'The agent calls tools to check availability.',
        'The agent schedules the appointment when the user confirms.',
        'If the requested slot is taken, the agent proposes the nearest available options.',
        'Confirmed bookings are written to Cal.com and logged in Google Sheets.'
      ]
    },
    {
      heading: 'Architecture / Logic / Design',
      image: { src: N8nAppointmentSetterRAGAgent, alt: 'n8n AI RAG & Appointment Setter workflow' },
      paragraphs: [
        'ManyChat acts as the entry point, n8n orchestrates the AI agent with memory and tool-calling, and webhooks glue the services together. The workflow routes responses back to the user within the same messaging experience.'
      ],
      bullets: [
        'ManyChat: entry point, conversation flow, message delivery.',
        'n8n: central orchestrator running the AI agent with memory and tools (check_availability, set_appointment).',
        'Webhooks and HTTP requests integrate ManyChat, Cal.com, and other services.'
      ]
    },
    {
      heading: 'Tool: Availability Checking',
      image: { src: N8nCheckAvailabilityTool, alt: 'n8n check_availability_tool workflow' },
      bullets: [
        'Reads all booked slots from Google Sheets.',
        'Uses OpenAI (GPT‑4o) to interpret natural language time requests and normalize to slots.',
        'Evaluates availability and suggests alternatives as structured output.'
      ]
    },
    {
      heading: 'Tool: Appointment Setting',
      image: { src: N8nSetAppointmentTool, alt: 'n8n set_appointment_tool workflow' },
      bullets: [
        'Creates the event in Cal.com.',
        'Appends the confirmed booking to Google Sheets for reporting and audit.',
        'Returns confirmation details for user-facing messages.'
      ]
    },
    {
      heading: 'Results / Evaluation',
      bullets: [
        'Consistent, instant responses for all inbound leads.',
        'Fewer manual back-and-forth messages and missed opportunities.',
        'Reliable, traceable appointment records in Sheets plus source-of-truth in Cal.com.',
        'Scalable flow that can be duplicated across service providers and channels.'
      ]
    },
    {
      heading: 'Challenges & Learnings',
      bullets: [
        'Time interpretation: normalizing “this Thursday afternoon” across time zones and daylight savings.',
        'Double-booking prevention: centralized reads and atomic writes to the Sheets calendar.',
        'Structured outputs: enforcing schemas to keep the agent’s tool calls predictable.',
        'Human handoff and fallbacks: clear paths in ManyChat for edge cases or complex requests.',
        'Idempotency and retries: safe replays of tool calls without creating duplicate appointments.'
      ]
    }
  ]

  return (
    <div className="font-sans leading-relaxed tracking-wide flex flex-col items-center">
      <div className="max-w-4xl w-full p-0 md:p-6 rounded-lg">
        <img src={AppointmentSetterAgentCover} alt="AI-powered appointment scheduling chat cover" className="w-full h-auto mb-6 rounded-lg" />

        <h1 style={styles.heading} className="text-3xl lg:text-5xl font-bold mb-4">
          {title}
        </h1>

        {contentSections.map((section) => (
          <div key={section.heading} className="mb-8">
            <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
              {section.heading}
            </h2>

            {typeof section.paragraphs === 'string' && (
              <p style={styles.text} className="mb-4">
                {section.paragraphs}
              </p>
            )}

            {Array.isArray(section.paragraphs) &&
              section.paragraphs.map((para) => (
                <p key={para} style={styles.text} className="mb-4">
                  {para}
                </p>
              ))}

            {Array.isArray(section.bullets) && section.bullets.length > 0 && (
              <ul className="list-disc pl-6 mb-4">
                {section.bullets.map((item) => (
                  <li key={item} style={styles.text} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {section.image?.src && (
              <img
                src={section.image.src}
                alt={section.image.alt || `${section.heading} illustration`}
                className="w-full h-auto mb-6 rounded-lg"
              />
            )}

            {Array.isArray(section.images) && section.images.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {section.images.map((img) => (
                  <img
                    key={img.src}
                    src={img.src}
                    alt={img.alt || `${section.heading} image`}
                    className="w-full h-auto rounded-lg"
                  />
                ))}
              </div>
            )}
          </div>
        ))}

        {Array.isArray(links) && links.length > 0 && (
          <div className="flex flex-col sm:flex-row justify-center gap-4 my-8">
            {links.map((link) => (
              <a
                key={link.href}
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

        <h2 style={styles.heading} className="text-2xl font-bold mb-4">Skills & Technologies Used</h2>
        <div className="flex flex-wrap mb-4">
          {skills.map((skill) => (
            <span
              key={skill}
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