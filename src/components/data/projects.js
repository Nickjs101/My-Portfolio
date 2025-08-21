// Display Images
import KodyAdventureImage from '../../assets/Works/kodymain.jpg';
import TradeHistoryImage from '../../assets/Works/tradingjournal.jpg';
import Linux from '../../assets/Linux/Picture3.png';
import vul from '../../assets/Linux/Picture2.png';
import Sql from '../../assets/Linux/Picture1.png';
import PageGeneratorCover from '../../assets/Works/pagegeneratorCover.png';
import YoutubeShortsAutomationCover from '../../assets/Works/youtubeshortsautomationcover.png';
import AppointmentSetterAgentCover from '../../assets/Works/AppointmentSetterAgentCover.png';

// Project Components
import AppProject1 from '../../components/subcomponents/AppProject1';
import AppProject2 from '../../components/subcomponents/AppProject2';
import Project1 from '../../components/subcomponents/Project1';
import Project2 from '../../components/subcomponents/Project2';
import Project3 from '../../components/subcomponents/Project3';
import Project4 from '../../components/subcomponents/Project4';
import AutomatedProjectPageGenerator from '../../components/subcomponents/AutomatedProjectPageGenerator';
import YoutubeShortsAutomation from '../../components/subcomponents/YoutubeShortsAutomation';
import AIRAGAppointmentSystem from '../../components/subcomponents/AppointmentSetterAIAgentSystem';

