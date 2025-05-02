import React from 'react'
import { projectStyles as styles } from './ProjectStyles'

import CoverImage from '../../assets/Works/pagegeneratorCover.png'
import InfoExtractionWorkflow from '../../assets/Works/2InfoExtraction.png'
import ProjectPageGeneration from '../../assets/Works/3ProjectPageGeneration.png'
import ProjectListUpdateWorkflow from '../../assets/Works/4ProjectListUpdate.png'
import ProjectSetupWorkflow from '../../assets/Works/1ProjectSetup.png'
import NetlifyDeployments from '../../assets/Works/NetlifyDeployments.png'

const AutomatedProjectPageGenerator = () => {
  const skills = [
    'Git',
    'n8n',
    'OpenAI GPT-4',
    'Google Drive',
    'Bash',
    'Netlify',
    'React',
    'Telegram',
  ]

  const links = [
    {
      label: 'View the Live Application',
      href: 'https://nickjsportfolio.netlify.app',
    },
    {
      label: 'Explore the GitHub Repository',
      href: 'https://github.com/Nickjs101/My-Portfolio',
    },
  ]

  return (
    <div className="font-sans leading-relaxed tracking-wide flex flex-col items-center">
      <div className="max-w-4xl w-full p-0 md:p-6 rounded-lg">
        {/* Cover Image */}
        <img
          src={CoverImage}
          alt="Automated Project Page Generator"
          className="w-full h-auto mb-6 rounded-lg"
        />

        {/* Project Title */}
        <h1
          style={styles.heading}
          className="text-3xl lg:text-5xl font-bold mb-4"
        >
          Automated Project Page Generator
        </h1>

        {/* Overview Section */}
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Overview
        </h2>
        <p style={styles.text} className="mb-4">
          The Automated Project Page Generator is an innovative solution designed
          to streamline the creation of project showcase pages for portfolio
          websites. This project utilizes AI to automatically generate
          informative content and deploy it effectively, allowing developers to
          focus more on brainstorming new ideas rather than getting bogged down
          in repetitive tasks.
        </p>

        {/* Goals Section */}
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Goals
        </h2>
        <p style={styles.text} className="mb-4">
          The primary goal of this project is to automate the generation of
          project showcase pages, integrating various tools and technologies to
          create an efficient workflow that saves time and enhances
          productivity.
        </p>

        {/* Features / Workflow Section */}
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Features / Workflow
        </h2>
        <p style={styles.text} className="mb-4">
          This project employs a series of automated workflows within the n8n
          automation tool, which include:
        </p>
        <ol className="list-decimal list-inside mb-6" style={styles.text}>
          <li>
            <strong>Information Extraction</strong>
            <br />
            Downloads and extracts project information and images using Google
            Drive and OpenAI’s image analysis capabilities. Merges project
            descriptions with descriptive information about images.
          </li>
        </ol>
        <img
          src={InfoExtractionWorkflow}
          alt="Information Extraction Workflow"
          className="w-full h-auto mb-3 rounded-lg"
        />
        <p style={styles.text} className="mb-6 italic text-center">
          This workflow downloads project information and describes images,
          preparing content for generation.
        </p>

        <ol start={2} className="list-decimal list-inside mb-6" style={styles.text}>
          <li>
            <strong>Project Page Code Generation</strong>
            <br />
            Generates the content for the project page using OpenAI models and
            converts it into a React component.
          </li>
        </ol>
        <img
          src={ProjectPageGeneration}
          alt="Project Page Code Generation"
          className="w-full h-auto mb-3 rounded-lg"
        />
        <p style={styles.text} className="mb-6 italic text-center">
          A workflow that generates content and creates a project page in React
          format.
        </p>

        <ol start={3} className="list-decimal list-inside mb-6" style={styles.text}>
          <li>
            <strong>Update Project List</strong>
            <br />
            Updates the list of projects by extracting data and rendering it for
            the website.
          </li>
        </ol>
        <img
          src={ProjectListUpdateWorkflow}
          alt="Update Project List Workflow"
          className="w-full h-auto mb-3 rounded-lg"
        />
        <p style={styles.text} className="mb-6 italic text-center">
          A workflow that ensures project data is current and accurately
          represented.
        </p>

        {/* Architecture Section */}
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Architecture
        </h2>
        <p style={styles.text} className="mb-4">
          The architecture of the Automated Project Page Generator consists of a
          series of interconnected workflows that manage the entire process from
          project setup in a local folder to Git integrations and final
          deployment.
        </p>

        <ul className="list-disc list-inside mb-6" style={styles.text}>
          <li>
            <strong>Project Setup Workflow</strong>
            <br />
            Initiates the project setup, including configurations for Git and
            cleaning directories.
          </li>
        </ul>
        <img
          src={ProjectSetupWorkflow}
          alt="Project Setup Workflow"
          className="w-full h-auto mb-3 rounded-lg"
        />
        <p style={styles.text} className="mb-6 italic text-center">
          The workflow sets up the environment for new projects, detailing the
          necessary steps.
        </p>

        <ul className="list-disc list-inside mb-6" style={styles.text}>
          <li>
            <strong>Deployments</strong>
            <br />
            Deployment occurs through Netlify, integrating continuous delivery
            for effortless project updates.
          </li>
        </ul>
        <img
          src={NetlifyDeployments}
          alt="Netlify Deployment Dashboard"
          className="w-full h-auto mb-3 rounded-lg"
        />
        <p style={styles.text} className="mb-6 italic text-center">
          Overview of deployment metrics and history for the project pages on
          Netlify.
        </p>

        {/* Results / Evaluation Section */}
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Results / Evaluation
        </h2>
        <p style={styles.text} className="mb-4">
          Through this automated approach, significant improvements have been
          observed in efficiency. The time taken to create and deploy project
          showcase pages has been reduced substantially, enabling quicker
          iterations and new project development.
        </p>

        {/* Challenges & Learnings Section */}
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Challenges &amp; Learnings
        </h2>
        <p style={styles.text} className="mb-6">
          Several challenges were encountered, including ensuring accurate image
          descriptions and dealing with complex interactions between processes.
          However, these challenges provided valuable insights into automation
          best practices and Git integration strategies.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 my-8">
          {links.map(({ label, href }, idx) => (
            <a
              key={idx}
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

        {/* Skills & Technologies Used Section */}
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
  )
}

export default AutomatedProjectPageGenerator