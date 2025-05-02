import React from 'react';
import { projectStyles as styles } from './ProjectStyles';
import pagegeneratorCover from '../../assets/Works/pagegeneratorCover.png';
import ProjectSetup from '../../assets/Works/1ProjectSetup.png';
import InfoExtraction from '../../assets/Works/2InfoExtraction.png';
import NetlifyDeployments from '../../assets/Works/NetlifyDeployments.png';
import RevertLatestProject from '../../assets/Works/RevertLatestProject.png';
import FailedDeploymentNotification from '../../assets/Works/FailedDeploymentNotification.png';
import PushAndNotify from '../../assets/Works/5PushAndNotify.png';
import ProjectListUpdate from '../../assets/Works/4ProjectListUpdate.png';
import ProjectPageGeneration from '../../assets/Works/3ProjectPageGeneration.png';

const AutomatedProjectPageGenerator = () => {
  const skills = [
    'n8n',
    'Git',
    'GPT Language Models',
    'Google Drive',
    'Telegram API',
    'Netlify',
    'Bash',
  ];

  const links = [
    {
      label: "Nick's Portfolio",
      href: 'https://nickjsportfolio.netlify.app',
    },
  ];

  const contentSections = [
    {
      heading: 'Overview',
      paragraphs:
        'The Automated Project Page Generator streamlines the process of creating showcase pages for projects. Instead of coding each page manually and writing accompanying content, this tool automates these tasks leveraging AI technologies. This innovation allows me to dedicate more time to developing new ideas and projects.',
    },
    {
      heading: 'Goals',
      paragraphs:
        'The primary goal of this project is to automate the content generation and code creation for project showcase pages, ensuring quick and efficient deployment to my portfolio website.',
    },
    {
      heading: 'Features / Workflow',
      paragraphs: [
        'Content and Code Generation: Utilizes GPT language models to auto-generate project page content and corresponding HTML code based on project details.',
        'Image Analysis: Employs GPT image models to analyze project images and incorporate relevant descriptions into the generated content.',
        'Google Drive Integration: Downloads project files for showcase page generation, ensuring accessibility and organization.',
        'Git & Bash Management: Automates the cloning and management of project directories to facilitate easy version control.',
        'Telegram Notifications: Sends real-time notifications regarding the deployment status or issues that may arise.',
        'Netlify Deployment: Automates deployment of the page to the live site, simplifying the publishing process.',
      ],
      image: {
        src: ProjectSetup,
        alt: 'Workflow in n8n for the Automated Project Page Generator',
      },
    },
    {
      heading: 'Architecture / Logic / Design',
      paragraphs:
        'The architecture comprises several integrated workflows built within the n8n automation tool. Key components of the workflow are: Triggers on changes within the Google Drive project folder. Steps to clean directories, clone projects, and pull the latest updates. Processes to extract and validate project information, culminating in code generation and page deployment.',
      image: {
        src: InfoExtraction,
        alt: 'Information Extraction Workflow in n8n',
      },
    },
    {
      heading: 'Challenges & Learnings',
      paragraphs: [
        'Streamlining the workflow required meticulous planning to ensure that each component interacted smoothly.',
        'Regular testing helped identify bottlenecks in the automation process, leading to a more robust and efficient solution.',
        'Gained insights into AI capabilities in content generation, realizing the potential for even broader applications.',
      ],
      image: {
        src: NetlifyDeployments,
        alt: 'Netlify Dashboard screenshot',
      },
    },
    {
      heading: 'Results / Evaluation',
      paragraphs:
        'The implementation has significantly reduced the time taken to build and deploy project showcases. The automated process has proven reliable, allowing me to focus on creating new projects rather than managing website content.',
      image: {
        src: RevertLatestProject,
        alt: 'Revert Latest GitHub Changes Workflow in n8n',
      },
    },
  ];

  return (
    <div className="font-sans leading-relaxed tracking-wide flex flex-col items-center">
      <div className="max-w-4xl w-full p-0 md:p-6 rounded-lg">
        <img
          src={pagegeneratorCover}
          alt="Automated Project Page Generator cover image"
          className="w-full h-auto mb-6 rounded-lg"
        />
        <h1 style={styles.heading} className="text-3xl lg:text-5xl font-bold mb-4">
          Automated Project Page Generator
        </h1>

        {contentSections.map((section, index) => (
          <section key={index} className="mb-8">
            <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
              {section.heading}
            </h2>
            {Array.isArray(section.paragraphs) ? (
              section.paragraphs.map((para, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <p key={i} style={styles.text} className="mb-4">
                  {para}
                </p>
              ))
            ) : (
              <p style={styles.text} className="mb-4">
                {section.paragraphs}
              </p>
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
                // eslint-disable-next-line react/no-array-index-key
                <img
                  key={i}
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto mb-6 rounded-lg"
                />
              ))}
          </section>
        ))}

        <div className="flex flex-col sm:flex-row justify-center gap-4 my-8">
          {links.map(({ label, href }, idx) => (
            // eslint-disable-next-line react/no-array-index-key
            <a
              key={idx}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold py-2 px-4 rounded-lg shadow-lg transition-colors duration-300"
              style={{
                backgroundColor: 'var(--accent-primary)',
                color: 'var(--text-primary)',
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
  );
};

export default AutomatedProjectPageGenerator;