import React from 'react'
import { projectStyles as styles } from './ProjectStyles'
import CoverImage from '../../assets/Works/youtubeshortsautomationcover.png'
import WorkflowImage from '../../assets/Works/youtubeshortsautomationworkflow.png'

const YoutubeShortsAutomation = () => {
  const title = 'Youtube Shorts Automation'

  const goals = [
    'Remove manual editing and upload overhead for podcast/video creators.',
    'Generate Shorts with captions, subtitles, optimized cuts, and metadata based on preferences.',
    'Provide a reliable, automated pipeline that requires minimal intervention.'
  ]

  const features = [
    'Continuous monitoring via RSS feeds to detect new podcast or video uploads.',
    'Automated submission of detected videos to KLAP AI for short-generation (captions, subtitles, cut selection, optimization).',
    'Status polling/IF+wait logic to handle asynchronous conversion and export processes.',
    'Retrieval of completed short files and metadata.',
    'Automated upload to the creator’s YouTube account using the YouTube API (including proper metadata and shorts tagging).',
    'Error handling, retries, and status checks built into the workflow to ensure reliability.'
  ]

  const architecturePoints = [
    'Orchestration: n8n handles workflow orchestration and state transitions (trigger → conversion → export → upload).',
    'Triggering: RSS feed nodes detect new content and start the pipeline automatically.',
    'Conversion: HTTP POST requests to KLAP AI start short generation with user-defined preferences (captions, subtitles, cuts).',
    'Polling: Repeated status checks (IF/Wait loops) ensure processing is complete before proceeding.',
    'Export: Once KLAP reports shorts ready, the workflow exports and fetches the final video assets.',
    'Upload: YouTube API calls perform authenticated uploads, set titles/descriptions, and mark videos as Shorts.',
    'Reliability: Built-in retry logic and status verification steps mitigate transient failures and rate limits.'
  ]

  const results = [
    'Fully automated end-to-end flow reduces manual editing and upload time for creators.',
    'Consistent short formatting and captioning across episodes using KLAP AI settings.',
    'Scales with the number of RSS sources and creators by duplicating or parameterizing the workflow.',
    'Observed improvements in turnaround time from publish → Shorts live (minutes to hours depending on processing and export latency).'
  ]

  const challenges = [
    'Handling asynchronous processing required robust wait-and-check logic to avoid race conditions.',
    'API rate limits and large media transfers necessitated retries, exponential backoff, and chunked handling for uploads.',
    'Ensuring accurate captions/subtitles required tuning KLAP settings and occasional post-processing validation.',
    'Authentication for multiple YouTube accounts required safe credential management and token refresh handling.',
    'Moving from polling to webhook-based callbacks (where supported) significantly reduced latency and resource usage.'
  ]

  const skills = [
    'RSS feeds',
    'KLAP AI (Klap API)',
    'YouTube API',
    'n8n (workflow orchestration)',
    'HTTP APIs',
    'OAuth / API authentication',
    'Retry and backoff strategies',
    'Media export & format handling'
  ]

  return (
    <div className="font-sans leading-relaxed tracking-wide flex flex-col items-center py-6">
      <div className="max-w-4xl w-full p-4 md:p-6 rounded-lg">
        <img
          src={CoverImage}
          alt="Cover: Youtube Shorts Automation graphic showing smartphone, icons for bots and automation, and YouTube Shorts logo"
          className="w-full h-auto mb-6 rounded-lg shadow-md"
        />

        <h1 style={styles.heading} className="text-3xl lg:text-5xl font-bold mb-4">
          {title}
        </h1>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-3">Overview</h2>
        <p style={styles.text} className="mb-4">
          An end-to-end automation that detects new long-form video/podcast uploads, generates optimized YouTube Shorts using the KLAP AI API, and uploads the resulting clips to the creator's YouTube account. The pipeline eliminates manual editing and upload steps by continuously monitoring content sources and orchestrating conversion, export, and upload workflows.
        </p>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-3">Goals</h2>
        <ul style={styles.text} className="list-disc list-inside mb-4">
          {goals.map((goal, idx) => (
            <li key={idx} className="mb-1">
              {goal}
            </li>
          ))}
        </ul>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-3">Features & Workflow</h2>
        <ul style={styles.text} className="list-disc list-inside mb-4">
          {features.map((feat, idx) => (
            <li key={idx} className="mb-1">
              {feat}
            </li>
          ))}
        </ul>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-3">Architecture, Logic & Design</h2>
        <p style={styles.text} className="mb-4">
          The automation leverages n8n for orchestration, using RSS triggers to start conversion workflows that call KLAP AI. Status polling, IF/wait loops, and export steps ensure videos are fully processed before upload. Authenticated YouTube API calls handle final uploads and metadata assignment, with retry/backoff logic to improve reliability.
        </p>

        <img
          src={WorkflowImage}
          alt="Screenshot of n8n workflow titled Youtube Shorts Generator showing convert → export → upload blocks"
          className="w-full h-auto mb-6 rounded-lg shadow-sm"
        />

        <ul style={styles.text} className="list-disc list-inside mb-6">
          {architecturePoints.map((point, idx) => (
            <li key={idx} className="mb-1">
              {point}
            </li>
          ))}
        </ul>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-3">Results & Evaluation</h2>
        <ul style={styles.text} className="list-disc list-inside mb-4">
          {results.map((res, idx) => (
            <li key={idx} className="mb-1">
              {res}
            </li>
          ))}
        </ul>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-3">Challenges & Learnings</h2>
        <ul style={styles.text} className="list-disc list-inside mb-6">
          {challenges.map((c, idx) => (
            <li key={idx} className="mb-1">
              {c}
            </li>
          ))}
        </ul>

        <h2 style={styles.heading} className="text-2xl font-bold mb-4">Skills & Technologies Used</h2>
        <div className="flex flex-wrap mb-6">
          {skills.map((skill, index) => (
            <span
              key={index}
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