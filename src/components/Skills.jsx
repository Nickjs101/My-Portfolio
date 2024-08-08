import React from 'react';
import js from '../assets/js.png';
import c from '../assets/c-sharp.png';
import java from '../assets/java.png';
import bash from '../assets/gnu-bash.png';
import php from '../assets/php.png';
import sql from '../assets/sql-server.png';
import python from '../assets/python.png';

const Skills = () => {
  const techstack = [
    { icon: js, name: 'Javascript' },
    { icon: c, name: 'C#' },
    { icon: java, name: 'Java' },
    { icon: bash, name: 'Bash' },
    { icon: php, name: 'PHP' },
    { icon: sql, name: 'SQL' },
    { icon: python, name: 'Python' },
  ];

  return (
    <div id='Skills' className='py-0 md:py-[100px] my-[100px] lg:my-[200px] relative'>
      {/* Content Box */}
      <div className='bg-transparent border border-gray-600 text-gray-50 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-3 place-items-center md:flex md:justify-between md:items-center relative z-10'>
        
        <h2 className='text-gray-700 text-2xl md:text-4xl font-bold m-4'>
          My <br /> Tech <br /> Stack
        </h2>
        {
          techstack.map((skill) => (
            <div key={skill.name} className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
              <img src={skill.icon} alt={skill.name} />
              <p className='mt-2'>{skill.name}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Skills;
