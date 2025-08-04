import React from 'react'
import { projectStyles as styles } from './ProjectStyles'
import YouTubeShortsAutomationCover from '../../assets/Works/youtubeshortsautomationcover.png'
import YouTubeShortsAutomationWorkflow from '../../assets/Works/youtubeshortsautomationworkflow.png'

const YouTubeShortsAutomation = () => {
  const skills = ['RSS Feed', 'KLAP AI', 'YouTube API', 'n8n', 'Automation Workflow设计']

  return (
    <div className="font-sans leading-relaxed tracking-wide flex flex-col items-center">
      <div className="max-w-4xl w-full p-0 md:p-6 rounded-lg">
        <img
          src={YouTubeShortsAutomationCover}
          alt="Illustrative graphic representing YouTube Shorts Automation with elements showcasing the process of content creation and engagement."
          className="w-full h-auto mb-6 rounded-lg"
        />

        <h1 style={styles.heading} className="text-3xl lg:text-5xl font-bold mb-4">
          YouTube Shorts Automation
        </h1>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Overview
        </h2>
        <p style={styles.text} className="mb-4">
          The <strong>YouTube Shorts Automation</strong> project addresses the challenge faced by content creators, particularly podcasters, in efficiently editing and uploading video shorts. Traditionally, creators have relied on manual editing services, incurring both time and cost. This automation utilizes the Klap API to generate compelling short clips from longer podcasts or videos, streamlining the workflow dramatically.
        </p>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">Goals</h2>
        <p style={styles.text} className="mb-4">
          The primary goal of this project is to automate the video editing and uploading process, allowing content creators to focus more on their creative efforts rather than technical tasks. The automation ensures that updates from creators' accounts are promptly transformed into engaging shorts without manual intervention.
        </p>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Features / Workflow
        </h2>
        <ol className="list-decimal list-inside mb-4" style={styles.text}>
          <li className="mb-2">
            <strong>RSS Feed Monitoring</strong>
            <p>Monitors any updates from associated accounts or sites, triggering the content transformation process.</p>
          </li>
          <li className="mb-2">
            <strong>Video Conversion</strong>
            <p>Utilizes the Klap AI API to generate video shorts with customizable options for captions, subtitles, and cuts.</p>
          </li>
          <li>
            <strong>YouTube Integration</strong>
            <p>Automatically uploads the generated shorts to the creator's YouTube account using the YouTube API, ensuring a seamless experience.</p>
          </li>
        </ol>

        <img
          src={YouTubeShortsAutomationWorkflow}
          alt="Screenshot of the n8n workflow tool showing the process involved in the YouTube Shorts Generator."
          className="w-full h-auto mb-6 rounded-lg"
        />

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Architecture / Logic / Design
        </h2>
        <p style={styles.text} className="mb-4">
          The underlying architecture implements a robust workflow in n8n, structured into three main sections:
        </p>
        <ul className="list-disc list-inside mb-4" style={styles.text}>
          <li>
            <strong>Converting Videos to Shorts</strong>: Triggered by new content through an RSS feed.
          </li>
          <li>
            <strong>Exporting Short Videos</strong>: Manages the retrieval and export of generated shorts.
          </li>
          <li>
            <strong>Uploading to YouTube</strong>: Handles the HTTP requests needed for communication with the YouTube API.
          </li>
        </ul>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Results / Evaluation
        </h2>
        <p style={styles.text} className="mb-4">
          The automation successfully reduces the manual workload required for video shorts creation and maximizes efficiency. Content creators can now enjoy a frictionless method to engage their audience through quickly generated shorts, notably enhancing viewer interaction.
        </p>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Challenges &amp; Learnings
        </h2>
        <p style={styles.text} className="mb-4">
          During development, several challenges arose, including navigating API limitations and ensuring efficient data handling during video processing. However, these challenges resulted in valuable learnings regarding API integration and workflow optimization.
        </p>

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