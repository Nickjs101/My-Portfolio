import React from 'react';
import { projectStyles as styles } from './ProjectStyles';
import YTShortsAutomationCover from '../../assets/Works/youtubeshortsautomationcover.png';
import YTShortsAutomationWorkflow from '../../assets/Works/youtubeshortsautomationworkflow.png';

const YouTubeShortsAutomation = () => {
  const skills = [
    'n8n',
    'Klap API',
    'YouTube API',
    'RSS Feed Integration',
    'JavaScript',
    'Video Editing Automation',
  ];

  const links = [
    {
      label: 'Watch the Video Demo',
      href: 'https://drive.google.com/file/d/1VUcpEdYc04WRkIY2vrkzVHf53kFy5v4B/view?usp=drivesdk',
    },
  ];

  return (
    <div className="font-sans leading-relaxed tracking-wide flex flex-col items-center">
      <div className="max-w-4xl w-full p-0 md:p-6 rounded-lg">
        {/* COVER IMAGE */}
        <img
          src={YTShortsAutomationCover}
          alt="Bright and colorful promotional graphic illustrating YouTube Shorts Automation."
          className="w-full h-auto mb-6 rounded-lg"
        />

        {/* PROJECT TITLE */}
        <h1 style={styles.heading} className="text-3xl lg:text-5xl font-bold mb-4">
          YouTube Shorts Automation
        </h1>

        {/* CONTENT SECTIONS */}

        {/* Overview */}
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Overview
        </h2>
        <p style={styles.text} className="mb-4">
          The <strong>YouTube Shorts Automation</strong> project addresses a common challenge faced by content creators who produce podcasts. Manual editing and uploading of videos can be time-consuming and resource-intensive. This automation leverages the capabilities of AI through the Klap API to streamline the process of generating YouTube Shorts from longer video content.
        </p>

        {/* Goals */}
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Goals
        </h2>
        <p style={styles.text} className="mb-4">
          The primary goal of this automation tool is to free content creators from the tedious tasks of editing and uploading. By automating shorts generation and uploads, creators can focus more on content creation and engagement rather than logistical aspects.
        </p>

        {/* Features / Workflow */}
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Features / Workflow
        </h2>
        <p style={styles.text} className="mb-4">
          The automation system employs a robust workflow to handle video processing:
        </p>
        <ul className="list-disc list-inside mb-4" style={styles.text}>
          <li>
            <strong>RSS Feed Trigger</strong>: Monitors updates from specified accounts for new video content.
          </li>
          <li>
            <strong>Klap AI Integration</strong>: Utilizes Klap API to seamlessly convert regular video content into engaging shorts, applying user-defined preferences for captions, subtitles, and cuts.
          </li>
          <li>
            <strong>YouTube API</strong>: Manages the upload of the newly created shorts to the creator&apos;s YouTube channel without needing manual intervention.
          </li>
        </ul>

        <img
          src={YTShortsAutomationWorkflow}
          alt="Screenshot of the automation workflow created in n8n for YouTube Shorts Generation."
          className="w-full h-auto mb-6 rounded-lg"
        />

        {/* Architecture / Logic / Design */}
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Architecture / Logic / Design
        </h2>
        <p style={styles.text} className="mb-4">
          The architecture comprises three main segments within the n8n workflow:
        </p>
        <ol className="list-decimal list-inside mb-4" style={styles.text}>
          <li>
            <strong>Converting Videos to Shorts</strong>: Involves detection of new video uploads, sending conversion requests, and managing the conversion status.
          </li>
          <li>
            <strong>Export Short Videos</strong>: Retrieves and prepares the generated shorts for upload.
          </li>
          <li>
            <strong>Upload Videos to YouTube</strong>: Finalizes the process by executing video uploads through the YouTube API.
          </li>
        </ol>

        {/* Results / Evaluation */}
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Results / Evaluation
        </h2>
        <p style={styles.text} className="mb-4">
          With this automation, content creators can effectively reduce the time from video creation to publishing, allowing for an increase in the volume of content produced while maintaining quality.
        </p>

        {/* Challenges & Learnings */}
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Challenges & Learnings
        </h2>
        <p style={styles.text} className="mb-4">
          Implementing this system involved understanding the intricacies of each API interaction and ensuring that the workflow could handle various video formats and content specifications without errors.
        </p>

        {/* CALL TO ACTION BUTTONS */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 my-8">
          {links.map(({ label, href }, index) =>
            href ? (
              <a
                key={index}
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
            ) : null,
          )}
        </div>

        {/* SKILLS & TECHNOLOGIES */}
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