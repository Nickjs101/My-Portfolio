import React from 'react'
import { projectStyles as styles } from './ProjectStyles'

import pagegeneratorCover from '../../assets/Works/pagegeneratorCover.png'
import PortfolioProjects from '../../assets/Works/PortfolioProjects.png'
import NetlifyDeployments from '../../assets/Works/NetlifyDeployments.png'
import RevertLatestProject from '../../assets/Works/RevertLatestProject.png'
import FailedDeploymentNotification from '../../assets/Works/FailedDeploymentNotification.png'
import PushAndNotify from '../../assets/Works/5PushAndNotify.png'
import ProjectListUpdate from '../../assets/Works/4ProjectListUpdate.png'
import ProjectPageGeneration from '../../assets/Works/3ProjectPageGeneration.png'
import InfoExtraction from '../../assets/Works/2InfoExtraction.png'
import ProjectSetup from '../../assets/Works/1ProjectSetup.png'

const AutomatedProjectPageGenerator = () => {
  const skills = [
    'Git',
    'GPT Language Models',
    'GPT Image Model',
    'Google Drive',
    'Bash',
    'Telegram',
    'Netlify',
    'n8n',
  ]

  return (
    <div className="font-sans leading-relaxed tracking-wide flex flex-col items-center">
      <div className="max-w-4xl w-full p-0 md:p-6 rounded-lg">
        {/* COVER IMAGE */}
        <img
          src={pagegeneratorCover}
          alt="Automated Project Page Generator Promotional Graphic"
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
          The <strong>Automated Project Page Generator</strong> is designed to streamline the process of creating showcase pages for projects within a portfolio website.
          By leveraging advanced AI technologies, this project automates the content generation and coding required for each project display, allowing the creator to focus more on innovation and less on repetitive tasks.
        </p>

        {/* Goals Section */}
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Goals
        </h2>
        <p style={styles.text} className="mb-4">
          The primary goal of this project is to eliminate the tedious process of manually coding project pages.
          This entails the creation of informative and visually appealing pages that are easily deployable to a personal website.
        </p>

        {/* Features / Workflow Section */}
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Features / Workflow
        </h2>
        <ul style={styles.text} className="list-disc list-inside mb-6">
          <li>
            <strong>Automated Content Creation</strong>: Utilizes GPT language models to generate accurate and relevant content for each project page.
          </li>
          <li>
            <strong>Image Analysis</strong>: Integrates GPT image models to add context and descriptions to images associated with projects.
          </li>
          <li>
            <strong>Deployment Automation</strong>: Employs Netlify for seamless deployment of generated pages directly to the portfolio site.
          </li>
          <li>
            <strong>Notification System</strong>: Implements Telegram for real-time notifications during deployment processes.
          </li>
        </ul>

        {/* Architecture / Logic / Design Section */}
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Architecture / Logic / Design
        </h2>
        <p style={styles.text} className="mb-4">
          The workflow is structured through <strong>n8n</strong>, an automation tool, featuring a series of steps:
        </p>

        <ol style={styles.text} className="list-decimal list-inside mb-6 space-y-4">
          <li>
            <strong>Setup</strong>: Initialize project setup by cloning the repository.
            <img
              src={ProjectSetup}
              alt="Project Setup"
              className="w-full h-auto mt-2 rounded-lg"
            />
          </li>
          <li>
            <strong>Information Extraction</strong>: Retrieve and process relevant project data and images.
            <img
              src={InfoExtraction}
              alt="Information Extraction"
              className="w-full h-auto mt-2 rounded-lg"
            />
          </li>
          <li>
            <strong>Project Page Code Generation</strong>: Convert generated content into a React component, ready for deployment.
            <img
              src={ProjectPageGeneration}
              alt="Project Page Code Generation"
              className="w-full h-auto mt-2 rounded-lg"
            />
          </li>
          <li>
            <strong>Project List Update</strong>: Automatically updates project listings based on the latest deployments.
            <img
              src={ProjectListUpdate}
              alt="Project List Update"
              className="w-full h-auto mt-2 rounded-lg"
            />
          </li>
          <li>
            <strong>Save and Notify</strong>: Commits changes to Git and sends notifications based on success or failure of operations.
            <img
              src={PushAndNotify}
              alt="Push and Notify"
              className="w-full h-auto mt-2 rounded-lg"
            />
          </li>
        </ol>

        {/* Results / Evaluation Section */}
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Results / Evaluation
        </h2>
        <p style={styles.text} className="mb-4">
          The final deployment of the entire system can be visualized through the Netlify dashboard, showing successful integration with GitHub and real-time deployment status.
        </p>
        <img
          src={NetlifyDeployments}
          alt="Netlify Deploy Dashboard"
          className="w-full h-auto mb-6 rounded-lg"
        />

        {/* Challenges & Learnings Section */}
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Challenges &amp; Learnings
        </h2>
        <p style={styles.text} className="mb-4">
          Creating a robust workflow that integrates various tools such as Git, Google Drive, and Telegram presented initial challenges.
          However, the automation significantly reduced the time taken from project completion to documentation.
        </p>

        {/* CTA Section */}
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          For more insights into featured projects, visit my portfolio
        </h2>
        <img
          src={PortfolioProjects}
          alt="Featured Projects from Nick.Js Portfolio"
          className="w-full h-auto mb-6 rounded-lg"
        />

        {/* Skills & Technologies Used Section */}
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
  )
}

export default AutomatedProjectPageGenerator