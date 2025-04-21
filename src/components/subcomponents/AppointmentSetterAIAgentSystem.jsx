import React from 'react'
import { projectStyles as styles } from './ProjectStyles'

import AIAppointmentSetterCoverImage from '../../assets/Works/AIAppointmentSetterCoverImage.png'
import n8nAppointmentSetterRAGAgent from '../../assets/Works/n8nAppointmentSetterRAGAgent.png'
import ManyChatAIReply from '../../assets/Works/ManyChatAIReply.png'
import n8nCheckAvailabilityTool from '../../assets/Works/n8nCheckAvailabilityTool.png'
import n8nSetAppointmentTool from '../../assets/Works/n8nSetAppointmentTool.png'

const AIRAGAppointmentSystem = () => {
  const skills = [
    'ManyChat',
    'n8n',
    'Google Sheets',
    'OpenAI GPT-4',
    'Cal.com'
  ]

  const links = [
    {
      label: 'Explore more about the AI RAG & Appointment System',
      href: 'https://example.com'
    }
  ]

  return (
    <div className="font-sans leading-relaxed tracking-wide flex flex-col items-center">
      <div className="max-w-4xl w-full p-0 md:p-6 rounded-lg">

        <img
          src={AIAppointmentSetterCoverImage}
          alt="AI RAG & Appointment System Cover"
          className="w-full h-auto mb-6 rounded-lg"
        />

        <h1 style={styles.heading} className="text-3xl lg:text-5xl font-bold mb-4">
          AI RAG & Appointment System
        </h1>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Overview
        </h2>
        <p style={styles.text} className="mb-6">
          The AI RAG & Appointment System addresses a common challenge faced by service providers—effectively converting leads generated from social media advertisements into loyal customers. By integrating an automated chat system, service providers can engage potential customers, answer queries, and schedule appointments seamlessly.
        </p>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Goals
        </h2>
        <p style={styles.text} className="mb-6">
          The primary goal of this system is to facilitate real-time communication between service providers and potential customers, ensuring that leads are promptly nurtured and converted into appointments.
        </p>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Features / Workflow
        </h2>
        <p style={styles.text} className="mb-4">
          When a lead interacts with advertisements on social media, they are directed to a messaging platform where the AI system awaits. Key features include:
        </p>
        <ul className="list-disc ml-6 mb-6" style={styles.text}>
          <li>
            <strong>Automated Responses</strong>: Leveraging OpenAI's capabilities, the system provides informative responses regarding service offerings.
          </li>
          <li>
            <strong>Appointment Scheduling</strong>: The system continues the conversation until an appointment is successfully set, guiding the user through the booking process.
          </li>
          <li>
            <strong>Integration with Tools</strong>: Utilizes ManyChat for social media connectivity, n8n for automation, and Google Sheets for tracking appointments.
          </li>
        </ul>

        <h3 style={styles.heading} className="text-xl font-semibold mb-3">
          Workflow Breakdown
        </h3>
        <img
          src={n8nAppointmentSetterRAGAgent}
          alt="AI Rag & Appointment Setter Workflow"
          className="w-full h-auto mb-2 rounded-lg"
        />
        <p style={styles.text} className="mb-6 italic text-center text-sm">
          Visual representation of the AI Rag & Appointment Setter workflow
        </p>
        <p style={styles.text} className="mb-6">
          The workflow consists of several components:
        </p>
        <ol className="list-decimal ml-6 mb-6" style={styles.text}>
          <li><strong>ManyChat Input Trigger</strong>: Initializes the interaction.</li>
          <li><strong>AI Agent</strong>: Engages users utilizing OpenAI’s processing power.</li>
          <li><strong>Conditional Logic</strong>: Directs responses based on user responses and existing data.</li>
        </ol>

        <img
          src={ManyChatAIReply}
          alt="ManyChat Automation Flow"
          className="w-full h-auto mb-2 rounded-lg"
        />
        <p style={styles.text} className="mb-6 italic text-center text-sm">
          ManyChat Automation Flow for RAG & Appointment scheduling
        </p>
        <p style={styles.text} className="mb-6">
          The ManyChat implementation further enhances the user experience:
        </p>
        <ul className="list-disc ml-6 mb-6" style={styles.text}>
          <li>Each step in the automation is carefully structured to ensure customer queries about services and appointments are addressed efficiently.</li>
        </ul>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Architecture / Logic / Design
        </h2>
        <p style={styles.text} className="mb-6">
          The backend of the application is designed using n8n's automation capabilities, allowing for:
        </p>
        <ul className="list-disc ml-6 mb-6" style={styles.text}>
          <li>
            <strong>Check Availability Tool</strong>: Verifies available dates and times against currently booked appointments.
          </li>
        </ul>
        <img
          src={n8nCheckAvailabilityTool}
          alt="Check Availability Tool"
          className="w-full h-auto mb-2 rounded-lg"
        />
        <p style={styles.text} className="mb-6 italic text-center text-sm">
          Workflow for checking availability using n8n
        </p>
        <ul className="list-disc ml-6 mb-6" style={styles.text}>
          <li>
            <strong>Set Appointment Tool</strong>: Integrates with Cal.com to finalize appointment bookings while maintaining up-to-date records in Google Sheets.
          </li>
        </ul>
        <img
          src={n8nSetAppointmentTool}
          alt="Set Appointment Tool"
          className="w-full h-auto mb-2 rounded-lg"
        />
        <p style={styles.text} className="mb-6 italic text-center text-sm">
          Workflow for setting appointments using n8n
        </p>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Results / Evaluation
        </h2>
        <p style={styles.text} className="mb-6">
          The implementation of the AI RAG & Appointment System has demonstrated significant improvements in lead conversion rates, streamlining the process of customer acquisition and enhancing service provider efficiency.
        </p>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Challenges & Learnings
        </h2>
        <ul className="list-disc ml-6 mb-6" style={styles.text}>
          <li><strong>Integration Complexity</strong>: Initially, connecting various tools and ensuring they communicated effectively posed challenges.</li>
          <li><strong>User Experience</strong>: Ensuring a smooth and engaging user experience required iterative testing and refinement of the workflows.</li>
        </ul>

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
                color: 'var(--text-primary)'
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

export default AIRAGAppointmentSystem