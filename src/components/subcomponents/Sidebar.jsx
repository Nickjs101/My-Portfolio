import React from 'react'

export default function Sidebar({projects, currentComponent, setCurrentComponent}) {
  return (
    <div>
      <h2 className="pl-4 pt-10 text-lg mb-4" style={{ color: 'var(--text-primary)' }}>
        From the Same Category
      </h2>
      <div className='hidden lg:col-span-1 gap-4 lg:flex flex-wrap p-4'>
        {projects.map((project, index) => (
          <div key={index} className={`p-4 h-[250px] md:min-w-fit lg:w-full ${project.component === currentComponent? 'hidden' : ''} card rounded-xl`}>
            <h1 className='font-bold' style={{ color: 'var(--text-primary)' }}>
              {project.title}
            </h1>
            <p className='py-2 h-40 overflow-hidden' style={{ color: 'var(--text-secondary)' }}>
              {project.description}
            </p>
            <div 
              className='container py-2 cursor-pointer transition-colors duration-200' 
              style={{ color: 'var(--accent-primary)' }}
              onClick={(e) => setCurrentComponent(project.component)}
            >
              Read More &#10095;
            </div>
          </div>
        ))}
      </div>
      
      <div className='grid grid-cols-1 smmd:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:hidden gap-4 p-4'>
        {projects.map((project, index) => (
          <div key={index} className={`p-4 h-[250px] md:min-w-fit lg:w-full ${project.component === currentComponent? 'hidden' : ''} card rounded-xl`}>
            <h1 className='font-bold' style={{ color: 'var(--text-primary)' }}>
              {project.title}
            </h1>
            <p className='py-2 h-40 overflow-hidden' style={{ color: 'var(--text-secondary)' }}>
              {project.description}
            </p>
            <div 
              className='container py-2 cursor-pointer transition-colors duration-200'
              style={{ color: 'var(--accent-primary)' }}
              onClick={(e) => setCurrentComponent(project.component)}
            >
              Read More &#10095;
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}