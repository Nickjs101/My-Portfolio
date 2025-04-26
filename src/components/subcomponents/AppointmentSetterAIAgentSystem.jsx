import React from 'react';
import { projectStyles as styles } from './ProjectStyles';

import AppointmentSetterAgentCover from '../../assets/Works/AppointmentSetterAgentCover.png';
import ManyChatAIReply from '../../assets/Works/ManyChatAIReply.png';
import n8nAppointmentSetterRAGAgent from '../../assets/Works/n8nAppointmentSetterRAGAgent.png';
import n8nCheckAvailabilityTool from '../../assets/Works/n8nCheckAvailabilityTool.png';
import n8nSetAppointmentTool from '../../assets/Works/n8nSetAppointmentTool.png';

const AIRAGAppointmentSystem = () => {
  const skills = [
    'ManyChat',
    'n8n',
    'Google Sheets',
    'OpenAI GPT-4',
    'Cal.com',
  ];

  const links = [
    {
      label: 'Our Website',
      href: 'https://yourwebsite.com',
    },
  ];

  return (
    <div className="font-sans leading-relaxed tracking-wide flex flex-col items-center">
      <div className="max-w-4xl w-full p-0 md:p-6 rounded-lg">
        {/* COVER IMAGE */}
        <img
          src={AppointmentSetterAgentCover}
          alt="Q&A and Appointment Setter AI Chatbot"
          className="w-full h-auto mb-6 rounded-lg"
        />

        {/* PROJECT TITLE */}
        <h1 style={styles.heading} className="text-3xl lg:text-5xl font-bold mb-4">
          AI RAG & Appointment System
        </h1>

        {/* Overview Section */}
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Overview
        </h2>
        <p style={styles.text} className="mb-6">
          The AI RAG & Appointment System addresses the challenge faced by many service providers who run advertisements on social media but lack a robust system to convert leads into paying customers. This innovative solution facilitates real-time engagement with potential clients, enabling service providers to answer inquiries and schedule appointments effectively.
        </p>

        {/* Goals Section */}
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Goals
        </h2>
        <p style={styles.text} className="mb-6">
          The primary goal of this system is to streamline the lead conversion process for service providers, ensuring that inquiries can be handled automatically and appointments are organized efficiently.
        </p>

        {/* Features / Workflow Section */}
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Features / Workflow
        </h2>
        <ol className="list-decimal list-inside mb-6" style={styles.text}>
          <li className="mb-2">
            <strong>Lead Interaction</strong>: Prospective clients interacting with ads are seamlessly directed to a messaging interface where the AI chatbot awaits their queries.
          </li>
          <li className="mb-2">
            <strong>Automated Responses</strong>: The chatbot utilizes programmed data to provide information on services and consultations, engaging in conversation until an appointment is scheduled.
          </li>
          <li className="mb-2">
            <strong>Appointment Scheduling</strong>: The system features integration with various tools including:
            <ul className="list-disc list-inside ml-5 mt-1">
              <li>
                <strong>ManyChat</strong>: For connecting with social media platforms.
              </li>
              <li>
                <strong>n8n</strong>: To automate processes, such as checking availability and setting appointments.
              </li>
            </ul>
          </li>
        </ol>

        {/* Architecture / Logic / Design Section */}
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Architecture / Logic / Design
        </h2>
        <p style={styles.text} className="mb-4">
          The architecture of the AI RAG & Appointment System comprises several interconnected workflows:
        </p>
        <ul className="list-disc list-inside mb-4 ml-5" style={styles.text}>
          <li>
            The <strong>ManyChat Automation Workflow</strong> is designed for creating chat automations that guide the interaction process. Users can manage contacts, track live chats, and view automation.
          </li>
        </ul>
        <img
          src={ManyChatAIReply}
          alt='ManyChat Automation Workflow - "RAG & Appointment"'
          className="w-full h-auto mb-6 rounded-lg"
        />
        <p style={styles.text} className="mb-4">
          The ManyChat interface for building automation workflows for lead interactions.
        </p>
        <ul className="list-disc list-inside mb-4 ml-5" style={styles.text}>
          <li>
            <strong>n8n Workflows</strong>: Different workflows function effectively within the platform:
            <ul className="list-disc list-inside ml-6 mt-1">
              <li>
                <strong>Check Availability Tool</strong>: This workflow verifies available time slots based on existing appointments.
              </li>
            </ul>
          </li>
        </ul>
        <img
          src={n8nCheckAvailabilityTool}
          alt="check_availability_tool"
          className="w-full h-auto mb-6 rounded-lg"
        />
        <p style={styles.text} className="mb-4">
          Workflow for checking appointment availability.
        </p>
        <ul className="list-disc list-inside mb-4 ml-5" style={styles.text}>
          <li>
            <strong>Set Appointment Tool</strong>: This workflow handles the appointment scheduling process by integrating with external APIs and managing records.
          </li>
        </ul>
        <img
          src={n8nSetAppointmentTool}
          alt="set_appointment_tool"
          className="w-full h-auto mb-6 rounded-lg"
        />
        <p style={styles.text} className="mb-6">
          Workflow for setting appointments in the system.
        </p>

        {/* Challenges & Learnings Section */}
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Challenges & Learnings
        </h2>
        <p style={styles.text} className="mb-6">
          Implementing the AI RAG & Appointment System comes with its own set of challenges, including ensuring real-time responsiveness, maintaining accurate appointment records, and building a comprehensive database of services. However, these challenges also offer valuable lessons in automation, customer interaction, and process optimization.
        </p>

        {/* CTA Section */}
        {links.length > 0 && (
          <div className="mb-6">
            <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
              More Information
            </h2>
            <p style={styles.text} className="mb-4">
              For more insights on how to leverage the AI RAG & Appointment System, visit{' '}
              <a
                href={links[0].href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-600 hover:text-blue-800"
              >
                {links[0].label}
              </a>{' '}
              for a comprehensive guide and resources.
            </p>
          </div>
        )}

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

export default AIRAGAppointmentSystem;