import React from 'react';
import { projectStyles as styles } from './ProjectStyles';
import AppointmentSetterAgentCover from '../../assets/Works/AppointmentSetterAgentCover.png';
import ManyChatAIReply from '../../assets/Works/ManyChatAIReply.png';
import N8nAppointmentSetterRAGAgent from '../../assets/Works/n8nAppointmentSetterRAGAgent.png';
import N8nCheckAvailabilityTool from '../../assets/Works/n8nCheckAvailabilityTool.png';
import N8nSetAppointmentTool from '../../assets/Works/n8nSetAppointmentTool.png';

const AIRAGAppointmentSystem = () => {
  const title = 'AI RAG & Appointment System';

  const skills = [
    'ManyChat',
    'n8n',
    'Retrieval-Augmented Generation (RAG)',
    'OpenAI GPT-4o',
    'Google Sheets',
    'Cal.com',
    'Webhooks',
    'HTTP APIs',
    'Conversation Memory',
    'Structured Output Parsing',
    'Facebook Messenger / Social Messaging Automation',
  ];

  const links = [];

  const contentSections = [
    {
      heading: 'Overview',
      paragraphs: [
        'Service providers spend on ads but lose leads due to slow responses and manual scheduling. This system turns ad clicks into booked appointments by engaging leads instantly, answering service questions with provider data (RAG), checking availability, and confirming bookings automatically.',
      ],
    },
    {
      heading: 'Goals',
      bullets: [
        'Convert more social media leads into appointments.',
        'Provide instant, accurate answers from the provider’s own knowledge base.',
        'Automate availability checks and booking.',
        'Keep a clean audit trail of interactions and scheduled visits.',
      ],
    },
    {
      heading: 'Features / Workflow',
      bullets: [
        'Lead entry via social messaging: Ads direct users to Messenger/DM where ManyChat greets, qualifies, and captures details (e.g., phone).',
        'AI-led conversation (RAG): An n8n Agent uses provider data to answer FAQs, explain services, and guide the user toward slots that fit.',
        'Availability check: A dedicated tool reads the appointments sheet and uses GPT-4o to evaluate conflicts and propose alternatives when needed.',
        'One-click scheduling: When the lead confirms, the Set Appointment tool books via Cal.com and logs to Google Sheets, then sends a confirmation message.',
        'Safety and validation: Phone validation, conditional routing, fallback suggestions when times are taken, and message formatting for clean chat replies.',
      ],
      image: {
        src: ManyChatAIReply,
        alt: 'ManyChat flow builder for the RAG & Appointment automation, handling contact capture, validation, and routing.',
      },
    },
    {
      heading: 'Architecture / Logic / Design',
      paragraphs: [
        'Entry point: ManyChat webhook triggers the n8n workflow with user context and message.',
        'AI Agent in n8n: A Tools Agent with memory orchestrates the dialog and invokes two tools: Check Availability and Set Appointment.',
        'Output routing: Conditional nodes handle user/session checks, formatting fixes (e.g., newline escaping), and response dispatch back to ManyChat.',
      ],
      image: {
        src: N8nAppointmentSetterRAGAgent,
        alt: 'n8n “AI Rag & Appointment Setter” workflow connecting the ManyChat webhook, input parsing, AI Tools Agent, availability/booking tools, and response delivery.',
      },
    },
    {
      heading: 'Check Availability Tool',
      paragraphs: [
        'Reads the up-to-date appointments list from Google Sheets and uses GPT-4o with a structured output parser to assess slot conflicts and propose viable alternatives when a requested time is unavailable.',
      ],
      image: {
        src: N8nCheckAvailabilityTool,
        alt: 'n8n sub-workflow “check_availability_tool” that loads appointments, aggregates data, and evaluates availability with structured AI output.',
      },
    },
    {
      heading: 'Set Appointment Tool',
      paragraphs: [
        'Confirms slots by calling Cal.com APIs and persists bookings to Google Sheets for an auditable record and operational reporting.',
      ],
      image: {
        src: N8nSetAppointmentTool,
        alt: 'n8n sub-workflow “set_appointment_tool” that books via Cal.com and appends the appointment to Google Sheets.',
      },
    },
    {
      heading: 'Results / Evaluation',
      bullets: [
        'Faster lead response and fewer manual back-and-forths.',
        'Consistent, on-brand answers powered by the provider’s data.',
        'Reliable scheduling with conflict checks and clear confirmations.',
      ],
    },
    {
      heading: 'Challenges & Learnings',
      bullets: [
        'Time zone normalization and preventing double-booking.',
        'Phone/field validation and graceful fallbacks when preferred slots are taken.',
        'Maintaining conversation context between ManyChat and the n8n Agent.',
        'Handling formatting/newline issues in chat payloads and ensuring webhook reliability.',
      ],
    },
  ];

  return (
    <div className="font-sans leading-relaxed tracking-wide flex flex-col items-center">
      <div className="max-w-4xl w-full p-0 md:p-6 rounded-lg">
        <img
          src={AppointmentSetterAgentCover}
          alt="Promotional visual for the AI RAG & Appointment System showing an AI assistant scheduling an appointment via Messenger."
          className="w-full h-auto mb-6 rounded-lg"
        />

        <h1 style={styles.heading} className="text-3xl lg:text-5xl font-bold mb-4">
          {title}
        </h1>

        {contentSections.map((section) => (
          <div key={section.heading} className="mb-6">
            <h2 style={styles.heading} className="text-2xl font-semibold mb-3">
              {section.heading}
            </h2>

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
                alt={section.image.alt}
                className="w-full h-auto mt-2 rounded-lg"
              />
            )}
          </div>
        ))}

        {Array.isArray(links) && links.length > 0 && (
          <div className="flex flex-col sm:flex-row justify-center gap-4 my-8">
            {links.map((link) => (
              <a
                key={link.href || link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold py-2 px-4 rounded-lg shadow-lg transition-colors duration-300"
                style={{
                  backgroundColor: 'var(--accent-primary)',
                  color: 'var(--text-primary)',
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
  );
};

export default AIRAGAppointmentSystem;