import React from 'react';
import { projectStyles as styles } from './ProjectStyles';

import pagegeneratorCover from '../../assets/Works/pagegeneratorCover.png';
import infoExtraction from '../../assets/Works/2InfoExtraction.png';
import projectPageGeneration from '../../assets/Works/3ProjectPageGeneration.png';
import projectListUpdate from '../../assets/Works/4ProjectListUpdate.png';
import failedDeploymentNotification from '../../assets/Works/FailedDeploymentNotification.png';
import netlifyDeployments from '../../assets/Works/NetlifyDeployments.png';
import revertLatestProject from '../../assets/Works/RevertLatestProject.png';
import pushAndNotify from '../../assets/Works/5PushAndNotify.png';
import projectSetup from '../../assets/Works/1ProjectSetup.png';

const AutomatedProjectPageGenerator = () => {
  const skills = [
    'Git',
    'GitHub',
    'GPT Language Models',
    'GPT Image Models',
    'Google Drive API',
    'n8n Workflows',
    'Bash Scripting',
    'Netlify',
    'React Component Generation',
    'Telegram API',
  ];

  // links is declared but not used; removing to avoid unused variable warning
  // const links = [];

  return (
    <div className="font-sans leading-relaxed tracking-wide flex flex-col items-center">
      <div className="max-w-4xl w-full p-0 md:p-6 rounded-lg">
        {/* Cover Image */}
        <img
          src={pagegeneratorCover}
          alt="Automated Project Page Generator Cover"
          className="w-full h-auto mb-6 rounded-lg"
        />

        {/* Project Title */}
        <h1 style={styles.heading} className="text-3xl lg:text-5xl font-bold mb-4">
          Automated Project Page Generator
        </h1>

        {/* Overview Section */}
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Overview
        </h2>
        <p style={styles.text} className="mb-4">
          The <strong>Automated Project Page Generator</strong> is a project
          developed to streamline the process of creating project showcase pages
          for a portfolio website. By leveraging AI technologies, it automates
          the generation of project content and code, allowing for quicker
          updates and a greater focus on new ideas and projects.
        </p>

        {/* Goals Section */}
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Goals
        </h2>
        <p style={styles.text} className="mb-4">
          The primary objective of this project is to eliminate the manual task
          of creating project showcase pages, enabling the developer to
          efficiently manage updates and enhance their portfolio without
          compromising creativity.
        </p>

        {/* Features / Workflow Section */}
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Features / Workflow
        </h2>
        <ul style={styles.text} className="list-disc list-inside mb-4">
          <li>
            <strong>Project Cloning and Setup</strong>: The tool utilizes Git
            for cloning the portfolio repository and managing project updates.
          </li>
          <li>
            <strong>Content Generation</strong>: By employing advanced GPT
            language models, the application generates informative content
            tailored for each project.
          </li>
          <li>
            <strong>Image Analysis</strong>: Using GPT image models, the
            workflow analyzes images pertaining to projects, generating
            contextual descriptions that enhance the overall showcase quality.
          </li>
          <li>
            <strong>Deployment</strong>: Integration with Netlify allows for
            the seamless deployment of updated project pages.
          </li>
        </ul>

        {/* Architecture / Logic / Design Section */}
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Architecture / Logic / Design
        </h2>
        <p style={styles.text} className="mb-6">
          The project architecture consists of a systematic workflow built in{' '}
          <strong>n8n</strong> that encompasses various stages:
        </p>

        <ol
          style={styles.text}
          className="list-decimal list-inside mb-6 space-y-6 max-w-3xl mx-auto"
        >
          <li>
            <p className="mb-2 font-semibold">
              Information Extraction: Retrieving files and their content from
              Google Drive.
            </p>
            <img
              src={infoExtraction}
              alt="Automated Project Page Generator - Information Extraction Workflow"
              className="w-full h-auto mb-2 rounded-lg"
            />
            <p style={styles.text} className="italic text-center mb-4">
              Visual representation of the information extraction stage.
            </p>
          </li>

          <li>
            <p className="mb-2 font-semibold">
              Content Creation: Generating project descriptions and necessary
              HTML/JSX code using AI.
            </p>
            <img
              src={projectPageGeneration}
              alt="Automated Project Page Generator - Project Page Code Generation"
              className="w-full h-auto mb-2 rounded-lg"
            />
            <p style={styles.text} className="italic text-center mb-4">
              Workflow demonstrating the content generation process.
            </p>
          </li>

          <li>
            <p className="mb-2 font-semibold">
              Code Validation and Updating: Validating the generated code and
              saving it to the correct project folder.
            </p>
            <img
              src={projectListUpdate}
              alt="Automated Project Page Generator - Project Page Code Updating"
              className="w-full h-auto mb-2 rounded-lg"
            />
            <p style={styles.text} className="italic text-center mb-4">
              Workflow connected to project code updates.
            </p>
          </li>

          <li>
            <p className="mb-2 font-semibold">
              Deployment Notification: Notifications sent through Telegram in
              case of deployment failures.
            </p>
            <img
              src={failedDeploymentNotification}
              alt="Failed Deployment Notification Workflow"
              className="w-full h-auto mb-2 rounded-lg"
            />
            <p style={styles.text} className="italic text-center mb-4">
              Example of notification setup in case of deployment failure.
            </p>
          </li>

          <li>
            <p className="mb-2 font-semibold">
              Final Deployment: Automated pushing of the changes to GitHub and
              deploying them via Netlify.
            </p>
            <img
              src={netlifyDeployments}
              alt="Netlify Deploy Dashboard showcasing deployment history"
              className="w-full h-auto mb-2 rounded-lg"
            />
            <p style={styles.text} className="italic text-center mb-4">
              Netlify deploy dashboard showcasing deployment history.
            </p>
          </li>
        </ol>

        {/* Additional Workflow Images */}
        <div className="mb-6 space-y-6">
          <img
            src={revertLatestProject}
            alt="Revert Latest GitHub Changes Workflow (n8n)"
            className="w-full h-auto rounded-lg"
          />
          <img
            src={pushAndNotify}
            alt="Automated Project Page Generator - Push and Notify Workflow"
            className="w-full h-auto rounded-lg"
          />
          <img
            src={projectSetup}
            alt="Automated Project Page Generator - Project Setup Workflow"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Challenges & Learnings Section */}
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Challenges &amp; Learnings
        </h2>
        <p style={styles.text} className="mb-6">
          The project has presented unique challenges, particularly in ensuring
          smooth automation between the various AI models, Git operations, and
          deployment steps. Key learnings include understanding the intricacies
          of integrating multiple services and making the debugging process more
          efficient through structured workflows.
        </p>

        {/* Skills & Technologies Section */}
        <h2 style={styles.heading} className="text-2xl font-bold mb-4">
          Skills &amp; Technologies Used
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
  );
};

export default AutomatedProjectPageGenerator;