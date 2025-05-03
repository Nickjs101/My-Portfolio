import React from 'react';
import { projectStyles as styles } from './ProjectStyles';

import pagegeneratorCover from '../../assets/Works/pagegeneratorCover.png';
import infoExtraction from '../../assets/Works/2InfoExtraction.png';
import projectListUpdate from '../../assets/Works/4ProjectListUpdate.png';
import projectPageGeneration from '../../assets/Works/3ProjectPageGeneration.png';
import netlifyDeployments from '../../assets/Works/NetlifyDeployments.png';
import failedDeploymentNotification from '../../assets/Works/FailedDeploymentNotification.png';
import pushAndNotify from '../../assets/Works/5PushAndNotify.png';
import revertLatestProject from '../../assets/Works/RevertLatestProject.png';
import projectSetup from '../../assets/Works/1ProjectSetup.png';

const AutomatedProjectPageGenerator = () => {
  const skills = [
    'Git',
    'GPT Language Models',
    'GPT Image Model',
    'Google Drive',
    'Bash',
    'Netlify',
    'n8n',
    'Telegram',
  ];

  const links = [];

  return (
    <div className="font-sans leading-relaxed tracking-wide flex flex-col items-center">
      <div className="max-w-4xl w-full p-0 md:p-6 rounded-lg">
        <img
          src={pagegeneratorCover}
          alt="Automated Project Page Generator cover image"
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
          The Automated Project Page Generator is a project that streamlines the
          process of generating showcase pages for portfolio websites. This tool
          automates the content creation process with the help of AI, allowing
          developers to focus more on their ideas and projects rather than the
          tedious task of manual page coding.
        </p>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Goals
        </h2>
        <p style={styles.text} className="mb-4">
          The primary goal of this project is to automate the generation of
          project pages, which not only saves time but also enhances efficiency
          in managing and showcasing multiple projects.
        </p>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Features / Workflow
        </h2>
        <ul style={styles.text} className="list-disc list-inside mb-4">
          <li>
            <strong>Content Generation</strong>: Utilizes GPT language models to
            generate informative content and code for the project pages.
          </li>
          <li>
            <strong>Template-Based Code Creation</strong>: Creates structured
            templates that can be easily adjusted and deployed.
          </li>
          <li>
            <strong>Image Analysis</strong>: Employs a GPT image model to analyze
            project images for context enhancement.
          </li>
          <li>
            <strong>Directory Management</strong>: Uses Bash for managing
            directories related to cloned projects to automate file handling.
          </li>
          <li>
            <strong>Deployment</strong>: Automatically deploys the generated pages
            using Netlify.
          </li>
        </ul>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Architecture / Logic / Design
        </h2>
        <p style={styles.text} className="mb-4">
          The tool operates via multiple integrated workflows in{' '}
          <strong>n8n</strong>, including:
        </p>
        <ol style={styles.text} className="list-decimal list-inside mb-4">
          <li>
            <strong>Recreate Project</strong>: Initiates workflow when a project
            folder is created.
          </li>
          <li>
            <strong>Information Extraction</strong>: Downloads project details from
            Google Drive, extracts necessary information, and prepares it for
            content generation.
          </li>
          <li>
            <strong>Automation Workflows</strong>: Various workflows such as page
            content creation, project list updates, and deployment notifications
            integrate seamlessly to ensure smooth operation.
          </li>
        </ol>
        <img
          src={infoExtraction}
          alt="Information Extraction Workflow in n8n"
          className="w-full h-auto mb-6 rounded-lg"
        />
        <img
          src={projectListUpdate}
          alt="Automated Project Page Generator - Update Project List Workflow"
          className="w-full h-auto mb-6 rounded-lg"
        />
        <img
          src={projectPageGeneration}
          alt="Automated Project Page Generator - n8n Workflow"
          className="w-full h-auto mb-6 rounded-lg"
        />

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Results / Evaluation
        </h2>
        <p style={styles.text} className="mb-4">
          By implementing this automation tool, the process of creating,
          showcasing, and deploying project pages becomes significantly more
          efficient, which contributes to a quicker turnaround in showcasing new
          ideas and projects.
        </p>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Challenges & Learnings
        </h2>
        <ul style={styles.text} className="list-disc list-inside mb-4">
          <li>
            <strong>Integration Complexity</strong>: Combining various tools and
            ensuring seamless operation was initially challenging.
          </li>
          <li>
            <strong>Error Handling</strong>: Developing robust error handling for
            failed deployments and ensuring effective notifications through
            Telegram was critical.
          </li>
          <li>
            <strong>Continuous Improvement</strong>: Feedback from users enables
            further enhancements and updates to the workflow.
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
          alt="Revert Latest Github Changes Workflow"
          className="w-full h-auto mb-6 rounded-lg"
        />
        <img
          src={pushAndNotify}
          alt="Automated Project Page Generator - Push and Notify Workflow"
          className="w-full h-auto mb-6 rounded-lg"
        />
        <img
          src={projectSetup}
          alt="Automated Project Page Generator - Project Setup Workflow"
          className="w-full h-auto mb-6 rounded-lg"
        />

        {links.length > 0 && (
          <div className="flex flex-col sm:flex-row justify-center gap-4 my-8">
            {links.map(({ label, href }, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <a
                key={index}
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
        )}

        <h2 style={styles.heading} className="text-2xl font-bold mb-4">
          Skills & Technologies Used
        </h2>
        <div className="flex flex-wrap mb-4">
          {skills.map((skill, index) => (
            // eslint-disable-next-line react/no-array-index-key
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