import React from 'react'
import { projectStyles as styles } from './ProjectStyles'
import PicoCTFImage from '../../assets/Works/picoctf.jpg'

const Project4 = () => {
  const skills = ["CTF", "Cryptography", "Forensics", "Binary Exploitation"]

  return (
    <div style={styles.container} className="font-sans leading-relaxed tracking-wide flex flex-col items-center">
      <div className="max-w-4xl w-full p-0 md:p-6 rounded-lg">
        <img src={PicoCTFImage} alt="PicoCTF" className="w-full h-auto mb-6 rounded-lg"/>
        
        <h1 style={styles.heading} className="text-3xl lg:text-5xl font-bold mb-4">
          PicoCTF Challenges
        </h1>
        
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">Challenge Overview</h2>
        <p style={styles.text} className="mb-4">
          My participation in <strong style={styles.subheading}>PicoCTF</strong> has enhanced my problem-solving skills and deepened my understanding of various cybersecurity concepts. Through these challenges, I've developed practical skills in multiple security domains.
        </p>
        
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">Areas of Focus</h2>
        <ul style={styles.text} className="list-disc pl-6 mb-4 space-y-2">
          <li>Web Exploitation</li>
          <li>Cryptography</li>
          <li>Reverse Engineering</li>
          <li>Binary Exploitation</li>
          <li>Forensics</li>
        </ul>
        
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">Achievements</h2>
        <p style={styles.text} className="mb-4">
          • Successfully completed challenges across multiple difficulty levels<br/>
          • Developed custom scripts for automated problem-solving<br/>
          • Collaborated with team members on complex challenges<br/>
          • Improved CTF competition strategies
        </p>

        <div className="flex justify-center my-8">
          <a 
            href="https://play.picoctf.org/users/NickJosh" 
            target="_blank" 
            rel="noopener noreferrer"  
            className="font-semibold py-2 px-4 rounded-lg shadow-lg transition-colors duration-300"
            style={{
              backgroundColor: 'var(--accent-primary)',
              color: 'var(--text-primary)'
            }}
          >
            View PicoCTF Profile
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

export default Project4