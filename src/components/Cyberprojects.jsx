import React, { useEffect, useState, useMemo, Suspense, lazy } from 'react'
import Sidebar from './subcomponents/Sidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SoftwareDev, Cybersecurity, Automation, DevOps } from '../components/data/projects'

// Lazy-loaded component registry
const componentRegistry = {
  AppProject1: lazy(() => import('./subcomponents/AppProject1')),
  AppProject2: lazy(() => import('./subcomponents/AppProject2')),
  Project1: lazy(() => import('./subcomponents/Project1')),
  Project2: lazy(() => import('./subcomponents/Project2')),
  Project3: lazy(() => import('./subcomponents/Project3')),
  Project4: lazy(() => import('./subcomponents/Project4')),
  AutomatedProjectPageGenerator: lazy(() => import('./subcomponents/AutomatedProjectPageGenerator')),
  YoutubeShortsAutomation: lazy(() => import('./subcomponents/YoutubeShortsAutomation')),
  RealEstateShowingCoordinator: lazy(() => import('./subcomponents/RealEstateShowingCoordinator')),
  OfferRecapAutomation: lazy(() => import('./subcomponents/OfferRecapAutomation')),
  AppointmentSetterAgent: lazy(() => import('./subcomponents/AppointmentSetterAgent')),
};

const LoadingFallback = () => (
  <div className="flex items-center justify-center py-20">
    <div className="w-8 h-8 border-4 border-t-transparent rounded-full animate-spin"
         style={{ borderColor: 'var(--accent-primary)', borderTopColor: 'transparent' }} />
  </div>
);

const Cyberprojects = ({ projectComponent, category, setprojectCategory, setprojectComponent, setCurrentContent }) => {
  const [currentComponentKey, setCurrentComponentKey] = useState(
    typeof projectComponent === 'string' ? projectComponent : null
  );

  const Categories = useMemo(() => ({
    "Cybersecurity": Cybersecurity,
    "Software Development": SoftwareDev,
    "Automation": Automation,
    "DevOps": DevOps,
  }), []);

  const [Projects, setProjects] = useState(Categories[category]);

  useEffect(() => {
    setProjects(Categories[category]);
  }, [category, Categories]);

  useEffect(() => {
    const section = document.getElementById('Content');
    if (section) {
      const navbar = document.querySelector('.sticky');
      const navbarHeight = navbar ? navbar.offsetHeight : 70;
      window.scrollTo({
        top: section.offsetTop - navbarHeight,
        behavior: 'smooth',
      });
    }
  }, [currentComponentKey]);

  // Get the component to render
  const renderProjectContent = () => {
    // If projectComponent is a string (componentKey), use the registry
    if (typeof projectComponent === 'string' && componentRegistry[projectComponent]) {
      const Component = componentRegistry[projectComponent];
      return (
        <Suspense fallback={<LoadingFallback />}>
          <Component />
        </Suspense>
      );
    }

    // If currentComponentKey is set, use the registry
    if (currentComponentKey && componentRegistry[currentComponentKey]) {
      const Component = componentRegistry[currentComponentKey];
      return (
        <Suspense fallback={<LoadingFallback />}>
          <Component />
        </Suspense>
      );
    }

    // Fallback to rendering projectComponent directly (for backward compatibility)
    return projectComponent;
  };

  const handleCategoryChange = (newCategory, projects) => {
    setprojectCategory(newCategory);
    if (projects && projects.length > 0) {
      const firstProject = projects[0];
      if (firstProject.componentKey) {
        setCurrentComponentKey(firstProject.componentKey);
        setprojectComponent(firstProject.componentKey);
      } else if (firstProject.component) {
        setprojectComponent(firstProject.component);
      }
    }
  };

  const handleProjectSelect = (project) => {
    if (project.componentKey) {
      setCurrentComponentKey(project.componentKey);
      setprojectComponent(project.componentKey);
    } else if (project.component) {
      setprojectComponent(project.component);
    }
  };

  const CategoryButton = ({ categoryName, projects, icon }) => {
    if (!projects || projects.length === 0) return null;

    const isActive = category === categoryName;

    return (
      <>
        <button
          onClick={() => handleCategoryChange(categoryName, projects)}
          className={`hidden md:block font-semibold py-2 px-4 rounded-lg transition-all duration-200 ${
            isActive ? 'shadow-none' : 'shadow-lg hover:shadow-none'
          }`}
          style={{
            color: 'var(--accent-primary)',
            boxShadow: isActive ? 'none' : '0 4px 6px -1px var(--shadow-color)',
          }}
        >
          {categoryName}
        </button>
        <button
          onClick={() => handleCategoryChange(categoryName, projects)}
          className={`block md:hidden py-2 px-4 rounded-lg transition-all duration-200 ${
            isActive ? 'shadow-none' : 'shadow-lg hover:shadow-none'
          }`}
          style={{
            boxShadow: isActive ? 'none' : '0 4px 6px -1px var(--shadow-color)',
          }}
          aria-label={categoryName}
        >
          <FontAwesomeIcon style={{ color: 'var(--accent-primary)' }} icon={icon} />
        </button>
      </>
    );
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div
        className="sticky top-0 left-0 z-50"
        style={{ backgroundColor: 'var(--bg-secondary)' }}
      >
        <div
          className="h-[70px] max-w-[1200px] mx-auto flex justify-between items-center"
          style={{ color: 'var(--text-secondary)' }}
        >
          <h1
            className="text-3xl font-bold ml-4 cursor-pointer"
            style={{ color: 'var(--accent-primary)' }}
            onClick={() => setCurrentContent('Main')}
          >
            &#10094; Projects
          </h1>
          <div className="flex gap-5 mr-4">
            <CategoryButton
              categoryName="Cybersecurity"
              projects={Categories["Cybersecurity"]}
              icon="fa-solid fa-shield"
            />
            <CategoryButton
              categoryName="Software Development"
              projects={Categories["Software Development"]}
              icon="fa-solid fa-file-code"
            />
            <CategoryButton
              categoryName="Automation"
              projects={Categories["Automation"]}
              icon="fa-solid fa-file-code"
            />
            <CategoryButton
              categoryName="DevOps"
              projects={Categories["DevOps"]}
              icon="fa-solid fa-file-code"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto max-w-[1200px]">
        <div
          id="Content"
          className="col-span-1 lg:col-span-2 p-4"
          style={{
            backgroundColor: 'var(--bg-secondary)',
            color: 'var(--text-primary)',
          }}
        >
          {renderProjectContent()}
        </div>
        <Sidebar
          projects={Projects}
          currentComponentKey={currentComponentKey}
          onProjectSelect={handleProjectSelect}
        />
      </div>
    </div>
  );
};

export default Cyberprojects;
