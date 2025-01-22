import React from 'react'
// import { motion } from 'framer-motion'
// import { ExternalLink, Github, ArrowRight, FileText } from 'lucide-react'
import { projectStyles as styles } from './subcomponents/ProjectStyles'
import { useSelector } from 'react-redux'

export default function ProjectsShowcase({ displayProject }) {
  const Projects = useSelector((state) => state.project.projects)

  return (
    <div style={styles.container} className="max-w-[1200px] mx-auto p-5 md:py-[50px] my-0 md:my-[100px]">
      <div className='pb-8'>
        <p style={styles.heading} className="text-4xl mb-3 font-bold">
          Projects
        </p>
        <p style={styles.text}>
          Check out some of my recent work
        </p>
      </div>

      <div className='my-5 flex flex-col'>
        <div style={styles.heading} className='mb-10 w-full text-center text-3xl font-bold'>
          Software Development
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4 lg:px-[200px]'>
          {Projects[1].SoftwareDev.map((project, index) => (
            <div key={index} className='card p-4 rounded-xl'>
              {project.image}
              <div className='p-4'>
                <h1 style={styles.heading} className='text-lg font-bold'>
                  {project.title}
                </h1>
                <div style={styles.text} className='mb-2 text-sm'>
                  {project.type}
                </div>
                <p style={styles.text} className='my-2 h-20 overflow-hidden'>
                  {project.description}
                </p>
                <div 
                  className='py-2 cursor-pointer transition-colors duration-200'
                  style={styles.link}
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
        <div style={styles.heading} className='mb-10 w-full text-center text-3xl font-bold'>
          Cybersecurity
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {Projects[0].Cybersecurity.map((project, index) => (
            <div key={index} className='card p-4 rounded-xl'>
              {project.image}
              <h1 style={styles.heading} className='text-lg font-bold'>
                {project.title}
              </h1>
              <div style={styles.text} className='mb-2 text-sm'>
                {project.type}
              </div>
              <p style={styles.text} className='py-2 h-40 overflow-hidden'>
                {project.description}
              </p>
              <div 
                className='py-2 cursor-pointer transition-colors duration-200'
                style={styles.link}
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