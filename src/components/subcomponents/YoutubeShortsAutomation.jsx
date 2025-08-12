import React from 'react';
import { projectStyles as styles } from './ProjectStyles';
import CoverImage from '/tmp/portfolio/src/assets/Works/youtubeshortsautomationcover.png';
import WorkflowImage from '/tmp/portfolio/src/assets/Works/youtubeshortsautomationworkflow.png';

const YoutubeShortsAutomation = () => {
  const skills = [
    'RSS feed monitoring',
    'Klap AI (Klap API)',
    'YouTube Data API (OAuth 2.0)',
    'n8n (workflow automation)',
    'HTTP APIs / REST',
    'Polling & async job handling',
    'Captions & subtitles management',
    'Error handling & retries'
  ];

  const contentSections = [
    {
      heading: 'Overview',
      paragraphs: [
        "Many podcast creators rely on human editors to cut long episodes into shareable YouTube Shorts and then upload them manually. This automation pipeline eliminates the manual steps: it detects new uploads, uses Klap AI to generate optimized short clips (with captions/subtitles and cuts), and programmatically uploads the resulting shorts to the creator's YouTube account."
      ]
    },
    {
      heading: 'Goals',
      paragraphs: [
        'Automatically generate short clips from podcast episodes or long-form videos.',
        'Apply captions/subtitles and optimized cuts using AI.',
        'Upload completed shorts to YouTube without manual intervention.',
        'Minimize time-to-publish and reduce editing costs.'
      ]
    },
    {
      heading: 'Features / Workflow',
      paragraphs: [
        'Monitor source content using an RSS feed trigger for new video uploads or published episodes.',
        'Send the source video to Klap AI to request shorts generation with preferences (captions, subtitle styles, cut heuristics, length).',
        'Poll Klap API for conversion/export status and retrieve generated short assets.',
        'Upload finalized shorts to YouTube using the YouTube Data API (with proper metadata and thumbnails).',
        "End-to-end automation so creators don’t need to manually trigger editing or uploads."
      ]
    },
    {
      heading: 'Architecture, Logic & Design',
      paragraphs: [
        'Orchestration is implemented as an automation workflow (example shown in n8n) with discrete stages: RSS Feed Trigger, HTTP Request to Klap AI, IF + Wait nodes for polling, export retrieval nodes, and YouTube API upload nodes.',
        'Authentication & security: YouTube uses OAuth 2.0 with refresh token handling; Klap API uses API keys with secure storage.',
        'Robustness: retries with exponential backoff for rate limits, status checks, and configurable metadata mapping (title, description, hashtags, visibility).'
      ],
      image: { src: WorkflowImage, alt: 'Youtube Shorts Generator n8n workflow screenshot' }
    },
    {
      heading: 'Results & Evaluation',
      paragraphs: [
        'Reduced turnaround: shorts generated and uploaded automatically as soon as source content is published.',
        'Cost savings from fewer manual editing hours required.',
        'Scalability: pipeline can process multiple channels/sources by scaling worker nodes and respecting API quotas.',
        'Better reach: AI-optimized cuts and auto-generated captions improve discoverability and viewer engagement.'
      ]
    },
    {
      heading: 'Challenges & Learnings',
      paragraphs: [
        'Handling asynchronous conversion required reliable polling and idempotency to avoid duplicate uploads.',
        'Managing YouTube API quotas and resumable uploads required careful error handling and retry logic.',
        'Ensuring caption accuracy and stylistic preferences required exposing configuration options for Klap.',
        'Content policy and copyright checks should be part of the pipeline before publishing.',
        'Monitoring and observability (logs, alerts) are essential for production reliability.'
      ]
    }
  ];

  return (
    <div className="font-sans leading-relaxed tracking-wide flex flex-col items-center py-6">
      <div className="max-w-4xl w-full p-4 md:p-6 rounded-lg">
        <img
          src={CoverImage}
          alt="YouTube Shorts Automation cover"
          className="w-full h-auto mb-6 rounded-lg shadow-md"
        />

        <h1 style={styles.heading} className="text-3xl lg:text-5xl font-bold mb-6">
          Youtube Shorts Automation
        </h1>

        {contentSections.map((section) => (
          <section key={section.heading} className="mb-6">
            <h2 style={styles.heading} className="text-2xl font-semibold mb-3">
              {section.heading}
            </h2>

            {Array.isArray(section.paragraphs)
              ? section.paragraphs.map((para, idx) => (
                  <p key={idx} style={styles.text} className="mb-3 text-gray-800">
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
          </section>
        ))}

        <h2 style={styles.heading} className="text-2xl font-bold mb-4">
          Skills & Technologies Used
        </h2>
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
  );
};

export default YoutubeShortsAutomation;