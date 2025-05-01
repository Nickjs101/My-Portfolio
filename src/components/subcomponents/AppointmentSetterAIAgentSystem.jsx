import React from 'react';
import { projectStyles as styles } from './ProjectStyles';

import AppointmentSetterAgentCover from '../../assets/Works/AppointmentSetterAgentCover.png';
import ManyChatAIReply from '../../assets/Works/ManyChatAIReply.png';
import n8nAppointmentSetterRAGAgent from '../../assets/Works/n8nAppointmentSetterRAGAgent.png';
import n8nCheckAvailabilityTool from '../../assets/Works/n8nCheckAvailabilityTool.png';
import n8nSetAppointmentTool from '../../assets/Works/n8nSetAppointmentTool.png';

const AiRagAppointmentSystem = () => {
  const skills = ['ManyChat', 'n8n', 'Google Sheets', 'OpenAI GPT-4', 'Cal.com'];

  return (
    <div className="font-sans leading-relaxed tracking-wide flex flex-col items-center">
      <div className="max-w-4xl w-full p-0 md:p-6 rounded-lg">
        <img
          src={AppointmentSetterAgentCover}
          alt="Q&A and Appointment Setter AI Chatbot"
          className="w-full h-auto mb-6 rounded-lg"
        />

        <h1 style={styles.heading} className="text-3xl lg:text-5xl font-bold mb-4">
          AI RAG & Appointment System
        </h1>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Overview
        </h2>
        <p style={styles.text} className="mb-4">
          The AI RAG & Appointment System is designed to address a prevalent challenge faced by service providers who struggle to convert leads from their social media advertisements into customers. This innovative solution provides an interactive AI-powered experience that helps service providers manage leads, answer inquiries, and schedule appointments seamlessly.
        </p>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Goals
        </h2>
        <p style={styles.text} className="mb-4">
          The primary objective of this project is to facilitate better engagement between service providers and potential customers through an automated platform. By eliminating friction in the appointment booking process, the AI system aims to enhance conversion rates from leads to confirmed customers.
        </p>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Features / Workflow
        </h2>
        <ul style={styles.text} className="list-disc pl-6 mb-6 space-y-2 max-w-prose text-justify">
          <li>
            <strong>Lead Engagement</strong>: Initially, leads are directed from service provider ads to a messaging interface where the AI bot awaits inquiries.
          </li>
          <li>
            <strong>Conversational AI</strong>: Upon interaction, the chatbot responds to questions related to services offered, guiding the lead through available options.
          </li>
          <li>
            <strong>Appointment Setting</strong>: The AI continues the conversation until an appointment is successfully scheduled, ensuring the lead's needs are met while providing a smooth user experience.
          </li>
        </ul>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Architecture / Logic / Design
        </h2>

        <h3 style={styles.heading} className="text-xl font-semibold mb-4">
          Automation Flow with ManyChat
        </h3>
        <img
          src={ManyChatAIReply}
          alt='ManyChat Automation Flow - "RAG & Appointment"'
          className="w-full h-auto mb-2 rounded-lg"
        />
        <p style={styles.text} className="mb-6 italic text-center text-sm text-gray-600">
          This diagram illustrates the automation flow in ManyChat specifically designed for managing appointments and inquiries through a chatbot interface.
        </p>

        <h3 style={styles.heading} className="text-xl font-semibold mb-4">
          AI Interaction Flow using n8n
        </h3>
        <img
          src={n8nAppointmentSetterRAGAgent}
          alt="AI Rag & Appointment Setter"
          className="w-full h-auto mb-2 rounded-lg"
        />
        <p style={styles.text} className="mb-6 italic text-center text-sm text-gray-600">
          The workflow demonstrates how the AI system integrates with input from ManyChat to automate user interactions and appointment handling.
        </p>

        <h3 style={styles.heading} className="text-xl font-semibold mb-4">
          Check Availability Workflow
        </h3>
        <img
          src={n8nCheckAvailabilityTool}
          alt="check_availability_tool"
          className="w-full h-auto mb-2 rounded-lg"
        />
        <p style={styles.text} className="mb-6 italic text-center text-sm text-gray-600">
          This image shows the workflow for checking appointment availability, employing AI assistance to analyze schedules efficiently.
        </p>

        <h3 style={styles.heading} className="text-xl font-semibold mb-4">
          Set Appointment Workflow
        </h3>
        <img
          src={n8nSetAppointmentTool}
          alt="set_appointment_tool"
          className="w-full h-auto mb-6 rounded-lg"
        />
        <p style={styles.text} className="mb-8 italic text-center text-sm text-gray-600">
          The appointment-setting tool workflow showcases how data is managed and communicated between the AI and appointment systems.
        </p>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Results / Evaluation
        </h2>
        <p style={styles.text} className="mb-6">
          The AI RAG & Appointment System streamlines the appointment setting process, leading to enhanced customer engagement and higher conversion rates. Through the integration of various automation tools, service providers can now efficiently manage inquiries and appointments without manual input.
        </p>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Challenges & Learnings
        </h2>
        <p style={styles.text} className="mb-6">
          Implementing this system posed challenges, mainly around ensuring accurate data handling and integration between different platforms. Continuous testing and iteration were essential to refine the workflows and optimize user experience.
        </p>

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

export default AiRagAppointmentSystem;