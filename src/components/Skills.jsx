import React from 'react';
import js from '../assets/js.png';
import c from '../assets/c-sharp.png';
import java from '../assets/java.png';
import bash from '../assets/gnu-bash.png';
import php from '../assets/php.png';
import sql from '../assets/sql-server.png';
import python from '../assets/python.png';

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
    <div id='Skills' className='py-0 md:py-[100px] my-[100px] lg:my-[200px] relative'>
      {/* Content Box */}
      <div className="container mx-auto px-16">
        <h2 className="text-4xl md:text-5xl font-bold text-center  mb-4 text-gray-800 dark:text-gray-100">My Tech Stack</h2>
        <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full mb-8"></div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="text-5xl mb-3 text-gray-700 dark:text-gray-300 group-hover:text-green-400 dark:group-hover:text-green-400 transition-colors duration-300">
                {skill.icon}
              </div>
              <span className="text-md font-medium text-center text-gray-800 dark:text-gray-200 group-hover:text-green-400 dark:group-hover:text-green-400 transition-colors duration-300">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
