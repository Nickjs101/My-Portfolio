import React from 'react';
import { projectStyles as styles } from './ProjectStyles';

import pagegeneratorCover from '../../assets/Works/pagegeneratorCover.png';
import projectSetup from '../../assets/Works/1ProjectSetup.png';
import infoExtraction from '../../assets/Works/2InfoExtraction.png';
import projectPageGeneration from '../../assets/Works/3ProjectPageGeneration.png';
import projectListUpdate from '../../assets/Works/4ProjectListUpdate.png';
import pushAndNotify from '../../assets/Works/5PushAndNotify.png';
import netlifyDeployments from '../../assets/Works/NetlifyDeployments.png';

const AutomatedProjectPageGenerator = () => {
  const skills = [
    'Git',
    'GPT Language Models',
    'Google Drive',
    'n8n automation tool',
    'Telegram API',
    'Bash',
    'Netlify',
  ];

  const links = [
    {
      label: 'Nick.Js Portfolio',
      href: 'https://nickjsportfolio.netlify.app',
    },
  ];

  return (
    <div className="font-sans leading-relaxed tracking-wide flex flex-col items-center">
      <div className="max-w-4xl w-full p-0 md:p-6 rounded-lg">
        {/* COVER IMAGE */}
        <img
          src={pagegeneratorCover}
          alt="Automated Project Page Generator"
          className="w-full h-auto mb-6 rounded-lg"
        />

        {/* PROJECT TITLE */}
        <h1 style={styles.heading} className="text-3xl lg:text-5xl font-bold mb-4">
          Automated Project Page Generator
        </h1>

        {/* Overview Section */}
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Overview
        </h2>
        <p style={styles.text} className="mb-4">
          The <strong>Automated Project Page Generator</strong> streamlines the
          creation of project showcase pages for my portfolio website. By leveraging
          AI technology, it automates both the content generation and coding
          processes, allowing me to focus on new ideas and innovative projects
          rather than repetitive manual tasks.
        </p>

        {/* Goals Section */}
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Goals
        </h2>
        <p style={styles.text} className="mb-4">
          The primary goal of this project is to facilitate the automatic generation
          of project documentation pages. This ensures consistency and efficiency
          while minimizing time spent on technical writing and formatting.
        </p>

        {/* Features / Workflow Section */}
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Features / Workflow
        </h2>
        <ol className="list-decimal list-inside mb-6 space-y-6" style={styles.text}>
          <li>
            <strong>Setup Project in Local Folder:</strong>
            <ul className="list-disc list-inside ml-5">
              <li>Clones the GitHub repository.</li>
              <li>Cleans any existing project files in a temporary directory.</li>
              <li>Configures Git with user information.</li>
            </ul>
            <img
              src={projectSetup}
              alt="Automated Project Page Generator - Initial project setup workflow in n8n"
              className="w-full h-auto my-4 rounded-lg"
            />
          </li>
          <li>
            <strong>Information Extraction:</strong>
            <ul className="list-disc list-inside ml-5">
              <li>Downloads necessary project files from Google Drive.</li>
              <li>Analyzes images and extracts descriptive data using AI.</li>
            </ul>
            <img
              src={infoExtraction}
              alt="Information Extraction - steps for extracting info from project files"
              className="w-full h-auto my-4 rounded-lg"
            />
          </li>
          <li>
            <strong>Project Page Code Generation:</strong>
            <ul className="list-disc list-inside ml-5">
              <li>Generates blog-style content based on extracted data.</li>
              <li>Transforms that content into structured project pages.</li>
            </ul>
            <img
              src={projectPageGeneration}
              alt="Project Page Code Generation workflow"
              className="w-full h-auto my-4 rounded-lg"
            />
          </li>
          <li>
            <strong>Update Project List:</strong>
            <ul className="list-disc list-inside ml-5">
              <li>
                Processes the project list for new entries and updates existing ones.
              </li>
              <li>Utilizes AI for validation and correction of formatted code.</li>
            </ul>
            <img
              src={projectListUpdate}
              alt="Project List Update flowchart"
              className="w-full h-auto my-4 rounded-lg"
            />
          </li>
          <li>
            <strong>Push and Notify:</strong>
            <ul className="list-disc list-inside ml-5">
              <li>
                Automatically pushes changes to GitHub and sends notifications via
                Telegram upon success or failure.
              </li>
            </ul>
            <img
              src={pushAndNotify}
              alt="Push and Notify workflow in n8n"
              className="w-full h-auto my-4 rounded-lg"
            />
          </li>
        </ol>

        {/* Architecture Section */}
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Architecture / Logic / Design
        </h2>
        <p style={styles.text} className="mb-6">
          The architecture is based around a structured workflow in <strong>n8n</strong>, where different nodes handle specific tasks. The integration of AI models helps maintain content quality and consistency.
        </p>

        {/* Results Section */}
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Results / Evaluation
        </h2>
        <p style={styles.text} className="mb-6">
          The project has effectively reduced the time required to create and deploy project pages dramatically. It also maintains a high standard of quality across all showcase pages, allowing for easier updates and consistent performance.
        </p>

        {/* Challenges Section */}
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Challenges &amp; Learnings
        </h2>
        <ul className="list-disc list-inside mb-6" style={styles.text}>
          <li>Integration issues among the various platforms (Git, Google Drive, n8n).</li>
          <li>Ensuring accurate AI-generated content and code validation.</li>
          <li>Managing notifications effectively using Telegram.</li>
        </ul>

        {/* Deployments Section */}
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Deployments
        </h2>
        <p style={styles.text} className="mb-4">
          The final deployed application can be seen on Netlify, with automatic updates linked to the GitHub repository for continuous integration.
        </p>
        <img
          src={netlifyDeployments}
          alt="Netlify Deploy Dashboard for the portfolio"
          className="w-full h-auto mb-6 rounded-lg"
        />

        {/* CTA Section */}
        <div className="text-center mb-10">
          <p style={styles.text} className="mb-4">
            For a more detailed look at the individual features and to see this project in action, please visit my portfolio:
          </p>
          {links.map(({ label, href }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-semibold py-2 px-4 rounded-lg shadow-lg transition-colors duration-300"
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

export default AutomatedProjectPageGenerator;