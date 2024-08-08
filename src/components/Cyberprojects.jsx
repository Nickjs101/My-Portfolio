import React, {useEffect, useState, useMemo} from 'react'
import { useSelector } from 'react-redux'
// import { addProject } from './subcomponents/projectSlice'
import Sidebar from './subcomponents/Sidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const Cyberprojects = ({projectComponent, category, setprojectCategory, setprojectComponent, setCurrentContent}) => {
    const [currentComponent, setCurrentComponent] = useState(projectComponent);
    const projectCategory = useSelector((state) => state.project.projects);

    const Categories = useMemo(() => ({
      'Cybersecurity': projectCategory[0].Cybersecurity,
      'SoftwareDev': projectCategory[1].SoftwareDev,
    }), [projectCategory]);

    const [Projects, setProjects] = useState(Categories[category]);

    // const dispatch = useDispatch(); //adding project dispatch(addProject(THE PROJECT ARRAY));
    
    useEffect(() => {
      setProjects(Categories[category]);
    }, [category, Categories]);
  

    useEffect(() => {
      const section = document.getElementById('Content');
      if (section) {
        const navbarHeight = document.querySelector('.sticky').offsetHeight; // get the navbar height
        window.scrollTo({
          top: section.offsetTop - navbarHeight, // adjust the scroll position
          behavior: 'smooth',
        });
      }
    }, [currentComponent]);

    
  return (
    <div>
      <div className='sticky bg-secondary-color top-0 left-0 z-50'>
              <div className='text-gray-400 h-[70px] max-w-[1200px] mx-auto flex justify-between items-center'>
                  <h1 className='text-3xl font-bold primary-color ml-4 cursor-pointer' onClick={() => setCurrentContent('Main')}>&#10094; Projects</h1>
                  <div className='flex gap-5 mr-4'>
                    <a href="#" onClick={() => {setprojectCategory('Cybersecurity');setCurrentComponent(projectCategory[0].Cybersecurity[0].component);}} className={`hidden md:block text-[#9fef00] font-semibold py-2 px-4 rounded-lg shadow-lg hover:shadow-none shadow-black hover:bg-primary-dark ${category == 'Cybersecurity'? 'shadow-none' : 'shadow-lg'}`}>
                      Cybersecurity
                    </a>
                    <a href="#" onClick={() => {setprojectCategory('Cybersecurity');setCurrentComponent(projectCategory[0].Cybersecurity[0].component);}} className={`block md:hidden py-2 px-4 rounded-lg shadow-lg hover:shadow-none shadow-black hover:bg-primary-dark ${category == 'Cybersecurity'? 'shadow-none' : 'shadow-lg'}`}>
                      <FontAwesomeIcon style={{color: "#9fef00"}} icon='fa-solid fa-shield'/>
                    </a>
                    

                    <a href="#" onClick={() => {setprojectCategory('SoftwareDev');setCurrentComponent(projectCategory[1].SoftwareDev[0].component);}} className={`hidden md:block text-[#9fef00] font-semibold py-2 px-4 rounded-lg shadow-lg hover:shadow-none shadow-black hover:bg-primary-dark ${category == 'SoftwareDev'? 'shadow-none' : 'shadow-lg'}`}>
                      Software Development
                    </a>
                    <a href="#" onClick={() => {setprojectCategory('SoftwareDev');setCurrentComponent(projectCategory[1].SoftwareDev[0].component);}} className={`block md:hidden py-2 px-4 rounded-lg shadow-lg hover:shadow-none shadow-black hover:bg-primary-dark ${category == 'SoftwareDev'? 'shadow-none' : 'shadow-lg'}`}>
                      <FontAwesomeIcon style={{color: "#9fef00"}} icon='fa-solid fa-file-code'/>
                    </a>
                  </div>
              </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto max-w-[1200px]">
          <div id='Content' className="col-span-1 lg:col-span-2 p-4 text-white bg-secondary-color">
              {currentComponent}
          </div>
          <Sidebar projects={Projects} currentComponent={currentComponent} setCurrentComponent={setCurrentComponent} />
      </div>
    </div>
  )
}

export default Cyberprojects