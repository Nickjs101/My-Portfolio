import React from 'react';

import { 
  SiGithubactions, 
  SiTerraform, 
  SiPython, 
  SiMysql, 
  SiGnubash, 
  SiTailwindcss, 
  SiReact, 
  SiGit, 
  SiJavascript, 
  SiLinux, 
  SiUnity, 
  SiOpenai,
  SiCsharp
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

const Skills = () => {
  const skills = [
    { name: 'AWS', icon: <FaAws /> },
    { name: 'GitHub Actions', icon: <SiGithubactions /> },
    { name: 'Terraform', icon: <SiTerraform /> },
    { name: 'Python', icon: <SiPython /> },
    { name: 'SQL', icon: <SiMysql /> },
    { name: 'Bash', icon: <SiGnubash /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { name: 'React', icon: <SiReact /> },
    { name: 'Git', icon: <SiGit /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'Linux', icon: <SiLinux /> },
    { name: 'Unity', icon: <SiUnity /> },
    { name: 'C#', icon: <SiCsharp /> },
    { name: 'ChatGPT', icon: <SiOpenai /> },
  ];

  return (
    <section id='Skills' className='py-24 md:py-20 relative' style={{
      backgroundColor: 'var(--bg-primary)'
    }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4" style={{
          color: 'var(--text-primary)'
        }}>
          My Tech Stack
        </h2>
        <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full mb-8"></div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="text-3xl sm:text-4xl md:text-5xl mb-2 sm:mb-3 transition-colors duration-300"
                style={{
                  color: 'var(--text-secondary)',
                  ':hover': { color: 'var(--accent-primary)' }
                }}
              >
                {skill.icon}
              </div>
              <span className="text-xs sm:text-sm md:text-base font-medium text-center transition-colors duration-300"
                style={{
                  color: 'var(--text-secondary)',
                  ':hover': { color: 'var(--accent-primary)' }
                }}
              >
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;