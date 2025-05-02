import React from 'react'
import { projectStyles as styles } from './ProjectStyles'

import pagegeneratorCover from '../../assets/Works/pagegeneratorCover.png'
import PortfolioProjects from '../../assets/Works/PortfolioProjects.png'
import NetlifyDeployments from '../../assets/Works/NetlifyDeployments.png'
import RevertLatestProject from '../../assets/Works/RevertLatestProject.png'
import FailedDeploymentNotification from '../../assets/Works/FailedDeploymentNotification.png'
import _5PushAndNotify from '../../assets/Works/5PushAndNotify.png'
import _4ProjectListUpdate from '../../assets/Works/4ProjectListUpdate.png'
import _3ProjectPageGeneration from '../../assets/Works/3ProjectPageGeneration.png'
import _2InfoExtraction from '../../assets/Works/2InfoExtraction.png'
import _1ProjectSetup from '../../assets/Works/1ProjectSetup.png'

const AutomatedProjectPageGenerator = () => {
  const skills = [
    'Git',
    'GPT language models',
    'Google Drive',
    'Bash',
    'Telegram',
    'Netlify',
    'n8n',
  ]

  return (
    <div className="font-sans leading-relaxed tracking-wide flex flex-col items-center">
      <div className="max-w-4xl w-full p-0 md:p-6 rounded-lg">
        <img
          src={pagegeneratorCover}
          alt="Automated Project Page Generator cover"
          className="w-full h-auto mb-6 rounded-lg"
        />

        <h1 style={styles.heading} className="text-3xl lg:text-5xl font-bold mb-4">
          Automated Project Page Generator
        </h1>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Overview
        </h2>
        <p style={styles.text} className="mb-4">
          The Automated Project Page Generator is an innovative solution designed to streamline the creation of project showcase pages for a portfolio website. By leveraging AI and automation, this project enables users to automatically generate content and code for project pages, allowing greater focus on developing new ideas and projects.
        </p>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">Goals</h2>
        <p style={styles.text} className="mb-4">
          The primary goal of this project is to automate the tedious process of coding and writing informative content for project pages. This innovation ensures that users can maintain a dynamic portfolio with minimal manual intervention.
        </p>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">Features / Workflow</h2>

        <h3 style={styles.heading} className="text-xl font-semibold mb-3">Workflow Overview</h3>

        <ol className="list-decimal list-inside mb-6 space-y-4 text-gray-900">
          <li>
            <strong>Information Extraction</strong><br />
            This workflow is responsible for downloading and extracting project-related information from Google Drive, organizing it for content creation.
            <img
              src={_2InfoExtraction}
              alt="Automated Project Page Generator - Information Extraction Workflow"
              className="w-full h-auto my-3 rounded-lg"
            />
            <p style={styles.text} className="italic mb-0">
              Workflow for extracting project details from files using Google Drive integration.
            </p>
          </li>
          <li>
            <strong>Project Page Code Generation</strong><br />
            The process where generated content is converted into a project page format.
            <img
              src={_3ProjectPageGeneration}
              alt="Automated Project Page Generator – n8n Workflow"
              className="w-full h-auto my-3 rounded-lg"
            />
            <p style={styles.text} className="italic mb-0">
              Workflow focused on generating project page content and code from extracted information.
            </p>
          </li>
          <li>
            <strong>Save and Notify Workflow</strong><br />
            This workflow manages the finalization of project updates, ensuring that successful updates are communicated via notifications.
            <img
              src={_5PushAndNotify}
              alt="Automated Project Page Generator - Save and Notify Workflow"
              className="w-full h-auto my-3 rounded-lg"
            />
            <p style={styles.text} className="italic mb-0">
              Workflow for saving project changes and notifying users upon completion.
            </p>
          </li>
        </ol>

        <h3 style={styles.heading} className="text-xl font-semibold mb-3">Deployment</h3>
        <p style={styles.text} className="mb-4">
          The project is deployed using Netlify, allowing quick and efficient updates to the portfolio site.
        </p>
        <img
          src={NetlifyDeployments}
          alt="Deploys page on Netlify"
          className="w-full h-auto mb-6 rounded-lg"
        />
        <p style={styles.text} className="italic mb-6">Deployments page on Netlify showing the recent activity and deployment settings.</p>

        <h3 style={styles.heading} className="text-xl font-semibold mb-3">Error Management</h3>
        <p style={styles.text} className="mb-4">
          To handle potential deployment failures, automated notifications are sent, and changes can be reverted without manual steps.
        </p>
        <img
          src={FailedDeploymentNotification}
          alt="Failed Deployment Notification"
          className="w-full h-auto mb-6 rounded-lg"
        />
        <p style={styles.text} className="italic mb-6">Workflow automating notifications in case of deployment failures.</p>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">Architecture / Logic / Design</h2>
        <p style={styles.text} className="mb-4">
          This project uses a variety of tools to facilitate its operation:
        </p>
        <ul className="list-disc list-inside mb-6 text-gray-900">
          <li>Git for version control and project cloning.</li>
          <li>GPT models for AI-driven content and code generation.</li>
          <li>Bash for managing directories and executing shell commands.</li>
          <li>Telegram for real-time notifications.</li>
          <li>Google Drive for file storage.</li>
        </ul>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">Challenges &amp; Learnings</h2>
        <p style={styles.text} className="mb-6">
          Throughout the development of this project, several challenges were encountered, particularly in ensuring seamless integration of different systems (e.g., Google Drive, Git, and notification services). However, these challenges provided valuable learnings on automation best practices and enhanced the overall functionality of the project.
        </p>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">Featured Projects Section</h2>
        <p style={styles.text} className="mb-4">
          The project allows for the easy presentation of embedded projects within a portfolio, showcasing how effectively it integrates new projects through automation.
        </p>
        <img
          src={PortfolioProjects}
          alt="Featured Projects Section - Nick.Js Portfolio"
          className="w-full h-auto mb-6 rounded-lg"
        />
        <p style={styles.text} className="italic mb-6">Preview of the Featured Projects section in the portfolio.</p>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">Call to Action</h2>
        <p style={styles.text} className="mb-8">
          For more information, please visit my portfolio:{' '}
          <a
            href="https://github.com/Nickjs101/My-Portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600 hover:text-blue-800"
          >
            My GitHub Portfolio
          </a>
        </p>

        <h2 style={styles.heading} className="text-2xl font-bold mb-4">Skills &amp; Technologies Used</h2>
        <div className="flex flex-wrap mb-8">
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

export default AutomatedProjectPageGenerator