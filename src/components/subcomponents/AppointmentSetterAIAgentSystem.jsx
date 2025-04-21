import React from 'react'
import { projectStyles as styles } from './ProjectStyles'

import AIAppointmentSetterCoverImage from '../../assets/Works/AIAppointmentSetterCoverImage.png'
import n8nSetAppointmentTool from '../../assets/Works/n8nSetAppointmentTool.png'
import n8nCheckAvailabilityTool from '../../assets/Works/n8nCheckAvailabilityTool.png'
import n8nAppointmentSetterRAGAgent from '../../assets/Works/n8nAppointmentSetterRAGAgent.png'
import ManyChatAIReply from '../../assets/Works/ManyChatAIReply.png'

const AIAppointmentSystem = () => {
  const skills = [
    'ManyChat',
    'n8n',
    'Google Sheets',
    'Cal.com',
    'OpenAI GPT-4',
    'Automation and Workflow Management'
  ]

  const links = [
    { label: 'Discover More', href: '#' },
    { label: 'Get in Touch', href: '#' }
  ]

  const contentSections = [
    {
      heading: 'Overview',
      paragraphs:
        'The AI RAG & Appointment System empowers service providers to manage customer interactions effectively. When leads interact with service providers\' ads on social media, they are directed to a chat interface, where the system is poised to answer their inquiries and facilitate appointment setting.'
    },
    {
      heading: 'Goals',
      paragraphs: [
        'Convert social media leads into customers through effective automated interactions.',
        'Provide immediate access to service offerings and appointment scheduling.',
        'Enhance user satisfaction with 24/7 chat support without requiring constant human oversight.'
      ]
    },
    {
      heading: 'Features',
      paragraphs: [
        'Lead Interaction: The system engages users right from the moment they express interest via ads.',
        'Dynamic Information Delivery: It responds to customer queries using predefined data about services and consultations.',
        'Appointment Management: The system not only engages leads but also sets appointments by checking availability and managing bookings in real-time.'
      ]
    },
    {
      heading: 'Architecture',
      paragraphs: [
        'ManyChat: This platform is utilized for connecting and interacting with social media leads.',
        'n8n: An automation tool that orchestrates interactions between the customer, AI agent, and appointment tools.',
        'Check Availability Tool: This tool checks the already booked appointments against requested times, employing Google Sheets as a database and OpenAI GPT-4 for intelligent date validation.',
        'Set Appointment Tool: Utilizes Cal.com and Google Sheets to schedule and record appointments efficiently.'
      ],
      images: [
        { src: ManyChatAIReply, alt: 'ManyChat Automation Workflow - RAG & Appointment' },
        { src: n8nAppointmentSetterRAGAgent, alt: 'n8n AI RAG & Appointment Setter Workflow' },
        { src: n8nCheckAvailabilityTool, alt: 'n8n Check Availability Tool Workflow' },
        { src: n8nSetAppointmentTool, alt: 'n8n Set Appointment Tool Workflow' }
      ]
    },
    {
      heading: 'Results',
      paragraphs:
        'Implementing the AI RAG & Appointment System has shown promising results in improving engagement and conversion rates for clients. Service providers can now manage customer queries effectively while ensuring that appointments are made without conflicts, ultimately leading to higher customer satisfaction and business growth.'
    },
    {
      heading: 'Challenges',
      paragraphs: [
        'Data Management: Integrating data across various tools poses a challenge in maintaining consistency and accuracy.',
        'User Adaptability: Some customers may initially struggle with engaging through automated systems, which underscores the importance of design and usability.'
      ]
    }
  ]

  return (
    <div className="font-sans leading-relaxed tracking-wide flex flex-col items-center">
      <div className="max-w-4xl w-full p-0 md:p-6 rounded-lg">
        <img
          src={AIAppointmentSetterCoverImage}
          alt="AI RAG & Appointment System Cover - Facebook business page screenshot for Njs Dental Clinic"
          className="w-full h-auto mb-6 rounded-lg"
        />

        <h1 style={styles.heading} className="text-3xl lg:text-5xl font-bold mb-4">
          AI RAG & Appointment System: Revolutionizing Customer Engagement for Service Providers
        </h1>

        <p style={styles.text} className="mb-6">
          In today's competitive landscape, many service providers struggle to convert social media leads into loyal customers. The <strong>AI RAG & Appointment System</strong> has been designed to bridge this gap, offering a seamless way to engage leads and streamline appointment scheduling. Here’s a deep dive into the project's innovative solution.
        </p>

        {contentSections.map((section, idx) => (
          <div key={idx} className="mb-8">
            <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
              {section.heading}
            </h2>
            {Array.isArray(section.paragraphs) ? (
              section.paragraphs.map((para, pIdx) => (
                <p style={styles.text} className="mb-3" key={pIdx}>
                  {para.startsWith(section.heading.split(' ')[0]) ? (
                    <><strong>{para.split(':')[0]}</strong>{para.slice(para.indexOf(':') + 1)}</>
                  ) : (
                    para
                  )}
                </p>
              ))
            ) : (
              <p style={styles.text} className="mb-4">{section.paragraphs}</p>
            )}
            {section.image && (
              <img
                src={section.image.src}
                alt={section.image.alt}
                className="w-full h-auto mb-6 rounded-lg"
              />
            )}
            {section.images &&
              section.images.map((img, i) => (
                <img
                  key={i}
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto mb-6 rounded-lg"
                />
              ))}
          </div>
        ))}

        <div className="flex flex-col sm:flex-row justify-center gap-4 my-8">
          {links.map(({ label, href }, i) => (
            <a
              key={i}
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

export default AIAppointmentSystem