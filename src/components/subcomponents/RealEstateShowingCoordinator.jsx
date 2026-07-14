import React from 'react'
import { projectStyles as styles } from './ProjectStyles'
import CoverImage from '../../assets/Works/realestatecoordinatorcover.svg'
import CanvasImage from '../../assets/Works/realestatecoordinatorcanvas.png'

const DiagramNode = ({ title, subtitle, accent }) => (
  <div
    className="rounded-lg px-3 py-2 text-center border"
    style={{
      backgroundColor: 'var(--bg-tertiary)',
      borderColor: accent ? 'var(--accent-primary)' : 'var(--card-border)',
      borderWidth: accent ? '2px' : '1px',
    }}
  >
    <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{title}</p>
    {subtitle && (
      <p className="text-xs mt-0.5" style={{ color: 'var(--text-secondary)' }}>{subtitle}</p>
    )}
  </div>
)

const ArchitectureDiagram = () => (
  <div
    className="rounded-xl border p-4 sm:p-6 my-6"
    style={{ backgroundColor: 'var(--bg-primary)', borderColor: 'var(--card-border)' }}
  >
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
      {/* Inputs */}
      <div className="flex flex-col gap-3">
        <DiagramNode title="Realtor texts request" subtitle="buyer + addresses via SMS" />
        <DiagramNode title="Listing agent replies" subtitle="inbound SMS webhook" />
      </div>

      {/* Agents */}
      <div className="flex flex-col gap-3">
        <DiagramNode accent title="AI Coordinator Agent" subtitle="GPT-4.1 · validates, plans, orchestrates tools" />
        <DiagramNode accent title="Negotiation Sub-Agent" subtitle="per-thread SMS talks with listing agents" />
        <div className="grid grid-cols-2 gap-2">
          <DiagramNode title="Route optimizer" subtitle="Google Maps" />
          <DiagramNode title="Listing scraper" subtitle="agent contacts" />
          <DiagramNode title="Status tracker" subtitle="Sheets MCP" />
          <DiagramNode title="Follow-up timer" subtitle="45-min cadence" />
        </div>
      </div>

      {/* Outputs */}
      <div className="flex flex-col gap-3">
        <DiagramNode title="Approval summary" subtitle="one text to approve the plan" />
        <DiagramNode title="Confirmations" subtitle="buyer + agents notified" />
        <DiagramNode title="Calendar + email recap" subtitle="events booked, details emailed" />
      </div>
    </div>
    <p className="text-xs mt-4 text-center" style={{ color: 'var(--text-secondary)' }}>
      16 coordinated n8n workflows: two AI agents, MCP tool servers, and messaging/scheduling utilities
    </p>
  </div>
)

