import React from 'react';
import { projectStyles as styles } from './ProjectStyles';

import pagegeneratorCover from '../../assets/Works/pagegeneratorCover.png';
import PortfolioProjects from '../../assets/Works/PortfolioProjects.png';
import NetlifyDeployments from '../../assets/Works/NetlifyDeployments.png';
import RevertLatestProject from '../../assets/Works/RevertLatestProject.png';
import FailedDeploymentNotification from '../../assets/Works/FailedDeploymentNotification.png';
import _5PushAndNotify from '../../assets/Works/5PushAndNotify.png';
import _4ProjectListUpdate from '../../assets/Works/4ProjectListUpdate.png';
import _3ProjectPageGeneration from '../../assets/Works/3ProjectPageGeneration.png';
import _2InfoExtraction from '../../assets/Works/2InfoExtraction.png';
import _1ProjectSetup from '../../assets/Works/1ProjectSetup.png';

const AutomatedProjectPageGenerator = () => {
  const skills = [
    'n8n Automation Platform',
    'Git',
    'GPT Language Models',
    'Google Drive',
    'Bash',
    'Telegram',
    'Netlify',
  ];

  const links = [
    {
      label: 'Deployment Dashboard',
      href: 'https://nickjsportfolio.netlify.app',
    },
    {
      label: 'Featured Projects Complex',
      href: 'https://github.com/nickjs101/My-Portfolio',
    },
  ];

  const contentSections = [
    {
      heading: 'Overview',
      paragraphs:
        'The Automated Project Page Generator is designed to streamline the process of creating project showcase pages for my portfolio website. By leveraging AI technology and automation tools, this project simplifies page generation, allowing me to focus more on innovation and idea development.',
    },
    {
      heading: 'Goals',
      paragraphs: [
        'The primary goal of this project is to minimize the manual effort involved in creating project pages by:',
        'Automatically generating informative content.',
        'Streamlining the deployment process to my website.',
      ],
    },
    {
      heading: 'Features / Workflow',
      paragraphs: [
        'The project utilizes a series of automated workflows in n8n, which performs several critical tasks:',
      ],
      images: [{ src: _2InfoExtraction, alt: 'Information Extraction Workflow' }],
    },
    {
      heading: 'Information Extraction',
      paragraphs: 'Gathers project data and images from Google Drive.',
      image: { src: _2InfoExtraction, alt: 'Information Extraction Workflow' },
    },
    {
      heading: 'Project Page Code Generation',
      paragraphs:
        'Utilizes GPT models to create the HTML and JavaScript necessary for the project pages.',
      image: { src: _3ProjectPageGeneration, alt: 'Project Page Code Generation Workflow' },
    },
    {
      heading: 'Update Project List',
      paragraphs:
        'Maintains an updated list of projects, integrating newly generated content into the existing framework.',
      image: { src: _4ProjectListUpdate, alt: 'Project List Update Workflow' },
    },
    {
      heading: 'Deployment Notifications',
      paragraphs:
        'Monitors deployment statuses via Netlify and sends notifications through Telegram for both successful and failed deployments.',
      image: { src: FailedDeploymentNotification, alt: 'Failed Deployment Notification' },
    },
    {
      heading: 'Reversion Workflow',
      paragraphs: 'Allows for reverting to a previous state in case of deployment failures.',
      image: { src: RevertLatestProject, alt: 'Revert Latest GitHub Changes Workflow' },
    },
    {
      heading: 'Architecture / Logic / Design',
      paragraphs: [
        'This automation is structured on a solid foundation using tools that include:',
      ].concat([
        'Git for version control.',
        'GPT Language Models for generating content and code.',
        'Google Drive for cloud storage and management.',
        'Bash scripting for handling local directory operations.',
        'Netlify as the deployment platform.',
      ]),
    },
    {
      heading: 'Results / Evaluation',
      paragraphs: [
        'By implementing this solution, I observed improvements in my workflow efficiency:',
        'Significant reduction in the time required to create and update project pages.',
        'Enhanced consistency in page quality and content accuracy thanks to AI-assisted content generation.',
      ],
    },
    {
      heading: 'Challenges & Learnings',
      paragraphs: [
        'Some challenges encountered included:',
        'Integrating various tools into a seamless workflow, which required careful configuration.',
        'Debating on how to best utilize AI models to extract meaningful content from the gathered project data.',
        'This project has underscored the importance of automation in enhancing productivity, particularly for developers and content creators.',
      ],
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

        {contentSections.map((section, idx) => (
          /* eslint-disable react/no-array-index-key */
          <div key={idx} className="mb-8">
            <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
              {section.heading}
            </h2>

            {Array.isArray(section.paragraphs) ? (
              <ul style={styles.text} className="list-disc list-inside mb-4">
                {section.paragraphs.map((para, i) => (
                  <li key={i} className="mb-1">
                    {para}
                  </li>
                ))}
              </ul>
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
            {links.map(({ label, href }, index) => (
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

        {links[0] && (
          <img
            src={NetlifyDeployments}
            alt="Netlify Deployment Dashboard"
            className="w-full h-auto mb-6 rounded-lg"
          />
        )}

        {links[1] && (
          <img
            src={PortfolioProjects}
            alt="Featured Projects - Nick.Js Portfolio"
            className="w-full h-auto mb-6 rounded-lg"
          />
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