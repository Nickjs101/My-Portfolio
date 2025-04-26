import React from 'react'
import { projectStyles as styles } from './ProjectStyles'
import YouTubeShortsGeneratorCover from '../../assets/Works/youtubeshortsautomationcover.png'
import YouTubeShortsAutomationWorkflow from '../../assets/Works/youtubeshortsautomationworkflow.png'

const YouTubeShortsAutomation = () => {
  const skills = [
    'n8n Automation Tool',
    'Klap API',
    'YouTube API',
    'RSS Feed Processing',
    'Video Editing Software Integration',
  ]

  return (
    <div className="font-sans leading-relaxed tracking-wide flex flex-col items-center">
      <div className="max-w-4xl w-full p-0 md:p-6 rounded-lg">
        {/* COVER IMAGE */}
        <img
          src={YouTubeShortsGeneratorCover}
          alt="YouTube Shorts Generator"
          className="w-full h-auto mb-6 rounded-lg"
        />

        {/* PROJECT TITLE */}
        <h1 style={styles.heading} className="text-3xl lg:text-5xl font-bold mb-4">
          YouTube Shorts Automation
        </h1>

        {/* Overview Section */}
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Overview
        </h2>
        <p style={styles.text} className="mb-4">
          YouTube Shorts Automation is a streamlined solution tailored for content creators who produce
          podcasts but face the challenge of editing and uploading their content to YouTube. This
          project leverages powerful APIs to automate the entire process, from generating short clips
          to their automatic uploading on YouTube.
        </p>

        {/* Goals Section */}
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Goals
        </h2>
        <p style={styles.text} className="mb-4">
          The primary objective is to reduce the manual effort and time required for content creators by
          automating video editing and uploading processes. The system continuously monitors new uploads,
          creating engaging shorts optimized for viewers.
        </p>

        {/* Features / Workflow Section */}
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Features / Workflow
        </h2>
        <ol className="list-decimal list-inside mb-4" style={styles.text}>
          <li>
            <strong>Video Monitoring and Short Generation</strong>:
            <ul className="list-disc list-inside ml-4">
              <li>
                <strong>RSS Feed</strong> triggers when new content is uploaded.
              </li>
              <li>
                Utilizes <strong>Klap API</strong> to convert videos into shorts based on user-defined
                preferences such as captions, subtitles, and cuts.
              </li>
            </ul>
          </li>
          <li className="mt-2">
            <strong>Export Process</strong>:
            <ul className="list-disc list-inside ml-4">
              <li>
                After short clips are generated, the system manages the export status to ensure
                successful operations.
              </li>
            </ul>
          </li>
          <li className="mt-2">
            <strong>Automatic Upload to YouTube</strong>:
            <ul className="list-disc list-inside ml-4">
              <li>
                Once shorts are ready, they are automatically uploaded to the user’s YouTube account
                through the <strong>YouTube API</strong>.
              </li>
            </ul>
          </li>
        </ol>

        {/* Architecture / Logic / Design Section */}
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Architecture / Logic / Design
        </h2>
        <img
          src={YouTubeShortsAutomationWorkflow}
          alt="Youtube Shorts Generator - n8n Workflow Editor"
          className="w-full h-auto mb-2 rounded-lg"
        />
        <p style={styles.text} className="mb-4 italic">
          The n8n workflow editor illustrates the steps in the YouTube Shorts generation process.
        </p>
        <p style={styles.text} className="mb-4">
          The architecture is built around the n8n automation tool, featuring a robust workflow that
          includes:
        </p>
        <ul className="list-disc list-inside mb-4" style={styles.text}>
          <li>RSS Feed Trigger: Monitors accounts for updates.</li>
          <li>Conversion Nodes: Interfaces with Klap API for video processing.</li>
          <li>Export Nodes: Ensure clips are exported correctly.</li>
          <li>API Communication: Manages uploads to YouTube seamlessly.</li>
        </ul>

        {/* Results / Evaluation Section */}
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Results / Evaluation
        </h2>
        <p style={styles.text} className="mb-4">
          This automation significantly reduces the workload for content creators, allowing them to
          focus on content production while enabling efficient and timely distribution of their
          shorts on YouTube.
        </p>

        {/* Challenges & Learnings Section */}
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Challenges &amp; Learnings
        </h2>
        <p style={styles.text} className="mb-4">
          One of the main challenges was ensuring the smooth integration of multiple APIs and handling
          various video formats. Through extensive testing, usability was enhanced, and creators were
          provided with flexibility in customization options for their shorts.
        </p>

        {/* Skills & Technologies Used Section */}
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