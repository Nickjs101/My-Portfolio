import React from 'react';
import { projectStyles as styles } from './ProjectStyles';
import CoverImage from '/tmp/portfolio/src/assets/Works/youtubeshortsautomationcover.png';
import WorkflowImage from '/tmp/portfolio/src/assets/Works/youtubeshortsautomationworkflow.png';

const YoutubeShortsAutomation = () => {
  const skills = [
    'RSS Feeds',
    'Klap AI API',
    'YouTube API',
    'n8n (Automation Tool)',
  ];

  return (
    <div className="font-sans leading-relaxed tracking-wide flex flex-col items-center">
      <div className="max-w-4xl w-full p-0 md:p-6 rounded-lg">
        <img
          src={CoverImage}
          alt="YouTube Shorts Generator and social media icons illustration"
          className="w-full h-auto mb-6 rounded-lg"
        />

        <h1
          style={styles.heading}
          className="text-3xl lg:text-5xl font-bold mb-4"
        >
          Youtube Shorts Automation
        </h1>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Overview
        </h2>
        <p style={styles.text} className="mb-4">
          The <strong>Youtube Shorts Automation</strong> project addresses the
          prevalent challenge faced by content creators who produce podcasts by
          requiring time-consuming video editing before uploading their content
          to YouTube. This project leverages the power of automation to
          streamline the video editing and uploading process, making it
          accessible for creators to focus more on producing quality content
          instead of managing repetitive tasks.
        </p>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Goals
        </h2>
        <p style={styles.text} className="mb-4">
          The primary aim of this project is to eliminate the manual workload
          involved in video editing and uploading by utilizing advanced tools
          to automate the generation of YouTube Shorts directly from podcast
          videos. This can vastly improve efficiency and reduce turnaround time
          for content creators.
        </p>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Features / Workflow
        </h2>
        <p style={{ ...styles.text, fontWeight: '600' }} className="mb-2">
          The automation process encompasses the following key components:
        </p>
        <ol className="list-decimal list-inside mb-4 space-y-2" style={styles.text}>
          <li>
            <strong>Converting Videos to Shorts</strong>:
            <ul className="list-disc list-inside ml-5 mt-1">
              <li>Integrated with an RSS feed to track video uploads.</li>
              <li>
                Utilizes the Klap AI API for cutting and editing long-form
                videos into engaging short clips based on predefined
                preferences.
              </li>
            </ul>
          </li>
          <li>
            <strong>Export Short Videos</strong>:
            <ul className="list-disc list-inside ml-5 mt-1">
              <li>
                Automatically exports generated shorts ready for upload, with
                status checks to ensure successful conversion.
              </li>
            </ul>
          </li>
          <li>
            <strong>Upload Videos to YouTube</strong>:
            <ul className="list-disc list-inside ml-5 mt-1">
              <li>
                Implements the YouTube API for seamless uploading of generated
                Shorts, eliminating the need for manual uploads.
              </li>
            </ul>
          </li>
        </ol>

        <h3 style={styles.heading} className="text-xl font-semibold mb-4">
          Architecture / Logic / Design
        </h3>
        <p style={styles.text} className="mb-4">
          The system&apos;s architecture is designed using n8n, illustrated in
          the automation workflow below:
        </p>
        <img
          src={WorkflowImage}
          alt="Youtube Shorts Generator automation workflow illustration"
          className="w-full h-auto mb-6 rounded-lg"
        />
        <p style={{ ...styles.text, fontStyle: 'italic' }} className="mb-4">
          An automation workflow that demonstrates the end-to-end process of
          generating and uploading YouTube Shorts.
        </p>
        <p style={styles.text} className="mb-4">
          The workflow comprises several actions that trigger based on the RSS
          feed input, ensuring that every new podcast video is transformed into
          a short and uploaded efficiently.
        </p>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Results / Evaluation
        </h2>
        <p style={styles.text} className="mb-4">
          By automating the process, content creators can save significant time
          and resources while maintaining a steady flow of engaging Shorts on
          their YouTube channels. This not only enhances viewer engagement but
          also allows creators to reach a broader audience without compromising
          on production quality.
        </p>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Challenges &amp; Learnings
        </h2>
        <ul className="list-disc list-inside mb-4" style={styles.text}>
          <li>
            Ensuring reliable integration of the various APIs (Klap and YouTube)
            to avoid failures in the automation process.
          </li>
          <li>
            Designing a user-friendly workflow that caters to varying
            preferences for video edits, including subtitles and cuts.
          </li>
        </ul>
        <p style={styles.text} className="mb-6">
          These challenges provided valuable insights into API management and
          workflow design, contributing to improved problem-solving skills in
          future projects.
        </p>

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

export default YoutubeShortsAutomation;