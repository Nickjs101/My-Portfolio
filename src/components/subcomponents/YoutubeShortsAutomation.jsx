import React from 'react'
import { projectStyles as styles } from './ProjectStyles'
import CoverImage from '../../assets/Works/youtubeshortsautomationcover.png'
import WorkflowImage from '../../assets/Works/youtubeshortsautomationworkflow.png'

const YoutubeShortsAutomation = () => {
  const skills = [
    'n8n',
    'RSS Feed',
    'Klap AI API',
    'YouTube API',
    'HTTP/REST',
    'JSON',
    'Conditional Logic',
    'Asynchronous Polling',
    'Retry/Backoff',
    'Automation Workflows'
  ]

  const links = []

  const contentSections = [
    {
      heading: 'Overview',
      paragraphs: [
        'Many creators publish long-form podcasts or videos, then pay editors to clip highlights and manually upload them as YouTube Shorts. This project automates that end-to-end: it detects new uploads via RSS, generates edited shorts with Klap AI, and publishes them to YouTube—without manual triggers.'
      ]
    },
    {
      heading: 'Goals',
      list: [
        'Automate short-form content creation from long-form sources.',
        'Remove manual steps (editing, rendering, uploading).',
        'Maintain consistent, on-brand shorts with captions/subtitles.',
        'Ensure reliability with status checks, retries, and idempotent operations.'
      ]
    },
    {
      heading: 'Features / Workflow',
      list: [
        'Automatic detection: Monitors an RSS feed for new videos/podcast episodes.',
        'AI-driven editing: Uses Klap AI to cut, caption, and format shorts based on preferences.',
        'Asynchronous orchestration: Polls job status and waits until conversion/export completes.',
        'Bulk export: Retrieves generated shorts and prepares assets for upload.',
        'Direct publishing: Uploads finalized shorts to YouTube via API with metadata.',
        'Fully hands-off: No manual triggers; reacts to new content as soon as it’s published.'
      ]
    },
    {
      heading: 'Architecture / Logic',
      paragraphs: [
        'An n8n workflow orchestrates ingestion, conversion with Klap AI, exporting shorts, and uploading to YouTube. It uses conditional branches, waits, and retries to ensure robustness.'
      ],
      image: { src: WorkflowImage, alt: 'n8n workflow titled "Youtube Shorts Generator" showing convert, export, and upload phases' },
      groups: [
        {
          title: 'Ingestion (RSS Trigger)',
          items: [
            'Watches a feed for newly published videos or podcast episodes.',
            'Emits metadata (title, description, media URL) into the pipeline.'
          ]
        },
        {
          title: 'Convert with Klap AI',
          items: [
            'Sends a POST to Klap API to create shorts with preferred styles (captions, subtitles, cuts).',
            'Polls conversion status with conditional checks and wait loops until complete.'
          ]
        },
        {
          title: 'Export Shorts',
          items: [
            'Fetches the list of generated shorts.',
            'Initiates export; polls export status with retry/backoff until assets are ready.'
          ]
        },
        {
          title: 'Upload to YouTube',
          items: [
            'Posts the short-form video(s) to YouTube via API.',
            'Applies titles/descriptions/hashtags as configured.',
            'Handles API responses, errors, and rate limits with conditional branches.'
          ]
        }
      ]
    },
    {
      heading: 'Results / Evaluation',
      list: [
        'Zero-click pipeline from long-form upload to published Shorts.',
        'Consistent formatting (captions/subtitles) driven by Klap preferences.',
        'Faster turnaround and increased short-form output without additional headcount.'
      ]
    },
    {
      heading: 'Challenges & Learnings',
      list: [
        'Managing asynchronous jobs: robust polling and waits are essential to avoid premature uploads.',
        'Handling variability in source content: presets for captions, aspect ratio, and duration keep results consistent.',
        'API reliability and quotas: defensive retries and branching improve stability over time.'
      ]
    }
  ]

  return (
    <div className="font-sans leading-relaxed tracking-wide flex flex-col items-center">
      <div className="max-w-4xl w-full p-0 md:p-6 rounded-lg">
        <img
          src={CoverImage}
          alt="YouTube Shorts Automation cover with smartphone UI, AI icons, Shorts logo, and engagement stats"
          className="w-full h-auto mb-6 rounded-lg"
        />

        <h1 style={styles.heading} className="text-3xl lg:text-5xl font-bold mb-4">
          Youtube Shorts Automation
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

            {section.image?.src && (
              <img
                src={section.image.src}
                alt={section.image.alt || 'Section illustration'}
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

export default YoutubeShortsAutomation