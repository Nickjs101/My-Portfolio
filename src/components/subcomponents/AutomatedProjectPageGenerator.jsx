import React from 'react';
import { projectStyles as styles } from './ProjectStyles';

import pagegeneratorCover from '../../assets/Works/pagegeneratorCover.png';
import PortfolioProjects from '../../assets/Works/PortfolioProjects.png';
import NetlifyDeployments from '../../assets/Works/NetlifyDeployments.png';
import RevertLatestProject from '../../assets/Works/RevertLatestProject.png';
import FailedDeploymentNotification from '../../assets/Works/FailedDeploymentNotification.png';

const AutomatedProjectPageGenerator = () => {
  const skills = [
    'Git',
    'GPT Language Models',
    'GPT Image Model',
    'Google Drive',
    'Bash',
    'Telegram',
    'Netlify',
    'n8n Automation Tool',
  ];

  const links = []; // No specific links provided

  return (
    <div className="font-sans leading-relaxed tracking-wide flex flex-col items-center">
      <div className="max-w-4xl w-full p-0 md:p-6 rounded-lg">

        {/* COVER IMAGE */}
        <img
          src={pagegeneratorCover}
          alt="AI RAG & Appointment System"
          className="w-full h-auto mb-6 rounded-lg"
        />

        {/* PROJECT TITLE */}
        <h1 style={styles.heading} className="text-3xl lg:text-5xl font-bold mb-4">
          Automated Project Page Generator
        </h1>

        {/* CONTENT SECTIONS */}
        {/* Overview */}
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">Overview</h2>
        <p style={styles.text} className="mb-4">
          The <strong>Automated Project Page Generator</strong> is an innovative tool created to simplify the process of generating project showcase pages for my portfolio website. By leveraging advanced AI technologies, this tool not only streamlines content creation but also automates deployment, thereby allowing more time to focus on developing new ideas and projects.
        </p>

        {/* Goals */}
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">Goals</h2>
        <ul style={styles.text} className="list-disc list-inside mb-4">
          <li>Automate the generation of project showcase content.</li>
          <li>Easily deploy generated pages to my website.</li>
          <li>Improve efficiency in creating project documentation.</li>
        </ul>

        {/* Features / Workflow */}
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">Features / Workflow</h2>
        <ul style={styles.text} className="list-inside list-disc mb-4">
          <li><strong>Content Generation</strong>: Utilizes GPT language models to create informative and engaging project descriptions.</li>
          <li><strong>Image Analysis</strong>: Employs GPT image models to analyze and contextualize images associated with each project.</li>
          <li><strong>Project Management</strong>: Uses Bash scripting to manage directories and automate the file copy process via Git.</li>
          <li><strong>Deployment Notifications</strong>: Notifies users through Telegram once the deployment process is complete.</li>
        </ul>

        {/* Architecture / Logic / Design */}
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">Architecture / Logic / Design</h2>
        <p style={styles.text} className="mb-4">
          The architecture of the Automated Project Page Generator consists of various interconnected modules:
        </p>
        <ul style={styles.text} className="list-disc list-inside mb-4">
          <li><strong>Input Trigger</strong>: Activated by user input through the ManyChat interface.</li>
          <li><strong>AI Processing</strong>: Utilizes GPT-4, enhancing the interactive aspects of the page.</li>
          <li><strong>Workflow Automation</strong>: Implements n8n for managing complex workflows, facilitating the check of appointment availability and handling user interactions.</li>
        </ul>

        <p style={styles.text} className="mb-6 italic">Here’s an illustration of a related workflow built in the n8n automation tool, displaying the process for setting appointments:</p>

        {/* Images Section with multiple images */}
        <div className="flex flex-col gap-6 mb-6">
          <img
            src={NetlifyDeployments}
            alt="AI Rag & Appointment Setter workflow visualization"
            className="w-full h-auto rounded-lg"
          />
          <img
            src={PortfolioProjects}
            alt="ManyChat Automation Builder for RAG & Appointment workflow"
            className="w-full h-auto rounded-lg"
          />
          <img
            src={RevertLatestProject}
            alt="Check availability tool workflow in n8n editor"
            className="w-full h-auto rounded-lg"
          />
          <img
            src={FailedDeploymentNotification}
            alt="Set appointment tool workflow in n8n editor"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Results / Evaluation */}
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">Results / Evaluation</h2>
        <p style={styles.text} className="mb-4">
          The solution has effectively reduced the time spent on manual page creation significantly. Feedback from initial users has indicated an improved user experience when interacting with the automated system.
        </p>

        {/* Challenges & Learnings */}
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">Challenges &amp; Learnings</h2>
        <p style={styles.text} className="mb-4">
          One of the major challenges faced during the development was ensuring that the AI model accurately captured the nuances of each project based on limited context. However, optimizations in the model inputs and iterative testing provided substantial improvements in content relevancy and engagement.
        </p>

        {/* CTA Section */}
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">Call To Action</h2>
        <p style={styles.text} className="mb-4">
          No specific links were provided; however, feel free to reach out if you would like more information.
        </p>

        {/* SKILLS & TECHNOLOGIES USED */}
        <h2 style={styles.heading} className="text-2xl font-bold mb-4">Skills & Technologies Used</h2>
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