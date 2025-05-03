import React from 'react';
import { projectStyles as styles } from './ProjectStyles';

import pagegeneratorCover from '/tmp/portfolio/src/assets/Works/pagegeneratorCover.png';
import PortfolioProjects from '/tmp/portfolio/src/assets/Works/PortfolioProjects.png';
import NetlifyDeployments from '/tmp/portfolio/src/assets/Works/NetlifyDeployments.png';
import RevertLatestProject from '/tmp/portfolio/src/assets/Works/RevertLatestProject.png';
import FailedDeploymentNotification from '/tmp/portfolio/src/assets/Works/FailedDeploymentNotification.png';
import PushAndNotify from '/tmp/portfolio/src/assets/Works/5PushAndNotify.png';
import ProjectListUpdate from '/tmp/portfolio/src/assets/Works/4ProjectListUpdate.png';
import ProjectPageGeneration from '/tmp/portfolio/src/assets/Works/3ProjectPageGeneration.png';
import InfoExtraction from '/tmp/portfolio/src/assets/Works/2InfoExtraction.png';
import ProjectSetup from '/tmp/portfolio/src/assets/Works/1ProjectSetup.png';

const AutomatedProjectPageGenerator = () => {
  const skills = [
    'Git',
    'GPT Language Models',
    'n8n Workflow Automation',
    'Google Drive',
    'Telegram API',
    'Netlify',
    'Bash Scripting',
  ];

  const links = [
    {
      label: 'GitHub',
      href: 'https://github.com/Nickjs101/My-Portfolio',
    },
  ];

  const contentSections = [
    {
      heading: 'Overview',
      paragraphs:
        'The Automated Project Page Generator addresses the repetitive task of creating project showcase pages for a portfolio website. With the integration of AI and various automation tools, this project simplifies the process of generating informative project pages, enabling users to focus on innovation and new ideas.',
    },
    {
      heading: 'Goals',
      paragraphs:
        'The primary goal of this project was to develop an automated system that generates content and structures for project pages. This system not only creates the necessary code but also facilitates easy deployment to the portfolio website, significantly saving time and effort.',
    },
    {
      heading: 'Features / Workflow',
      paragraphs: [
        'Automated Content Generation: Utilizes GPT language models to generate written content and necessary code snippets for project pages.',
        'Image Analysis: Employs GPT image models to analyze images and add contextual descriptions to the generated content.',
        'Version Control Integration: Leverages Git for cloning or copying the portfolio website, ensuring version control and easy updates.',
        'Notification System: Uses Telegram for notifying on important events such as deployment statuses.',
        'Hosting and Deployment: Hosts and deploys the generated project pages seamlessly using Netlify.',
      ],
    },
    {
      heading: 'Architecture / Logic / Design',
      paragraphs:
        'The project leverages several workflows within n8n, an automation tool, which outlines the processes to handle project page generation.',
    },
    {
      heading: '1. Project Setup',
      paragraphs:
        'Cleans temporary directories and sets up the project by cloning the Git repository.',
      image: { src: ProjectSetup, alt: 'Project Setup Workflow in n8n' },
    },
    {
      heading: '2. Information Extraction',
      paragraphs: 'Downloads project data and extracts necessary information.',
      image: { src: InfoExtraction, alt: 'Information Extraction Workflow in n8n' },
    },
    {
      heading: '3. Project Page Code Generation',
      paragraphs:
        'Converts extracted content into React components, validating and saving this code into appropriate directories.',
      image: { src: ProjectPageGeneration, alt: 'Project Page Code Generation in n8n' },
    },
    {
      heading: '4. Deployment Management',
      paragraphs:
        'Automatically pushes changes to GitHub and handles deployment to Netlify.',
      image: { src: ProjectListUpdate, alt: 'Project List Update Workflow in n8n' },
    },
    {
      heading: 'Workflow Visualizations',
      images: [
        { src: ProjectSetup, alt: 'Initial Setup Process in n8n Workflow' },
        { src: InfoExtraction, alt: 'Information Extraction Workflow' },
        { src: ProjectPageGeneration, alt: 'Project Page Code Generation' },
        { src: ProjectListUpdate, alt: 'Update Project List Workflow' },
        { src: PushAndNotify, alt: 'Save and Notify Step' },
      ],
    },
    {
      heading: 'Results / Evaluation',
      paragraphs:
        'The implementation of the Automated Project Page Generator resulted in a significant reduction in the time taken to create and deploy project pages. The automated processes are effective, error-free, and ensure a consistent format across the portfolio.',
    },
    {
      heading: 'Challenges & Learnings',
      paragraphs:
        'During the development phase, challenges included integrating various automation tools and ensuring smooth data flow among them. This project provided invaluable learnings on workflow management and the potential of AI in enhancing productivity. Implementing effective notification systems helped in monitoring deployment statuses and catching potential issues early.',
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

        <h1
          style={styles.heading}
          className="text-3xl lg:text-5xl font-bold mb-4"
        >
          Automated Project Page Generator
        </h1>

        {contentSections.map((section, index) => (
          <div key={index} className="mb-8">
            <h2
              style={styles.heading}
              className="text-2xl font-semibold mb-4"
            >
              {section.heading}
            </h2>

            {Array.isArray(section.paragraphs) ? (
              section.paragraphs.map((para, idx) => (
                <p style={styles.text} className="mb-4" key={idx}>
                  {para}
                </p>
              ))
            ) : (
              <p style={styles.text} className="mb-4">
                {section.paragraphs}
              </p>
            )}

            {section.image && (
              <img
                src={section.image.src}
                alt={section.image.alt}
                className="w-full h-auto mb-6 rounded-lg"
              />
            )}

            {section.images &&
              section.images.map((img, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <img
                  key={i}
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto mb-6 rounded-lg"
                />
              ))}
          </div>
        ))}

        {links.length > 0 && (
          <div className="flex flex-col sm:flex-row justify-center gap-4 my-8">
            {links.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold py-2 px-4 rounded-lg shadow-lg transition-colors duration-300"
                style={{
                  backgroundColor: 'var(--accent-primary)',
                  color: 'var(--text-primary)',
                }}
              >
                Explore on {link.label}
              </a>
            ))}
          </div>
        )}

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