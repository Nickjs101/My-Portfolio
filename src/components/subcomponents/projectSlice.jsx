import {createSlice} from '@reduxjs/toolkit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TradeHistoryImage from '../../assets/Works/tradingjournal.jpg'
import KodyAdventureImage from '../../assets/Works/kodymain.jpg';
import Project1 from './Project1'
import Project2 from './Project2'
import Project3 from './Project3'
import Project4 from './Project4'
// import Project5 from './Project5'
import AppProject1 from './AppProject1'
import AppProject2 from './AppProject2'

const initialState = {
    projects: [
        {
            Cybersecurity: [
                {
                    icon: 'fa-brands fa-google', 
                    image: <FontAwesomeIcon icon="fa-brands fa-linux" style={{color: "A4B1CDff"}} className='h-[100px] w-full my-4' />, 
                    type: 'Google Cybersecurity Project', 
                    title: 'File Permissions in Linux', 
                    description: 'In the realm of cybersecurity, ensuring proper file permissions is paramount to maintaining system integrity and security. As a security professional at a large organization, my role involves collaborating with the research team to ensure that only authorized users have the appropriate permissions on critical files and directories. In this section, I’ll walk you through a recent project where I managed file permissions in a Linux environment to bolster system security.', 
                    component: <Project1/>
                },
                {
                    icon: 'fa-brands fa-google', 
                    image: <FontAwesomeIcon icon="fa-solid fa-database" style={{color: "A4B1CDff"}} className='h-[100px] w-full my-4' />, 
                    type: 'Google Cybersecurity Project', 
                    title: 'Apply Filters to SQL Queries', 
                    description: 'My organization is working to make their system secure. My job is to ensure the system is safe, investigate all potential security issues, and update employee computers as needed. The following steps provide examples of how I used SQL with filters to perform security-related tasks.', 
                    component: <Project2/>
                },
                {
                    icon: 'fa-brands fa-google', 
                    image: <FontAwesomeIcon icon="fa-solid fa-bug" style={{color: "A4B1CDff"}} className='h-[100px] w-full my-4' />, 
                    type: 'Google Cybersecurity Project', 
                    title: 'Vulnerability Assessment Report', 
                    description: 'The scope of this vulnerability assessment relates to the current access controls of the system. The assessment will cover a period of three months from June 20XX to August 20XX. NIST SP 800-30 Rev. 1 is used to guide the risk analysis of the information system.', 
                    component: <Project3/>
                },
                {
                    icon: 'fa-brands fa-google', 
                    image: <FontAwesomeIcon icon="fa-solid fa-flag" style={{color: "A4B1CDff"}} className='h-[100px] w-full my-4' />, 
                    type: 'Google Cybersecurity Project', 
                    title: 'Security Audit Report', 
                    description: 'To address security controls issues, we need to implement confidentiality of the organization’s assets such as customers’ private data. Implementing data encryption both at rest and in transit should also be considered.', 
                    component: <Project4/>
                },
                // {
                //     icon: 'fa-brands fa-google', 
                //     image: <FontAwesomeIcon icon="fa-solid fa-shield-halved" style={{color: "A4B1CDff"}} className='h-[100px] w-full my-4' />, 
                //     type: 'Google Cybersecurity Project', 
                //     title: 'Incident Report Analysis', 
                //     description: 'The company recently experienced a DDOS attack that compromised the internal network for two hours until it was resolved. During the attack the organization’s network services suddenly stopped responding due to an incoming flood of ICMP packets. Normal internal network traffic could not access any network resources.', 
                //     component: <Project5/>
                // }
            ]
        },
        {
            SoftwareDev: [
                {
                    icon: 'fa-solid fa-code', 
                    image:  <div className='aspect-w-3 aspect-h-2'>
                                <img className='w-full h-full' src={KodyAdventureImage} alt="" />
                            </div>, 
                    type: 'School Project', 
                    title: 'Kody\'s Adventure', 
                    description: 'A 2D side-scrolling game developed in Unity using C# to teach basic Python programming.', 
                    skills: ["C#", "Unity", "OOP"],
                    component: <AppProject2/>
                },
                {
                    icon: 'fa-solid fa-code', 
                    image:  <div className='aspect-w-3 aspect-h-2'>
                                <img className='w-full h-full' src={TradeHistoryImage} alt="" />
                            </div>, 
                    type: 'Personal Project', 
                    title: 'Trading Journal Mobile App', 
                    description: 'A mobile app for tracking trades with Java, XML, and SQLite, featuring a line graph to display trade performance.', 
                    skills: ["Java", "XML", "Android Studio", "SQLite"],
                    component: <AppProject1/>
                }
            ]
        }
    ]
};

const projectSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        setProjects: (state, action) => {
            state.projects = action.payload;
        },
        addProject: (state, action) => {
            state.projects.push(action.payload);
        }
    }
});

export const {setProjects, addProject} = projectSlice.actions;
export default projectSlice.reducer;