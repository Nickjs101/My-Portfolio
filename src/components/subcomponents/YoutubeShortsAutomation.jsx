import React from 'react';
import { projectStyles as styles } from './ProjectStyles';
import YoutubeShortsAutomationCover from '../../assets/Works/youtubeshortsautomationcover.png';
import YoutubeShortsAutomationWorkflow from '../../assets/Works/youtubeshortsautomationworkflow.png';

const YouTubeShortsAutomation = () => {
  const skills = ['RSS Feed Monitoring', 'KLAP AI', 'YouTube API', 'n8n'];

  const links = [];

  const contentSections = [
    {
      heading: 'Overview',
      paragraphs:
        'The YouTube Shorts Automation project addresses the challenges faced by content creators who produce podcasts and need to edit and upload their videos to YouTube. By implementing an automated workflow, this project leverages the capabilities of the KLAP API, enabling seamless video editing and uploading without the need for manual intervention.',
    },
    {
      heading: 'Goals',
      paragraphs: [
        'To automate the generation of short clips from podcasts and video content.',
        'To reduce the reliance on external editors by using AI tools.',
        'To streamline the upload process directly to YouTube accounts.',
      ],
    },
    {
      heading: 'Features / Workflow',
      paragraphs:
        'This project utilizes an intuitive workflow that includes the following steps:',
      paragraphsList: [
        '**RSS Feed Monitoring**: Constantly checks for new podcasts or videos uploaded to the specified accounts.',
        '**Conversion of Videos to Shorts**: Uses KLAP AI to generate short video clips based on user-defined preferences such as captions, subtitles, and cuts.',
        '**Exporting Short Videos**: Retrieves the list of generated shorts and manages their export status.',
        "**YouTube Uploading**: Automatically uploads the finalized short clips to the user's YouTube channel using the YouTube API.",
      ],
      image: {
        src: YoutubeShortsAutomationWorkflow,
        alt: 'The workflow editor interface for the YouTube Shorts Generator, highlighting the automation process.',
      },
    },
    {
      heading: 'Architecture / Logic / Design',
      paragraphs: [
        'The automation is designed with a clear structure that splits the workflow into three main sections—each represented with distinct color-coding:',
        '**Converting Videos to Shorts**:',
        '- Initiated by an RSS feed trigger.',
        '- Integration with the KLAP API for video conversion.',
        '- Logic branching based on the success of the conversion.',
        '',
        '**Exporting Short Videos**:',
        '- Manage the retrieval and export of converted short videos.',
        '- Status checks to ensure successful processes.',
        '',
        '**Uploading Videos to YouTube**:',
        '- Use HTTP requests to facilitate video uploads to YouTube.',
        '- Final confirmation of successful uploads.',
      ],
    },
    {
      heading: 'Challenges & Learnings',
      paragraphs:
        'This project highlighted several challenges, particularly in ensuring reliability and accuracy when monitoring RSS feeds and handling API calls. Constant testing was crucial to refine the logic and ensure that the automation performed as expected without failures.',
    },
  ];

  return (
    <div className="font-sans leading-relaxed tracking-wide flex flex-col items-center">
      <div className="max-w-4xl w-full p-0 md:p-6 rounded-lg">
        <img
          src={YoutubeShortsAutomationCover}
          alt="YouTube Shorts Generator"
          className="w-full h-auto mb-6 rounded-lg"
        />

        <h1
          style={styles.heading}
          className="text-3xl lg:text-5xl font-bold mb-4"
        >
          YouTube Shorts Automation
        </h1>

        {contentSections.map((section, idx) => (
          <div key={idx} className="mb-8">
            <h2
              style={styles.heading}
              className="text-2xl font-semibold mb-4 whitespace-pre-line"
            >
              {section.heading}
            </h2>

            {Array.isArray(section.paragraphs) ? (
              section.paragraphs.map((para, pIdx) => (
                // eslint-disable-next-line react/no-array-index-key
                <p key={pIdx} style={styles.text} className="mb-3">
                  {para}
                </p>
              ))
            ) : (
              <p style={styles.text} className="mb-4">
                {section.paragraphs}
              </p>
            )}

            {section.paragraphsList && (
              <ul className="list-disc list-inside mb-4" style={styles.text}>
                {section.paragraphsList.map((item, i) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <li key={i} className="mb-1">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'),
                      }}
                    />
                  </li>
                ))}
              </ul>
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
          </div>
        ))}

        {links.length > 0 && (
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
        )}

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

export default YouTubeShortsAutomation;