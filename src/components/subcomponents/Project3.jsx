import React from 'react'
import { projectStyles as styles } from './ProjectStyles'
import PortSwiggerImage from '../../assets/Works/portswigger.jpg'

const Project3 = () => {
  const skills = ["Web Security", "Burp Suite", "Vulnerability Assessment"]

  return (
    <div style={styles.container} className="font-sans leading-relaxed tracking-wide flex flex-col items-center">
      <div className="max-w-4xl w-full p-0 md:p-6 rounded-lg">
        <img src={PortSwiggerImage} alt="PortSwigger Academy" className="w-full h-auto mb-6 rounded-lg"/>
        
        <h1 style={styles.heading} className="text-3xl lg:text-5xl font-bold mb-4">
          PortSwigger Web Security Academy
        </h1>
        
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">Training Overview</h2>
        <p style={styles.text} className="mb-4">
          Through <strong style={styles.subheading}>PortSwigger's Web Security Academy</strong>, I've gained comprehensive knowledge in web application security testing and vulnerability assessment. This platform has provided me with practical experience using industry-standard tools and methodologies.
        </p>
        
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">Key Areas of Study</h2>
        <ul style={styles.text} className="list-disc pl-6 mb-4 space-y-2">
          <li>SQL Injection and Authentication Vulnerabilities</li>
          <li>Cross-Site Scripting (XSS) and CSRF</li>
          <li>Access Control and Privilege Escalation</li>
          <li>Server-Side Request Forgery (SSRF)</li>
          <li>XML External Entity (XXE) Injection</li>
        </ul>
        
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">Practical Experience</h2>
        <p style={styles.text} className="mb-4">
          • Completed numerous hands-on labs across different vulnerability types<br/>
          • Mastered the use of Burp Suite for web application testing<br/>
          • Developed custom exploits for various security vulnerabilities<br/>
          • Practiced responsible disclosure and documentation
        </p>

        <div className="flex justify-center my-8">
          <a 
            href="https://portswigger.net/web-security" 
            target="_blank" 
            rel="noopener noreferrer"  
            className="font-semibold py-2 px-4 rounded-lg shadow-lg transition-colors duration-300"
            style={{
              backgroundColor: 'var(--accent-primary)',
              color: 'var(--text-primary)'
            }}
          >
            View Academy
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

export default Project3