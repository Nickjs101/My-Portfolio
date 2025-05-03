import React from 'react';
import { projectStyles as styles } from './ProjectStyles';

import CoverImage from '../../assets/Works/pagegeneratorCover.png';
import InfoExtraction from '../../assets/Works/2InfoExtraction.png';
import ProjectListUpdate from '../../assets/Works/4ProjectListUpdate.png';
import FailedDeploymentNotification from '../../assets/Works/FailedDeploymentNotification.png';
import NetlifyDeployments from '../../assets/Works/NetlifyDeployments.png';
import ProjectPageGeneration from '../../assets/Works/3ProjectPageGeneration.png';

const AutomatedProjectPageGenerator = () => {
  const skills = [
    'Git',
    'n8n (workflow automation)',
    'AI language models (OpenAI GPT)',
    'Google Drive',
    'Bash',
    'Telegram',
    'Netlify',
  ];

  const links = [];

  const contentSections = [
    {
      heading: 'Overview',
      paragraphs:
        'The Automated Project Page Generator is a project aimed at streamlining the process of creating documentation pages for projects on my portfolio website. By leveraging AI and automation tools, this project minimizes manual coding and allows for faster deployment, enabling me to focus on generating creative ideas and building new projects.',
    },
    {
      heading: 'Goals',
      paragraphs: [
        'The primary goals of this project include:',
        'Automating the generation of project showcase pages.',
        'Simplifying the deployment process to my portfolio.',
        'Utilizing AI to produce code and content efficiently.',
      ],
    },
    {
      heading: 'Features / Workflow',
      paragraphs: [
        'The automated workflow consists of several key steps:',
        '1. Extract Project Information: Download files from Google Drive to gather project-related data.',
        '2. Generate Content: Use GPT models to create descriptive content for each project page.',
        '3. Code Generation: Convert the generated content into a structured React component format.',
        '4. Deployment: Automatically deploy pages to Netlify whenever updates are made.',
      ],
      images: [
        { src: InfoExtraction, alt: 'Information Extraction Workflow' },
        { src: ProjectListUpdate, alt: 'Update Project List Workflow' },
      ],
    },
    {
      heading: 'Architecture / Logic / Design',
      paragraphs:
        'The project utilizes a combination of tools and frameworks: n8n for automation workflows, handling various tasks including content generation and Git operations. GPT Models to facilitate the writing of project descriptions and validate code. Netlify for deploying the produced project pages seamlessly.',
    },
    {
      heading: 'Workflow Components',
      paragraphs: [
        'Page Writer: Generates project page content utilizing an AI model.',
        'Version Control Management: Facilitates cloning and pulling updates from a Git repository.',
        'Notification System: Sends alerts through Telegram for deployment successes or failures.',
      ],
      images: [
        {
          src: FailedDeploymentNotification,
          alt: 'Failed Deployment Notification Workflow',
        },
        { src: NetlifyDeployments, alt: 'Netlify Deploy Dashboard' },
      ],
    },
    {
      heading: 'Results / Evaluation',
      paragraphs:
        'This project has significantly optimized the way I create and manage project documentation by reducing manual effort and increasing speed. The automated processes minimize potential human errors and ensure that project showcases are always up to date.',
      image: { src: ProjectPageGeneration, alt: 'Project Page Code Generation' },
    },
    {
      heading: 'Challenges & Learnings',
      paragraphs: [
        'Implementing this automation system presented challenges such as:',
        'Ensuring that the AI-generated content was accurate and relevant.',
        'Managing different file formats and types when extracting project information.',
        'Debugging workflow connections within n8n to achieve a seamless user experience.',
        'Through this project, I have gained valuable insights into automation techniques and the integration of AI in software development.',
      ],
    },
  ];

  return (
    <div className="font-sans leading-relaxed tracking-wide flex flex-col items-center">
      <div className="max-w-4xl w-full p-0 md:p-6 rounded-lg">
        <img
          src={CoverImage}
          alt="Automated Project Page Generator Cover Image"
          className="w-full h-auto mb-6 rounded-lg"
        />

        <h1
          style={styles.heading}
          className="text-3xl lg:text-5xl font-bold mb-4"
        >
          Automated Project Page Generator
        </h1>

        {contentSections.map((section, idx) => (
          // eslint-disable-next-line react/no-array-index-key
          <section key={idx} className="mb-10 last:mb-0">
            <h2
              style={styles.heading}
              className="text-2xl font-semibold mb-4"
            >
              {section.heading}
            </h2>

            {Array.isArray(section.paragraphs) ? (
              section.paragraphs[0].startsWith(
                'The primary goals of this project include:',
              ) ||
              section.heading === 'Goals' ||
              section.heading === 'Challenges & Learnings' ? (
                <ul
                  style={styles.text}
                  className="list-disc list-inside mb-4 space-y-1"
                >
                  {section.paragraphs.map((para, i) => {
                    if (
                      para ===
                        'The primary goals of this project include:' ||
                      para ===
                        'Implementing this automation system presented challenges such as:'
                    ) {
                      return (
                        // eslint-disable-next-line react/no-array-index-key
                        <li key={i} className="font-semibold" aria-hidden="true">
                          {para.replace(':', '')}
                        </li>
                      );
                    }
                    // eslint-disable-next-line react/no-array-index-key
                    return <li key={i}>{para}</li>;
                  })}
                </ul>
              ) : (
                section.paragraphs.map((para, i) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <p key={i} style={styles.text} className="mb-4">
                    {para}
                  </p>
                ))
              )
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
          </section>
        ))}

        {links.length > 0 && (
          <div className="flex flex-col sm:flex-row justify-center gap-4 my-8">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold py-2 px-4 rounded-lg shadow-lg transition-colors duration-300"
                style={{
                  backgroundColor: 'var(--accent-primary)',
                  color: 'var(--text-primary)',
                }}
              >
                {link.label}
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