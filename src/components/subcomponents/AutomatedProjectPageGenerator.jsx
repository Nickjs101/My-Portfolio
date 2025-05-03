import React from 'react';
import { projectStyles as styles } from './ProjectStyles';
import pagegeneratorCover from '../../assets/Works/pagegeneratorCover.png';
import InfoExtraction from '../../assets/Works/2InfoExtraction.png';
import ProjectPageGeneration from '../../assets/Works/3ProjectPageGeneration.png';
import ProjectListUpdate from '../../assets/Works/4ProjectListUpdate.png';
import PushAndNotify from '../../assets/Works/5PushAndNotify.png';
import ProjectSetup from '../../assets/Works/1ProjectSetup.png';
import RevertLatestProject from '../../assets/Works/RevertLatestProject.png';
import FailedDeploymentNotification from '../../assets/Works/FailedDeploymentNotification.png';
import NetlifyDeployments from '../../assets/Works/NetlifyDeployments.png';

const AutomatedProjectPageGenerator = () => {
  const skills = [
    'Git',
    'n8n',
    'GPT Language Models',
    'Google Drive',
    'Bash',
    'Telegram API',
    'Netlify',
  ];

  const links = [
    {
      label: 'Explore the Project on GitHub',
      href: 'https://github.com/Nickjs101/My-Portfolio',
    },
    { label: 'Visit the Live Site', href: 'https://nickjsportfolio.netlify.app' },
  ];

  const contentSections = [
    {
      heading: 'Overview',
      paragraphs:
        'The Automated Project Page Generator is designed to streamline the process of creating showcase pages for my portfolio website. By automating the code generation and content creation using AI, this project enables me to focus on new ideas and projects rather than getting bogged down in manual documentation tasks.',
      image: { src: pagegeneratorCover, alt: 'Automated Project Page Generator interface' },
    },
    {
      heading: 'Goals',
      paragraphs:
        'The primary goal is to automate the generation of project showcase pages efficiently while ensuring that the content is informative and relevant. This project leverages AI technologies to simplify coding and reduce the time spent on repetitive tasks.',
    },
    {
      heading: 'Features / Workflow',
      paragraphs: [
        'Content Generation: Utilizes GPT language models for creating page content dynamically.',
        'Image Analysis: Implements GPT image models to analyze images and add context, enriching the project descriptions.',
        'Directory Management: Uses Bash scripts to handle directories for storing and organizing the cloned projects.',
        'Notifications: Integrates with Telegram to send real-time updates on deployment and process status.',
        'Deployment Automation: Automatically deploys updated content to a live website using Netlify.',
        "Here's an example of the workflow interface in n8n for the content generation step:",
      ],
      image: { src: InfoExtraction, alt: 'Automated Project Page Generator – n8n Workflow' },
    },
    {
      heading: 'Architecture / Logic / Design',
      paragraphs: [
        'The architecture primarily consists of various interconnected nodes within n8n for handling different tasks:',
        '1. File Handling: Automates the search and download of project-related files from Google Drive.',
        '2. Content Extraction and Combination: Extracts project descriptions and combines them with image information for coherent content.',
        '3. Code Generation: Composes JSX code that represents the project page layout and content with React components.',
        '4. Version Control Integration: The workflow integrates with Git to clone the repository, manage commits, and push changes.',
        'An overview of the entire setup in n8n can be seen here:',
      ],
      image: { src: ProjectSetup, alt: 'Automated Project Page Generator (from n8n)' },
    },
    {
      heading: 'Results / Evaluation',
      paragraphs:
        'This project has significantly reduced the manual effort involved in preparing project pages for my portfolio. With the integration of AI for content generation and automation tools, I can now deploy updates faster and effortlessly keep my portfolio current.',
    },
    {
      heading: 'Challenges & Learnings',
      paragraphs: [
        'N8n Workflow Complexities: Integrating multiple workflows required careful planning to avoid complications in data flow.',
        'Deployments: Managing deployments automatically triggered by version control events was initially challenging but was resolved with thorough error handling.',
        'Image Contextualization: Ensuring the AI-generated descriptions align with the actual content proved to be a learning curve.',
        'Deployment status and performance can be monitored via the Netlify dashboard:',
      ],
      image: { src: NetlifyDeployments, alt: 'Deploys for nickjsportfolio' },
    },
    {
      heading: 'CTA Section',
      paragraphs: links.map(({ label, href }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold py-2 px-4 rounded-lg shadow-lg transition-colors duration-300"
          style={{
            backgroundColor: 'var(--accent-primary)',
            color: 'var(--text-primary)',
            display: 'inline-block',
            marginRight: '1rem',
            marginBottom: '1rem',
          }}
        >
          {label}
        </a>
      )),
    },
  ];

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
        {contentSections.map((section, index) => (
          <section key={index} className="mb-8">
            <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
              {section.heading}
            </h2>
            {Array.isArray(section.paragraphs) ? (
              section.paragraphs.map((para, i) =>
                typeof para === 'string' ? (
                  <p key={i} style={styles.text} className="mb-4">
                    {para}
                  </p>
                ) : (
                  para
                )
              )
            ) : (
              <p style={styles.text} className="mb-4">{section.paragraphs}</p>
            )}
            {section.image && (
              <img
                src={section.image.src}
                alt={section.image.alt}
                className="w-full h-auto mb-6 rounded-lg"
              />
            )}
          </section>
        ))}

        <h2 style={styles.heading} className="text-2xl font-bold mb-4">
          Skills & Technologies Used
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