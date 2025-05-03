import React from 'react';
import { projectStyles as styles } from './ProjectStyles';

import PagegeneratorCover from '../../assets/Works/pagegeneratorCover.png';
import ProjectSetup from '../../assets/Works/1ProjectSetup.png';
import InfoExtraction from '../../assets/Works/2InfoExtraction.png';
import ProjectPageGeneration from '../../assets/Works/3ProjectPageGeneration.png';
import ProjectListUpdate from '../../assets/Works/4ProjectListUpdate.png';
import PushAndNotify from '../../assets/Works/5PushAndNotify.png';
import NetlifyDeployments from '../../assets/Works/NetlifyDeployments.png';
import RevertLatestProject from '../../assets/Works/RevertLatestProject.png';
import FailedDeploymentNotification from '../../assets/Works/FailedDeploymentNotification.png';

const AutomatedProjectPageGenerator = () => {
  const skills = [
    'Git',
    'GPT Language Models',
    'Google Drive',
    'Bash',
    'n8n',
    'Netlify',
    'Telegram',
  ];

  const links = [];

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

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Overview
        </h2>
        <p style={styles.text} className="mb-4">
          The Automated Project Page Generator is an innovative solution designed
          to streamline the process of creating project showcase pages for a
          portfolio website. By leveraging AI technologies, this project automates
          the generation of content and JavaScript code, facilitating a quicker
          deployment process. This automation allows developers to focus on
          developing new ideas and projects without getting bogged down by
          repetitive tasks.
        </p>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Goals
        </h2>
        <p style={styles.text} className="mb-4">
          The main objective of this project is to automate the creation of
          informative project pages that are easily deployable to my portfolio
          website. This automation not only enhances productivity but ensures that
          documentation remains consistent and professional.
        </p>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Features / Workflow
        </h2>
        <ul style={styles.text} className="list-disc list-inside mb-4">
          <li>
            <strong>Project Setup</strong>: The project starts by cloning the
            portfolio website using Git, setting it up for updates.
          </li>
          <li>
            <strong>Information Extraction</strong>: Automatically downloads and
            extracts project-related information from Google Drive, including
            images and descriptions.
          </li>
          <li>
            <strong>Content Generation</strong>: Utilizes the GPT language model
            to generate engaging content for the project page that is both
            informative and appealing.
          </li>
          <li>
            <strong>Code Generation</strong>: Converts generated content into a
            React component, ensuring that the project page is seamlessly
            integrated into the existing portfolio.
          </li>
          <li>
            <strong>Deployment</strong>: The automated pipeline ensures that the
            changes are pushed to GitHub and automatically deployed on Netlify.
          </li>
        </ul>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Architecture / Logic / Design
        </h2>
        <p style={styles.text} className="mb-4">
          This workflow is orchestrated through n8n, an automation tool that
          connects various steps in a visual format. The architecture involves
          several key nodes:
        </p>
        <ol style={styles.text} className="list-decimal list-inside mb-4">
          <li>
            <strong>Triggers</strong>: Initiates actions based on project folder
            creation.
          </li>
          <li>
            <strong>Data Extraction</strong>: Searches and downloads project files
            followed by image analysis for enhanced contextual content.
          </li>
          <li>
            <strong>Project Page Code Generation</strong>: Processes and generates
            the HTML/JSX outputs required for the project display.
          </li>
        </ol>

        <img
          src={ProjectSetup}
          alt="Workflow illustrating the initial setup process within the Automated Project Page Generator"
          className="w-full h-auto mb-6 rounded-lg"
        />

        <img
          src={InfoExtraction}
          alt="Detailing the information extraction process that integrates image analysis"
          className="w-full h-auto mb-6 rounded-lg"
        />

        <img
          src={ProjectPageGeneration}
          alt="Visualization of components responsible for generating content and converting it into a React-compatible format"
          className="w-full h-auto mb-6 rounded-lg"
        />

        <img
          src={ProjectListUpdate}
          alt="Showcasing the flow for updating the project list dynamically based on new inputs"
          className="w-full h-auto mb-6 rounded-lg"
        />

        <img
          src={PushAndNotify}
          alt="Step 5 of the workflow showing how updates are committed and notifications are sent through Telegram"
          className="w-full h-auto mb-6 rounded-lg"
        />

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Results / Evaluation
        </h2>
        <p style={styles.text} className="mb-4">
          The implementation of this automation has reduced the time spent on
          project documentation significantly, allowing more bandwidth to
          concentrate on actual project development and ideation. User feedback
          has highlighted superior satisfaction with the consistency and speed of
          the showcase updates.
        </p>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Challenges &amp; Learnings
        </h2>
        <p style={styles.text} className="mb-4">
          Throughout the development of this project, challenges included
          optimizing the AI model's outputs for coherence and accuracy in
          content generation. Moreover, ensuring that the automated pipeline was
          robust enough to handle various edge cases during deployment was a
          crucial learning point.
        </p>

        <img
          src={NetlifyDeployments}
          alt="Snapshot of the deployment history for the project on Netlify, showcasing how easy it is to manage updates"
          className="w-full h-auto mb-6 rounded-lg"
        />

        <img
          src={RevertLatestProject}
          alt="Illustrating the workflow to revert changes in case of deployment failures, ensuring continuity in operations"
          className="w-full h-auto mb-6 rounded-lg"
        />

        <img
          src={FailedDeploymentNotification}
          alt="Demonstrating the automatic notification setup to alert regarding deployment failures via Telegram"
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