const RealEstateShowingCoordinator = () => {
  const skills = [
    'n8n',
    'OpenAI GPT-4.1',
    'Multi-Agent AI',
    'MCP Tools',
    'OpenPhone SMS API',
    'Google Maps API',
    'Web Scraping',
    'Google Sheets',
    'Calendar API',
    'Prompt Engineering',
    'Webhooks',
    'Conversation Memory'
  ]

  const contentSections = [
    {
      heading: 'Overview',
      paragraphs: [
        'A busy residential realtor in California was losing hours every week coordinating buyer showings. Each tour meant looking up listing agents for every property, texting them one by one, negotiating times, avoiding overlaps, keeping the buyer informed, and booking everything on calendars.',
        'I built a multi-agent AI system on n8n that does all of it over SMS. The realtor texts one message — buyer, date, and property addresses — to a dedicated number. The system plans the optimal route, contacts every listing agent, negotiates showing times, and comes back with a single summary to approve. After a "yes", it confirms everyone, books the calendar, and emails a clean recap.'
      ]
    },
    {
      heading: 'What It Does',
      list: [
        'Kicks off from one SMS: buyer name, date, starting point, and up to several property addresses.',
        'Validates the request and texts back asking only for missing fields.',
        'Optimizes the showing route by drive-time proximity using the Google Maps API.',
        'Scrapes each listing page for the listing agent’s name and cell number automatically.',
        'Texts each listing agent, then hands the thread to a dedicated negotiation sub-agent that understands confirmations, counter-offers, declines, and questions.',
        'Tracks every property through a status pipeline: Requested → Tentative → Confirmed / Declined.',
        'Sends the realtor one summary text for approval before anything is finalized.',
        'On approval: confirms buyer and agents, creates calendar events, and emails a full recap with prices and contacts.'
      ]
    },
    {
      heading: 'How a Tour Gets Booked',
      list: [
        '1. Realtor texts: "Buyer Sarah, Saturday, 3 addresses, starting from downtown, 10am start."',
        '2. The coordinator agent validates inputs and computes the most efficient property order with drive times.',
        '3. It scrapes listing data and messages every listing agent with a proposed time window.',
        '4. Each reply is routed to the negotiation sub-agent, which classifies intent (accept / alternate time / decline / question) and responds like a human assistant.',
        '5. Time conflicts are checked against every other stop on the route before anything is held.',
        '6. Once every property has a tentative slot, the realtor receives one summary text: "Here’s the plan — confirm?"',
        '7. On approval, the system texts final confirmations, books calendar events with travel buffers, and emails the property details.',
        '8. If an agent goes quiet, timed follow-ups nudge them at set intervals before the slot is released.'
      ]
    },
    {
      heading: 'Architecture',
      paragraphs: [
        'The system is composed of 16 coordinated n8n workflows around two AI agents. The coordinator agent owns the end-to-end plan; a separate negotiation sub-agent runs inside each listing agent’s SMS thread with shared conversation memory, so multi-day threads stay coherent even across agents.'
      ],
      diagram: true,
      groups: [
        {
          title: 'AI Coordinator Agent',
          items: [
            'GPT-4.1 with a fallback model, chat memory, and 10+ tools wired in.',
            'Owns validation, route planning, scraping, messaging, status updates, calendars, and email.',
            'Never auto-confirms: holds all appointments as tentative until the full route is clean and approved.'
          ]
        },
        {
          title: 'Negotiation Sub-Agent',
          items: [
            'Operates per listing-agent SMS thread with strict context-locking to the right property.',
            'Classifies every inbound message: TENTATIVE, ALT_TIME, DECLINE, or QUESTIONS.',
            'Escalates out-of-window proposals to the realtor instead of guessing.'
          ]
        },
        {
          title: 'Tool & Utility Workflows',
          items: [
            'MCP tool servers for Google Sheets (status database) and calendar booking.',
            'Route optimizer and re-router for when the realtor wants a different property order.',
            'Batch-completion checker, follow-up scheduler, and targeted messaging tools for buyer, owner, and group threads.'
          ]
        }
      ]
    },
    {
      heading: 'Guardrails & Reliability',
      list: [
        'Hard confirmation gates: context lock, same-day check, time-window check, and cross-property conflict detection must all pass before a time is held.',
        'Hold-first, confirm-last: no listing agent gets a final confirmation until every stop is tentatively set.',
        'Human approval gates before contacting agents and before final confirmation.',
        'Timed follow-ups (45-minute cadence) with a final check before marking an agent unreachable.',
        'Fallback LLM and error branches so a model hiccup never drops an SMS thread.',
        'Shared conversation memory lets either agent pick up any thread without losing context.'
      ]
    },
    {
      heading: 'Results',
      list: [
        'Coordination that used to take an afternoon of phone tag now runs from a single text message.',
        'The realtor only touches the process twice: approving the plan and approving the confirmations.',
        'Every conversation, status change, and appointment is logged in a structured database for full visibility.',
        'The agent-tool pattern is reusable: the same skeleton now powers other client automations.'
      ]
    },
    {
      heading: 'Note',
      paragraphs: [
        'Built as freelance work for a private client — names, numbers, and identifying details have been changed or removed.'
      ]
    }
  ]

  return (
    <div className="font-sans leading-relaxed tracking-wide flex flex-col items-center">
      <div className="max-w-4xl w-full p-0 md:p-6 rounded-lg">
        <img
          src={CoverImage}
          alt="AI Showing Coordinator architecture cover showing SMS input flowing through an AI agent into confirmations"
          className="w-full h-auto mb-6 rounded-lg"
        />

        <h1 style={styles.heading} className="text-3xl lg:text-5xl font-bold mb-4">
          AI Real Estate Showing Coordinator
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

            {section.diagram && (
              <>
                <ArchitectureDiagram />
                <figure className="my-6">
                  <img
                    src={CanvasImage}
                    alt="The actual n8n canvas of the main coordination workflow: two AI agent clusters surrounded by extensive documentation notes"
                    className="w-full h-auto rounded-lg border"
                    style={{ borderColor: 'var(--card-border)' }}
                  />
                  <figcaption className="text-xs mt-2 text-center" style={{ color: 'var(--text-secondary)' }}>
                    The real n8n canvas of the main workflow — two agent clusters and the documentation that ships with them (client details anonymized).
                  </figcaption>
                </figure>
              </>
            )}

            {Array.isArray(section.list) && (
              <ul className="list-disc pl-6 mb-4 space-y-2">
                {section.list.map((item) => (
                  <li key={item} style={styles.text}>
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {Array.isArray(section.groups) &&
              section.groups.map((group) => (
                <div key={group.title} className="mb-4">
                  <h3 style={styles.heading} className="text-xl font-semibold mb-2">
                    {group.title}
                  </h3>
                  <ul className="list-disc pl-6 space-y-2">
                    {group.items.map((item) => (
                      <li key={`${group.title}-${item}`} style={styles.text}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        ))}

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
  )
}

export default RealEstateShowingCoordinator
