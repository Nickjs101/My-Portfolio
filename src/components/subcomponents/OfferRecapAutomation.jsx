import React from 'react'
import { projectStyles as styles } from './ProjectStyles'
import CoverImage from '../../assets/Works/offerrecapcover.svg'

const OfferRecapAutomation = () => {
  const skills = [
    'n8n',
    'Mistral OCR API',
    'OpenAI',
    'Information Extraction',
    'Gmail API',
    'Google Sheets',
    'Document AI',
    'Batch Processing',
    'Webhooks'
  ]

  const contentSections = [
    {
      heading: 'Overview',
      paragraphs: [
        'Real-estate offers arrive as scanned PDF packets — often 10+ pages of legal forms where the numbers that matter (price, contingencies, close date) are buried in checkboxes and handwriting. Reading each one and re-typing the terms into a tracker takes real time, and mistakes are expensive.',
        'This n8n pipeline does the reading. The moment an offer lands in the inbox, it runs the document through OCR, has an AI agent extract the deal terms into structured data, logs everything to a deal-tracking sheet, and drafts a clean recap email — ready for the agent to review and forward.'
      ]
    },
    {
      heading: 'How It Works',
      list: [
        '1. Gmail trigger fires when an offer email with a PDF attachment arrives.',
        '2. The PDF is uploaded to Mistral AI and a signed URL is generated for processing.',
        '3. Mistral’s OCR API converts every page — including scans and forms — into clean text.',
        '4. The pages are split and looped through an AI agent with an information-extractor schema that pulls out structured fields: buyer, offer price, earnest money, contingencies, and key dates.',
        '5. The structured terms are appended as a row in a Google Sheets deal log.',
        '6. After a short wait for consistency, the row is read back and a recap email is drafted in Gmail — summarizing the offer in plain language.'
      ]
    },
    {
      heading: 'Design Decisions',
      list: [
        'Draft, not send: the recap is created as a Gmail draft, keeping a human in the loop before anything reaches a client.',
        'OCR over text extraction: offers are usually scanned, so a dedicated OCR model beats naive PDF text parsing.',
        'Schema-driven extraction: the information extractor validates fields instead of trusting free-form LLM output.',
        'Loop with pacing: documents are processed page-by-page with waits to respect API rate limits.'
      ]
    },
    {
      heading: 'Results',
      list: [
        'An offer that took 15–20 minutes to read and re-type is summarized in under a minute.',
        'Every offer lands in one structured sheet — searchable, sortable, and consistent.',
        'The recap draft means responding to offers faster without sacrificing accuracy.'
      ]
    },
    {
      heading: 'Note',
      paragraphs: [
        'Built as freelance work for a real-estate client — identifying details have been removed.'
      ]
    }
  ]

  return (
    <div className="font-sans leading-relaxed tracking-wide flex flex-col items-center">
      <div className="max-w-4xl w-full p-0 md:p-6 rounded-lg">
        <img
          src={CoverImage}
          alt="AI Offer Intake and Recap pipeline: an emailed offer PDF flows through OCR and AI extraction into a deal log and a drafted recap email"
          className="w-full h-auto mb-6 rounded-lg"
        />

        <h1 style={styles.heading} className="text-3xl lg:text-5xl font-bold mb-4">
          AI Offer Intake &amp; Recap
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

export default OfferRecapAutomation
