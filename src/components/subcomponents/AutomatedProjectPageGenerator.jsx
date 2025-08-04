import React from 'react'
import { projectStyles as styles } from './ProjectStyles'

import pagegeneratorCover from '/tmp/portfolio/src/assets/Works/pagegeneratorCover.png'
import infoExtraction from '/tmp/portfolio/src/assets/Works/2InfoExtraction.png'
import projectPageGeneration from '/tmp/portfolio/src/assets/Works/3ProjectPageGeneration.png'
import netlifyDeployments from '/tmp/portfolio/src/assets/Works/NetlifyDeployments.png'
import revertLatestProject from '/tmp/portfolio/src/assets/Works/RevertLatestProject.png'
import failedDeploymentNotification from '/tmp/portfolio/src/assets/Works/FailedDeploymentNotification.png'
import pushAndNotify from '/tmp/portfolio/src/assets/Works/5PushAndNotify.png'
import projectListUpdate from '/tmp/portfolio/src/assets/Works/4ProjectListUpdate.png'
import projectSetup from '/tmp/portfolio/src/assets/Works/1ProjectSetup.png'

const AutomatedProjectPageGenerator = () => {
  const skills = [
    'Git',
    'GPT Language Models',
    'GPT Image Model',
    'Google Drive',
    'Bash',
    'Telegram API',
    'Netlify',
    'n8n Automation Tool',
  ]

  return (
    <div className="font-sans leading-relaxed tracking-wide flex flex-col items-center">
      <div className="max-w-4xl w-full p-0 md:p-6 rounded-lg">

        {/* COVER IMAGE */}
        <img
          src={pagegeneratorCover}
          alt="Automated Project Page Generator"
          className="w-full h-auto mb-6 rounded-lg"
        />

        {/* PROJECT TITLE */}
        <h1
          style={styles.heading}
          className="text-3xl lg:text-5xl font-bold mb-4"
        >
          Automated Project Page Generator
        </h1>

        {/* OVERVIEW SECTION */}
        <h2
          style={styles.heading}
          className="text-2xl font-semibold mb-4"
        >
          Overview
        </h2>
        <p style={styles.text} className="mb-4">
          The <strong>Automated Project Page Generator</strong> project addresses the tedious task of manually creating project showcase pages for a portfolio website. By leveraging artificial intelligence, this project automates content generation and simplifies deployment processes, allowing developers to focus on innovation instead of repetitive tasks.
        </p>

        {/* GOALS SECTION */}
        <h2
          style={styles.heading}
          className="text-2xl font-semibold mb-4"
        >
          Goals
        </h2>
        <ul style={styles.text} className="mb-4 list-disc list-inside space-y-1">
          <li>To automate the generation of project documentation pages.</li>
          <li>To facilitate easy deployment of generated content to a portfolio website.</li>
          <li>To enhance productivity by reducing the time spent on manual coding.</li>
        </ul>

        {/* FEATURES / WORKFLOW */}
        <h2
          style={styles.heading}
          className="text-2xl font-semibold mb-4"
        >
          Features / Workflow
        </h2>
        <p style={styles.text} className="mb-4">
          The project incorporates various automated workflows for efficient management:
        </p>
        <ul style={styles.text} className="mb-4 list-disc list-inside space-y-1">
          <li><strong>Information Extraction</strong>: Automatically retrieves project-related data from Google Drive and describes associated images.</li>
          <li><strong>Project Page Code Generation</strong>: Uses AI models to generate content and convert it into project pages in JSX format.</li>
          <li><strong>Notification System</strong>: Integrates with messaging platforms like Telegram to send real-time project updates.</li>
        </ul>

        {/* ARCHITECTURE / LOGIC / DESIGN */}
        <h2
          style={styles.heading}
          className="text-2xl font-semibold mb-4"
        >
          Architecture / Logic / Design
        </h2>
        <p style={styles.text} className="mb-4">
          The system utilizes <strong>n8n</strong>, a workflow automation tool, enabling a modular approach to managing different processes. Key sections of the workflow include:
        </p>
        <ul style={styles.text} className="mb-4 list-disc list-inside space-y-1">
          <li><strong>Setup Project</strong>: Cloning repositories and configuring local environments.</li>
          <li><strong>Project List Update</strong>: Extracting project information and updating the project visuals on the website.</li>
          <li><strong>Communication</strong>: Notifying users of failed deployments or successful updates to the project.</li>
        </ul>

        <h3 style={styles.heading} className="text-xl font-semibold mb-3">Visual Representation of Workflows</h3>

        <ol className="list-decimal list-inside mb-4 space-y-8">
          <li>
            <p style={styles.text} className="mb-2 font-semibold">
              Information Extraction:
            </p>
            <img
              src={infoExtraction}
              alt="Automated Project Page Generator - Information Extraction Workflow"
              className="w-full h-auto mb-2 rounded-lg"
            />
            <p style={styles.text} className="italic text-sm">
              This workflow extracts project-related data.
            </p>
          </li>
          <li>
            <p style={styles.text} className="mb-2 font-semibold">
              Project Page Code Generation:
            </p>
            <img
              src={projectPageGeneration}
              alt="Automated Project Page Generator - n8n Workflow"
              className="w-full h-auto mb-2 rounded-lg"
            />
            <p style={styles.text} className="italic text-sm">
              This step generates the project pages using AI for content creation and code formatting.
            </p>
          </li>
          <li>
            <p style={styles.text} className="mb-2 font-semibold">
              Deployment:
            </p>
            <img
              src={netlifyDeployments}
              alt="Deploy Dashboard for nickjsportfolio on Netlify"
              className="w-full h-auto mb-2 rounded-lg"
            />
            <p style={styles.text} className="italic text-sm">
              Shows the Netlify deploy dashboard, ensuring seamless deployment of the project.
            </p>
          </li>
        </ol>

        {/* RESULTS / EVALUATION */}
        <h2
          style={styles.heading}
          className="text-2xl font-semibold mb-4"
        >
          Results / Evaluation
        </h2>
        <p style={styles.text} className="mb-4">
          The implementation of this automation has significantly reduced manual effort in project showcase preparation. The generation of project pages can now be completed rapidly, allowing for consistent and up-to-date documentation on the portfolio site.
        </p>

        {/* CHALLENGES & LEARNINGS */}
        <h2
          style={styles.heading}
          className="text-2xl font-semibold mb-4"
        >
          Challenges &amp; Learnings
        </h2>
        <ul style={styles.text} className="mb-4 list-disc list-inside space-y-1">
          <li>Integrating various tools like Git, Google Drive, and AI models posed initial challenges that required creative solutions.</li>
          <li>Understanding and utilizing <strong>n8n</strong> effectively was critical in creating robust workflows for the automation process.</li>
        </ul>

        {/* ADDITIONAL WORKFLOW IMAGES */}

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Additional Workflow Visuals
        </h2>

        <div className="space-y-12">

          <div>
            <h3 style={styles.heading} className="text-xl font-semibold mb-3">
              1. Setup Project in Local Folder
            </h3>
            <img
              src={projectSetup}
              alt="Automated Project Page Generator - Setup Project in Local Folder workflow"
              className="w-full h-auto mb-2 rounded-lg"
            />
          </div>

          <div>
            <h3 style={styles.heading} className="text-xl font-semibold mb-3">
              2. Project List Update Workflow
            </h3>
            <img
              src={projectListUpdate}
              alt="Automated Project Page Generator - Project List Update workflow"
              className="w-full h-auto mb-2 rounded-lg"
            />
          </div>

          <div>
            <h3 style={styles.heading} className="text-xl font-semibold mb-3">
              3. Deployment Failure Handling Workflow - Revert Latest Github Changes
            </h3>
            <img
              src={revertLatestProject}
              alt="Automated Project Page Generator - Revert Latest Github Changes workflow"
              className="w-full h-auto mb-2 rounded-lg"
            />
          </div>

          <div>
            <h3 style={styles.heading} className="text-xl font-semibold mb-3">
              4. Failed Deployment Notification Workflow
            </h3>
            <img
              src={failedDeploymentNotification}
              alt="Automated Project Page Generator - Failed Deployment Notification workflow"
              className="w-full h-auto mb-2 rounded-lg"
            />
          </div>

          <div>
            <h3 style={styles.heading} className="text-xl font-semibold mb-3">
              5. Git Push and Telegram Notification Workflow
            </h3>
            <img
              src={pushAndNotify}
              alt="Automated Project Page Generator - Push and Notify workflow"
              className="w-full h-auto mb-2 rounded-lg"
            />
          </div>

        </div>

        {/* SKILLS & TECHNOLOGIES USED */}
        <h2
          style={styles.heading}
          className="text-2xl font-bold mt-10 mb-4"
        >
          Skills &amp; Technologies Used
        </h2>
        <div className="flex flex-wrap mb-4">
          {skills.map((skill) => (
            <span
              key={skill}
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