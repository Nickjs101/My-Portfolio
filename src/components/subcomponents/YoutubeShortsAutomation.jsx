import React from 'react';
import { projectStyles as styles } from './ProjectStyles';

import CoverImage from '../../assets/Works/youtube-shorts-automation-demo.jpg';

const YoutubeShortsAutomation = () => {
  const skills = [
    'API Integration',
    'Automation',
    'Video Editing',
    'YouTube API',
    'Klap AI',
    'RSS Feeds',
  ];

  const links = [
    {
      label: 'Watch the Demo Here',
      href: 'https://drive.google.com/uc?id=16sFr9l9eBErIwSjewKBW0S--RXzquZEV&export=download',
    },
  ];

  return (
    <div className="font-sans leading-relaxed tracking-wide flex flex-col items-center">
      <div className="max-w-4xl w-full p-0 md:p-6 rounded-lg">
        <img
          src={CoverImage}
          alt="Youtube Shorts Automation Demo"
          className="w-full h-auto mb-6 rounded-lg"
        />

        <h1 style={styles.heading} className="text-3xl lg:text-5xl font-bold mb-4">
          Youtube Shorts Automation
        </h1>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Overview
        </h2>
        <p style={styles.text} className="mb-4">
          The <strong>Youtube Shorts Automation</strong> project aims to
          streamline the process for content creators, especially podcasters,
          who require significant editing before publishing. This automation
          solution leverages advanced APIs to efficiently create and upload
          short clips to YouTube without the need for manual intervention.
        </p>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Goals
        </h2>
        <ul style={styles.text} className="list-disc list-inside mb-4">
          <li>To eliminate the manual effort required for video editing.</li>
          <li>
            To provide an automated solution that generates engaging shorts
            from longer content, enhancing viewer engagement.
          </li>
          <li>
            To facilitate prompt uploading of the generated shorts to creators'
            YouTube channels.
          </li>
        </ul>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Features / Workflow
        </h2>
        <ul style={styles.text} className="list-disc list-inside mb-4">
          <li>
            <strong>Automated Video Editing</strong>: Utilizing the Klap AI API,
            the solution generates short clips from full podcasts or videos
            based on user-defined preferences such as captions, subtitles, and
            the choice of cuts.
          </li>
          <li>
            <strong>Intuitive Monitoring</strong>: The automation continuously
            monitors for changes or updates in the associated video accounts via
            an RSS feed.
          </li>
          <li>
            <strong>Seamless Uploading</strong>: After generating the shorts,
            the refined clips are automatically uploaded to YouTube using the
            YouTube API, ensuring creators can focus on producing more content.
          </li>
        </ul>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Architecture / Logic / Design
        </h2>
        <ul style={styles.text} className="list-disc list-inside mb-4">
          <li>
            <strong>RSS Feed Integration</strong>: This feature serves as the
            backbone of the monitoring mechanism, alerting the system to new
            content.
          </li>
          <li>
            <strong>Klap AI Interaction</strong>: The integration with Klap AI
            allows for customizable video editing to meet specific content
            creator needs.
          </li>
          <li>
            <strong>YouTube API Utilization</strong>: The final step involves
            the automated upload of generated shorts to the specified YouTube
            account, completing the workflow without user effort.
          </li>
        </ul>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Results / Evaluation
        </h2>
        <p style={styles.text} className="mb-4">
          The implementation of this automation has shown a significant
          reduction in time spent on video editing and was instrumental in
          increasing the frequency of content publication for many creators.
          The user feedback indicated higher engagement rates with the
          automatically generated shorts compared to standard promotional
          content.
        </p>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Challenges &amp; Learnings
        </h2>
        <ul style={styles.text} className="list-disc list-inside mb-4">
          <li>
            Ensuring smooth integration between the various APIs presented
            initial challenges that required careful troubleshooting.
          </li>
          <li>
            Collecting and analyzing user preferences helped refine the editing
            options, enhancing overall satisfaction with the output.
          </li>
        </ul>

        <div className="flex flex-col sm:flex-row justify-center gap-4 my-8">
          {links.map(({ label, href }, idx) => (
            <a
              key={idx}
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

export default YoutubeShortsAutomation;