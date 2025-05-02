import React from 'react';
import { projectStyles as styles } from './ProjectStyles';

import pagegeneratorCover from '../../assets/Works/pagegeneratorCover.png';
import NetlifyDeployments from '../../assets/Works/NetlifyDeployments.png';
import _1ProjectSetup from '../../assets/Works/1ProjectSetup.png';
import _2InfoExtraction from '../../assets/Works/2InfoExtraction.png';
import _3ProjectPageGeneration from '../../assets/Works/3ProjectPageGeneration.png';
import _5PushAndNotify from '../../assets/Works/5PushAndNotify.png';
import FailedDeploymentNotification from '../../assets/Works/FailedDeploymentNotification.png';

const AutomatedProjectPageGenerator = () => {
  const skills = [
    'Git',
    'GPT Language Models',
    'Google Drive API',
    'n8n Automation',
    'Bash Scripting',
    'Telegram API',
    'Netlify',
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
          src={pagegeneratorCover}
          alt="Automated Project Page Generator"
          className="w-full h-auto mb-6 rounded-lg"
        />

        <h1 style={styles.heading} className="text-3xl lg:text-5xl font-bold mb-4">
          Automated Project Page Generator
        </h1>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">Overview</h2>
        <p style={styles.text} className="mb-4">
          The <strong>Automated Project Page Generator</strong> is a tool developed to streamline the creation of showcase pages for project documentation on personal portfolio websites. By leveraging AI technology, this project automates the generation of content and code, allowing developers to focus more on innovation rather than repetitive tasks.
        </p>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">Goals</h2>
        <p style={styles.text} className="mb-4">
          The main goal of this project is to <strong>automate the generation of project content</strong> and deploy it effortlessly to my site, thereby enhancing productivity and enabling more time for developing new ideas and projects.
        </p>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">Features / Workflow</h2>
        <ul style={styles.text} className="list-disc list-inside mb-4">
          <li><strong>Automated Workflow Creation:</strong> Utilizes n8n as an automation tool to streamline the generation process.</li>
          <li><strong>AI Content Generation:</strong> Incorporates GPT language models for generating web content based on project details, ensuring pages are informative and well-structured.</li>
          <li><strong>Image Analysis:</strong> Employs a GPT image model to analyze images for contextual relevance, automatically integrating descriptions into the generated content.</li>
          <li><strong>Deployment and Notifications:</strong> Automatically deploys the generated pages using Netlify and sends notifications through Telegram regarding the deployment status.</li>
        </ul>

        <img
          src={NetlifyDeployments}
          alt="Netlify dashboard displaying deployment statuses for the portfolio site"
          className="w-full h-auto mb-6 rounded-lg"
        />

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Architecture / Logic / Design
        </h2>
        <p style={styles.text} className="mb-4">
          The system features a structured workflow that includes several interconnected stages:
        </p>
        <ol style={styles.text} className="list-decimal list-inside mb-4">
          <li>
            <strong>Project Setup:</strong>
            <ul className="list-disc list-inside ml-6">
              <li>Clones the project repository from GitHub.</li>
              <li>Configures local settings for Git operations.</li>
            </ul>
          </li>
        </ol>

        <img
          src={_1ProjectSetup}
          alt="Initial setup of the project folder, ready for automation"
          className="w-full h-auto mb-6 rounded-lg"
        />

        <ol start={2} style={styles.text} className="list-decimal list-inside mb-4">
          <li>
            <strong>Information Extraction:</strong>
            <ul className="list-disc list-inside ml-6">
              <li>Retrieves project details and image data from Google Drive.</li>
              <li>Uses conditional logic to process images and descriptions.</li>
            </ul>
          </li>
        </ol>

        <img
          src={_2InfoExtraction}
          alt="Workflow focusing on extracting necessary file information for project content generation"
          className="w-full h-auto mb-6 rounded-lg"
        />

        <ol start={3} style={styles.text} className="list-decimal list-inside mb-4">
          <li>
            <strong>Code Generation:</strong>
            <ul className="list-disc list-inside ml-6">
              <li>Generates project showcase pages in JSX/React format using AI.</li>
              <li>Validates the generated code to ensure correctness.</li>
            </ul>
          </li>
        </ol>

        <img
          src={_3ProjectPageGeneration}
          alt="Workflow demonstrating the automation of project page code generation"
          className="w-full h-auto mb-6 rounded-lg"
        />

        <ol start={4} style={styles.text} className="list-decimal list-inside mb-4">
          <li>
            <strong>File Management:</strong>
            <ul className="list-disc list-inside ml-6">
              <li>Updates project file lists and pushes changes to GitHub.</li>
              <li>Notifies users of the success or failure of the operations via Telegram.</li>
            </ul>
          </li>
        </ol>

        <img
          src={_5PushAndNotify}
          alt="Automation of pushing changes and notifying users on Telegram"
          className="w-full h-auto mb-6 rounded-lg"
        />

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">Results / Evaluation</h2>
        <p style={styles.text} className="mb-4">
          The tool successfully automates the process of page generation, resulting in faster deployment of project showcases and enabling the developer to concentrate on creating more innovative projects rather than mundane documentation tasks.
        </p>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">Challenges &amp; Learnings</h2>
        <p style={styles.text} className="mb-4">
          Several challenges were encountered during the development, including:
        </p>
        <ul style={styles.text} className="list-disc list-inside mb-4">
          <li>Integrating AI models for content generation and ensuring they produce relevant content.</li>
          <li>Managing directory structures and ensuring that workflows execute in the correct sequence.</li>
          <li>Establishing effective notification systems that provide real-time updates on project deployments.</li>
        </ul>

        <img
          src={FailedDeploymentNotification}
          alt="An automated notification workflow responding to deployment failures, showcasing robustness in error handling"
          className="w-full h-auto mb-6 rounded-lg"
        />

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">For More Information</h2>
        <div className="flex justify-center mb-8">
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

        <h2 style={styles.heading} className="text-2xl font-bold mb-4">Skills &amp; Technologies Used</h2>
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