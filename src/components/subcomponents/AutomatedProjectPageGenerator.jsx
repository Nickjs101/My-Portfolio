import React from 'react'
import { projectStyles as styles } from './ProjectStyles'

import PagegeneratorCover from '../../assets/Works/pagegeneratorCover.png'
import ProjectSetup from '../../assets/Works/1ProjectSetup.png'
import InfoExtraction from '../../assets/Works/2InfoExtraction.png'
import ProjectPageGeneration from '../../assets/Works/3ProjectPageGeneration.png'
import ProjectListUpdate from '../../assets/Works/4ProjectListUpdate.png'
import NetlifyDeployments from '../../assets/Works/NetlifyDeployments.png'
import FailedDeploymentNotification from '../../assets/Works/FailedDeploymentNotification.png'

const AutomatedProjectPageGenerator = () => {
  const skills = [
    'Git',
    'GitHub',
    'n8n',
    'OpenAI GPT models',
    'React',
    'Telegram API',
    'Google Drive',
    'Netlify',
    'Bash',
  ];

  const links = [
    {
      label: 'GitHub Repository',
      href: 'https://github.com/Nickjs101/My-Portfolio',
    },
  ];

  return (
    <div className="font-sans leading-relaxed tracking-wide flex flex-col items-center">
      <div className="max-w-4xl w-full p-0 md:p-6 rounded-lg">
        <img
          src={PagegeneratorCover}
          alt="Automated Project Page Generator"
          className="w-full h-auto mb-6 rounded-lg"
        />
        <h1
          style={styles.heading}
          className="text-3xl lg:text-5xl font-bold mb-4"
        >
          Automated Project Page Generator
        </h1>

        <section>
          <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
            Overview
          </h2>
          <p style={styles.text} className="mb-4">
            The <strong>Automated Project Page Generator</strong> streamlines
            the process of creating project showcase pages for a portfolio
            website. Utilizing AI and several automation tools, this project
            automates the generation of content and deployment processes,
            allowing creators to focus on generating new ideas rather than
            repetitive tasks.
          </p>
        </section>

        <section>
          <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
            Goals
          </h2>
          <p style={styles.text} className="mb-4">
            The main aim of this project is to automate the tedious process of
            project documentation, ensuring that information is generated and
            displayed efficiently without manual coding.
          </p>
        </section>

        <section>
          <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
            Features / Workflow
          </h2>
          <ul
            style={styles.text}
            className="list-disc list-inside mb-4 space-y-2 text-gray-800 dark:text-gray-200"
          >
            <li>
              <strong>Information Extraction</strong>: Uses the <code>n8n</code>{' '}
              automation tool to retrieve project information from Google Drive,
              including images and descriptions.
            </li>
            <li>
              <strong>Page Code Generation</strong>: Integrates GPT models to
              generate code for the project page, transforming textual
              descriptions into formatted web components.
            </li>
            <li>
              <strong>Deployment Management</strong>: Automatically deploys
              updates to the portfolio site hosted on Netlify, with notifications
              sent via Telegram for status updates.
            </li>
          </ul>

          <h3 style={styles.heading} className="text-xl font-semibold mb-3">
            Workflow Steps:
          </h3>

          <ol
            style={styles.text}
            className="list-decimal list-inside mb-6 space-y-4 text-gray-800 dark:text-gray-200"
          >
            <li>
              <strong>Setup Project in Local Folder</strong>:
              <ul className="list-disc list-inside ml-5 mt-1">
                <li>Clones the project repository from GitHub.</li>
                <li>Prepares the project for further edits by cleaning directories.</li>
              </ul>
              <img
                src={ProjectSetup}
                alt="Workflow for setting up the project in a local folder."
                className="w-full h-auto my-4 rounded-lg"
              />
            </li>

            <li>
              <strong>Information Extraction</strong>:
              <ul className="list-disc list-inside ml-5 mt-1">
                <li>Search and retrieve project files from Google Drive.</li>
                <li>
                  Combine image metadata and descriptions for inclusion in
                  project pages.
                </li>
              </ul>
              <img
                src={InfoExtraction}
                alt="Information extraction step in the automated process."
                className="w-full h-auto my-4 rounded-lg"
              />
            </li>

            <li>
              <strong>Project Page Code Generation</strong>:
              <ul className="list-disc list-inside ml-5 mt-1">
                <li>
                  Generates HTML content using AI, formats into structured React components,
                  and validates the generated code.
                </li>
              </ul>
              <img
                src={ProjectPageGeneration}
                alt="Illustrates the project page code generation workflow."
                className="w-full h-auto my-4 rounded-lg"
              />
            </li>

            <li>
              <strong>Update Project List</strong>:
              <ul className="list-disc list-inside ml-5 mt-1">
                <li>
                  Updates the project's display list on the website by validating and replacing
                  old project entries with newfound data.
                </li>
              </ul>
              <img
                src={ProjectListUpdate}
                alt="The process of updating the project list."
                className="w-full h-auto my-4 rounded-lg"
              />
            </li>

            <li>
              <strong>Deployment Process</strong>:
              <ul className="list-disc list-inside ml-5 mt-1">
                <li>
                  Automatically pushes the updates to GitHub and manages deployments through Netlify.
                </li>
                <li>Alerts users via Telegram in case of deployment failures or successes.</li>
              </ul>
              <img
                src={NetlifyDeployments}
                alt="The deploys dashboard on Netlify showing site details."
                className="w-full h-auto my-4 rounded-lg"
              />
              <img
                src={FailedDeploymentNotification}
                alt="An n8n workflow for handling failed deployments."
                className="w-full h-auto my-4 rounded-lg"
              />
            </li>
          </ol>
        </section>

        <section>
          <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
            Results / Evaluation
          </h2>
          <p style={styles.text} className="mb-4">
            The project successfully reduces the time and effort involved in creating and
            deploying project pages. By automating the generation of content and managing
            deployment tasks, users can focus more on developing innovative projects.
          </p>
        </section>

        <section>
          <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
            Challenges &amp; Learnings
          </h2>
          <p style={styles.text} className="mb-4">
            This project highlighted the importance of seamless integration between various
            tools. Managing dependencies and ensuring backup error handling in workflows taught
            essential lessons in automation reliability and system stability.
          </p>
        </section>

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

export default AutomatedProjectPageGenerator;