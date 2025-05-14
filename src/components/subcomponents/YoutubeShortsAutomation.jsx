import React from 'react';
import { projectStyles as styles } from './ProjectStyles';

import YouTubeShortsAutomationCover from '../../assets/Works/youtubeshortsautomationcover.png';
import YouTubeShortsAutomationWorkflow from '../../assets/Works/youtubeshortsautomationworkflow.png';

const YouTubeShortsAutomation = () => {
  const skills = ['Automation', 'n8n', 'KLAP AI', 'YouTube API', 'RSS Feed Management'];
  const links = [
    {
      label: 'View Video Demo',
      href: 'https://drive.google.com/file/d/1VUcpEdYc04WRkIY2vrkzVHf53kFy5v4B/view?usp=drivesdk',
    },
  ];

  return (
    <div className="font-sans leading-relaxed tracking-wide flex flex-col items-center">
      <div className="max-w-4xl w-full p-0 md:p-6 rounded-lg">

        {/* COVER IMAGE */}
        <img
          src={YouTubeShortsAutomationCover}
          alt="YouTube Shorts Automation promotional graphic"
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
          The <strong>YouTube Shorts Automation</strong> project addresses the pressing need for content
          creators to efficiently manage video editing and publishing. Many creators produce podcasts that
          require significant editing, often involving hiring dedicated editors. This automation streamlines
          the process by generating short clips from longer formats and automatically uploading them to YouTube,
          thus reducing the manual overhead.
        </p>

        {/* Goals Section */}
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Goals
        </h2>
        <ul style={styles.text} className="list-disc list-inside mb-4">
          <li>
            Simplifies the editing process by using AI tools to create engaging short videos.
          </li>
          <li>
            Eliminates the need for manual triggers by monitoring and responding to new uploads.
          </li>
          <li>
            Ensures timely and efficient uploading of shorts to YouTube.
          </li>
        </ul>

        {/* Features / Workflow Section */}
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Features / Workflow
        </h2>
        <ul style={styles.text} className="list-disc list-inside mb-4">
          <li>
            <strong>Automated Monitoring</strong>: Utilizing an RSS feed for seamless detection of new video uploads.
          </li>
          <li>
            <strong>AI-Powered Editing</strong>: Leveraging the KLAP API for intelligent video editing and clip generation based on user-defined settings (captions, subtitles, etc.).
          </li>
          <li>
            <strong>YouTube Integration</strong>: Employing the YouTube API to handle the final upload of video shorts, ensuring that the output is managed efficiently.
          </li>
        </ul>

        {/* Architecture / Logic / Design Section */}
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Architecture / Logic / Design
        </h2>
        <p style={styles.text} className="mb-4">
          The workflow is implemented using <strong>n8n</strong>, a powerful workflow automation tool. The structure consists of three main components:
        </p>
        <ol style={styles.text} className="list-decimal list-inside mb-4">
          <li className="mb-2">
            <strong>Converting Videos to Shorts</strong>:
            <ul className="list-disc list-inside ml-5">
              <li>Monitors for new video uploads through an RSS feed trigger.</li>
              <li>Sends requests to convert videos into shorts via the KLAP API.</li>
              <li>Checks conversion status to ensure completion.</li>
            </ul>
          </li>
          <li className="mb-2">
            <strong>Export Short Videos</strong>:
            <ul className="list-disc list-inside ml-5">
              <li>Retrieves a list of generated shorts for further processing.</li>
              <li>Manages the export operations, monitoring for completion.</li>
            </ul>
          </li>
          <li className="mb-2">
            <strong>Upload Videos to YouTube</strong>:
            <ul className="list-disc list-inside ml-5">
              <li>Uses HTTP requests to upload generated shorts via the YouTube API, ensuring that the videos are correctly published.</li>
            </ul>
          </li>
        </ol>

        {/* Architecture Image */}
        <img
          src={YouTubeShortsAutomationWorkflow}
          alt="Screenshot of the automation workflow in n8n showing video conversion and YouTube upload"
          className="w-full h-auto mb-6 rounded-lg"
        />

        {/* Results / Evaluation Section */}
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Results / Evaluation
        </h2>
        <p style={styles.text} className="mb-4">
          The automation provides a significant reduction in time and effort for content creators, enabling
          them to focus more on production rather than post-production tasks. Initial trials indicate a smooth
          integration with existing systems, enhancing productivity and content outreach.
        </p>

        {/* Challenges & Learnings Section */}
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Challenges &amp; Learnings
        </h2>
        <ul style={styles.text} className="list-disc list-inside mb-4">
          <li>
            <strong>API Limitations</strong>: Navigating API limits and ensuring stability during high-demand periods proved challenging.
          </li>
          <li>
            <strong>Optimization</strong>: Continuous adjustments to settings and configurations are necessary to tailor the output to varying content styles effectively.
          </li>
        </ul>

        {/* Call To Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 my-8">
          {links.map(({ label, href }) => (
            <a
              key={label}
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

        {/* Skills & Technologies */}
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
  );
};

export default YouTubeShortsAutomation;