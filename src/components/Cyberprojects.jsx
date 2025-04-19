import React, {useEffect, useState, useMemo} from 'react'
import Sidebar from './subcomponents/Sidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SoftwareDev, Cybersecurity, Automation, DevOps } from '../components/data/projects'



const Cyberprojects = ({projectComponent, category, setprojectCategory, setprojectComponent, setCurrentContent}) => {
    const [currentComponent, setCurrentComponent] = useState(projectComponent);

    const Categories = useMemo(() => ({
      "Cybersecurity": Cybersecurity,
      "Software Development": SoftwareDev,
      "Automation": Automation,
      "DevOps": DevOps,
    }), []);

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
                    {Categories["Cybersecurity"]?.length > 0 && (
                      <>
                      <a href="#Cybersecurity" onClick={() => {setprojectCategory('Cybersecurity');setCurrentComponent(Cybersecurity[0].component);}} className={`hidden md:block text-[#9fef00] font-semibold py-2 px-4 rounded-lg shadow-lg hover:shadow-none shadow-black hover:bg-primary-dark ${category === 'Cybersecurity'? 'shadow-none' : 'shadow-lg'}`}>
                        Cybersecurity
                      </a>
                      <a href="#Cybersecurity" onClick={() => {setprojectCategory('Cybersecurity');setCurrentComponent(Cybersecurity[0].component);}} className={`block md:hidden py-2 px-4 rounded-lg shadow-lg hover:shadow-none shadow-black hover:bg-primary-dark ${category === 'Cybersecurity'? 'shadow-none' : 'shadow-lg'}`}>
                        <FontAwesomeIcon style={{color: "#9fef00"}} icon='fa-solid fa-shield'/>
                      </a>
                      </>
                    )}
                    {Categories["Software Development"]?.length > 0 && (
                      <>
                      <a href="#Software Development" onClick={() => {setprojectCategory('Software Development');setCurrentComponent(SoftwareDev[0].component);}} className={`hidden md:block text-[#9fef00] font-semibold py-2 px-4 rounded-lg shadow-lg hover:shadow-none shadow-black hover:bg-primary-dark ${category === 'Software Development'? 'shadow-none' : 'shadow-lg'}`}>
                        Software Development
                      </a>
                      <a href="#Software Development" onClick={() => {setprojectCategory('Software Development');setCurrentComponent(SoftwareDev[0].component);}} className={`block md:hidden py-2 px-4 rounded-lg shadow-lg hover:shadow-none shadow-black hover:bg-primary-dark ${category === 'Software Development'? 'shadow-none' : 'shadow-lg'}`}>
                        <FontAwesomeIcon style={{color: "#9fef00"}} icon='fa-solid fa-file-code'/>
                      </a>
                      </>
                    )}

                    {Categories["Automation"]?.length > 0 && (
                      <>
                      <a href="#Software Development" onClick={() => {setprojectCategory('Automation');setCurrentComponent(Automation[0].component);}} className={`hidden md:block text-[#9fef00] font-semibold py-2 px-4 rounded-lg shadow-lg hover:shadow-none shadow-black hover:bg-primary-dark ${category === 'Automation'? 'shadow-none' : 'shadow-lg'}`}>
                        Automation
                      </a>
                      <a href="#Software Development" onClick={() => {setprojectCategory('Automation');setCurrentComponent(Automation[0].component);}} className={`block md:hidden py-2 px-4 rounded-lg shadow-lg hover:shadow-none shadow-black hover:bg-primary-dark ${category === 'Automation'? 'shadow-none' : 'shadow-lg'}`}>
                        <FontAwesomeIcon style={{color: "#9fef00"}} icon='fa-solid fa-file-code'/>
                      </a>
                      </>
                    )}

                    {Categories["DevOps"]?.length > 0 && (
                      <>
                      <a href="#Software Development" onClick={() => {setprojectCategory('DevOps');setCurrentComponent(DevOps[0].component);}} className={`hidden md:block text-[#9fef00] font-semibold py-2 px-4 rounded-lg shadow-lg hover:shadow-none shadow-black hover:bg-primary-dark ${category === 'DevOps'? 'shadow-none' : 'shadow-lg'}`}>
                        DevOps
                      </a>
                      <a href="#Software Development" onClick={() => {setprojectCategory('DevOps');setCurrentComponent(DevOps[0].component);}} className={`block md:hidden py-2 px-4 rounded-lg shadow-lg hover:shadow-none shadow-black hover:bg-primary-dark ${category === 'DevOps'? 'shadow-none' : 'shadow-lg'}`}>
                        <FontAwesomeIcon style={{color: "#9fef00"}} icon='fa-solid fa-file-code'/>
                      </a>
                      </>
                    )}
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