import React from 'react'
import { projectStyles as styles } from './ProjectStyles'

import AIAppointmentSetterCoverImage from '../../assets/Works/AIAppointmentSetterCoverImage.png'
import n8nSetAppointmentTool from '../../assets/Works/n8nSetAppointmentTool.png'
import n8nCheckAvailabilityTool from '../../assets/Works/n8nCheckAvailabilityTool.png'
import n8nAppointmentSetterRAGAgent from '../../assets/Works/n8nAppointmentSetterRAGAgent.png'
import ManyChatAIReply from '../../assets/Works/ManyChatAIReply.png'

const AIAppointmentSetter = () => {
  const skills = [
    'AI & Machine Learning',
    'Automation',
    'n8n',
    'ManyChat',
    'Google Sheets',
    'OpenAI GPT-4',
    'Cal.com'
  ]

  const links = [
    {
      label: "Njs Dental Clinic's Facebook Page",
      href: 'https://www.facebook.com/NjsDentalClinic'
    }
  ]

  const contentSections = [
    {
      heading: 'Overview',
      paragraphs:
        'The AI RAG & Appointment System addresses a critical gap for service providers, particularly those who run advertisements on social media but lack an effective mechanism to convert leads into customers. By integrating AI capabilities, this system enables service providers to engage with potential clients, answer their questions, and facilitate appointment scheduling seamlessly.'
    },
    {
      heading: 'Goals',
      paragraphs:
        'The primary aim of this project is to streamline the customer acquisition process for service providers by leveraging artificial intelligence and automation technologies. Through this system, service providers can ensure that no lead is overlooked, enhancing the likelihood of converting inquiries into appointments and ultimately, clients.'
    },
    {
      heading: 'Features / Workflow',
      paragraphs: [
        'Lead Interaction: Upon viewing an ad, potential customers are directed to chat with the AI system, which engages them immediately.',
        'AI Response System: The AI uses the service provider\'s data to answer questions about services and consultations, ensuring relevant information is provided.',
        'Appointment Scheduling: Once the lead shows interest, the system assists in setting up appointments through automated responses.'
      ]
    },
    {
      heading: 'Architecture / Logic / Design',
      paragraphs: [
        'The system operates with an integrated design using multiple tools:',
        'ManyChat: Connects with social media platforms to facilitate initial interactions with leads.',
        'n8n Automation: Serves as the backbone for managing workflows, including customer inquiries and appointment scheduling.',
        '`set_appointment_tool` Workflow: Handles the appointment booking process, interfacing with external services.',
        '`check_availability_tool` Workflow: Validates available slots by analyzing current bookings through Google Sheets and AI models.'
      ]
    },
    {
      heading: 'Workflows',
      images: [
        { src: n8nSetAppointmentTool, alt: 'n8n set appointment tool workflow' },
        { src: n8nCheckAvailabilityTool, alt: 'n8n check availability tool workflow' }
      ]
    },
    {
      heading: 'Results / Evaluation',
      paragraphs:
        'The implementation of the AI RAG & Appointment System successfully enhances service providers\' engagement with potential clients, reduces manual effort in the appointment booking process, and ensures better lead conversion rates through timely follow-ups and interactions.'
    },
    {
      heading: 'Challenges & Learnings',
      paragraphs:
        'The project faced challenges such as ensuring data accuracy in appointments and managing the complexities of AI interaction. However, these hurdles led to valuable insights in optimizing automated responses, which will be beneficial for future enhancements of the system.'
    },
    {
      heading: 'ManyChat Automation Workflow',
      image: { src: ManyChatAIReply, alt: 'ManyChat Automation Workflow - RAG & Appointment' }
    },
    {
      heading: 'Additional Workflow Screenshot',
      image: { src: n8nAppointmentSetterRAGAgent, alt: 'n8n AI Rag & Appointment Setter workflow' }
    },
    {
      heading: 'Call to Action',
      paragraphs: (
        <>
          For more details about this project or to see it in action, visit{' '}
          <a
            href={links[0].href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            {links[0].label}
          </a>
          .
        </>
      )
    }
  ]

  return (
    <div className="font-sans leading-relaxed tracking-wide flex flex-col items-center">
      <div className="max-w-4xl w-full p-0 md:p-6 rounded-lg">
        <img
          src={AIAppointmentSetterCoverImage}
          alt="AI RAG & Appointment System Cover Image"
          className="w-full h-auto mb-6 rounded-lg"
        />

        <h1 style={styles.heading} className="text-3xl lg:text-5xl font-bold mb-4">
          AI RAG & Appointment System
        </h1>

        {contentSections.map((section, index) => (
          <section key={index} className="mb-8">
            {section.heading && (
              <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
                {section.heading}
              </h2>
            )}

            {section.paragraphs &&
              (Array.isArray(section.paragraphs) ? (
                section.paragraphs.map((para, i) => (
                  <p style={styles.text} className="mb-4" key={i}>
                    {para}
                  </p>
                ))
              ) : typeof section.paragraphs === 'string' ? (
                <p style={styles.text} className="mb-4">
                  {section.paragraphs}
                </p>
              ) : (
                section.paragraphs
              ))}

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
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto mb-6 rounded-lg"
                  key={i}
                />
              ))}
          </section>
        ))}

        {links.length > 0 && (
          <div className="flex flex-col sm:flex-row justify-center gap-4 my-8">
            {links.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold py-2 px-4 rounded-lg shadow-lg transition-colors duration-300 text-center"
                style={{
                  backgroundColor: 'var(--accent-primary)',
                  color: 'var(--text-primary)'
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}

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

export default AIAppointmentSetter