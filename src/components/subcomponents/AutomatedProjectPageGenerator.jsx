import { projectStyles as styles } from './ProjectStyles';

import PageGeneratorCover from '../../assets/Works/pagegeneratorCover.png';
import PortfolioProjects from '../../assets/Works/PortfolioProjects.png';
import ProjectSetup1 from '../../assets/Works/1ProjectSetup.png';
import InfoExtraction2 from '../../assets/Works/2InfoExtraction.png';
import ProjectPageGeneration3 from '../../assets/Works/3ProjectPageGeneration.png';
import ProjectListUpdate4 from '../../assets/Works/4ProjectListUpdate.png';
import PushAndNotify5 from '../../assets/Works/5PushAndNotify.png';
import FailedDeploymentNotification from '../../assets/Works/FailedDeploymentNotification.png';
import RevertLatestProject from '../../assets/Works/RevertLatestProject.png';
import NetlifyDeployments from '../../assets/Works/NetlifyDeployments.png';

const AutomatedProjectPageGenerator = () => {
  const title = 'Automated Project Page Generator';

  const skills = [
    'n8n',
    'Git',
    'GitHub',
    'React',
    'JSX',
    'OpenAI GPT (GPT-4o, GPT-4.1-mini)',
    'GPT Image Model',
    'Google Drive',
    'Bash',
    'Netlify',
    'Telegram'
  ];

  const links = [
    { label: 'Live Portfolio', href: 'https://nickjsportfolio.netlify.app' },
    { label: 'Source Code (Portfolio Repo)', href: 'https://github.com/Nickjs101/My-Portfolio' }
  ];

  const sections = [
    {
      heading: 'Overview',
      paragraphs:
        'Manually building polished project pages slows down shipping new work. This system automates the end-to-end creation of React-based project pages—collecting assets, generating content and JSX, validating code, committing changes, and deploying—so you can focus on building projects, not documentation.',
      images: [
        {
          src: PortfolioProjects,
          alt: 'Featured Projects section where new project pages appear automatically'
        }
      ]
    },
    {
      heading: 'Goals',
      bullets: [
        'Eliminate repetitive manual writing and coding of project pages',
        'Ensure consistent structure and quality across showcases',
        'Automate deployment with notifications and guardrails (rollback on failure)',
        'Keep assets centralized and version-controlled'
      ]
    },
    {
      heading: '1) Setup project locally',
      paragraphs:
        'Clean the working directory, clone/pull the site repository, and configure Git identity to prepare the workspace for automation.',
      images: [
        {
          src: ProjectSetup1,
          alt: 'n8n workflow: Setup Project in Local Folder'
        }
      ]
    },
    {
      heading: '2) Information extraction',
      paragraphs:
        'Discover assets from Google Drive, pull descriptions and images, use an image model to describe visuals, and merge text with image context for richer content generation.',
      images: [
        {
          src: InfoExtraction2,
          alt: 'n8n workflow: Information Extraction with Google Drive and image descriptions'
        }
      ]
    },
    {
      heading: '3) Project page code generation',
      paragraphs:
        'Use GPT to write the project narrative and convert it into a React component (JSX) using a template. Validate and auto-fix the code, then save the file into the project.',
      images: [
        {
          src: ProjectPageGeneration3,
          alt: 'n8n workflow: Project Page Code Generation using GPT and validator'
        }
      ]
    },
    {
      heading: '4) Update project list for the site',
      paragraphs:
        'Read and parse the projects index, render a new entry, validate the bundle, and write back the updated list so the new project appears on the site.',
      images: [
        {
          src: ProjectListUpdate4,
          alt: 'n8n workflow: Update Project List and write to disk'
        }
      ]
    },
    {
      heading: '5) Commit, push, and notify',
      paragraphs:
        'Stage, commit, and push changes to GitHub with conditional Telegram notifications for success or failure.',
      images: [
        {
          src: PushAndNotify5,
          alt: 'n8n workflow: Save and Notify with Git and Telegram'
        }
      ]
    },
    {
      heading: '6) Deployment monitoring and automatic recovery',
      paragraphs:
        'On Netlify deployment failures, send a Telegram alert and trigger an automated Git revert of the latest commit to restore the last known good state.',
      images: [
        {
          src: FailedDeploymentNotification,
          alt: 'n8n workflow: Netlify deployFailed trigger with Telegram alert and revert'
        },
        {
          src: RevertLatestProject,
          alt: 'n8n workflow: Revert Latest GitHub Changes automation'
        }
      ]
    },
    {
      heading: '7) Deployment visibility',
      paragraphs:
        'Track deployment status and history in Netlify. Auto-publishing from main ensures changes go live quickly with revert support.',
      images: [
        {
          src: NetlifyDeployments,
          alt: 'Netlify deployment dashboard with history and auto-publish'
        }
      ]
    },
    {
      heading: 'Architecture / Logic / Design',
      bullets: [
        'Orchestration: n8n coordinates all steps as discrete, observable nodes',
        'Content Generation: GPT models produce both narrative content and React JSX using a template-driven approach',
        'Asset Pipeline: Google Drive as the content source; GPT image analysis enriches captions/context',
        'Code Quality: Validation and auto-fix step ensures syntactic correctness (JSX) before commit',
        'Delivery: Git operations push to GitHub; Netlify builds and deploys from main',
        'Observability & Ops: Telegram notifications and a dedicated rollback workflow for resilience',
        'Environment: Bash scripting for filesystem tasks and MIME handling for safe writes'
      ]
    },
    {
      heading: 'Results / Evaluation',
      bullets: [
        'Consistent, high-quality project pages generated from minimal inputs (text + images)',
        'End-to-end flow from assets to live page reduced to a single run',
        'Safer deploys with automated failure notifications and one-click rollback path',
        'Portfolio stays current without interrupting core development work'
      ],
      images: [
        {
          src: PageGeneratorCover,
          alt: 'Automated Project Page Generator concept cover'
        }
      ]
    }
  ];

  return (
    <div className="font-sans leading-relaxed tracking-wide flex flex-col items-center">
      <div className="max-w-4xl w-full p-0 md:p-6 rounded-lg">
        <img src={PageGeneratorCover} alt="Automated Project Page Generator cover" className="w-full h-auto mb-6 rounded-lg" />

        <h1 style={styles.heading} className="text-3xl lg:text-5xl font-bold mb-4">
          {title}
        </h1>

        {sections.map((section) => (
          <div key={section.heading} className="mb-8">
            <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
              {section.heading}
            </h2>

            {Array.isArray(section.paragraphs) &&
              section.paragraphs.map((para) => (
                <p key={`${section.heading}-${String(para).slice(0, 32)}`} style={styles.text} className="mb-4">
                  {para}
                </p>
              ))}

            {!Array.isArray(section.paragraphs) && section.paragraphs ? (
              <p style={styles.text} className="mb-4">
                {section.paragraphs}
              </p>
            ) : null}

            {Array.isArray(section.bullets) && section.bullets.length > 0 && (
              <ul className="list-disc pl-6 mb-4">
                {section.bullets.map((item) => (
                  <li key={`${section.heading}-${item}`} style={styles.text} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {Array.isArray(section.images) && section.images.length > 0 && (
              <div className="grid grid-cols-1 gap-6">
                {section.images.map((img) => (
                  <img key={`${section.heading}-${img.alt || img.src}`} src={img.src} alt={img.alt} className="w-full h-auto rounded-lg" />
                ))}
              </div>
            )}
          </div>
        ))}

        {Array.isArray(links) && links.length > 0 && (
          <div className="flex flex-col sm:flex-row justify-center gap-4 my-8">
            {links
              .filter((l) => Boolean(l.href))
              .map((link) => (
                <a
                  key={link.href}
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
  );
};

export default AutomatedProjectPageGenerator;