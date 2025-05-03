import React from 'react';
import { projectStyles as styles } from './ProjectStyles';

import pagegeneratorCover from '../../assets/Works/pagegeneratorCover.png';
import projectSetup from '../../assets/Works/1ProjectSetup.png';
import infoExtraction from '../../assets/Works/2InfoExtraction.png';
import projectPageGeneration from '../../assets/Works/3ProjectPageGeneration.png';
import projectListUpdate from '../../assets/Works/4ProjectListUpdate.png';
import pushAndNotify from '../../assets/Works/5PushAndNotify.png';
import netlifyDeployments from '../../assets/Works/NetlifyDeployments.png';
import failedDeploymentNotification from '../../assets/Works/FailedDeploymentNotification.png';
import revertLatestProject from '../../assets/Works/RevertLatestProject.png';

const AutomatedProjectPageGenerator = () => {
  const skills = [
    'Git',
    'n8n',
    'GPT Language Models',
    'Google Drive',
    'Bash',
    'Telegram',
    'Netlify',
  ];

  return (
    <div className="font-sans leading-relaxed tracking-wide flex flex-col items-center">
      <div className="max-w-4xl w-full p-0 md:p-6 rounded-lg">
        <img
          src={pagegeneratorCover}
          alt="Automated Project Page Generator"
          className="w-full h-auto mb-6 rounded-lg"
        />

        <h1
          style={styles.heading}
          className="text-3xl lg:text-5xl font-bold mb-4"
        >
          Automated Project Page Generator
        </h1>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Overview
        </h2>
        <p style={styles.text} className="mb-4">
          The <strong>Automated Project Page Generator</strong> is a tool designed to streamline the process of creating project showcase pages for a portfolio website. By leveraging AI for content generation and coding, it enables users to efficiently deploy project documentation without the manual hassle of coding and content writing. This allows creators to focus more effectively on developing new ideas and projects.
        </p>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Goals
        </h2>
        <ul style={styles.text} className="list-disc list-inside mb-4">
          <li>Automate the generation of project pages.</li>
          <li>Simplify the deployment process to a portfolio website.</li>
          <li>Enhance the efficiency of documenting new projects.</li>
        </ul>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Features / Workflow
        </h2>
        <p style={styles.text} className="mb-2">
          The system integrates various tools and workflows to achieve its goals:
        </p>
        <ol style={styles.text} className="list-decimal list-inside mb-4 space-y-2">
          <li>
            <strong>Information Extraction</strong>
            <ul className="list-disc list-inside ml-5 mt-1">
              <li>Uses Google Drive to acquire project details and files.</li>
              <li>AI-driven image analysis to describe and contextualize images.</li>
            </ul>
          </li>
          <li>
            <strong>Project Page Code Generation</strong>
            <ul className="list-disc list-inside ml-5 mt-1">
              <li>
                Processes project descriptions and transforms them into structured React components using GPT models for enhanced automation.
              </li>
            </ul>
          </li>
          <li>
            <strong>Deployment Notification</strong>
            <ul className="list-disc list-inside ml-5 mt-1">
              <li>Integrates with Telegram to notify upon successful deployments or failures.</li>
              <li>Utilizes Netlify for fast and reliable deployment, leveraging the seamless connection to GitHub.</li>
            </ul>
          </li>
          <li>
            <strong>Version Control Management</strong>
            <ul className="list-disc list-inside ml-5 mt-1">
              <li>Employs Git for code management by automating commits and reverts through n8n workflows.</li>
            </ul>
          </li>
        </ol>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Architecture / Logic / Design
        </h2>
        <p style={styles.text} className="mb-4">
          The project utilizes a series of n8n workflows to manage the automation process:
        </p>
        <ul style={styles.text} className="list-disc list-inside mb-4">
          <li>
            <strong>Automated Project Page Generator Workflow</strong>: Handles the overall logic including:
            <ul className="list-disc list-inside ml-5 mt-1">
              <li>Extraction of project data and images.</li>
              <li>Generation of page content with AI assistance.</li>
              <li>Validation and saving of generated code.</li>
              <li>Notifications for deployment outcomes.</li>
            </ul>
          </li>
        </ul>

        <img
          src={projectSetup}
          alt="Automated Project Page Generator - n8n Workflow"
          className="w-full h-auto mb-6 rounded-lg"
        />
        <img
          src={infoExtraction}
          alt="Information Extraction Workflow"
          className="w-full h-auto mb-6 rounded-lg"
        />
        <img
          src={projectPageGeneration}
          alt="Project Page Code Generation"
          className="w-full h-auto mb-6 rounded-lg"
        />
        <img
          src={projectListUpdate}
          alt="Update Project List Workflow"
          className="w-full h-auto mb-6 rounded-lg"
        />
        <img
          src={pushAndNotify}
          alt="Save and Notify Workflow"
          className="w-full h-auto mb-6 rounded-lg"
        />

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Results / Evaluation
        </h2>
        <p style={styles.text} className="mb-4">
          The effective integration of this automation system has greatly enhanced the workflow of creating project pages. This has significantly reduced the time spent on documentation while increasing the accuracy and presentation quality of the generated pages. Continuous improvements can be made based on deployment feedback and user interaction.
        </p>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Challenges &amp; Learnings
        </h2>
        <ul style={styles.text} className="list-disc list-inside mb-4 space-y-2">
          <li>
            <strong>Integration Complexity</strong>: Merging multiple APIs and services posed challenges,
            requiring significant testing and adjustments.
          </li>
          <li>
            <strong>AI Limitations</strong>: Initially, the GPT models sometimes generated inadequate coding
            output, necessitating additional validations.
          </li>
          <li>
            <strong>Deployment Setup</strong>: Configuration of deployment environments on Netlify required
            careful attention to detail to ensure seamless operations.
          </li>
        </ul>

        <img
          src={netlifyDeployments}
          alt="Netlify Deploy Dashboard"
          className="w-full h-auto mb-6 rounded-lg"
        />
        <img
          src={failedDeploymentNotification}
          alt="Failed Deployment Notification Workflow"
          className="w-full h-auto mb-6 rounded-lg"
        />
        <img
          src={revertLatestProject}
          alt="Revert Latest GitHub Changes - n8n Workflow"
          className="w-full h-auto mb-6 rounded-lg"
        />

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