import React from 'react'
import { projectStyles as styles } from './ProjectStyles'

import pagegeneratorCover from '../../assets/Works/pagegeneratorCover.png'
import InfoExtraction from '../../assets/Works/2InfoExtraction.png'
import ProjectSetup from '../../assets/Works/1ProjectSetup.png'
import PortfolioProjects from '../../assets/Works/PortfolioProjects.png'
import FailedDeploymentNotification from '../../assets/Works/FailedDeploymentNotification.png'

const AutomatedProjectPageGenerator = () => {
  const skills = [
    'Git',
    'n8n',
    'GPT Language Models',
    'Bash',
    'Google Drive',
    'Telegram',
    'Netlify',
  ]

  const links = [
    {
      label: 'GitHub Repository',
      href: 'https://github.com/Nickjs101/My-Portfolio',
    },
  ]

  const contentSections = [
    {
      heading: 'Overview',
      paragraphs:
        'The Automated Project Page Generator is designed to streamline the creation of project showcase pages for portfolios. By leveraging AI-generated content and template-driven coding, this project significantly reduces the time and effort required to publish project documentation, allowing developers to focus on ideation and development.',
    },
    {
      heading: 'Goals',
      paragraphs:
        'The primary goal of this project is to automate the generation of project showcase pages, enabling seamless integration into a personal portfolio website. This reduces manual coding tasks and accelerates the deployment of new project updates.',
    },
    {
      heading: 'Features / Workflow',
      paragraphs: [
        'Information Extraction: Utilizes Google Drive to download and extract project data and images, preparing content for showcase.',
        'Content Generation: Employs GPT language models to create informative content and code templates for project pages.',
        'Version Control Integration: Uses Git for version control, allowing easy cloning and updates of the portfolio site.',
        'Deployment Automation: Automatically deploys completed project pages using Netlify, notifying the developer through Telegram about successes or failures.',
      ],
      image: {
        src: InfoExtraction,
        alt: 'The Information Extraction process of the workflow.',
      },
    },
    {
      heading: 'Architecture / Logic / Design',
      paragraphs:
        'The project employs a series of automated workflows in n8n, an open-source automation tool, structured as follows:\n1. Project Setup: Initializes the project environment by setting up a local folder and syncing with the GitHub repository.\n2. Content Generation: Generates page content and code as React components using AI.\n3. Directory Management: Manages project directories using Bash scripts to streamline the project folder setup.\n4. Deployment Management: Handles deployment processes through Netlify, ensuring that the latest changes are published automatically.',
      image: {
        src: ProjectSetup,
        alt: 'The initial project setup workflow.',
      },
    },
    {
      heading: 'Results / Evaluation',
      paragraphs:
        'The automated approach has significantly decreased the time spent on creating project pages. The generated pages are now consistently formatted and include comprehensive project details, enhancing the overall presentation on my portfolio website.',
      image: {
        src: PortfolioProjects,
        alt: 'Showcasing featured projects in the portfolio interface.',
      },
    },
    {
      heading: 'Challenges & Learnings',
      paragraphs: [
        'Integration Complexity: Bridging different tools (e.g., Git, Google Drive, Telegram) required careful planning and consideration of how data flows through each component.',
        'AI Dependency: Relying on AI models meant that regular updates and training were necessary to maintain coherence and relevance in generated content.',
      ],
      image: {
        src: FailedDeploymentNotification,
        alt: 'Monitoring project deployment notifications for issues.',
      },
    },
  ]

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

        {contentSections.map(({ heading, paragraphs, image }, idx) => (
          <section key={idx} className="mb-8">
            <h2
              style={styles.heading}
              className="text-2xl font-semibold mb-4 whitespace-pre-line"
            >
              {heading}
            </h2>
            {Array.isArray(paragraphs) ? (
              paragraphs.map((para, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <p
                  key={i}
                  style={styles.text}
                  className="mb-4 whitespace-pre-line"
                >
                  {para}
                </p>
              ))
            ) : (
              <p style={styles.text} className="mb-4 whitespace-pre-line">
                {paragraphs}
              </p>
            )}
            {image && (
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto mb-6 rounded-lg"
              />
            )}
          </section>
        ))}

        <div className="flex flex-col sm:flex-row justify-center gap-4 my-8">
          {links.map(({ label, href }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold py-2 px-4 rounded-lg shadow-lg transition-colors duration-300 text-center"
              style={{
                backgroundColor: 'var(--accent-primary)',
                color: 'var(--text-primary)',
              }}
            >
              {label}
            </a>
          ))}
        </div>

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
  )
}

export default AutomatedProjectPageGenerator