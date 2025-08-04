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
    'n8n Automation',
    'Google Sheets',
    'OpenAI GPT-4o',
    'Cal.com for scheduling',
  ];

  const links = [
    // Video Demo URL was not provided so no CTA buttons included
  ];

  return (
    <div className="font-sans leading-relaxed tracking-wide flex flex-col items-center">
      <div className="max-w-4xl w-full p-0 md:p-6 rounded-lg">
        {/* COVER IMAGE */}
        <img
          src={AppointmentSetterAgentCover}
          alt="AI RAG & Appointment System with chat interface"
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
        <p style={styles.text} className="mb-4">
          The <strong>AI RAG & Appointment System</strong> is designed to bridge the gap between service
          providers and potential customers. Many service providers struggle to convert leads from social
          media ads into actual appointments due to the lack of an efficient system that can address inquiries
          and streamline appointment scheduling. This project leverages AI technology to facilitate this
          process and enhance customer interactions.
        </p>

        {/* Goals Section */}
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Goals
        </h2>
        <ul className="list-disc list-inside mb-6" style={styles.text}>
          <li>To create a streamlined communication channel between service providers and potential customers.</li>
          <li>To automate the lead conversion process by facilitating conversations and scheduling.</li>
          <li>To utilize AI to provide accurate responses based on service offerings and available appointment times.</li>
        </ul>

        {/* Features / Workflow Section */}
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Features / Workflow
        </h2>
        <ul className="list-disc list-inside mb-4" style={styles.text}>
          <li>
            <strong>Lead Interaction:</strong> When a potential customer interacts with ads on social media,
            they are directed to a messaging platform where the AI system responds to their inquiries.
          </li>
          <li>
            <strong>Automated Responses:</strong> The AI utilizes the service provider's data to answer
            questions regarding offerings and consultations.
          </li>
          <li>
            <strong>Appointment Scheduling:</strong> The chatbot helps set appointments by checking availability
            and confirming the booking through integration with calendars.
          </li>
        </ul>
        <img
          src={ManyChatAIReply}
          alt='ManyChat Automation Flow – "RAG & Appointment"'
          className="w-full h-auto mb-6 rounded-lg"
        />

        {/* Architecture / Logic / Design Section */}
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Architecture / Logic / Design
        </h2>

        <h3 style={styles.heading} className="text-xl font-semibold mb-3">
          Key Components:
        </h3>
        <ol className="list-decimal list-inside mb-6" style={styles.text}>
          <li>
            <strong>ManyChat Integration:</strong> Acts as a bridge to connect social media platforms and initiate
            conversations with leads.
          </li>
          <li>
            <strong>AI Agent:</strong> Utilizes the n8n automation tool to manage incoming requests and provides
            responses based on predefined parameters and AI analysis using OpenAI's models.
          </li>
          <li>
            <strong>Availability Check Tool:</strong> Engages with Google Sheets to check for available appointment
            slots and provides alternatives when necessary.
          </li>
        </ol>

        <img
          src={n8nAppointmentSetterRAGAgent}
          alt="AI Rag & Appointment Setter workflow"
          className="w-full h-auto mb-6 rounded-lg"
        />
        <img
          src={n8nCheckAvailabilityTool}
          alt="check_availability_tool workflow"
          className="w-full h-auto mb-6 rounded-lg"
        />
        <img
          src={n8nSetAppointmentTool}
          alt="set_appointment_tool workflow"
          className="w-full h-auto mb-6 rounded-lg"
        />

        {/* Results / Evaluation Section */}
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Results / Evaluation
        </h2>
        <p style={styles.text} className="mb-6">
          The automation system has significantly improved the lead conversion rates for service providers. By
          automating responses and simplifying the scheduling process, providers can focus more on their services
          while ensuring potential customers receive immediate assistance.
        </p>

        {/* Challenges & Learnings Section */}
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
          Challenges & Learnings
        </h2>
        <p style={styles.text} className="mb-6">
          Developing an AI system that understands contextual inquiries was challenging. Ensuring accurate responses
          required extensive data training and adjustments to the AI model. Learning to manipulate multiple APIs
          seamlessly was also a key aspect of this project.
        </p>

        {/* Call to Action Section */}
        {/* No valid Video Demo URL provided so no buttons */}

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
      </div>
    </div>
  );
};

export default AIRAGAppointmentSystem;