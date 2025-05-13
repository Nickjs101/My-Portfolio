import React from 'react';
import { projectStyles as styles } from './ProjectStyles';

import YTShortsCover from '../../assets/Works/youtubeshortsautomationcover.png';
import YTShortsWorkflow from '../../assets/Works/youtubeshortsautomationworkflow.png';

const YouTubeShortsAutomation = () => {
  const skills = ['Klap AI', 'YouTube API', 'RSS Feed', 'n8n Automation Tool'];
  const links = [
    {
      label: 'View Video Demo',
      href: 'https://drive.google.com/file/d/1VUcpEdYc04WRkIY2vrkzVHf53kFy5v4B/view?usp=drivesdk',
    },
  ];

  return (
    <div className="font-sans leading-relaxed tracking-wide flex flex-col items-center">
      <div className="max-w-4xl w-full p-0 md:p-6 rounded-lg">
        <img
          src={YTShortsCover}
          alt="YouTube Shorts Automation"
          className="w-full h-auto mb-6 rounded-lg"
        />

        <h1 style={styles.heading} className="text-3xl lg:text-5xl font-bold mb-4">
          YouTube Shorts Automation
        </h1>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Overview
        </h2>
        <p style={styles.text} className="mb-4">
          The <strong>YouTube Shorts Automation</strong> project addresses the challenge faced by content creators needing to
          edit and upload short clips from their longer videos or podcasts. Traditionally, this process requires manual
          effort, including hiring editors and handling video uploads individually. This automation streamlines the
          entire workflow, making it a seamless experience for creators.
        </p>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Goals
        </h2>
        <p style={styles.text} className="mb-4">
          The main aim of this project is to enable podcast and video creators to automatically generate YouTube Shorts,
          thereby saving time and eliminating the need for manual editing and uploading. Using advanced APIs, the system
          actively monitors video uploads and generates appropriate short clips.
        </p>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Features / Workflow
        </h2>
        <ul style={styles.text} className="mb-4 list-disc list-inside space-y-2">
          <li>
            <strong>Automatic Monitoring</strong>: The system uses an RSS feed to monitor updates from the content
            creator’s YouTube account for new video uploads.
          </li>
          <li>
            <strong>Short Generation</strong>: Utilizing the Klap AI API, the service automatically trims and edits long
            videos into engaging short clips, tailored according to user preferences such as captions and subtitles.
          </li>
          <li>
            <strong>Seamless Uploading</strong>: After the short clips are generated, the YouTube API is used to upload
            these videos instantly, ensuring they are available to viewers without any additional steps from the creator.
          </li>
        </ul>

        <img
          src={YTShortsWorkflow}
          alt="Youtube Shorts Generator"
          className="w-full h-auto mb-6 rounded-lg"
        />

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Architecture / Logic / Design
        </h2>
        <p style={styles.text} className="mb-4">
          The architecture consists of an automated workflow designed in <strong>n8n</strong>, which is structured into three primary sections:
        </p>
        <ol style={styles.text} className="mb-4 list-decimal list-inside space-y-2">
          <li>
            <strong>Converting Videos to Shorts</strong>: This section utilizes an RSS feed trigger to activate upon
            detecting a new video. It calls the Klap API to convert the video and includes status checks until the
            conversion is completed.
          </li>
          <li>
            <strong>Export Short Videos</strong>: Once the shorts are generated, this part of the workflow retrieves the
            list of shorts and manages their export status to ensure successful processing.
          </li>
          <li>
            <strong>Upload Videos to YouTube</strong>: Finally, using HTTP requests, this section handles the upload of
            the completed shorts to the creator's YouTube account.
          </li>
        </ol>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Results / Evaluation
        </h2>
        <p style={styles.text} className="mb-4">
          The automated solution has led to significant time savings for creators, enabling them to focus more on content
          creation rather than on the logistical aspects of video editing and uploading. This has resulted in a more
          efficient workflow and higher engagement rates on the generated shorts.
        </p>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Challenges &amp; Learnings
        </h2>
        <p style={styles.text} className="mb-4">
          The integration of multiple APIs presented challenges in terms of ensuring seamless communication between
          services. Additionally, keeping track of video and export statuses required careful handling to avoid failures
          in the workflow. These experiences highlighted the importance of robust error handling and real-time monitoring
          in automation projects.
        </p>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Video Demo
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          {links.map(({ label, href }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold py-2 px-4 rounded-lg shadow-lg transition-colors duration-300 text-center"
              style={{
                backgroundColor: 'var(--accent-primary)',
                color: 'var(--text-primary)',
                minWidth: '160px',
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