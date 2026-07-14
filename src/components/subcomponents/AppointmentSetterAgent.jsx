import React from 'react'
import { projectStyles as styles } from './ProjectStyles'
import CoverImage from '../../assets/Works/appointmentsettercover.svg'

const AppointmentSetterAgent = () => {
  const skills = [
    'n8n',
    'OpenAI GPT-4o-mini',
    'RAG',
    'Tool Calling',
    'Telegram Bot API',
    'ManyChat / Messenger',
    'Calendar Integration',
    'Session Memory',
    'Webhooks'
  ]

  const contentSections = [
    {
      heading: 'Overview',
      paragraphs: [
        'Most business chatbots can answer questions but can’t actually do anything. This one closes the loop: a customer-facing AI agent that answers questions from the business’s own knowledge base and books appointments right inside the chat — on Telegram and Facebook Messenger.',
        'A prospect can ask about services, get accurate grounded answers, say "book me in Friday afternoon", and walk away with a confirmed slot — no human involved and no double-bookings.'
      ]
    },
    {
      heading: 'What It Does',
      list: [
        'Answers customer questions using retrieval-augmented generation (RAG) over the business’s knowledge base, so responses are grounded instead of hallucinated.',
        'Books appointments conversationally: the agent checks real availability before offering slots.',
        'Runs on two channels from one brain: a Telegram bot and Facebook Messenger via ManyChat.',
        'Remembers each user’s conversation with per-user session memory, so context carries across messages.',
        'Validates and parses user inputs (dates, times, contact info) before touching the calendar.'
      ]
    },
    {
      heading: 'Architecture',
      list: [
        'Main agent workflow: GPT-4o-mini AI agent with memory and two callable tools, duplicated per channel with shared logic.',
        'Check Availability Tool (published sub-workflow): queries the calendar for open slots in the requested window.',
        'Set Appointment Tool (published sub-workflow): creates the booking and returns the confirmation to the agent.',
        'Channel adapters: Telegram trigger/sender nodes and ManyChat webhook endpoints with custom-field responses.',
        'Tools are separate published workflows, so they are reusable by other agents and testable in isolation.'
      ]
    },
    {
      heading: 'Design Decisions',
      list: [
        'Tools over prompts: availability and booking are deterministic sub-workflows the LLM calls, not things it guesses about.',
        'The agent never invents time slots — it can only offer what the availability tool returns.',
        'One agent definition, many channels: adding a new channel means wiring a new trigger, not rebuilding the bot.'
      ]
    },
    {
      heading: 'Results',
      list: [
        'Inquiries convert to booked appointments in a single conversation, 24/7.',
        'Zero double-bookings, because every offer is checked against the live calendar.',
        'The tool-based design became the template for later, larger agent systems.'
      ]
    }
  ]

  return (
    <div className="font-sans leading-relaxed tracking-wide flex flex-col items-center">
      <div className="max-w-4xl w-full p-0 md:p-6 rounded-lg">
        <img
          src={CoverImage}
          alt="AI Appointment Setter architecture: Telegram and Messenger channels feed a RAG agent with check-availability and set-appointment tools"
          className="w-full h-auto mb-6 rounded-lg"
        />

        <h1 style={styles.heading} className="text-3xl lg:text-5xl font-bold mb-4">
          AI Appointment-Setting Chatbot
        </h1>

        {contentSections.map((section) => (
          <div key={section.heading} className="mb-8">
            <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
              {section.heading}
            </h2>

            {Array.isArray(section.paragraphs) &&
              section.paragraphs.map((para) => (
                <p key={para} style={styles.text} className="mb-4">
                  {para}
                </p>
              ))}

            {Array.isArray(section.list) && (
              <ul className="list-disc pl-6 mb-4 space-y-2">
                {section.list.map((item) => (
                  <li key={item} style={styles.text}>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        <h2 style={styles.heading} className="text-2xl font-bold mb-4">
          Skills &amp; Technologies Used
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
  )
}

export default AppointmentSetterAgent
