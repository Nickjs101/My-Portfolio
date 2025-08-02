import React from 'react'
import { projectStyles as styles } from './ProjectStyles'
import AppointmentSetterAgentCover from '../../assets/Works/AppointmentSetterAgentCover.png'
import ManyChatAIReply from '../../assets/Works/ManyChatAIReply.png'
import n8nAppointmentSetterRAGAgent from '../../assets/Works/n8nAppointmentSetterRAGAgent.png'
import n8nCheckAvailabilityTool from '../../assets/Works/n8nCheckAvailabilityTool.png'
import n8nSetAppointmentTool from '../../assets/Works/n8nSetAppointmentTool.png'

const AIRAGAppointmentSystem = () => {
  const skills = ['ManyChat', 'n8n', 'Google Sheets', 'Cal.com', 'OpenAI GPT-4o']

  const contentSections = [
    {
      heading: 'Overview',
      paragraphs:
        'The AI RAG & Appointment System addresses a common challenge faced by service providers: effectively converting leads gathered from social media ads into paying customers. By implementing an intelligent system that engages potential customers and facilitates appointment scheduling, businesses can enhance their lead conversion rates significantly.'
    },
    {
      heading: 'Goals',
      paragraphs: [
        'Provide an efficient response system for service providers to interact with leads.',
        'Automate the appointment booking process, minimizing manual effort.',
        'Ensure smooth integration with existing social media platforms and tools.'
      ]
    },
    {
      heading: 'Features / Workflow',
      paragraphs: [
        'The system operates through the following mechanisms:',
        "Lead Interaction: Upon clicking a service provider's ad, leads are directed to a messaging interface where they can interact with an AI assistant.",
        "Dynamic Responses: The AI provides tailored responses based on the service provider's offerings and answers queries regarding consultations.",
        'Appointment Setting: After engaging with the lead, the AI can set an appointment, leveraging a calendar integration to confirm availability.'
      ]
    },
    {
      heading: 'Workflow Description',
      paragraphs: [
        '1. Initial Contact: A lead triggers the ManyChat integration by sending a message.',
        '2. User Input Handling: The n8n automation tool parses user inputs and processes scheduling logic to determine the best available appointment times.',
        '3. Checking Availability: Utilizes the availability checking tool which reads appointment data from Google Sheets and verifies free slots.',
        '4. Setting Appointments: Once a time is chosen, the system uses the appointment setting tool to book the appointment via the Cal.com API.'
      ],
      images: [
        { src: ManyChatAIReply, alt: 'ManyChat Automation Builder - RAG & Appointment Workflow' },
        { src: n8nAppointmentSetterRAGAgent, alt: 'AI Rag & Appointment Setter workflow in n8n' },
        { src: n8nCheckAvailabilityTool, alt: 'Check availability tool workflow screenshot' },
        { src: n8nSetAppointmentTool, alt: 'Set appointment tool workflow screenshot' }
      ]
    },
    {
      heading: 'Results / Evaluation',
      paragraphs: [
        'With the implementation of the AI RAG & Appointment System, service providers can now experience:',
        'Higher conversion rates from leads to clients.',
        'Increased efficiency in handling inquiries and scheduling.',
        'Improved customer satisfaction due to quicker response times.'
      ]
    },
    {
      heading: 'Challenges & Learnings',
      paragraphs: [
        'Adapting chatbot responses to handle a variety of customer queries effectively was a complex challenge that required continuous refinement.',
        'Integrating multiple tools (ManyChat, n8n, Google Sheets, Cal.com) highlighted the importance of maintaining a seamless workflow for optimal performance.'
      ]
    }
  ]

  return (
    <div className="font-sans leading-relaxed tracking-wide flex flex-col items-center">
      <div className="max-w-4xl w-full p-0 md:p-6 rounded-lg">
        <img
          src={AppointmentSetterAgentCover}
          alt="Visual representation of the AI-powered Retrieval-Augmented Generation and appointment booking system"
          className="w-full h-auto mb-6 rounded-lg"
        />

        <h1 style={styles.heading} className="text-3xl lg:text-5xl font-bold mb-4">
          AI RAG & Appointment System
        </h1>

        {contentSections.map((section, index) => (
          <div key={index} className="mb-8">
            <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
              {section.heading}
            </h2>

            {Array.isArray(section.paragraphs) ? (
              section.paragraphs.map((para, idx) => (
                // eslint-disable-next-line react/no-array-index-key
                <p key={idx} style={styles.text} className="mb-2 whitespace-pre-line">
                  {para}
                </p>
              ))
            ) : (
              <p style={styles.text} className="mb-4 whitespace-pre-line">
                {section.paragraphs}
              </p>
            )}

            {section.images &&
              section.images.map((img, idx) => (
                // eslint-disable-next-line react/no-array-index-key
                <img
                  key={idx}
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto mb-6 rounded-lg"
                />
              ))}
          </div>
        ))}

        <h2 style={styles.heading} className="text-2xl font-bold mb-4">
          Skills & Technologies Used
        </h2>
        <div className="flex flex-wrap mb-4">
          {skills.map((skill, index) => (
            // eslint-disable-next-line react/no-array-index-key
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