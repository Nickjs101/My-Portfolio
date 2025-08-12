import React from 'react'
import { projectStyles as styles } from './ProjectStyles'
import CoverImage from '../../assets/Works/youtubeshortsautomationcover.png'
import WorkflowImage from '../../assets/Works/youtubeshortsautomationworkflow.png'

const YoutubeShortsAutomation = () => {
  const skills = [
    'RSS feed monitoring',
    'KLAP AI API',
    'YouTube API (OAuth2)',
    'Background workers / job queue',
    'Object storage (S3 or equivalent)',
    'FFmpeg (trimming/encoding)',
    'Retry/backoff & rate-limit handling',
    'Logging & monitoring',
    'Docker & Kubernetes'
  ]

  const links = [
    {
      label: 'Watch Demo',
      href:
        'https://drive.google.com/uc?id=16sFr9l9eBErIwSjewKBW0S--RXzquZEV&export=download'
    }
  ]

  return (
    <div className="font-sans leading-relaxed tracking-wide flex flex-col items-center px-4 py-6">
      <div className="max-w-4xl w-full md:p-6 rounded-lg">
        <img
          src={CoverImage}
          alt="YouTube Shorts Automation cover with smartphone, robot and automation graphics"
          className="w-full h-auto mb-6 rounded-lg shadow-md"
        />

        <h1 style={styles.heading} className="text-3xl lg:text-5xl font-bold mb-4">
          Youtube Shorts Automation
        </h1>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-3">
          Overview
        </h2>
        <p style={styles.text} className="mb-4 text-gray-700">
          Youtube Shorts Automation monitors new long-form video or podcast uploads and automatically
          generates short clips (shorts) using the KLAP AI API, then uploads them to the creator's
          YouTube channel. The system removes the need to manually edit and publish short-form
          variants, enabling creators to scale clip publishing with consistent style and captions.
        </p>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-3">
          Goals
        </h2>
        <ul style={styles.text} className="list-disc list-inside mb-4 text-gray-700">
          <li>Eliminate manual editing and upload overhead for creators.</li>
          <li>Generate optimized, captioned shorts automatically from long-form content.</li>
          <li>Maintain consistent styling, subtitle accuracy, and metadata for uploads.</li>
          <li>Operate end-to-end with minimal manual intervention while supporting review/override.</li>
        </ul>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-3">
          Features & Workflow
        </h2>
        <p style={styles.text} className="mb-3 text-gray-700">
          The pipeline automates end-to-end production of shorts:
        </p>
        <ul style={styles.text} className="list-disc list-inside mb-4 text-gray-700">
          <li>RSS monitoring: watch feeds or channels for new long-form uploads.</li>
          <li>Source retrieval: download the source video or ingest the media URL.</li>
          <li>
            KLAP AI processing: submit media and preferences (cuts, captions, subtitle language,
            clip length, caption style) to KLAP API to produce one or more shorts.
          </li>
          <li>Post-processing: add metadata, custom thumbnail, and apply brand overlays.</li>
          <li>YouTube upload: publish generated shorts via the YouTube API using OAuth credentials.</li>
          <li>Observability & retries: log jobs, retry transient failures, and surface review items.</li>
        </ul>

        <h3 style={styles.heading} className="text-xl font-semibold mb-2">
          Typical flow
        </h3>
        <ol style={styles.text} className="list-decimal list-inside mb-4 text-gray-700">
          <li>RSS detects a new video → enqueue job.</li>
          <li>Worker downloads or references source media → calls KLAP API with target rules.</li>
          <li>KLAP returns processed short(s) → store artifact in cloud storage.</li>
          <li>Uploader posts short(s) to YouTube with captions, title, and description → record outcome.</li>
        </ol>

        <img
          src={WorkflowImage}
          alt="n8n workflow showing RSS trigger, conversion, export, and YouTube upload"
          className="w-full h-auto mb-6 rounded-lg shadow-sm"
        />

        <h2 style={styles.heading} className="text-2xl font-semibold mb-3">
          Architecture & Design
        </h2>
        <p style={styles.text} className="mb-3 text-gray-700">
          Key components include:
        </p>
        <ul style={styles.text} className="list-disc list-inside mb-4 text-gray-700">
          <li>RSS Watcher (pull or webhook) to detect new uploads.</li>
          <li>Ingest service to fetch and validate source media.</li>
          <li>Processing workers that call KLAP AI and handle returned assets.</li>
          <li>Object storage for intermediate artifacts and thumbnails.</li>
          <li>Uploader service for OAuth-authenticated YouTube API uploads and caption attachments.</li>
          <li>Database for job state, metadata, and audit logs; monitoring & alerting for failures.</li>
        </ul>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-3">
          Results & Evaluation
        </h2>
        <p style={styles.text} className="mb-4 text-gray-700">
          Demo shows end-to-end automation (capture, KLAP processing, and YouTube upload). Primary
          outcome was reduced manual editing and upload overhead, enabling creators to publish more
          shorts consistently and quickly. Operational benefits included standardized captioning and
          automated metadata application.
        </p>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-3">
          Challenges & Learnings
        </h2>
        <ul style={styles.text} className="list-disc list-inside mb-6 text-gray-700">
          <li>Rate limits and quotas require batching, backoff, and quota monitoring.</li>
          <li>Ensure rights and permissions before auto-publishing third-party clips.</li>
          <li>Automatic clip selection may need human review; provide manual approval paths.</li>
          <li>Caption timing sometimes requires supplemental FFmpeg subtitle adjustments.</li>
          <li>Durable job state and robust retries needed for transient network/API errors.</li>
        </ul>

        <div className="flex justify-center gap-4 my-6">
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

        <h2 style={styles.heading} className="text-2xl font-bold mb-4">
          Skills & Technologies Used
        </h2>
        <div className="flex flex-wrap mb-8">
          {skills.map((skill) => (
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

export default YoutubeShortsAutomation