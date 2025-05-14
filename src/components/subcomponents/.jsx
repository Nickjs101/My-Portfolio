import React from 'react'
import { projectStyles as styles } from './ProjectStyles'
import YouTubeShortsAutomationCover from '../../assets/Works/youtubeshortsautomationcover.png'
import YouTubeShortsAutomationWorkflow from '../../assets/Works/youtubeshortsautomationworkflow.png'

const YouTubeShortsAutomation = () => {
  const skills = ['RSS Feed', 'Klap AI', 'YouTube API', 'n8n Automation Platform']

  const links = [
    {
      label: 'Watch the Demo Video',
      href: 'https://drive.google.com/file/d/1VUcpEdYc04WRkIY2vrkzVHf53kFy5v4B/view?usp=drivesdk',
    },
  ]

  return (
    <div className="font-sans leading-relaxed tracking-wide flex flex-col items-center">
      <div className="max-w-4xl w-full p-0 md:p-6 rounded-lg">
        <img
          src={YouTubeShortsAutomationCover}
          alt="YouTube Shorts Automation"
          className="w-full h-auto mb-6 rounded-lg"
        />

        <h1
          style={styles.heading}
          className="text-3xl lg:text-5xl font-bold mb-8 text-center"
        >
          YouTube Shorts Automation
        </h1>

        <section className="mb-8">
          <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
            Overview
          </h2>
          <p style={styles.text} className="mb-4">
            The <strong>YouTube Shorts Automation</strong> project addresses the
            common challenge faced by content creators who produce podcasts. By
            automating the editing and uploading of videos, creators can save
            time and streamline their workflow.
          </p>
        </section>

        <section className="mb-8">
          <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
            Goals
          </h2>
          <ul style={styles.text} className="list-disc list-inside mb-4">
            <li>
              Automate the generation of short clips from longer podcast videos
              to enhance viewer engagement on platforms like YouTube.
            </li>
            <li>
              Reduce the need for manual intervention in the video editing and
              uploading processes.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
            Features / Workflow
          </h2>
          <p style={styles.text} className="mb-4">
            This automation project leverages multiple tools to seamlessly create
            and upload shorts:
          </p>
          <ol
            style={styles.text}
            className="list-decimal list-inside mb-4 space-y-2"
          >
            <li>
              <strong>RSS Feed Integration</strong>: Monitors updates from
              YouTube accounts, triggering the workflow when new videos are
              uploaded.
            </li>
            <li>
              <strong>Klap API Utilization</strong>: Converts longer videos into
              short clips based on user-defined preferences such as captions and
              cuts.
            </li>
            <li>
              <strong>YouTube API Integration</strong>: Handles the uploading of
              generated shorts directly to the content creator&apos;s YouTube account.
            </li>
          </ol>
          <img
            src={YouTubeShortsAutomationWorkflow}
            alt="YouTube Shorts Generator workflow builder interface of n8n automation platform"
            className="w-full h-auto mb-6 rounded-lg"
          />
        </section>

        <section className="mb-8">
          <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
            Architecture / Logic / Design
          </h2>
          <p style={styles.text} className="mb-4">
            The project architecture is designed around an interconnected workflow
            that includes:
          </p>
          <ul style={styles.text} className="list-disc list-inside mb-4 space-y-1">
            <li>
              A trigger that activates upon detecting new content in the RSS feed.
            </li>
            <li>
              Steps to convert videos into shorts and manage the conversion status.
            </li>
            <li>
              An export phase followed by an upload stage to YouTube, ensuring a
              smooth transition from creation to publication.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
            Results / Evaluation
          </h2>
          <p style={styles.text} className="mb-4">
            The automation has successfully minimized the manual effort involved in
            content creation for YouTube. Content creators can now focus more on
            producing high-quality podcasts instead of spending time on video
            editing.
          </p>
        </section>

        <section className="mb-8">
          <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
            Challenges &amp; Learnings
          </h2>
          <ul style={styles.text} className="list-disc list-inside mb-4 space-y-1">
            <li>
              Integrating various APIs presented initial technical challenges,
              particularly in ensuring seamless communication between the systems.
            </li>
            <li>
              Developing a reliable workflow in n8n required thorough testing and
              fine-tuning to ensure all steps functioned correctly without user
              intervention.
            </li>
          </ul>
        </section>

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

        <h2 style={styles.heading} className="text-2xl font-bold mb-4">
          Skills & Technologies Used
        </h2>
        <div className="flex flex-wrap mb-4 justify-center">
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