import React from 'react'
import { projectStyles as styles } from './ProjectStyles'
import CoverImage from '/tmp/portfolio/src/assets/Works/pagegeneratorCover.png'
import ProjectSetupImage from '/tmp/portfolio/src/assets/Works/1ProjectSetup.png'
import InfoExtractionImage from '/tmp/portfolio/src/assets/Works/2InfoExtraction.png'
import GenerationImage from '/tmp/portfolio/src/assets/Works/3ProjectPageGeneration.png'
import UpdateListImage from '/tmp/portfolio/src/assets/Works/4ProjectListUpdate.png'
import PushNotifyImage from '/tmp/portfolio/src/assets/Works/5PushAndNotify.png'
import FailedDeployImage from '/tmp/portfolio/src/assets/Works/FailedDeploymentNotification.png'
import RevertImage from '/tmp/portfolio/src/assets/Works/RevertLatestProject.png'
import PortfolioProjectsImage from '/tmp/portfolio/src/assets/Works/PortfolioProjects.png'
import NetlifyDeploymentsImage from '/tmp/portfolio/src/assets/Works/NetlifyDeployments.png'

const AutomatedProjectPageGenerator = () => {
  const skills = [
    'Git / GitHub',
    'n8n',
    'OpenAI GPT models',
    'Image analysis models',
    'Google Drive',
    'Bash / Shell scripting',
    'Telegram',
    'Netlify',
    'React / JSX',
    'JavaScript'
  ]

  const sections = [
    {
      heading: 'Overview',
      paragraphs: [
        'I built an automation pipeline that generates complete project showcase pages (React/JSX components) from stored project artifacts and deploys them to my portfolio.',
        'The system uses AI to write informative content and code from project metadata and images, validates and saves the generated page, commits it to the site repository, and notifies me about success or failure.'
      ]
    },
    {
      heading: 'Goals',
      paragraphs: [
        'Remove repetitive effort of writing and coding project showcase pages.',
        'Turn project artifacts (docs, images, repo) into production-ready portfolio pages automatically.',
        'Add robust deploy and rollback flows with notifications.'
      ]
    },
    {
      heading: 'Features / Workflow',
      paragraphs: [
        'Below is the end-to-end workflow implemented in n8n and shell scripts. Each step is orchestrated to extract, generate, validate, save, and deploy project pages automatically.'
      ],
      images: [
        { src: ProjectSetupImage, alt: '1. Project setup and cloning - n8n workflow: Setup Project in Local Folder' },
        { src: InfoExtractionImage, alt: '2. Information extraction - n8n workflow: Info Extraction' },
        { src: GenerationImage, alt: '3. Project page generation - Page Writer and React Component Generator' },
        { src: UpdateListImage, alt: '4. Update project list - replace project.js with updated code' },
        { src: PushNotifyImage, alt: '5. Commit, push and notify - Save and Notify workflow' }
      ],
      items: [
        {
          title: '1. Project setup and cloning',
          desc: 'Triggers to recreate or detect new project folders, cleans temporary directories, clones the repo, pulls changes, and configures Git user details.'
        },
        {
          title: '2. Information extraction',
          desc: 'Searches Google Drive, downloads project files, conditionally saves images, uses an image model to describe visuals, extracts text from files, and combines context and image descriptions for content generation.'
        },
        {
          title: '3. Project page content & code generation',
          desc: 'A Page Writer uses GPT models to create blog-style content, a React Component Generator converts content to JSX, and a Code Validator/Fixer runs model-based validation before saving.'
        },
        {
          title: '4. Update project list / renderer',
          desc: 'Reads project list files, extracts and renders project code, validates/fixes with a GPT model, converts to text, sets MIME types, and replaces the project JS file in-place.'
        },
        {
          title: '5. Commit, push and notify',
          desc: 'Adds files to Git, commits, pushes to GitHub, checks push success, and sends Telegram notifications for success or failure.'
        },
        {
          title: 'Failure detection, notification, and rollback',
          desc: 'An n8n workflow listens for Netlify failed deploys, sends a Telegram message, and triggers a revert workflow that cleans tmp, reverts the problematic commit, and pushes the rollback.'
        }
      ]
    },
    {
      heading: 'Architecture / Logic / Design',
      paragraphs: [
        'Orchestrator: n8n workflows coordinate triggers, file operations, model calls, and notifications.',
        'AI: GPT family models generate content and code (Page Writer & React generator) and validate/fix code before writing.',
        'Image analysis: an image model describes visual assets so generated pages include contextual captions and alt text.',
        'Storage: Google Drive hosts finished projects and source files; n8n reads files for processing.',
        'Version control & deployment: Git/GitHub stores site code; Netlify handles site deploys. Bash scripts manage temporary directories and shell operations.',
        'Notifications & safety: Telegram for alerts; rollback workflows automatically revert problematic changes when deployments fail.'
      ]
    },
    {
      heading: 'Results / Evaluation',
      paragraphs: [
        'Generated pages are written as JSX components, validated by model-based checks, and successfully deployed to Netlify.',
        'The pipeline reduced time-to-publish for a new project page from tens of minutes to under a few minutes (including review), and improved consistency across pages.'
      ],
      images: [
        { src: PortfolioProjectsImage, alt: 'Example output: Featured Projects section showing generated project cards' },
        { src: NetlifyDeploymentsImage, alt: 'Netlify deployment dashboard showing successful production publishes and deploy history' }
      ]
    },
    {
      heading: 'Challenges & Learnings',
      paragraphs: [
        'Ensuring safe, correct code generation required a validation/fix loop with model-assisted linting and test commits.',
        'Handling images reliably (correct captions, MIME types, and sizes) needed robust extraction and conditional save logic.',
        'Deployment failures still occur; integrating Netlify triggers with rollback workflows and Telegram notifications made the system resilient.',
        'Iterating the prompting and validator models reduced manual edits significantly.'
      ],
      images: [
        { src: FailedDeployImage, alt: 'Failed Deployment Notification workflow in n8n' },
        { src: RevertImage, alt: 'Revert Latest GitHub Changes workflow in n8n' }
      ]
    }
  ]

  return (
    <div className="font-sans leading-relaxed tracking-wide flex flex-col items-center px-4">
      <div className="max-w-4xl w-full p-0 md:p-6 rounded-lg">
        <img src={CoverImage} alt="Automated Project Page Generator cover" className="w-full h-auto mb-6 rounded-lg shadow-md" />

        <h1 style={styles.heading} className="text-3xl lg:text-5xl font-bold mb-4">
          Automated Project Page Generator
        </h1>

        {sections.map((section, sIdx) => (
          <section key={sIdx} className="mb-8">
            <h2 style={styles.heading} className="text-2xl font-semibold mb-3">
              {section.heading}
            </h2>

            {Array.isArray(section.paragraphs)
              ? section.paragraphs.map((p, pIdx) => (
                  <p style={styles.text} className="mb-3 text-gray-800 dark:text-gray-200" key={pIdx}>
                    {p}
                  </p>
                ))
              : (
                <p style={styles.text} className="mb-3 text-gray-800 dark:text-gray-200">
                  {section.paragraphs}
                </p>
              )}

            {section.items && (
              <div className="space-y-4 mb-4">
                {section.items.map((it, itIdx) => (
                  <div key={itIdx} className="pl-3">
                    <h3 style={styles.text} className="font-semibold text-lg text-gray-900 dark:text-gray-100">
                      {it.title}
                    </h3>
                    <p style={styles.text} className="text-gray-700 dark:text-gray-300">
                      {it.desc}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {section.images && section.images.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {section.images.map((img, imgIdx) => (
                  <figure key={imgIdx} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm">
                    <img src={img.src} alt={img.alt} className="w-full h-auto object-cover" />
                    <figcaption style={styles.text} className="p-3 text-sm text-gray-600 dark:text-gray-400">
                      {img.alt}
                    </figcaption>
                  </figure>
                ))}
              </div>
            )}
          </section>
        ))}

        <h2 style={styles.heading} className="text-2xl font-bold mb-4">Skills & Technologies Used</h2>
        <div className="flex flex-wrap mb-8">
          {skills.map((skill, index) => (
            <span
              key={skill}
              className="py-1 px-3 m-1 rounded-full font-semibold text-sm"
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