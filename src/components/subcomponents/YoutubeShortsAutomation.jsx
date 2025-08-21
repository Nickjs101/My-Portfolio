import React from 'react';
import { projectStyles as styles } from './ProjectStyles';
import CoverImage from '../../assets/Works/youtubeshortsautomationcover.png';
import WorkflowImage from '../../assets/Works/youtubeshortsautomationworkflow.png';

const YoutubeShortsAutomation = () => {
  const skills = [
    'RSS/Atom Feeds',
    'Klap AI API',
    'YouTube Data API (Shorts)',
    'OAuth 2.0',
    'Webhooks/Cron Scheduling',
    'Job Queueing & Retry Logic',
    'Logging & Monitoring',
  ];

  const links = [
    {
      label: 'Watch Demo',
      href: 'https://drive.google.com/uc?id=16sFr9l9eBErIwSjewKBW0S--RXzquZEV&export=download',
    },
  ];

  const sections = [
    {
      heading: 'Overview',
      paragraphs: [
        'Many podcast creators spend time and money on manual editing to turn long-form content into short, engaging clips—and then still have to upload them to YouTube. This automation streamlines the entire process: it detects new videos via RSS, generates optimized shorts using the Klap AI API, and uploads them to your YouTube account automatically.',
      ],
    },
    {
      heading: 'Goals',
      list: [
        'Eliminate manual editing and upload steps for shorts.',
        'Consistently generate on-brand, captioned, and cut-to-beat short clips from long-form videos.',
        'Keep creators’ channels active with a continuous stream of shorts triggered by new uploads.',
      ],
    },
    {
      heading: 'Features / Workflow',
      orderedList: [
        'Detect new uploads via RSS feed for the creator’s channel.',
        'Submit the source video to Klap AI with preferences (captions, subtitles, cuts, and short-form optimizations).',
        'Receive generated short clips from Klap API.',
        'Upload the shorts to YouTube as Shorts via the YouTube API.',
        'Run fully hands-off—no manual trigger required.',
      ],
      image: {
        src: WorkflowImage,
        alt: 'n8n workflow: YouTube Shorts Generator automation pipeline',
      },
    },
    {
      heading: 'Architecture / Logic',
      subsections: [
        {
          subheading: 'Source monitoring',
          items: [
            'Poll the channel’s RSS feed at a fixed interval to detect new uploads reliably.',
            'Debounce and deduplicate entries to avoid repeat processing.',
          ],
        },
        {
          subheading: 'Shorts generation',
          items: [
            'Send the new video’s URL or asset to Klap AI.',
            'Configure preferences: captions/subtitles, cut pacing, and short-form optimization settings.',
            'Track job status and retrieve the produced clips.',
          ],
        },
        {
          subheading: 'Publishing',
          items: [
            'Authenticate with YouTube Data API.',
            'Upload each short with appropriate metadata (title, description, tags, visibility).',
            'Classify uploads as Shorts (vertical format; duration constraints).',
          ],
        },
        {
          subheading: 'Reliability & Ops',
          items: [
            'Idempotency checks (skip if a short for the same source already exists).',
            'Error handling with retries and exponential backoff.',
            'Logging and simple monitoring for failed jobs and quota issues.',
          ],
        },
      ],
    },
    {
      heading: 'Results / Evaluation',
      list: [
        'Hands-off pipeline from long-form upload to Shorts on-channel.',
        'Faster turnaround from content publishing to short-form distribution.',
        'Consistent style and formatting via centralized Klap AI preferences.',
      ],
    },
    {
      heading: 'Challenges & Learnings',
      list: [
        'Handling API quotas and rate limits, especially under bursty publishing schedules.',
        'Ensuring idempotent processing to avoid duplicate shorts when RSS feeds briefly fluctuate.',
        'Balancing automation defaults with creator-specific stylistic preferences for captions and cuts.',
        'Managing OAuth scopes and secure token storage for the YouTube Data API.',
      ],
    },
  ];

  return (
    <div className="font-sans leading-relaxed tracking-wide flex flex-col items-center">
      <div className="max-w-4xl w-full p-0 md:p-6 rounded-lg">
        <img src={CoverImage} alt="YouTube Shorts Automation cover illustration" className="w-full h-auto mb-6 rounded-lg" />

        <h1 style={styles.heading} className="text-3xl lg:text-5xl font-bold mb-4">
          YouTube Shorts Automation
        </h1>

        {sections.map((section) => (
          <div key={section.heading} className="mb-8">
            <h2 style={styles.heading} className="text-2xl font-semibold mb-4">
              {section.heading}
            </h2>

            {Array.isArray(section.paragraphs) &&
              section.paragraphs.map((para) => (
                <p key={`${section.heading}-p-${para.slice(0, 24)}`} style={styles.text} className="mb-4">
                  {para}
                </p>
              ))}

            {Array.isArray(section.list) && (
              <ul className="list-disc pl-6 mb-4">
                {section.list.map((item) => (
                  <li key={`${section.heading}-${item.slice(0, 20)}`} style={styles.text} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {Array.isArray(section.orderedList) && (
              <ol className="list-decimal pl-6 mb-4">
                {section.orderedList.map((item) => (
                  <li key={`${section.heading}-o-${item.slice(0, 24)}`} style={styles.text} className="mb-2">
                    {item}
                  </li>
                ))}
              </ol>
            )}

            {Array.isArray(section.subsections) &&
              section.subsections.map((sub) => (
                <div key={`${section.heading}-${sub.subheading}`} className="mb-4">
                  <h3 style={styles.heading} className="text-xl font-semibold mb-2">
                    {sub.subheading}
                  </h3>
                  <ul className="list-disc pl-6">
                    {sub.items.map((item) => (
                      <li key={`${sub.subheading}-${item.slice(0, 24)}`} style={styles.text} className="mb-2">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

            {section.image && section.image.src && (
              <img
                src={section.image.src}
                alt={section.image.alt || `${section.heading} image`}
                className="w-full h-auto mt-4 rounded-lg shadow-sm"
              />
            )}
          </div>
        ))}

        {links.length > 0 && (
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
                  color: 'var(--text-primary)',
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}

        <h2 style={styles.heading} className="text-2xl font-bold mb-4">Skills & Technologies Used</h2>
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

export default YoutubeShortsAutomation;