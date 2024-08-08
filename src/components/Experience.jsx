import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import img1 from '../assets/sti.jpg';
import img2 from '../assets/jollibee.jpg';
import img3 from '../assets/pcbytes.jpg';

const Experience = () => {
  const myExperiences = [
    {
      swap: true,
      company: 'SYLLABUS Inc. (STI College-Angeles)',
      position: 'IT Instructor',
      date: 'Aug 2023 - Jun 2024',
      tasks: [
        {header: 'Curriculum Development:',info: 'Designed and implemented comprehensive course materials for subjects such as Computer Programming, Computer Graphics, Game Development, and Human-Computer Interaction, ensuring alignment with industry standards and best practices.'},
        {header: 'Project Supervision:',info: 'Guided students in creating innovative web portfolios, programming projects, and capstone projects, fostering critical thinking and problem-solving skills.'},
        {header: 'Technical Workshops:',info: 'Organized and conducted workshops on emerging technologies, providing hands-on experience with tools like Unity, Android Studio, and various programming languages.'},
        {header: 'Mentorship:',info: 'Acted as a mentor and advisor for students, assisting them in navigating academic challenges and career planning.'},
        {header: 'Panelist & Judge:',info: 'Served as a panelist in IT students\' thesis defenses, providing constructive feedback and assessing project viability and innovation.'}
      ],
      img: img1
    },
    {
      swap: false,
      company: 'Fusion Manpower (Jollibee)',
      position: 'Service Crew',
      date: 'Jul 2019 - Sep 2019',
      tasks: [
        {header: 'Customer Service Excellence:',info: 'Delivered exceptional customer service, ensuring a positive dining experience and maintaining high satisfaction rates.'},
        {header: 'Operational Efficiency:',info: 'Assisted in various operational tasks, including food preparation, order management, and cleanliness maintenance, contributing to a well-organized and efficient work environment.'}
      ],
      img: img2
    },
    {
      swap: true,
      company: 'PC Bytes',
      position: 'IT Technician (OJT)',
      date: 'Oct 2018 - Dec 2018',
      tasks: [
        {header: 'Technical Support:',info: 'Provided comprehensive IT support to clients, including hardware troubleshooting, system diagnostics, and software installation.'},
        {header: 'System Maintenance:',info: 'Performed routine maintenance on computer systems, ensuring optimal performance and reliability.'},
        {header: 'Customer Service:',info: 'Engaged with clients to understand their technical needs, offering tailored solutions and fostering positive client relationships.'},
        {header: 'Network Configuration:',info: 'Set up and configured local area networks (LAN), optimizing connectivity and security.'}
      ],
      img: img3
    },
  ];

  return (
    <div id='Experience' className=' max-w-[1200px] mx-auto pb-[100px]'>
      <div className='primary-color text-4xl font-bold text-center w-full mb-8'>Professional Experience</div>
      
      {myExperiences.map((experience, index) => (
      <div key={index }>

        <div className='w-full grid md:hidden grid-cols-5 items-center pr-6'>

          <div className='col-span-1 flex flex-col h-full items-center mx-8'>
            <div className='w-1 flex-grow bg-primary-color'></div>
            <div className='w-5 h-5 rounded-full bg-primary-color'></div>
            <div className='w-1 flex-grow bg-primary-color'></div>
          </div>

          <div className='col-span-4 h-auto py-10'>
            <div className='bg-secondary-color  border border-[#1A2332ff]  shadow-lg rounded-3xl flex flex-col h-full items-center'>
              <div className='col-span-2 flex justify-center items-center p-3'>
                <img src={experience.img} alt='Experience' className='w-[250px] object-cover rounded-lg' />
              </div>
              <div className=' w-full secondary-color p-4 col-span-2 flex flex-col justify-between'>
                <div className='gap-3'>
                  <div className='flex flex-col lg:flex-row justify-between items-center'>
                    <div className='text-3xl font-bold text-[#9fef00]'>{experience.position}</div>
                    <div className='text-sm font-bold italic px-2 rounded-full text-center bg-[#a4b1cd47] secondary-color'>{experience.date}</div>
                  </div>
                  <div className='text-lg font-medium mb-5'>{experience.company}</div>
                  <ul className='list-disc list-inside space-y-4'>
                    {experience.tasks.map((task, i) => (
                      <li key={i} className='text-md'><b className='font-semibold'>{task.header} </b><span className='italic'>{task.info}</span></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>



        <div className='hidden md:grid w-full h-auto grid-cols-5 items-center px-4'>
          <div className={`${experience.swap? 'hidden': 'block'} bg-fourth-color border border-[#1A2332ff]  shadow-lg rounded-3xl secondary-color p-4 my-16 col-span-2 flex flex-col justify-between`}>
            <div className='gap-3'>
              <div className='flex justify-between items-center'>
                <div className='text-3xl font-bold text-[#9fef00]'>{experience.position}</div>
                <div className='text-sm font-bold italic px-2 rounded-full text-center bg-[#a4b1cd47] secondary-color'>{experience.date}</div>
              </div>
              <div className='text-lg font-medium mb-3'>{experience.company}</div>
              <ul className='list-disc list-inside space-y-2 font-sans'>
                {experience.tasks.map((task, i) => (
                  <li key={i} className='text-md'><b className='font-semibold'>{task.header} </b><span className='italic'>{task.info}</span></li>
                ))}
              </ul>
            </div>
          </div>
          <div className={`${experience.swap ? 'block' : 'hidden'} col-span-2 flex justify-center items-center`}>
            <img src={experience.img} alt='Experience' className='w-[300px] object-cover rounded-lg shadow-lg' />
          </div>

          <div className='col-span-1 flex flex-col h-full items-center mx-8'>
            <div className='w-1 flex-grow bg-primary-color'></div>
            <div className='w-5 h-5 rounded-full bg-primary-color'></div>
            <div className='w-1 flex-grow bg-primary-color'></div>
          </div>
          
          <div className={`${experience.swap? 'block': 'hidden'} bg-fourth-color border border-[#1A2332ff]  shadow-lg rounded-3xl secondary-color p-4 my-16 col-span-2 flex flex-col justify-between `}>
            <div className='gap-3'>
              <div className='flex justify-between items-center'>
                <div className='text-3xl font-bold text-[#9fef00]'>{experience.position}</div>
                <div className='text-sm font-bold italic px-2 rounded-full text-center bg-[#a4b1cd47] secondary-color'>{experience.date}</div>
              </div>
              <div className='text-lg font-medium mb-3'>{experience.company}</div>
              <ul className='list-disc list-inside space-y-2 font-sans'>
                {experience.tasks.map((task, i) => (
                  <li key={i} className='text-md'><b className='font-semibold'>{task.header} </b><span className='italic'>{task.info}</span></li>
                ))}
              </ul>
            </div>
          </div>
          <div className={`${experience.swap? 'hidden': 'block'} col-span-2 flex justify-center items-center`}>
            <img src={experience.img} alt='Experience' className='w-[300px]  object-cover rounded-lg shadow-lg' />
          </div>
        </div>
      </div>
      ))}

      
      <div className='w-full mt-[200px]'>
        <div className='my-10 w-full text-center text-3xl font-bold text-white'>Additional Professional Highlights</div>

        <div className='w-full flex flex-wrap justify-evenly gap-4'>
          <div class="bg-fourth-color shadow-lg rounded-lg border border-[#A4B1CDff] p-6 max-w-sm">
            <div class="flex items-center mb-4">
                <div className="bg-tertiary-color rounded-full p-2 w-10 h-10 flex items-center justify-center mr-3">
                  <FontAwesomeIcon icon="fa-solid fa-people-group" />
                </div>
                <h3 class="text-xl text-white font-semibold">Leadership & Teamwork</h3>
            </div>
            <p class="secondary-color">
              Demonstrated strong leadership and teamwork skills in academic and professional settings, successfully leading project teams and collaborating with colleagues to achieve common goals.
            </p>
          </div>

          <div class="bg-fourth-color shadow-lg rounded-lg border border-[#A4B1CDff] p-6 max-w-sm">
            <div class="flex items-center mb-4">
              <div className="bg-tertiary-color rounded-full p-2 w-10 h-10 flex items-center justify-center mr-3">
                <FontAwesomeIcon icon="fa-solid fa-book-atlas" />
              </div>
              <h3 class="text-xl text-white font-semibold">Technical Acumen</h3>
            </div>
            <p class="secondary-color">
              Continuously updated technical knowledge through certifications and self-directed learning, staying abreast of the latest industry trends and technological advancements.
            </p>
          </div>

          <div class="bg-fourth-color shadow-lg rounded-lg border border-[#A4B1CDff] p-6 max-w-sm">
            <div class="flex items-center mb-4">
                <div className="bg-tertiary-color rounded-full p-2 w-10 h-10 flex items-center justify-center mr-3">
                  <FontAwesomeIcon icon="fa-solid fa-lightbulb" />
                </div>
                <h3 class="text-xl text-white font-semibold">Problem-Solving</h3>
            </div>
            <p class="secondary-color">
              Exhibited exceptional problem-solving abilities, identifying and resolving complex technical issues efficiently and effectively.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Experience;
