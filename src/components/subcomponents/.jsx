import React from 'react';
import { projectStyles as styles } from './ProjectStyles';

import YouTubeShortsAutomationCover from '../../assets/Works/youtubeshortsautomationcover.png';
import YouTubeShortsGeneratorWorkflow from '../../assets/Works/youtubeshortsautomationworkflow.png';

const YouTubeShortsAutomation = () => {
  const skills = [
    'Klap API',
    'YouTube API',
    'RSS Feeds',
    'n8n Workflow Automation',
    'Video Editing Automation',
  ];

  const links = [
    {
      label: 'Video Demo',
      href: 'https://drive.google.com/file/d/1VUcpEdYc04WRkIY2vrkzVHf53kFy5v4B/view?usp=drivesdk',
    },
  ];

  return (
    <div className="font-sans leading-relaxed tracking-wide flex flex-col items-center">
      <div className="max-w-4xl w-full p-0 md:p-6 rounded-lg">
        <img
          src={YouTubeShortsAutomationCover}
          alt="YouTube Shorts Automation promotional graphic featuring a thumbs-up and automation icons"
          className="w-full h-auto mb-6 rounded-lg"
        />

        <h1 style={styles.heading} className="text-3xl lg:text-5xl font-bold mb-4">
          YouTube Shorts Automation
        </h1>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Overview
        </h2>
        <p style={styles.text} className="mb-4">
          YouTube Shorts Automation aims to streamline the process for content creators by automatically
          generating and uploading short video clips from longer podcasts or videos. This eliminates the
          need for manual editing and uploading, saving creators time and resources.
        </p>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Goals
        </h2>
        <p style={styles.text} className="mb-4">
          The primary goal of this project is to leverage automated tools to facilitate the generation of
          engaging video content for YouTube, thereby enhancing the visibility of content creators and
          making their workflow more efficient.
        </p>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Features / Workflow
        </h2>
        <p style={styles.text} className="mb-4">
          The automation features a robust workflow that encompasses the following steps:
        </p>
        <ol style={styles.text} className="list-decimal list-inside mb-4 space-y-2">
          <li>
            <strong>RSS Feed Monitoring</strong>: This component constantly checks for new video uploads
            from the creator&apos;s account.
          </li>
          <li>
            <strong>Video Processing</strong>: Using the Klap API, the workflow converts the main videos
            into optimized shorts based on user preferences such as captions, subtitles, and cuts.
          </li>
          <li>
            <strong>Automated Upload</strong>: Once the shorts are generated, they are automatically
            uploaded to the creator&apos;s YouTube account without manual intervention.
          </li>
        </ol>

        <h3 style={styles.heading} className="text-xl font-semibold mb-4">
          Workflow Diagram
        </h3>
        <img
          src={YouTubeShortsGeneratorWorkflow}
          alt="The automation workflow screenshot from n8n showing the process from video conversion to uploading shorts on YouTube"
          className="w-full h-auto mb-6 rounded-lg"
        />

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Results / Evaluation
        </h2>
        <p style={styles.text} className="mb-4">
          This solution significantly reduces the time required for content creators to produce and manage
          their short video content. By automating the editing and uploading processes, users can focus on
          content creation rather than administrative tasks.
        </p>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Challenges &amp; Learnings
        </h2>
        <p style={styles.text} className="mb-4">
          Implementing the automation faced challenges such as ensuring compatibility between various APIs
          and handling potential errors during video processing. These challenges provided valuable insights
          into API integration and the importance of robust error handling in automation workflows.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 my-8">
          {links.map(({ label, href }, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <a
              key={index}
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

        <h2 style={styles.heading} className="text-2xl font-bold mb-4">
          Skills &amp; Technologies Used
        </h2>
        <div className="flex flex-wrap mb-4">
          {skills.map((skill, index) => (
            // eslint-disable-next-line react/no-array-index-key
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