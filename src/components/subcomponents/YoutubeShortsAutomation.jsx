import React from 'react';
import { projectStyles as styles } from './ProjectStyles';
import YouTubeShortsAutomationCover from '../../assets/Works/youtubeshortsautomationcover.png';
import YouTubeShortsAutomationWorkflow from '../../assets/Works/youtubeshortsautomation.png';

const YouTubeShortsAutomation = () => {
  const skills = [
    'Klap AI',
    'YouTube API',
    'RSS Feed',
    'n8n',
    'Automation Workflows',
  ];

  const links = [];

  return (
    <div className="font-sans leading-relaxed tracking-wide flex flex-col items-center">
      <div className="max-w-4xl w-full p-0 md:p-6 rounded-lg">
        {/* Cover Image */}
        <img
          src={YouTubeShortsAutomationCover}
          alt="YouTube Shorts Generator"
          className="w-full h-auto mb-6 rounded-lg"
        />

        {/* Project Title */}
        <h1 style={styles.heading} className="text-3xl lg:text-5xl font-bold mb-4">
          YouTube Shorts Automation
        </h1>

        {/* Overview Section */}
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Overview
        </h2>
        <p style={styles.text} className="mb-6">
          The YouTube Shorts Automation project addresses the challenge many content creators, especially podcasters, face when it comes to generating and uploading engaging content for social media platforms. By automating the process of creating YouTube Shorts from existing video content, this solution helps streamline the workflow, saving time and requiring less manual input.
        </p>

        {/* Goals Section */}
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Goals
        </h2>
        <p style={styles.text} className="mb-6">
          The main goal of this project is to enable content creators to automatically generate short clips from their podcasts or other long-form videos using the Klap AI API. This solution not only cuts the workload of video editing by automating it but also manages the uploading process to YouTube seamlessly.
        </p>

        {/* Features / Workflow Section */}
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Features / Workflow
        </h2>
        <ol style={styles.text} className="list-decimal list-inside mb-6 space-y-2">
          <li>
            <strong>RSS Feed Monitoring</strong>: The system continuously monitors RSS feeds for any updates from specified content sources.
          </li>
          <li>
            <strong>Video Editing with Klap AI</strong>: Utilizes the Klap AI API to automatically edit and generate short clips based on user-defined preferences, such as captions, subtitles, and cuts.
          </li>
          <li>
            <strong>YouTube Integration</strong>: Employs the YouTube API to upload the generated shorts directly to the creator&apos;s YouTube account without manual intervention.
          </li>
        </ol>

        {/* Features Image */}
        <img
          src={YouTubeShortsAutomationWorkflow}
          alt="Youtube Shorts Generator - n8n Workflow"
          className="w-full h-auto mb-6 rounded-lg"
        />

        {/* Architecture / Logic / Design Section */}
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Architecture / Logic / Design
        </h2>
        <ul style={styles.text} className="list-disc list-inside mb-6 space-y-2">
          <li><strong>RSS Feed Trigger</strong>: Automatically detects new content uploads.</li>
          <li><strong>Video Conversion Process</strong>: The workflow includes steps for checking the status of the conversion and exporting the final short videos.</li>
          <li><strong>Uploading Mechanism</strong>: An HTTP request process for uploading videos to YouTube, ensuring that videos are ready before the upload takes place.</li>
        </ul>

        {/* Challenges & Learnings Section */}
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Challenges & Learnings
        </h2>
        <p style={styles.text} className="mb-6">
          Implementing this automation provided valuable insights, such as the challenges faced with API integrations and the need for thorough testing to handle different video formats effectively. Additionally, understanding how to optimize processing time for video edits was crucial in improving overall efficiency.
        </p>

        {/* Skills & Technologies Used Section */}
        <h2 style={styles.heading} className="text-2xl font-bold mb-4">
          Skills & Technologies Used
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
  );
};

export default YouTubeShortsAutomation;