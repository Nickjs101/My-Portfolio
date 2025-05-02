import KodyAdventureImage from '../../assets/Works/kodymain.jpg';
import TradeHistoryImage from '../../assets/Works/tradingjournal.jpg';
import Linux from '../../assets/Linux/Picture3.png';
import vul from '../../assets/Linux/Picture2.png';
import Sql from '../../assets/Linux/Picture1.png';
import YouTubeShortsAutomationCover from '../../assets/Works/youtubeshortsautomationcover.png';
import AppointmentSetterAgentCover from '../../assets/Works/AppointmentSetterAgentCover.png';
import pagegeneratorCover from '../../assets/Works/pagegeneratorCover.png';

import AppProject1 from '../../components/subcomponents/AppProject1';
import AppProject2 from '../../components/subcomponents/AppProject2';
import Project1 from '../../components/subcomponents/Project1';
import Project2 from '../../components/subcomponents/Project2';
import Project3 from '../../components/subcomponents/Project3';
import Project4 from '../../components/subcomponents/Project4';
import YouTubeShortsAutomation from '../../components/subcomponents/YoutubeShortsAutomation';
import AppointmentSetterAIAgentSystem from '../../components/subcomponents/AppointmentSetterAIAgentSystem.jsx';
import AutomatedProjectPageGenerator from '../../components/subcomponents/AutomatedProjectPageGenerator.jsx';

export const Latest = [
  {
    id: 6,
    title: 'Automated Project Page Generator',
    category: 'Software Development',
    description:
      'An AI-powered system that automates the creation and deployment of project showcase pages to streamline portfolio updates.',
    type: 'SoftwareDevelopments',
    image: pagegeneratorCover,
    skills: [
      'n8n Automation Platform',
      'Git',
      'GPT Language Models',
      'Google Drive',
      'Bash',
      'Telegram',
      'Netlify',
    ],
    component: <AutomatedProjectPageGenerator />,
    links: {
      github: 'https://github.com/nickjs101/My-Portfolio',
      live: 'https://nickjsportfolio.netlify.app',
    },
  },
  {
    id: 5,
    title: 'AI RAG & Appointment System',
    category: 'Automation',
    description:
      'An AI-powered system that enhances lead engagement, inquiry responses, and appointment scheduling for service providers using automation tools.',
    type: 'Automation',
    image: AppointmentSetterAgentCover,
    skills: ['ManyChat', 'n8n', 'Google Sheets', 'OpenAI GPT-4', 'Cal.com'],
    component: <AppointmentSetterAIAgentSystem />,
    links: {
      github: null,
      live: null,
    },
  },
  {
    id: 4,
    title: 'YouTube Shorts Automation',
    category: 'Automation',
    description:
      'Streamlines video editing and uploading of YouTube Shorts for content creators using APIs and automation tools.',
    type: 'Automation',
    image: YouTubeShortsAutomationCover,
    skills: [
      'n8n Automation Tool',
      'Klap API',
      'YouTube API',
      'RSS Feed Processing',
      'Video Editing Software Integration',
    ],
    component: <YouTubeShortsAutomation />,
    links: {
      github: null,
      live: null,
    },
  },
  {
    title: "Kody's Adventure",
    category: 'Software Development',
    description:
      'A 2D side-scrolling educational game developed in Unity using C# to teach basic Python programming concepts. Features interactive coding challenges and puzzle-solving elements.',
    image: KodyAdventureImage,
    skills: ['C#', 'Unity', 'Game Design', 'Educational Games'],
    component: <AppProject2 />,
    links: {
      github: 'https://github.com/Nickjs101/Kody-sAdventure',
      live:
        'https://mega.nz/file/luYB0LSJ#6gzzEFbbew4PBblpc2VvXYNZmOUfqFhOGFJUqUa5-Mo',
    },
  },
  {
    title: 'File Permissions in Linux',
    category: 'Cybersecurity',
    description:
      'In the realm of cybersecurity, ensuring proper file permissions is paramount to maintaining system integrity and security. As a security professional at a large organization, my role involves collaborating with the research team to ensure that only authorized users have the appropriate permissions on critical files and directories. In this section, I’ll walk you through a recent project where I managed file permissions in a Linux environment to bolster system security.',
    image: Linux,
    skills: ['Linux', 'File Permissions', 'Cybersecurity'],
    component: <Project1 />,
    links: {
      github: null,
      live: null,
    },
  },
  {
    title: 'Vulnerability Assessment Report',
    category: 'Cybersecurity',
    description:
      'The scope of this vulnerability assessment relates to the current access controls of the system. The assessment will cover a period of three months from June 20XX to August 20XX. NIST SP 800-30 Rev. 1 is used to guide the risk analysis of the information system.',
    image: vul,
    skills: ['Risk Analysis', 'Access Controls', 'Cybersecurity'],
    component: <Project3 />,
    links: {
      github: null,
      live: null,
    },
  },
];

