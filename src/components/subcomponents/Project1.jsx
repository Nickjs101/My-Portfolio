import React from 'react'
import { projectStyles as styles } from './ProjectStyles';
import HTBImage from '../../assets/Works/tradingjournal.jpg';

const Project1 = () => {
  const skills = ["Penetration Testing", "Linux", "Network Security"]

  return (
    <div style={styles.container} className="font-sans leading-relaxed tracking-wide flex flex-col items-center">
      <div className="max-w-4xl w-full p-0 md:p-6 rounded-lg">
        <img src={HTBImage} alt="HTB" className="w-full h-auto mb-6 rounded-lg"/>
        
        <h1 style={styles.heading} className="text-3xl lg:text-5xl font-bold mb-4">
          Hack The Box Journey
        </h1>
        
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">Overview</h2>
        <p style={styles.text} className="mb-4">
          My journey with <strong style={styles.subheading}>Hack The Box</strong> represents a significant milestone in my cybersecurity learning path. This platform has provided me with hands-on experience in various aspects of penetration testing and ethical hacking.
        </p>
        
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">Learning Experience</h2>
        <p style={styles.text} className="mb-4">
          Through HTB, I've gained practical experience in:
        </p>
        <ul style={styles.text} className="list-disc pl-6 mb-4 space-y-2">
          <li>Vulnerability assessment and exploitation</li>
          <li>Network security analysis</li>
          <li>Web application security testing</li>
          <li>System enumeration techniques</li>
          <li>Privilege escalation methods</li>
        </ul>
        
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">Achievements</h2>
        <p style={styles.text} className="mb-4">
          • Successfully completed numerous challenges across different difficulty levels<br/>
          • Developed proficiency in using various security tools and techniques<br/>
          • Gained practical understanding of common vulnerabilities and their remediation
        </p>

        <div className="flex justify-center my-8">
          <a 
            href="https://app.hackthebox.com/profile/1266733" 
            target="_blank" 
            rel="noopener noreferrer"  
            className="font-semibold py-2 px-4 rounded-lg shadow-lg transition-colors duration-300"
            style={{
              backgroundColor: 'var(--accent-primary)',
              color: 'var(--text-primary)'
            }}
          >
            View HTB Profile
          </a>
        </div>

        <h2 style={styles.heading} className="text-2xl font-bold mb-4">Skills Developed</h2>
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

export default Project1
