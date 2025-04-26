import React from 'react'
import { projectStyles as styles } from './ProjectStyles'

import YTShortsCover from '/tmp/portfolio/src/assets/Works/youtubeshortsautomationcover.png'
import YTShortsWorkflow from '/tmp/portfolio/src/assets/Works/youtubeshortsautomation.png'

const YouTubeShortsAutomation = () => {
  const skills = ['RSS Feed', 'Klap AI', 'YouTube API', 'n8n Automation']

  const links = []

  return (
    <div className="font-sans leading-relaxed tracking-wide flex flex-col items-center bg-white text-gray-900">
      <div className="max-w-4xl w-full p-0 md:p-6 rounded-lg">
        <img
          src={YTShortsCover}
          alt="The YouTube Shorts Generator interface showcasing the tool associated with generating YouTube Shorts content."
          className="w-full h-auto mb-6 rounded-lg"
        />

        <h1 style={styles.heading} className="text-3xl lg:text-5xl font-bold mb-4">
          YouTube Shorts Automation
        </h1>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Overview
        </h2>
        <p style={styles.text} className="mb-4">
          The YouTube Shorts Automation project addresses a common challenge faced by content creators, particularly podcasters,
          who often need to edit lengthy videos for shorter platforms like YouTube Shorts. By leveraging the Klap API and integrating
          RSS feeds with YouTube functionality, this automation streamlines the entire process from generating short clips to uploading
          them on YouTube.
        </p>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Goals
        </h2>
        <p style={styles.text} className="mb-4">
          The primary objective of this project is to automate the generation of video shorts from existing video content. This eliminates
          the need for manual editing and uploading, allowing creators to focus more on content production and engagement with their audience.
        </p>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Features / Workflow
        </h2>
        <ul className="list-disc list-inside mb-4" style={styles.text}>
          <li className="mb-2">
            <strong>Video Monitoring:</strong> Utilizes an RSS feed to monitor any updates from creators' accounts or specified video sources.
          </li>
          <li className="mb-2">
            <strong>Short Clip Generation:</strong> Employs the Klap AI to automatically cut, edit, and generate video shorts based on user
            preferences (e.g., captions, subtitles, and optimization).
          </li>
          <li className="mb-2">
            <strong>Automated Uploading:</strong> Integrates the YouTube API to handle uploads of the generated shorts directly to the user’s YouTube
            account seamlessly without manual intervention.
          </li>
        </ul>

        <img
          src={YTShortsWorkflow}
          alt="Workflow diagram showcasing the automated process for generating and uploading YouTube Shorts."
          className="w-full h-auto mb-6 rounded-lg"
        />

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Architecture / Logic / Design
        </h2>
        <p style={styles.text} className="mb-4">
          The project&apos;s architecture is built upon an automated workflow using the <strong>n8n</strong> platform. Key workflow components include:
        </p>
        <ol className="list-decimal list-inside mb-4" style={styles.text}>
          <li>
            <strong>Converting Videos to Shorts:</strong> Starts with an RSS feed trigger, processes video conversion through an API,
            checks the status of the conversion, and includes conditional pauses as necessary.
          </li>
          <li>
            <strong>Export Short Videos:</strong> Retrieves the list of generated shorts, exports them, and manages their statuses with conditional checks.
          </li>
          <li>
            <strong>Upload Videos to YouTube:</strong> Finalizes the process by sending an HTTP request to the YouTube API for uploading the videos.
          </li>
        </ol>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Challenges &amp; Learnings
        </h2>
        <p style={styles.text} className="mb-4">
          Throughout the development of this project, several challenges were encountered including API integration hurdles and ensuring
          smooth communication between services. These challenges provided invaluable learning experiences in system automation and API handling.
        </p>

        {links.length > 0 && (
          <div className="flex flex-col sm:flex-row justify-center gap-4 my-8">
            {links.map(({ label, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold py-2 px-4 rounded-lg shadow-lg transition-colors duration-300 text-center"
                style={{
                  backgroundColor: 'var(--accent-primary)',
                  color: 'var(--text-primary)',
                }}
              >
                {label}
              </a>
            ))}
          </div>
        )}

        <h2 style={styles.heading} className="text-2xl font-bold mb-4">
          Skills &amp; Technologies Used
        </h2>
        <div className="flex flex-wrap mb-4">
          {skills.map((skill, index) => (
            <span
              key={index}
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

export default YouTubeShortsAutomation