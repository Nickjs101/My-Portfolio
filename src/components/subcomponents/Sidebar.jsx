import React from 'react'

const Sidebar = ({projects, currentComponent, setCurrentComponent}) => {
  return (
    <div>
      <h2 className="pl-4 pt-10 text-lg mb-4 text-white">From the Same Category</h2>
      <div className='hidden lg:col-span-1 gap-4 lg:flex flex-wrap p-4'>
          {projects.map((project, index) => (
              <div key={index} className= {`p-4 h-[250px] md:min-w-fit lg:w-full shadow-lg hover:shadow-none shadow-black ${project.component === currentComponent? 'hidden' : ''} bg-secondary-color mb-2 rounded-xl`} >
                  <h1 className='text-white'><b>{project.title}</b></h1>
                  <p className='py-2 h-40 fade-effect overflow-hidden'>{project.description}</p>
                  <div className='container text-[#9fef00] py-2 hover:text-[#A4B1CDff] cursor-pointer' onClick={(e) => setCurrentComponent(project.component)}>Read More &#10095;</div>
              </div>
          ))}
      </div>
      <div className='grid grid-cols-1 smmd:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:hidden gap-4  p-4'>
          {/* <div className="w-full max-w-4xl mx-auto p-6 shadow-lg rounded-lg mt-8">
            <h2 className="text-lg font-bold mb-4 text-white">From the Same Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
            </div>
          </div> */}
          {projects.map((project, index) => (
              <div key={index} className={`p-4 h-[250px] md:min-w-fit lg:w-full shadow-lg hover:shadow-none shadow-black ${project.component === currentComponent? 'hidden' : ''} bg-secondary-color mb-2 rounded-xl`} >
                  <h1 className='text-white'><b>{project.title}</b></h1>
                  <p className='py-2 h-40 fade-effect overflow-hidden'>{project.description}</p>
                  <div className='container text-[#9fef00] py-2 hover:text-[#A4B1CDff] cursor-pointer' onClick={(e) => setCurrentComponent(project.component)}>Read More &#10095;</div>
              </div>
          ))}
      </div>
    </div>
  )
}

export default Sidebar