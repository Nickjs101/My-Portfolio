import React from 'react';
import { projectStyles as styles } from './ProjectStyles';

import pagegeneratorCover from '../../assets/Works/pagegeneratorCover.png';
import PortfolioProjects from '../../assets/Works/PortfolioProjects.png';
import NetlifyDeployments from '../../assets/Works/NetlifyDeployments.png';
import RevertLatestProject from '../../assets/Works/RevertLatestProject.png';
import FailedDeploymentNotification from '../../assets/Works/FailedDeploymentNotification.png';
import FifthPushAndNotify from '../../assets/Works/5PushAndNotify.png';
import ProjectListUpdate from '../../assets/Works/4ProjectListUpdate.png';
import ProjectPageGeneration from '../../assets/Works/3ProjectPageGeneration.png';
import InfoExtraction from '../../assets/Works/2InfoExtraction.png';
import ProjectSetup from '../../assets/Works/1ProjectSetup.png';

const AutomatedProjectPageGenerator = () => {
  const skills = [
    'Git',
    'GPT Language Models',
    'Google Drive API',
    'n8n Automation Tool',
    'Bash Scripting',
    'Telegram API',
    'Netlify',
  ];

  const links = [];

  const contentSections = [
    {
      heading: 'Overview',
      paragraphs:
        'The Automated Project Page Generator is designed to streamline the creation of project showcase pages for a portfolio website. By employing AI to generate content and code templates, this tool significantly reduces the manual effort required to document projects, allowing developers to focus on innovation and new ideas.',
    },
    {
      heading: 'Goals',
      paragraphs:
        'The primary goal of this project was to automate the generation of project showcase pages, thus simplifying the deployment process and improving efficiency. It leverages advanced AI models to create informative content quickly.',
    },
    {
      heading: 'Features / Workflow',
      paragraphs: [
        'Content Creation: Utilizes GPT language models to generate page content based on project information.',
        'Image Analysis: GPT image models assess images to incorporate relevant context into the project descriptions.',
        'Directory Management: Bash scripting is used to handle directory management for cloned projects.',
        'Deployment: Integrates with Netlify for easy deployment of generated pages.',
        'Real-time Notifications: Sends updates via Telegram regarding the status of content generation and deployment.',
      ],
    },
    {
      heading: 'Architecture / Logic / Design',
      paragraphs:
        'The workflow consists of several interconnected steps, seamlessly integrating the tools and processes used throughout the project:',
      images: [
        { src: ProjectSetup, alt: 'Project Setup Workflow' },
        { src: InfoExtraction, alt: 'Information Extraction Workflow' },
        { src: ProjectPageGeneration, alt: 'Project Page Code Generation Workflow' },
        { src: ProjectListUpdate, alt: 'Project List Update' },
        { src: FifthPushAndNotify, alt: 'Push and Notify Workflow' },
      ],
      paragraphsAfterImages: [
        '1. Setup Project: Clones the GitHub repository and manages project directories.',
        '2. Information Extraction: Downloads project information and images, then summarizes this data for content creation.',
        '3. Code Generation: Generates React component code and blog content, ensuring that all HTML and CSS is optimized for display.',
        '4. Updating Project List: Updates the project list information to reflect new entries accurately.',
        '5. Save and Notify: After completing the content generation, the workflow commits changes to the GitHub repository and sends notifications regarding the success or failure of the operation.',
      ],
    },
    {
      heading: 'Results / Evaluation',
      paragraphs:
        'By automating the showcase page generation, the project has greatly reduced the time and effort spent on documentation, enabling a more agile development process. The tool has successfully been deployed, with operational workflows actively managing project updates and ensuring that information remains current.',
    },
    {
      heading: 'Challenges & Learnings',
      paragraphs: [
        'Integration Complexity: Merging different tools and ensuring they communicate properly required extensive testing.',
        'AI Output Validation: Validating the output from AI models to ensure content relevance and accuracy was crucial.',
        'Error Handling: Creating robust error handling for failed deployments required additional workflows to manage.',
      ],
      images: [
        {
          src: NetlifyDeployments,
          alt: 'Netlify Deployments Dashboard showing deployment status and repository integration',
        },
        {
          src: RevertLatestProject,
          alt: 'Workflow to revert the latest GitHub changes, ensuring project stability',
        },
        {
          src: FailedDeploymentNotification,
          alt: 'Workflow for notifying users about failed deployments',
        },
        {
          src: PortfolioProjects,
          alt: 'Featured Projects Section - Developer Portfolio showcasing automated content generation',
        },
      ],
    },
  ];

  return (
    <div className="font-sans leading-relaxed tracking-wide flex flex-col items-center">
      <div className="max-w-4xl w-full p-0 md:p-6 rounded-lg">
        {/* Cover Image */}
        <img
          src={pagegeneratorCover}
          alt="Automated Project Page Generator Cover Image"
          className="w-full h-auto mb-6 rounded-lg"
        />

        {/* Project Title */}
        <h1 style={styles.heading} className="text-3xl lg:text-5xl font-bold mb-4">
          Automated Project Page Generator
        </h1>

        {/* Dynamic Content Sections */}
        {contentSections.map((section, index) => (
          <section key={index} className="mb-8">
            <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
              {section.heading}
            </h2>
            {Array.isArray(section.paragraphs) ? (
              section.paragraphs.map((paragraph, idx) => (
                <p key={idx} style={styles.text} className="mb-4">
                  {paragraph}
                </p>
              ))
            ) : (
              <p style={styles.text} className="mb-4">
                {section.paragraphs}
              </p>
            )}

            {section.images &&
              section.images.map((image, imgIdx) => (
                // eslint-disable-next-line jsx-a11y/alt-text
                <img
                  key={imgIdx}
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto mb-6 rounded-lg"
                />
              ))}

            {section.paragraphsAfterImages &&
              section.paragraphsAfterImages.map((text, pIdx) => (
                <p key={pIdx} style={styles.text} className="mb-4">
                  {text}
                </p>
              ))}
          </section>
        ))}

        {/* Call to Action Buttons - none provided as no URLs */}

        {/* Skills & Technologies Used */}
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