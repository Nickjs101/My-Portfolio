import React from 'react'
import { projectStyles as styles } from './ProjectStyles'
import YouTubeShortsAutomationCover from '../../assets/Works/youtubeshortsautomationcover.png'
import YouTubeShortsAutomation from '../../assets/Works/youtubeshortsautomation.png'

const YouTubeShortsAutomation = () => {
  const skills = ['n8n', 'Klap AI', 'YouTube API', 'RSS Feeds']

  const links = []

  const contentSections = [
    {
      heading: 'Overview',
      paragraphs: [
        'The ',
        <strong key="bold1">YouTube Shorts Automation</strong>,
        ' project addresses the needs of content creators who often struggle with the editing and uploading process for their podcast videos. Traditionally, this involved hiring editors and manually uploading the content. Our solution leverages cutting-edge technology to automate this workflow, saving time and resources for creators.',
      ],
    },
    {
      heading: 'Goals',
      paragraphs:
        'The primary goal of this project is to streamline the video editing and uploading process using automation. By generating short clips from long podcast videos automatically, creators can focus on content creation rather than tedious editing tasks.',
    },
    {
      heading: 'Features / Workflow',
      paragraphs: [
        <ul key="features" className="list-disc list-inside mb-4" style={styles.text}>
          <li>
            <strong>RSS Feed Monitoring</strong>: Constantly checks for new uploads from specified sources.
          </li>
          <li>
            <strong>Automated Shorts Generation</strong>: Utilizes the{' '}
            <strong>Klap AI API</strong> to create engaging short clips from full-length videos, allowing
            customization for captions, subtitles, and cuts.
          </li>
          <li>
            <strong>YouTube Uploading</strong>: Automatically uploads generated shorts to the creator's
            YouTube channel without manual intervention.
          </li>
        </ul>,
      ],
      image: {
        src: YouTubeShortsAutomation,
        alt: 'The automation workflow illustrating the process of generating and uploading YouTube shorts.',
      },
    },
    {
      heading: 'Architecture / Logic / Design',
      paragraphs:
        'The project employs a structured automation workflow designed in ',
      paragraphsSuffix: (
        <>
          <strong>n8n</strong>.
          Key stages of the workflow include:
          <ol className="list-decimal list-inside ml-5" style={styles.text}>
            <li>
              <strong>Converting Videos to Shorts</strong>: Triggered by an RSS feed, it monitors new video
              uploads and processes them through the Klap API.
            </li>
            <li>
              <strong>Exporting Short Videos</strong>: Retrieves and prepares the generated shorts for
              exporting.
            </li>
            <li>
              <strong>Uploading to YouTube</strong>: Makes an HTTP request to upload the finished shorts
              directly to the user’s YouTube account.
            </li>
          </ol>
        </>
      ),
    },
    {
      heading: 'Results / Evaluation',
      paragraphs:
        'This automation allows creators to maintain a consistent and engaging online presence with minimal effort, leading to increased viewer engagement and growth on their channels.',
    },
    {
      heading: 'Challenges & Learnings',
      paragraphs:
        'During implementation, we encountered challenges related to API rate limits and ensuring smooth workflow integration. These hurdles provided valuable insights into managing automated processes efficiently.',
    },
  ]

  return (
    <div className="font-sans leading-relaxed tracking-wide flex flex-col items-center">
      <div className="max-w-4xl w-full p-0 md:p-6 rounded-lg">
        <img
          src={YouTubeShortsAutomationCover}
          alt="The promotional graphic showcasing the YouTube Shorts Automation project."
          className="w-full h-auto mb-6 rounded-lg"
        />
        <h1 style={styles.heading} className="text-3xl lg:text-5xl font-bold mb-4">
          YouTube Shorts Automation
        </h1>

        {contentSections.map((section, idx) => (
          <div key={idx} className="mb-8">
            <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
              {section.heading}
            </h2>
            {Array.isArray(section.paragraphs) ? (
              <p style={styles.text} className="mb-4">
                {section.paragraphs.map((para, i) => (
                  <React.Fragment key={i}>{para}</React.Fragment>
                ))}
              </p>
            ) : (
              <p style={styles.text} className="mb-4">
                {section.paragraphs}
              </p>
            )}
            {section.paragraphsSuffix && (
              <div style={styles.text} className="mb-4">
                {section.paragraphsSuffix}
              </div>
            )}
            {section.image && (
              <img
                src={section.image.src}
                alt={section.image.alt}
                className="w-full h-auto mb-6 rounded-lg"
              />
            )}
            {section.images &&
              section.images.map((imgObj, i) => (
                <img
                  key={i}
                  src={imgObj.src}
                  alt={imgObj.alt}
                  className="w-full h-auto mb-6 rounded-lg"
                />
              ))}
          </div>
        ))}

        {links.length > 0 && (
          <div className="flex flex-col sm:flex-row justify-center gap-4 my-8">
            {links.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold py-2 px-4 rounded-lg shadow-lg transition-colors duration-300"
                style={{
                  backgroundColor: 'var(--accent-primary)',
                  color: 'var(--text-primary)',
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

export default YouTubeShortsAutomation