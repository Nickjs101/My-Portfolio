import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import { useSelector } from 'react-redux'

const Work = ({ displayProject }) => {
  const Projects = useSelector((state) => state.project.projects);
  
  return (
    <div id='Work' className='max-w-[1200px] py-20 px-4 sm:px-6 lg:px-8 mx-auto'>
        <div className='pb-8'>
            <p className='text-4xl mb-3 font-bold primary-color'>Work</p>
            <p style={{ color: 'var(--text-secondary)' }}>Check out some of my recent work</p>
        </div>

        <div className='my-5 flex flex-col'>
          <div className='mb-10 w-full text-center text-3xl font-bold' style={{ color: 'var(--text-primary)' }}>
            Software Development
          </div>
          <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4 lg:px-[200px]'> {/*Remove padding when element greater than 3*/}
          {Projects[1].SoftwareDev.map((project, index) => (
            <div key={index} className='card p-4 rounded-xl'>
              <img src={project.image} alt={project.title} className='rounded-xl w-full h-auto'/>
              <div className='p-4'>
                  <h1 className='text-lg font-bold' style={{ color: 'var(--text-primary)' }}>
                    {project.title}
                  </h1>
                  <div className='mb-2 text-sm' style={{ color: 'var(--text-primary)' }}>
                    <FontAwesomeIcon className='mr-2' size='lg' style={{color: "var(--accent-primary)"}} icon={project.icon}/>
                    {project.type}
                  </div>
                  <p className='my-2 h-20' style={{ color: 'var(--text-secondary)' }}>
                    {project.description}
                  </p>
                  <h2 className="text-md mb-4" style={{ color: 'var(--text-primary)' }}>Skills Utilized</h2>
                  <div className="flex flex-wrap">
                    {project.skills.map((skill, i) => (
                      <span key={i} className="py-1 px-2 m-1 rounded-full" style={{
                        backgroundColor: 'var(--bg-tertiary)',
                        color: 'var(--text-secondary)'
                      }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                <div className='py-2 cursor-pointer transition-colors duration-200'
                  style={{ color: 'var(--accent-primary)' }}
                  onClick={() => displayProject(project.component, 'SoftwareDev')}
                >
                  Read More &#10095;
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>

        <div className='mt-[100px] flex flex-col'>
            <div className='mb-10 w-full text-center text-3xl font-bold' style={{ color: 'var(--text-primary)' }}>
                CyberSecurity
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
              {Projects[0].Cybersecurity.map((project, index) => (
                  <div key={index} className='card p-4 rounded-xl'>
                      <img src={project.image} alt={project.title} className='rounded-xl w-full h-auto'/>
                      <h1 className='text-lg font-bold' style={{ color: 'var(--text-primary)' }}>
                          {project.title}
                      </h1>
                      <div className='mb-2 text-sm' style={{ color: 'var(--text-primary)' }}>
                          <FontAwesomeIcon 
                              className='mr-2' 
                              size='lg' 
                              style={{color: "var(--accent-primary)"}} 
                              icon={project.icon} 
                          />
                          {project.type}
                      </div>
                      <p className='py-2 h-40 overflow-hidden' style={{ color: 'var(--text-secondary)' }}>
                          {project.description}
                      </p>
                      <div 
                          className='py-2 cursor-pointer transition-colors duration-200'
                          style={{ color: 'var(--accent-primary)' }}
                          onClick={() => displayProject(project.component, 'Cybersecurity')}
                      >
                          Read More &#10095;
                      </div>
                  </div>
              ))}
            </div>
        </div>


    </div>
  )
}

export default Work