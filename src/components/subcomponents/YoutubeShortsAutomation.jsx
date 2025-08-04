import React from 'react';
import { projectStyles as styles } from './ProjectStyles';

import YouTubeShortsAutomationCover from '../../assets/Works/youtubeshortsautomationcover.png';
import YouTubeShortsAutomationWorkflow from '../../assets/Works/youtubeshortsautomationworkflow.png';

const YouTubeShortsAutomation = () => {
  const skills = [
    'Klap API',
    'YouTube API',
    'n8n Automation Tool',
    'RSS Feed Integration',
    'Video Editing Automation',
  ];

  const links = [
    {
      label: 'Video Demo',
      href: 'https://example.com/demo-video-url',
    },
  ];

  return (
    <div className="font-sans leading-relaxed tracking-wide flex flex-col items-center">
      <div className="max-w-4xl w-full p-0 md:p-6 rounded-lg">
        <img
          src={YouTubeShortsAutomationCover}
          alt="Promotional graphic for YouTube Shorts Automation"
          className="w-full h-auto mb-6 rounded-lg"
        />

        <h1 style={styles.heading} className="text-3xl lg:text-5xl font-bold mb-4">
          YouTube Shorts Automation
        </h1>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Overview
        </h2>
        <p style={styles.text} className="mb-4">
          The <strong>YouTube Shorts Automation</strong> project addresses the challenge faced by
          content creators who require time-consuming video editing for podcasts or lengthy content
          before uploading to YouTube. By automating the process of generating Shorts from
          podcasts, this project simplifies and streamlines content creation.
        </p>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Goals
        </h2>
        <ul style={styles.text} className="list-disc list-inside mb-4">
          <li>Generates short clips from longer videos or podcasts.</li>
          <li>Utilizes the Klap API to edit and create Shorts according to user preferences.</li>
          <li>Automatically uploads shorts to YouTube without manual intervention.</li>
        </ul>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Features / Workflow
        </h2>
        <ol style={styles.text} className="list-decimal list-inside mb-4">
          <li>
            <strong>Video Monitoring</strong>: Uses an RSS feed to monitor video uploads to the
            YouTube channel.
          </li>
          <li>
            <strong>Shorts Generation</strong>: Employs the Klap AI API to convert longer videos into
            shorter formats, allowing for custom parameters like captions and subtitles.
          </li>
          <li>
            <strong>Automatic Upload</strong>: Once the shorts are created, they are automatically
            uploaded to the user&apos;s YouTube account.
          </li>
        </ol>

        <img
          src={YouTubeShortsAutomationWorkflow}
          alt="Automated workflow in the n8n automation tool titled Youtube Shorts Generator"
          className="w-full h-auto mb-6 rounded-lg"
        />

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Architecture / Logic / Design
        </h2>
        <ul style={styles.text} className="list-disc list-inside mb-4">
          <li>
            <strong>Convert Videos to Shorts</strong>:
            <ul className="list-disc list-inside ml-5">
              <li>The process begins with an RSS feed trigger.</li>
              <li>The video is sent for conversion, and the system checks the conversion status.</li>
            </ul>
          </li>
          <li>
            <strong>Export Short Videos</strong>:
            <ul className="list-disc list-inside ml-5">
              <li>Retrieves a list of the created shorts and processes their exports.</li>
            </ul>
          </li>
          <li>
            <strong>Upload Videos to YouTube</strong>:
            <ul className="list-disc list-inside ml-5">
              <li>
                An HTTP request is made to the YouTube API to finalize the upload of the newly
                created short videos.
              </li>
            </ul>
          </li>
        </ul>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Challenges &amp; Learnings
        </h2>
        <ul style={styles.text} className="list-disc list-inside mb-8">
          <li>Integration complexities between different APIs.</li>
          <li>Ensuring the reliability and speed of the automation process.</li>
          <li>Handling various video formats and ensuring quality during conversion.</li>
        </ul>

        <div className="flex flex-col sm:flex-row justify-center gap-4 my-8">
          {links.map(({ label, href }) => (
            <a
              key={label}
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