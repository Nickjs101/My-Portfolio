import React from 'react'
import { projectStyles as styles } from './ProjectStyles'
import CoverImage from '../../assets/Works/projectpagegeneratorcover.svg'

const AutomatedProjectPageGenerator = () => {
  const skills = [
    'n8n',
    'Git',
    'GitHub',
    'React',
    'JSX',
    'OpenAI GPT',
    'Google Drive',
    'Bash',
    'Netlify',
    'Telegram'
  ]

  const links = [
    {
      label: 'View on GitHub',
      href: 'https://github.com/Nickjs101/My-Portfolio'
    },
    {
      label: 'Live Demo',
      href: 'https://nickjsportfolio.netlify.app'
    }
  ]

  const contentSections = [
    {
      heading: 'Overview',
      paragraphs: [
        'Managing a portfolio site means regularly adding new project pages—a repetitive task involving asset gathering, JSX creation, testing, committing, and deploying. This automation handles the entire pipeline: from collecting assets in Google Drive to generating React components with GPT, validating code, committing to GitHub, deploying to Netlify, and sending notifications—all with rollback support if something fails.'
      ]
    },
    {
      heading: 'Goals',
      list: [
        'Eliminate manual work when adding new portfolio projects.',
        'Ensure consistent JSX structure and styling across all project pages.',
        'Automate the full CI/CD pipeline from content creation to deployment.',
        'Provide rollback capabilities and error notifications for reliability.'
      ]
    },
    {
      heading: 'Features / Workflow',
      list: [
        'Asset collection: Monitors Google Drive for new project folders with images and metadata.',
        'GPT-powered generation: Uses OpenAI to generate React JSX components following existing patterns.',
        'Code validation: Runs ESLint and syntax checks before committing.',
        'Git automation: Stages, commits, and pushes changes to GitHub automatically.',
        'Netlify deployment: Triggers builds and monitors deployment status.',
        'Notifications: Sends Telegram alerts on success or failure with rollback options.'
      ]
    },
    {
      heading: 'Architecture / Logic',
      paragraphs: [
        'An n8n workflow orchestrates the entire pipeline, connecting Google Drive, OpenAI, GitHub, Netlify, and Telegram. Each step includes error handling and conditional branching for robust operation.'
      ],
      groups: [
        {
          title: 'Asset Ingestion',
          items: [
            'Watches a Google Drive folder for new project directories.',
            'Extracts images, descriptions, and metadata from standardized folder structure.',
            'Downloads and prepares assets for the React project.'
          ]
        },
        {
          title: 'Code Generation',
          items: [
            'Sends project details to OpenAI GPT with existing component examples as context.',
            'Generates JSX following the established ProjectStyles pattern.',
            'Validates generated code with ESLint and fixes common issues.'
          ]
        },
        {
          title: 'Git Operations',
          items: [
            'Creates new component file in the subcomponents directory.',
            'Updates projects.js with new project entry.',
            'Commits changes with descriptive message and pushes to main branch.'
          ]
        },
        {
          title: 'Deployment & Notification',
          items: [
            'Triggers Netlify build via webhook.',
            'Polls deployment status until complete.',
            'Sends Telegram notification with preview link or error details.',
            'Supports rollback via git revert if deployment fails.'
          ]
        }
      ]
    },
    {
      heading: 'Results / Evaluation',
      list: [
        'Reduced project page creation from 30+ minutes to under 5 minutes.',
        'Consistent styling and structure across all generated pages.',
        'Zero-touch deployment with automatic rollback on failures.',
        'Full audit trail via Git commits and Telegram notifications.'
      ]
    },
    {
      heading: 'Challenges & Learnings',
      list: [
        'Prompt engineering: Crafting GPT prompts that consistently produce valid, styled JSX required iteration.',
        'Error recovery: Building robust rollback mechanisms for each pipeline stage.',
        'Asset handling: Ensuring images are properly optimized and placed in the correct directories.'
      ]
    }
  ]

  return (
    <div className="font-sans leading-relaxed tracking-wide flex flex-col items-center">
      <div className="max-w-4xl w-full p-0 md:p-6 rounded-lg">
        <img
          src={CoverImage}
          alt="Automated Project Page Generator pipeline cover: Google Drive assets flow through GPT codegen and Git into a Netlify deploy"
          className="w-full h-auto mb-6 rounded-lg"
        />

        <h1 style={styles.heading} className="text-3xl lg:text-5xl font-bold mb-4">
          Automated Project Page Generator
        </h1>

        {contentSections.map((section) => (
          <div key={section.heading} className="mb-8">
            <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
              {section.heading}
            </h2>

            {Array.isArray(section.paragraphs) &&
              section.paragraphs.map((para, idx) => (
                <p key={idx} style={styles.text} className="mb-4">
                  {para}
                </p>
              ))}

            {Array.isArray(section.list) && (
              <ul className="list-disc pl-6 mb-4 space-y-2">
                {section.list.map((item, idx) => (
                  <li key={idx} style={styles.text}>
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {Array.isArray(section.groups) &&
              section.groups.map((group) => (
                <div key={group.title} className="mb-4">
                  <h3 style={styles.heading} className="text-xl font-semibold mb-2">
                    {group.title}
                  </h3>
                  <ul className="list-disc pl-6 space-y-2">
                    {group.items.map((item, idx) => (
                      <li key={idx} style={styles.text}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        ))}

        {Array.isArray(links) && links.length > 0 && (
          <div className="flex flex-col sm:flex-row justify-center gap-4 my-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold py-2 px-4 rounded-lg shadow-lg transition-colors duration-300 text-center"
                style={{
                  backgroundColor: 'var(--accent-primary)',
                  color: 'var(--bg-primary)'
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
          {skills.map((skill) => (
            <span
              key={skill}
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

export default AutomatedProjectPageGenerator