export const SoftwareDev = [
  {
    id: 6,
    title: 'Automated Project Page Generator',
    category: 'Software Development',
    description:
      'An AI-powered system that automates the creation and deployment of project showcase pages to streamline portfolio updates.',
    image: pagegeneratorCover,
    skills: [
      'n8n Automation Platform',
      'Git',
      'GPT Language Models',
      'Google Drive',
      'Bash',
      'Telegram',
      'Netlify',
    ],
    component: <AutomatedProjectPageGenerator />,
    links: {
      github: 'https://github.com/nickjs101/My-Portfolio',
      live: 'https://nickjsportfolio.netlify.app',
    },
  },
  {
    title: "Kody's Adventure",
    category: 'Software Development',
    description:
      'A 2D side-scrolling educational game developed in Unity using C# to teach basic Python programming concepts. Features interactive coding challenges and puzzle-solving elements.',
    image: KodyAdventureImage,
    skills: ['C#', 'Unity', 'Game Design', 'Educational Games'],
    component: <AppProject2 />,
    links: {
      github: 'https://github.com/Nickjs101/Kody-sAdventure',
      live:
        'https://mega.nz/file/luYB0LSJ#6gzzEFbbew4PBblpc2VvXYNZmOUfqFhOGFJUqUa5-Mo',
    },
  },
  {
    title: 'Trading Journal Mobile App',
    category: 'Cybersecurity',
    description:
      'A mobile app for tracking trades with Java, XML, and SQLite, featuring a line graph to display trade performance.',
    image: TradeHistoryImage,
    skills: ['Java', 'XML', 'Android Studio', 'SQLite'],
    component: <AppProject1 />,
    links: {
      github: null,
      live: 'https://mega.nz/file/FjIXSKDS#ynkMDEXFHDVzyDC34741AO-lSooazd5NhZx8qK78fOY',
    },
  },
];

export const Cybersecurity = [
  {
    title: 'File Permissions in Linux',
    category: 'Cybersecurity',
    description:
      'In the realm of cybersecurity, ensuring proper file permissions is paramount to maintaining system integrity and security. As a security professional at a large organization, my role involves collaborating with the research team to ensure that only authorized users have the appropriate permissions on critical files and directories. In this section, I’ll walk you through a recent project where I managed file permissions in a Linux environment to bolster system security.',
    image: Linux,
    skills: ['Linux', 'File Permissions', 'Cybersecurity'],
    component: <Project1 />,
    links: {
      github: null,
      live: null,
    },
  },
  {
    title: 'Apply Filters to SQL Queries',
    description:
      'My organization is working to make their system secure. My job is to ensure the system is safe, investigate all potential security issues, and update employee computers as needed. The following steps provide examples of how I used SQL with filters to perform security-related tasks.',
    image: Sql,
    skills: ['SQL', 'Cybersecurity'],
    component: <Project2 />,
    links: {
      github: null,
      live: null,
    },
  },
  {
    title: 'Vulnerability Assessment Report',
    category: 'Cybersecurity',
    description:
      'The scope of this vulnerability assessment relates to the current access controls of the system. The assessment will cover a period of three months from June 20XX to August 20XX. NIST SP 800-30 Rev. 1 is used to guide the risk analysis of the information system.',
    image: vul,
    skills: ['Risk Analysis', 'Access Controls', 'Cybersecurity'],
    component: <Project3 />,
    links: {
      github: null,
      live: null,
    },
  },
  {
    title: 'Security Audit Report',
    description:
      'To address security controls issues, we need to implement confidentiality of the organization’s assets such as customers’ private data. Implementing data encryption both at rest and in transit should also be considered.',
    image: Linux,
    skills: ['Security Audit', 'Data Encryption', 'Cybersecurity'],
    component: <Project4 />,
    links: {
      github: null,
      live: null,
    },
  },
];

export const Automation = [
  {
    id: 5,
    title: 'AI RAG & Appointment System',
    category: 'Automation',
    description:
      'An AI-powered system that enhances lead engagement, inquiry responses, and appointment scheduling for service providers using automation tools.',
    type: 'Automation',
    image: AppointmentSetterAgentCover,
    skills: ['ManyChat', 'n8n', 'Google Sheets', 'OpenAI GPT-4', 'Cal.com'],
    component: <AppointmentSetterAIAgentSystem />,
    links: {
      github: null,
      live: null,
    },
  },
  {
    id: 4,
    title: 'YouTube Shorts Automation',
    category: 'Automation',
    description:
      'Streamlines video editing and uploading of YouTube Shorts for content creators using APIs and automation tools.',
    type: 'Automation',
    image: YouTubeShortsAutomationCover,
    skills: [
      'n8n Automation Tool',
      'Klap API',
      'YouTube API',
      'RSS Feed Processing',
      'Video Editing Software Integration',
    ],
    component: <YouTubeShortsAutomation />,
    links: {
      github: null,
      live: null,
    },
  },
];

export const DevOps = [];

export const categories = [
  'All',
  'Software Development',
  'Automation',
  'Cybersecurity',
  'DevOps',
];