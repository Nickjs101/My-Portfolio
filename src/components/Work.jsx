import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import { useSelector } from 'react-redux'

const Work = ({ displayProject }) => {
  const Projects = useSelector((state) => state.project.projects);
  
  return (
    <div className='max-w-[1200px] mx-auto p-5 my-[100px]' id='work'>
        <div className='pb-8'>
            <p className='text-4xl mb-3 font-bold primary-color'>Work</p>
            <p className='text-gray-400'>Check out some of my recent work</p>
        </div>

        <div className='my-5 flex flex-col'>
          <div className='mb-10 w-full text-center text-3xl text-white font-bold'>Software Development</div>
          <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4 lg:px-[200px]'> {/*Remove padding when element greater than 3*/}
          {Projects[1].SoftwareDev.map((project, index) => (
            <div key={index} className='bg-fourth-color secondary-color mb-2 rounded-xl' >
              {project.image}
              <div className='p-4'>
                  <h1 className='text-white text-lg'><b>{project.title}</b></h1>
                  <div className=' mb-2 text-white text-sm'><FontAwesomeIcon className='mr-2' size='lg' style={{color: "#74C0FC"}} icon={project.icon}/>{project.type}</div>
                  <p className='my-2 h-20 secondary-color overflow-hidden'>{project.description}</p>
                  <h2 className="text-md mb-4 text-white">Skills Utilized</h2>
                  <div className="flex flex-wrap">
                    {project.skills.map((skill, i) => (
                      <span key={i} className="bg-secondary-color text-sm secondary-color py-1 px-2 m-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                <div className='text-[#9fef00] py-2 hover:text-[#A4B1CDff] cursor-pointer' onClick={() => displayProject(project.component, 'SoftwareDev')}>Read More &#10095;</div>
              </div>
            </div>
          ))}
          </div>
        </div>

        <div className='mt-[100px] flex flex-col'>
            <div className='mb-10 w-full text-center text-3xl text-white font-bold'>CyberSecurity</div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
              {Projects[0].Cybersecurity.map((project, index) => (
                  <div key={index} className='p-4 bg-fourth-color secondary-color mb-2 rounded-xl' >
                      {project.image}
                      <h1 className='text-white text-lg'><b>{project.title}</b></h1>
                      <div className='mb-2 text-white text-sm'><FontAwesomeIcon className='mr-2' size='lg' style={{color: "FFD43B"}} icon={project.icon} />{project.type}</div>
                      <p className='py-2 h-40 fade-effect overflow-hidden'>{project.description}</p>
                      <div className='text-[#9fef00] py-2 hover:text-[#A4B1CDff] cursor-pointer' onClick={() => displayProject(project.component, 'Cybersecurity')}>Read More &#10095;</div>
                  </div>
              ))}
            </div>
        </div>


    </div>
  )
}

export default Work