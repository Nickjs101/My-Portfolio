import React from 'react'
import { projectStyles as styles } from './ProjectStyles'

import AIAppointmentSetterCoverImage from '../../assets/Works/AIAppointmentSetterCoverImage.png'
import ManyChatAIReply from '../../assets/Works/ManyChatAIReply.png'
import n8nSetAppointmentTool from '../../assets/Works/n8nSetAppointmentTool.png'
import n8nCheckAvailabilityTool from '../../assets/Works/n8nCheckAvailabilityTool.png'
import n8nAppointmentSetterRAGAgent from '../../assets/Works/n8nAppointmentSetterRAGAgent.png'

const AIRagAppointmentSystem = () => {
  const skills = [
    "ManyChat",
    "n8n",
    "Google Sheets",
    "Cal.com",
    "OpenAI GPT-4o",
    "Automation",
    "AI Conversational Design"
  ]

  const links = [
    { label: "GitHub", href: "https://github.com/YourRepo" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/YourProfile" }
  ]

  return (
    <div className="font-sans leading-relaxed tracking-wide flex flex-col items-center">
      <div className="max-w-4xl w-full p-0 md:p-6 rounded-lg">

        <img src={AIAppointmentSetterCoverImage} alt="AI RAG & Appointment System Cover Image" className="w-full h-auto mb-6 rounded-lg" />

        <h1 style={styles.heading} className="text-3xl lg:text-5xl font-bold mb-4">
          AI RAG & Appointment System
        </h1>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Overview
        </h2>
        <p style={styles.text} className="mb-4">
          The AI RAG & Appointment System addresses a common challenge faced by service providers: the inability to convert leads into customers effectively. By leveraging automation and AI technologies, this system allows service providers to better engage with potential customers from their social media advertisements.
        </p>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Goals
        </h2>
        <p style={styles.text} className="mb-4">
          The primary goal of this project is to create a seamless interaction channel between service providers and potential customers, enabling efficient responses to inquiries and appointment scheduling, ultimately converting leads into clients.
        </p>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Features / Workflow
        </h2>
        <ol className="list-decimal list-inside mb-6" style={styles.text}>
          <li className="mb-2">
            <strong>Lead Engagement:</strong> Once a lead interacts with the service provider's ad, they are directed to a chat interface where the AI system is ready to respond to inquiries.
          </li>
          <li className="mb-2">
            <strong>Conversational AI:</strong> The AI responds to various customer questions, providing information based on the service provider's offerings.
          </li>
          <li className="mb-2">
            <strong>Appointment Setup:</strong> The system not only answers questions but also handles the appointment-setting process through an integrated workflow.
          </li>
        </ol>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Architecture / Logic / Design
        </h2>
        <p style={styles.text} className="mb-4">
          The system utilizes several tools to streamline the process:
        </p>
        <ul className="list-disc list-inside mb-6" style={styles.text}>
          <li><strong>ManyChat</strong> for connecting and managing social media interactions.</li>
          <li><strong>n8n</strong> as the automation platform, which facilitates various workflows including appointment scheduling and availability checks.</li>
          <li><strong>Google Sheets</strong> as a database for managing appointment records alongside APIs from <strong>Cal.com</strong> for scheduling.</li>
        </ul>

        <h3 style={styles.heading} className="text-xl font-semibold mb-4">
          Workflow Implementation
        </h3>
        <p style={styles.text} className="mb-4">
          <strong>ManyChat Automation:</strong> The automation sequence starts with user engagement through ManyChat; it captures user inputs and interacts accordingly.
        </p>
        <img src={ManyChatAIReply} alt="ManyChat Automation: RAG & Appointment Workflow" className="w-full h-auto mb-6 rounded-lg" />

        <p style={styles.text} className="mb-4">
          <strong>Appointment Setting Workflow:</strong> Here, the n8n tool automates the scheduling of appointments, integrating action steps for creating or modifying appointments in real-time.
        </p>
        <img src={n8nSetAppointmentTool} alt="Set Appointment Tool Workflow" className="w-full h-auto mb-6 rounded-lg" />

        <p style={styles.text} className="mb-4">
          <strong>Availability Check Workflow:</strong> Another critical component is the workflow that checks availability against existing appointments before finalizing bookings.
        </p>
        <img src={n8nCheckAvailabilityTool} alt="Check Availability Tool Workflow" className="w-full h-auto mb-6 rounded-lg" />

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Results / Evaluation
        </h2>
        <p style={styles.text} className="mb-4">
          The integration of this system demonstrates significant improvements in lead conversion rates, as potential clients receive immediate responses and can conveniently set appointments.
        </p>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Challenges & Learnings
        </h2>
        <p style={styles.text} className="mb-4">
          One of the major challenges was ensuring accurate data flow between various platforms, which was overcome by robust integration testing. Continuous learning through iterations helped in refining AI responses to enhance user engagement.
        </p>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Call to Action
        </h2>
        <p style={styles.text} className="mb-6">
          For more insights, you can check out the project details on{' '}
          <a href={links[0].href} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">
            GitHub
          </a>{' '}
          or follow the progress on{' '}
          <a href={links[1].href} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">
            LinkedIn
          </a>.
        </p>

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
  )
}

export default AIRagAppointmentSystem