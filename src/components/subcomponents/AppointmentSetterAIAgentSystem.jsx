import React from 'react'
import { projectStyles as styles } from './ProjectStyles'

import AIAppointmentSetterCoverImage from '../../assets/Works/AIAppointmentSetterCoverImage.png'
import n8nAppointmentSetterRAGAgent from '../../assets/Works/n8nAppointmentSetterRAGAgent.png'
import n8nCheckAvailabilityTool from '../../assets/Works/n8nCheckAvailabilityTool.png'
import n8nSetAppointmentTool from '../../assets/Works/n8nSetAppointmentTool.png'
import ManyChatAIReply from '../../assets/Works/ManyChatAIReply.png'

const AIRAGAppointmentSystem = () => {
  const skills = [
    'ManyChat',
    'n8n',
    'Google Sheets',
    'OpenAI GPT-4o',
    'Cal.com',
    'API Development',
    'Workflow Automation'
  ]

  const links = [
    {
      label: 'Learn more about the project and its implementation here.',
      href: 'https://example.com/project-details'
    }
  ]

  return (
    <div className="font-sans leading-relaxed tracking-wide flex flex-col items-center">
      <div className="max-w-4xl w-full p-0 md:p-6 rounded-lg">

        {/* COVER IMAGE */}
        <img
          src={AIAppointmentSetterCoverImage}
          alt="Njs Dental Clinic Facebook Page Interface"
          className="w-full h-auto mb-6 rounded-lg"
        />

        {/* PROJECT TITLE */}
        <h1 style={styles.heading} className="text-3xl lg:text-5xl font-bold mb-4">
          AI RAG & Appointment System
        </h1>

        {/* Overview Section */}
        <section className="mb-8">
          <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
            Overview
          </h2>
          <p style={styles.text} className="mb-4">
            The AI RAG & Appointment System is designed to bridge the gap between service providers running social media advertisements and converting potential leads into customers. With integrated AI capabilities and automation, this system engages leads effectively, answering their questions and arranging appointments seamlessly.
          </p>
        </section>

        {/* Goals Section */}
        <section className="mb-8">
          <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
            Goals
          </h2>
          <p style={styles.text} className="mb-4">
            The primary goal of this project is to create a robust system that allows service providers to engage with leads from their ads actively. The system aims to automate customer interactions and manage appointments efficiently, ultimately enhancing customer conversion rates.
          </p>
        </section>

        {/* Features / Workflow Section */}
        <section className="mb-8">
          <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
            Features / Workflow
          </h2>
          <ul style={styles.text} className="list-disc pl-6 space-y-2 mb-4">
            <li>
              <strong>Lead Engagement</strong>: When potential customers click on service provider ads, they are directed to a messaging platform where the system engages them.
            </li>
            <li>
              <strong>AI-Powered Conversations</strong>: The system utilizes an AI agent to answer inquiries regarding services, ensuring leads get immediate responses.
            </li>
            <li>
              <strong>Appointment Scheduling</strong>: The AI manages the entire conversation flow until an appointment is set, offering available time slots and confirming bookings.
            </li>
          </ul>

          <img
            src={n8nAppointmentSetterRAGAgent}
            alt="AI Rag & Appointment Setter Workflow"
            className="w-full h-auto mb-6 rounded-lg"
          />
        </section>

        {/* Architecture / Logic / Design Section */}
        <section className="mb-8">
          <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
            Architecture / Logic / Design
          </h2>

          <h3 style={styles.heading} className="text-xl font-semibold mb-3">
            Tools Utilized:
          </h3>
          <ul style={styles.text} className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>ManyChat</strong>: Facilitates communication through social media platforms.</li>
            <li>
              <strong>n8n</strong>: An automation tool that connects various services for a seamless experience.
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li><strong>Check Availability Tool</strong>: Confirms slot availability using data from a Google Sheet and OpenAI's GPT-4o for processing requests.</li>
                <li><strong>Set Appointment Tool</strong>: Utilizes Cal.com to finalize and record appointments on Google Sheets.</li>
              </ul>
            </li>
          </ul>

          <img
            src={n8nCheckAvailabilityTool}
            alt="check_availability_tool"
            className="w-full h-auto mb-6 rounded-lg"
          />

          <h3 style={styles.heading} className="text-xl font-semibold mb-3">
            Appointment Workflow Mechanism
          </h3>
          <p style={styles.text} className="mb-4">
            The system consists of a series of connected workflows on n8n, where each step is carefully designed to manage user interactions effectively. Key components include:
          </p>
          <ol style={styles.text} className="list-decimal pl-6 space-y-2 mb-4">
            <li><strong>Trigger from ManyChat</strong>: Initiates workflows based on user messages.</li>
            <li><strong>Parse Inputs</strong>: Extracts required data for processing.</li>
            <li><strong>AI Algorithm</strong>: Drives conversation and looks up availability.</li>
            <li><strong>Appointment Management</strong>: Coordinates with calendar tools to set appointments accurately.</li>
          </ol>

          <img
            src={n8nSetAppointmentTool}
            alt="set_appointment_tool"
            className="w-full h-auto mb-6 rounded-lg"
          />
        </section>

        {/* Challenges & Learnings Section */}
        <section className="mb-8">
          <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
            Challenges & Learnings
          </h2>
          <p style={styles.text} className="mb-4">
            Throughout the development process, the integration between various platforms posed challenges, particularly in ensuring smooth data flow and real-time updates. Learning to navigate the nuances of automation tools like n8n and ManyChat was essential for creating a responsive and efficient system.
          </p>
        </section>

        {/* CTA Section */}
        {links.length > 0 && (
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
        )}

        {/* Skills & Technologies Used Section */}
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

        {/* ManyChat Automation Flow Image */}
        <section className="mb-8">
          <img
            src={ManyChatAIReply}
            alt="ManyChat AI Reply Automation Flow"
            className="w-full h-auto rounded-lg"
          />
        </section>

      </div>
    </div>
  )
}

export default AIRAGAppointmentSystem