export const Latest = [
  {
    id: 3,
    title: 'AI RAG & Appointment System',
    category: 'Automation',
    description: 'End-to-end AI RAG appointment system that replies to social leads, answers FAQs with provider context, checks availability, and books via Cal.com—synced to Google Sheets.',
    type: 'Automation',
    image: AppointmentSetterAgentCover,
    skills: ['ManyChat', 'n8n', 'OpenAI GPT-4o', 'RAG', 'Cal.com', 'Google Sheets', 'Webhooks', 'REST APIs', 'Structured Outputs', 'Error Handling'],
    component: <AIRAGAppointmentSystem />,
    links: {
      github: null,
      live: null,
    },
  },
  {
    id: 2,
    title: 'Youtube Shorts Automation',
    category: 'Automation',
    description: 'End-to-end n8n workflow that detects new long-form uploads via RSS, generates edited shorts with Klap AI, and publishes them to YouTube with robust async polling, retries, and error handling.',
    type: 'Automation',
    image: YoutubeShortsAutomationCover,
    skills: ['n8n', 'RSS Feed', 'Klap AI API', 'YouTube API', 'HTTP/REST', 'JSON', 'Conditional Logic', 'Asynchronous Polling', 'Retry/Backoff', 'Automation Workflows'],
    component: <YoutubeShortsAutomation />,
    links: {
      github: null,
      live: null,
    },
  },
  {
    id: 1,
    title: 'Automated Project Page Generator',
    category: 'Automation',
    description: 'Automates the end-to-end creation of React project pages—gathers assets, generates JSX via GPT, validates code, commits, deploys to Netlify, and notifies with rollback support.',
    type: 'Automation',
    image: PageGeneratorCover,
    skills: ['n8n', 'Git', 'GitHub', 'React', 'JSX', 'OpenAI GPT', 'Google Drive', 'Bash', 'Netlify', 'Telegram'],
    component: <AutomatedProjectPageGenerator />,
    links: {
      github: 'https://github.com/Nickjs101/My-Portfolio',
      live: 'https://nickjsportfolio.netlify.app',
    },
  },
  {
    title: "Kody's Adventure",
    category: 'Software Development',
    description: 'A 2D side-scrolling educational game developed in Unity using C# to teach basic Python programming concepts. Features interactive coding challenges and puzzle-solving elements.',
    image: KodyAdventureImage,
    skills: ['C#', 'Unity', 'Game Design', 'Educational Games'],
    component: <AppProject2 />,
    links: {
      github: 'https://github.com/Nickjs101/Kody-sAdventure',
      live: 'https://mega.nz/file/luYB0LSJ#6gzzEFbbew4PBblpc2VvXYNZmOUfqFhOGFJUqUa5-Mo',
    },
  },
  {
    title: 'File Permissions in Linux',
    category: 'Cybersecurity',
    description: 'In the realm of cybersecurity, ensuring proper file permissions is paramount to maintaining system integrity and security. As a security professional at a large organization, my role involves collaborating with the research team to ensure that only authorized users have the appropriate permissions on critical files and directories. In this section, I’ll walk you through a recent project where I managed file permissions in a Linux environment to bolster system security.',
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
    description: 'The scope of this vulnerability assessment relates to the current access controls of the system. The assessment will cover a period of three months from June 20XX to August 20XX. NIST SP 800-30 Rev. 1 is used to guide the risk analysis of the information system.',
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
    title: "Kody's Adventure",
    category: 'Software Development',
    description: 'A 2D side-scrolling educational game developed in Unity using C# to teach basic Python programming concepts. Features interactive coding challenges and puzzle-solving elements.',
    image: KodyAdventureImage,
    skills: ['C#', 'Unity', 'Game Design', 'Educational Games'],
    component: <AppProject2 />,
    links: {
      github: 'https://github.com/Nickjs101/Kody-sAdventure',
      live: 'https://mega.nz/file/luYB0LSJ#6gzzEFbbew4PBblpc2VvXYNZmOUfqFhOGFJUqUa5-Mo',
    },
  },
  {
    title: 'Trading Journal Mobile App',
    category: 'Cybersecurity',
    description: 'A mobile app for tracking trades with Java, XML, and SQLite, featuring a line graph to display trade performance.',
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
    description: 'In the realm of cybersecurity, ensuring proper file permissions is paramount to maintaining system integrity and security. As a security professional at a large organization, my role involves collaborating with the research team to ensure that only authorized users have the appropriate permissions on critical files and directories. In this section, I’ll walk you through a recent project where I managed file permissions in a Linux environment to bolster system security.',
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
    description: 'My organization is working to make their system secure. My job is to ensure the system is safe, investigate all potential security issues, and update employee computers as needed. The following steps provide examples of how I used SQL with filters to perform security-related tasks.',
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
    description: 'The scope of this vulnerability assessment relates to the current access controls of the system. The assessment will cover a period of three months from June 20XX to August 20XX. NIST SP 800-30 Rev. 1 is used to guide the risk analysis of the information system.',
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
    description: 'To address security controls issues, we need to implement confidentiality of the organization’s assets such as customers’ private data. Implementing data encryption both at rest and in transit should also be considered.',
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
    title: 'AI RAG & Appointment System',
    category: 'Automation',
    description: 'End-to-end AI RAG appointment system that replies to social leads, answers FAQs with provider context, checks availability, and books via Cal.com—synced to Google Sheets.',
    image: AppointmentSetterAgentCover,
    skills: ['ManyChat', 'n8n', 'OpenAI GPT-4o', 'RAG', 'Cal.com', 'Google Sheets', 'Webhooks', 'REST APIs', 'Structured Outputs', 'Error Handling'],
    component: <AIRAGAppointmentSystem />,
    links: {
      github: null,
      live: null,
    },
  },
  {
    title: 'Automated Project Page Generator',
    category: 'Automation',
    description: 'Automates the end-to-end creation of React project pages—gathers assets, generates JSX via GPT, validates code, commits, deploys to Netlify, and notifies with rollback support.',
    image: PageGeneratorCover,
    skills: ['n8n', 'Git', 'GitHub', 'React', 'JSX', 'OpenAI GPT', 'Google Drive', 'Bash', 'Netlify', 'Telegram'],
    component: <AutomatedProjectPageGenerator />,
    links: {
      github: 'https://github.com/Nickjs101/My-Portfolio',
      live: 'https://nickjsportfolio.netlify.app',
    },
  },
  {
    title: 'Youtube Shorts Automation',
    category: 'Automation',
    description: 'End-to-end n8n workflow that detects new long-form uploads via RSS, generates edited shorts with Klap AI, and publishes them to YouTube with robust async polling, retries, and error handling.',
    image: YoutubeShortsAutomationCover,
    skills: ['n8n', 'RSS Feed', 'Klap AI API', 'YouTube API', 'HTTP/REST', 'JSON', 'Conditional Logic', 'Asynchronous Polling', 'Retry/Backoff', 'Automation Workflows'],
    component: <YoutubeShortsAutomation />,
    links: {
      github: null,
      live: null,
    },
  },
];

export const DevOps = [

];

export const categories = [
  'All',
  'Software Development',
  'Automation',
  'Cybersecurity',
  'DevOps',
];