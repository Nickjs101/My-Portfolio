import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TradeHistoryImage from '../../assets/Works/tradingjournal.jpg'
import KodyAdventureImage from '../../assets/Works/kodymain.jpg';

export const projects = [
  {
    id: 1,
    title: "Kody's Adventure",
    category: "Game Development",
    description: "A 2D side-scrolling educational game developed in Unity using C# to teach basic Python programming concepts. Features interactive coding challenges and puzzle-solving elements.",
    image: KodyAdventureImage,
    skills: ["C#", "Unity", "Game Design", "Educational Games"],
    links: {
      github: "https://github.com/username/kodys-adventure",
      live: "https://kodys-adventure.demo"
    }
  },
  {
    id: 2,
    title: "Trading Journal",
    category: "Mobile Development",
    description: "A comprehensive mobile app for tracking trades, analyzing performance, and improving trading strategies. Built with React Native for cross-platform compatibility.",
    image: TradeHistoryImage,
    skills: ["React Native", "Redux", "Chart.js", "Firebase"],
    links: {
      github: "https://github.com/username/tradepro-journal",
      live: "https://tradepro-journal.demo"
    }
  },
  {
    id: 3,
    title: "File Permissions in Linux",
    category: "Cybersecurity",
    description: "In the realm of cybersecurity, ensuring proper file permissions is paramount to maintaining system integrity and security. As a security professional at a large organization, my role involves collaborating with the research team to ensure that only authorized users have the appropriate permissions on critical files and directories. In this section, I’ll walk you through a recent project where I managed file permissions in a Linux environment to bolster system security.",
    image: <FontAwesomeIcon icon="fa-brands fa-linux" style={{color: "A4B1CDff"}} className='h-[100px] w-full my-4' />, 
    skills: ["Linux", "File Permissions", "Cybersecurity"],
    links: {
      github: "https://github.com/username/file-permissions-linux",
      live: "https://example.com/file-permissions"
    }
  },
  {
    id: 4,
    title: "Apply Filters to SQL Queries",
    category: "Cybersecurity",
    description: "My organization is working to make their system secure. My job is to ensure the system is safe, investigate all potential security issues, and update employee computers as needed. The following steps provide examples of how I used SQL with filters to perform security-related tasks.",
    image: <FontAwesomeIcon icon="fa-solid fa-database" style={{color: "A4B1CDff"}} className='h-[100px] w-full my-4' />, 
    skills: ["SQL", "Database Security", "Cybersecurity"],
    links: {
      github: "https://github.com/username/sql-filters",
      live: "https://example.com/sql-filters"
    }
  },
  {
    id: 5,
    title: "Vulnerability Assessment Report",
    category: "Cybersecurity",
    description: "The scope of this vulnerability assessment relates to the current access controls of the system. The assessment will cover a period of three months from June 20XX to August 20XX. NIST SP 800-30 Rev. 1 is used to guide the risk analysis of the information system.",
    image: <FontAwesomeIcon icon="fa-solid fa-bug" style={{color: "A4B1CDff"}} className='h-[100px] w-full my-4' />, 
    skills: ["Risk Analysis", "Access Controls", "Cybersecurity"],
    links: {
      github: "https://github.com/username/vulnerability-assessment",
      live: "https://example.com/vulnerability-assessment"
    }
  },
  {
    id: 6,
    title: "Security Audit Report",
    category: "Cybersecurity",
    description: "To address security controls issues, we need to implement confidentiality of the organization’s assets such as customers’ private data. Implementing data encryption both at rest and in transit should also be considered.",
    image: <FontAwesomeIcon icon="fa-solid fa-flag" style={{color: "A4B1CDff"}} className='h-[100px] w-full my-4' />, 
    skills: ["Security Audit", "Data Encryption", "Cybersecurity"],
    links: {
      github: "https://github.com/username/security-audit",
      live: "https://example.com/security-audit"
    }
  }
]

export const categories = [
  "All",
  "Web Development",
  "Mobile Development",
  "Game Development",
  "Cybersecurity",
]

