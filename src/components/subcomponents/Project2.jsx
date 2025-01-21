import React from 'react';
import { projectStyles as styles } from './ProjectStyles';
import THMImage from '../../assets/Works/tradingjournal.jpg';

const Project2 = () => {
  const skills = ["Network Security", "Web Security", "Linux", "OSINT"];

  return (
    <div style={styles.container} className="font-sans leading-relaxed tracking-wide flex flex-col items-center">
      <div className="max-w-4xl w-full p-0 md:p-6 rounded-lg">
        <img src={THMImage} alt="TryHackMe" className="w-full h-auto mb-6 rounded-lg" />
        
        <h1 style={styles.heading} className="text-3xl lg:text-5xl font-bold mb-4">
          TryHackMe Experience
        </h1>
        
        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">Learning Path</h2>
        <p style={styles.text} className="mb-4">
          My experience with <strong style={styles.subheading}>TryHackMe</strong> has been instrumental in building a strong foundation in cybersecurity. Through structured learning paths and hands-on rooms, I've developed practical skills in various security domains.
        </p>

        <h2 style={styles.heading} className="text-2xl font-semibold mb-4">Key Accomplishments</h2>
        <ul style={styles.text} className="list-disc pl-6 mb-4 space-y-2">
          <li>Completed the Pre-Security Learning Path</li>
          <li>Finished Jr Penetration Tester modules</li>
          <li>Mastered various security tools and methodologies</li>
          <li>Participated in multiple capture-the-flag challenges</li>
        </ul>

        <div className="flex justify-center my-8">
          <a 
            href="https://tryhackme.com/p/NickJosh" 
            target="_blank" 
            rel="noopener noreferrer"  
            className="font-semibold py-2 px-4 rounded-lg shadow-lg transition-colors duration-300"
            style={{
              backgroundColor: 'var(--accent-primary)',
              color: 'var(--text-primary)'
            }}
          >
            View THM Profile
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
  );
};

export default Project2;
