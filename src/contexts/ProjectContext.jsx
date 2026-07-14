import { createContext, useContext, useState, useCallback, lazy, Suspense } from 'react';

// Lazy-loaded component registry
const componentRegistry = {
  AppProject1: lazy(() => import('../components/subcomponents/AppProject1')),
  AppProject2: lazy(() => import('../components/subcomponents/AppProject2')),
  Project1: lazy(() => import('../components/subcomponents/Project1')),
  Project2: lazy(() => import('../components/subcomponents/Project2')),
  Project3: lazy(() => import('../components/subcomponents/Project3')),
  Project4: lazy(() => import('../components/subcomponents/Project4')),
  AutomatedProjectPageGenerator: lazy(() => import('../components/subcomponents/AutomatedProjectPageGenerator')),
  YoutubeShortsAutomation: lazy(() => import('../components/subcomponents/YoutubeShortsAutomation')),
};

const ProjectContext = createContext(null);

export function ProjectProvider({ children }) {
  const [currentView, setCurrentView] = useState('Main'); // 'Main' | 'Projects'
  const [selectedProjectKey, setSelectedProjectKey] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('Software Development');

  const displayProject = useCallback((componentKey, category) => {
    setSelectedProjectKey(componentKey);
    setSelectedCategory(category);
    setCurrentView('Projects');
  }, []);

  const goToMain = useCallback(() => {
    setCurrentView('Main');
    setSelectedProjectKey(null);
  }, []);

  const getProjectComponent = useCallback((componentKey) => {
    const Component = componentRegistry[componentKey];
    if (!Component) {
      return null;
    }
    return Component;
  }, []);

  const value = {
    currentView,
    setCurrentView,
    selectedProjectKey,
    setSelectedProjectKey,
    selectedCategory,
    setSelectedCategory,
    displayProject,
    goToMain,
    getProjectComponent,
    componentRegistry,
  };

  return (
    <ProjectContext.Provider value={value}>
      {children}
    </ProjectContext.Provider>
  );
}

export function useProject() {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error('useProject must be used within a ProjectProvider');
  }
  return context;
}

// Loading fallback for lazy-loaded project components
export function ProjectComponentLoader({ componentKey }) {
  const { getProjectComponent } = useProject();
  const Component = getProjectComponent(componentKey);

  if (!Component) {
    return (
      <div className="flex items-center justify-center py-20">
        <p style={{ color: 'var(--text-secondary)' }}>Project not found</p>
      </div>
    );
  }

  return (
    <Suspense fallback={
      <div className="flex items-center justify-center py-20">
        <div className="w-8 h-8 border-4 border-t-transparent rounded-full animate-spin"
             style={{ borderColor: 'var(--accent-primary)', borderTopColor: 'transparent' }} />
      </div>
    }>
      <Component />
    </Suspense>
  );
}

export default ProjectContext;
