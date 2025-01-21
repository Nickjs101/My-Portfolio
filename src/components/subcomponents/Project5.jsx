import React from 'react'
import { projectStyles as styles } from './ProjectStyles'
import GoogleImage from '../../assets/Works/google.jpg'

const Project5 = () => {
  const skills = ["Network Security", "Cloud Security", "Security Operations", "Incident Response"]

  return (
    <div style={styles.container} className="font-sans leading-relaxed tracking-wide flex flex-col items-center">
      <div className="max-w-4xl w-full p-0 md:p-6 rounded-lg">
        <img src={GoogleImage} alt="Google Cybersecurity" className="w-full h-auto mb-6 rounded-lg"/>
        
        <h1 style={styles.heading} className="text-3xl lg:text-5xl font-bold mb-4">
          Google Cybersecurity Professional Certificate
        </h1>
        
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">Program Overview</h2>
        <p style={styles.text} className="mb-4">
          The <strong style={styles.subheading}>Google Cybersecurity Professional Certificate</strong> program has provided me with comprehensive training in various aspects of cybersecurity. This industry-recognized certification has equipped me with practical skills and knowledge essential for a career in cybersecurity.
        </p>
        
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">Key Learning Areas</h2>
        <ul style={styles.text} className="list-disc pl-6 mb-4 space-y-2">
          <li>Network Security and Protocols</li>
          <li>Security Operations and Incident Response</li>
          <li>Python Programming for Security</li>
          <li>Linux and SQL for Security</li>
          <li>Asset and Threat Management</li>
        </ul>
        
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">Certifications Earned</h2>
        <p style={styles.text} className="mb-4">
          • Foundations of Cybersecurity<br/>
          • Play It Safe: Manage Security Risks<br/>
          • Connect and Protect: Networks and Network Security<br/>
          • Tools of the Trade: Linux and SQL<br/>
          • Assets, Threats, and Vulnerabilities<br/>
          • Sound the Alarm: Detection and Response<br/>
          • Automate Cybersecurity Tasks with Python<br/>
          • Put It to Work: Prepare for Cybersecurity Jobs
        </p>

        <div className="flex justify-center my-8">
          <a 
            href="https://www.coursera.org/account/accomplishments/professional-cert/XXXXXXXX" 
            target="_blank" 
            rel="noopener noreferrer"  
            className="font-semibold py-2 px-4 rounded-lg shadow-lg transition-colors duration-300"
            style={{
              backgroundColor: 'var(--accent-primary)',
              color: 'var(--text-primary)'
            }}
          >
            View Certificate
          </a>
        </div>

        <h2 style={styles.heading} className="text-2xl font-bold mb-4">Skills Acquired</h2>
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

export default Project5