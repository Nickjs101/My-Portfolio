import React from 'react';
import { projectStyles as styles } from './ProjectStyles';
import YouTubeShortsAutomationCover from '../../assets/Works/youtubeshortsautomationcover.png';
import YouTubeShortsAutomationWorkflow from '../../assets/Works/youtubeshortsautomationworkflow.png';

const YouTubeShortsAutomation = () => {
  const skills = [
    'Klap API',
    'YouTube API',
    'n8n',
    'RSS Feed Automation',
    'Video Processing Techniques',
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
        {/* COVER IMAGE */}
        <img
          src={YouTubeShortsAutomationCover}
          alt="Promotional graphic for YouTube Shorts Automation"
          className="w-full h-auto mb-6 rounded-lg"
        />

        {/* PROJECT TITLE */}
        <h1
          style={styles.heading}
          className="text-3xl lg:text-5xl font-bold mb-4"
        >
          YouTube Shorts Automation
        </h1>

        {/* Overview Section */}
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Overview
        </h2>
        <p style={styles.text} className="mb-4">
          YouTube Shorts Automation is a solution designed to assist content
          creators, particularly podcasters, by automating the process of
          generating and uploading short clips from their lengthy videos.
          Leveraging advanced APIs, this automation eliminates the need for
          manual editing and uploading, streamlining the workflow
          significantly.
        </p>

        {/* Goals Section */}
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Goals
        </h2>
        <p style={styles.text} className="mb-4">
          The primary aim of this project is to reduce the time and effort
          required for content creators to edit and publish their videos as
          Short clips on YouTube. By automating these tasks, creators can focus
          more on content production rather than technical editing and posting.
        </p>

        {/* Features / Workflow Section */}
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Features / Workflow
        </h2>
        <ul style={styles.text} className="list-disc list-inside mb-4">
          <li>
            <strong>Monitoring Video Uploads</strong>: The automation listens
            for new videos uploaded to the user's YouTube account through an RSS
            feed.
          </li>
          <li>
            <strong>Shorts Generation</strong>: Utilizes the Klap API to
            generate video Shorts, allowing for customization based on user
            preferences, such as captions and cuts.
          </li>
          <li>
            <strong>Automatic Upload</strong>: Once the Shorts are created, they
            are automatically uploaded to the content creator's YouTube channel
            without any manual intervention.
          </li>
        </ul>

        {/* Workflow Breakdown */}
        <h3 style={styles.heading} className="text-xl font-semibold mb-3">
          Workflow Breakdown
        </h3>
        <img
          src={YouTubeShortsAutomationWorkflow}
          alt="Workflow designed in n8n for the YouTube Shorts Generator"
          className="w-full h-auto mb-4 rounded-lg"
        />
        <p style={styles.text} className="mb-4 italic">
          The workflow consists of three key sections:
        </p>
        <ol style={styles.text} className="list-decimal list-inside mb-6">
          <li>
            <strong>Converting Videos to Shorts</strong>: Initiates on
            detecting new uploads and converts them into Shorts.
          </li>
          <li>
            <strong>Export Short Videos</strong>: Manages the retrieval and
            export of generated Shorts.
          </li>
          <li>
            <strong>Upload Videos to YouTube</strong>: Handles the final upload
            procedure using the YouTube API, ensuring the Shorts are live on the
            channel.
          </li>
        </ol>

        {/* Call to Action */}
        <div className="flex justify-center my-8">
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

        {/* Skills & Technologies Section */}
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