import React from 'react'
import { projectStyles as styles } from './ProjectStyles'
import YoutubeShortsAutomationCover from '../../assets/Works/youtubeshortsautomationcover.png'
import YoutubeShortsAutomationWorkflow from '../../assets/Works/youtubeshortsautomationworkflow.png'

const YoutubeShortsAutomation = () => {
  const skills = [
    'n8n',
    'KLAP AI API',
    'YouTube API',
    'RSS Feed Integration',
    'Automation Workflows',
  ]

  const links = [
    {
      label: 'Explore the YouTube Shorts Automation project on GitHub',
      href: 'https://github.com/example/youtube-shorts-automation',
    },
  ]

  return (
    <div className="font-sans leading-relaxed tracking-wide flex flex-col items-center">
      <div className="max-w-4xl w-full p-0 md:p-6 rounded-lg">
        <img
          src={YoutubeShortsAutomationCover}
          alt="YouTube Shorts Generator"
          className="w-full h-auto mb-6 rounded-lg"
        />

        <h1 style={styles.heading} className="text-3xl lg:text-5xl font-bold mb-4">
          Youtube Shorts Automation
        </h1>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Overview
        </h2>
        <p style={styles.text} className="mb-4">
          The <strong>Youtube Shorts Automation</strong> project addresses the common challenge faced by content creators, particularly podcasters,
          who often require editing to create engaging short videos for platforms like YouTube. By automating this process,
          creators can enhance their reach without investing extensive time in editing and uploading.
        </p>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Goals
        </h2>
        <ul style={styles.text} className="list-disc list-inside mb-4">
          <li>To streamline the video editing process for podcasters by generating short clips automatically.</li>
          <li>To eliminate the manual effort of uploading these clips to YouTube.</li>
          <li>To leverage AI for optimizing video shorts according to user preferences.</li>
        </ul>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Features / Workflow
        </h2>
        <p style={styles.text} className="mb-2">
          The automation process is efficiently orchestrated through a workflow built in <strong>n8n</strong>, utilizing three main sections:
        </p>
        <ol style={styles.text} className="list-decimal list-inside mb-4 space-y-2">
          <li>
            <strong>Converting Videos to Shorts</strong>:
            <ul className="list-disc list-inside ml-5 mt-1">
              <li>Triggered by an <strong>RSS Feed</strong>.</li>
              <li>Utilizes the <strong>KLAP API</strong> to convert videos into shorts.</li>
              <li>Monitors conversion status with conditional checks.</li>
            </ul>
          </li>
          <li>
            <strong>Export Short Videos</strong>:
            <ul className="list-disc list-inside ml-5 mt-1">
              <li>Retrieves the list of generated shorts and handles the export process.</li>
              <li>Continuously checks the export status before moving to the next step.</li>
            </ul>
          </li>
          <li>
            <strong>Upload Videos to YouTube</strong>:
            <ul className="list-disc list-inside ml-5 mt-1">
              <li>Integrates with the <strong>YouTube API</strong> to automate the upload of shorts.</li>
              <li>Ensures efficient handling of video uploads with confirmation checks.</li>
            </ul>
          </li>
        </ol>

        <img
          src={YoutubeShortsAutomationWorkflow}
          alt="Youtube Shorts Generator Workflow (n8n)"
          className="w-full h-auto mb-6 rounded-lg"
        />

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Challenges &amp; Learnings
        </h2>
        <ul style={styles.text} className="list-disc list-inside mb-4">
          <li>
            <strong>Complexity of Integration</strong>: Successfully linking the RSS feed, KLAP API, and YouTube API presented integration challenges, particularly in handling API responses and ensuring smooth data flow.
          </li>
          <li>
            <strong>Monitoring and Automation</strong>: Developing a robust mechanism to monitor uploads efficiently was crucial. It required optimizing the polling intervals to avoid unnecessary load while ensuring timely processing.
          </li>
        </ul>

        {links.length > 0 && (
          <div className="flex flex-col sm:flex-row justify-center gap-4 my-8">
            {links.map(({ label, href }, linkIndex) => (
              <a
                key={linkIndex}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold py-2 px-4 rounded-lg shadow-lg transition-colors duration-300"
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
          {skills.map((skill, skillIndex) => (
            <span
              key={skillIndex}
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