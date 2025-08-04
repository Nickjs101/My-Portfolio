import React from 'react'
import { projectStyles as styles } from './ProjectStyles'

import AppointmentSetterAgentCover from '../../assets/Works/AppointmentSetterAgentCover.png'
import ManyChatAIReply from '../../assets/Works/ManyChatAIReply.png'
import n8nAppointmentSetterRAGAgent from '../../assets/Works/n8nAppointmentSetterRAGAgent.png'
import n8nCheckAvailabilityTool from '../../assets/Works/n8nCheckAvailabilityTool.png'
import n8nSetAppointmentTool from '../../assets/Works/n8nSetAppointmentTool.png'

const AiRagAppointmentSystem = () => {
  const skills = [
    'ManyChat',
    'n8n',
    'Google Sheets',
    'Cal.com',
    'OpenAI GPT-4',
    'Automation and Workflow Design',
  ]

  return (
    <div className="font-sans leading-relaxed tracking-wide flex flex-col items-center">
      <div className="max-w-4xl w-full p-0 md:p-6 rounded-lg">
        <img
          src={AppointmentSetterAgentCover}
          alt="AI RAG & Appointment System cover image showing automated appointment booking workflow"
          className="w-full h-auto mb-6 rounded-lg"
        />

        <h1
          style={styles.heading}
          className="text-3xl lg:text-5xl font-bold mb-4"
        >
          AI RAG & Appointment System
        </h1>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Overview
        </h2>
        <p style={styles.text} className="mb-4">
          The AI RAG & Appointment System addresses the prevalent issue faced by
          service providers who advertise on social media without an efficient
          mechanism to convert leads into customers. This innovative solution
          enables service providers to engage leads, answer queries, and
          ultimately set appointments through an intuitive AI-powered interface.
        </p>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Goals
        </h2>
        <ol style={styles.text} className="list-decimal list-inside mb-4">
          <li>Improve lead conversion through automated interactions.</li>
          <li>
            Simplify the appointment scheduling process for both service
            providers and customers.
          </li>
          <li>
            Enhance customer engagement by providing immediate responses to
            inquiries about services.
          </li>
        </ol>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Features / Workflow
        </h2>
        <ul style={styles.text} className="list-disc list-inside mb-4">
          <li>
            <strong>Lead Engagement</strong>: Upon seeing an advertisement,
            potential clients can interact with an AI-driven chat interface to
            start their journey.
          </li>
          <li>
            <strong>Automated Conversational Flow</strong>: The system utilizes a
            conversational AI to respond to user inquiries based on predefined
            data and context capture from previous interactions.
          </li>
          <li>
            <strong>Appointment Setting</strong>: Once the user's needs are
            identified, the system facilitates scheduling an appointment.
          </li>
        </ul>

        <h3 style={styles.heading} className="text-xl font-semibold mb-2">
          Interaction Example
        </h3>
        <p style={styles.text} className="mb-4">
          As illustrated in the cover image, the conversation may progress as
          follows:
        </p>
        <ul style={styles.text} className="list-disc list-inside italic mb-6">
          <li>
            <strong>User</strong>: "Can I schedule an appointment?"
          </li>
          <li>
            <strong>AI</strong>: "Sure, what day would you like to book?"
          </li>
          <li>
            <strong>User</strong>: "Thursday afternoon."
          </li>
          <li>
            <strong>AI</strong>: "Your appointment is set for April 25 at 3:00 PM."
          </li>
        </ul>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Architecture / Logic / Design
        </h2>

        <h3 style={styles.heading} className="text-xl font-semibold mb-4">
          Workflow Overview
        </h3>
        <p style={styles.text} className="mb-4">
          The system includes several components integrated using tools like
          ManyChat, n8n, Google Sheets, and Cal.com.
        </p>

        <h3 style={styles.heading} className="text-lg font-semibold mb-2">
          1. ManyChat Integration
        </h3>
        <p style={styles.text} className="mb-4">
          Streamlines lead interactions using the ManyChat platform to manage
          chatbot workflows.
        </p>
        <img
          src={ManyChatAIReply}
          alt="ManyChat Automation Flow - RAG & Appointment showing chatbot automation workflow"
          className="w-full h-auto mb-6 rounded-lg"
        />
        <p style={{ ...styles.text, fontStyle: 'italic' }} className="mb-6">
          The ManyChat automation workflow screenshot shows how the system manages
          customer interactions.
        </p>

        <h3 style={styles.heading} className="text-lg font-semibold mb-2">
          2. N8n Workflows
        </h3>
        <p style={styles.text} className="mb-4">
          Utilizes multiple workflows for different aspects of appointment
          scheduling:
        </p>
        <ul style={styles.text} className="list-disc list-inside mb-4">
          <li>
            <strong>Appointment Setter Logic</strong>: Automates responses and
            handles user input.
          </li>
        </ul>
        <img
          src={n8nAppointmentSetterRAGAgent}
          alt="AI Rag & Appointment Setter Workflow in n8n automation tool"
          className="w-full h-auto mb-6 rounded-lg"
        />
        <p style={{ ...styles.text, fontStyle: 'italic' }} className="mb-6">
          The workflow for the AI Rag & Appointment Setter, showcasing various
          logic nodes.
        </p>

        <ul style={styles.text} className="list-disc list-inside mb-4">
          <li>
            <strong>Check Availability Tool</strong>: Verifies available time
            slots using data from Google Sheets.
          </li>
        </ul>
        <img
          src={n8nCheckAvailabilityTool}
          alt="Check Availability Tool workflow in n8n automation platform"
          className="w-full h-auto mb-6 rounded-lg"
        />
        <p style={{ ...styles.text, fontStyle: 'italic' }} className="mb-6">
          A visual representation of the availability checking workflow in n8n.
        </p>

        <ul style={styles.text} className="list-disc list-inside mb-4">
          <li>
            <strong>Set Appointment Tool</strong>: Finalizes appointment creation
            and records it in Google Sheets.
          </li>
        </ul>
        <img
          src={n8nSetAppointmentTool}
          alt="Set Appointment Tool workflow in n8n automation platform"
          className="w-full h-auto mb-6 rounded-lg"
        />
        <p style={{ ...styles.text, fontStyle: 'italic' }} className="mb-6">
          The set appointment workflow demonstrates how appointments are recorded
          and managed.
        </p>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Challenges &amp; Learnings
        </h2>
        <p style={styles.text} className="mb-6">
          While implementing this system, challenges such as handling
          user-specific data effectively and ensuring the automated flow was
          robust and error-free were encountered. Continuous refinement through
          real-time user feedback proved invaluable for enhancing the workflow's
          efficiency and user satisfaction.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 my-8">
          <a
            href="https://example.com/demo"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold py-2 px-4 rounded-lg shadow-lg transition-colors duration-300"
            style={{
              backgroundColor: 'var(--accent-primary)',
              color: 'var(--text-primary)',
            }}
          >
            Watch the Demo Video
          </a>
        </div>

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

export default AiRagAppointmentSystem