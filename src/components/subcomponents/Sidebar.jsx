import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Sidebar({ projects, currentComponentKey, onProjectSelect }) {
  // Check if a project is currently selected
  const isCurrentProject = (project) => {
    if (currentComponentKey) {
      return project.componentKey === currentComponentKey;
    }
    return false;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const ProjectCard = ({ project, index }) => {
    const isCurrent = isCurrentProject(project);
    if (isCurrent) return null;

    return (
      <motion.div
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
        className="p-4 rounded-xl cursor-pointer transition-all duration-200"
        style={{
          backgroundColor: 'var(--card-bg)',
          border: '1px solid var(--card-border)',
        }}
        onClick={() => onProjectSelect(project)}
      >
        <h3 className='font-bold text-base mb-2 line-clamp-1' style={{ color: 'var(--text-primary)' }}>
          {project.title}
        </h3>
        <p className='text-sm h-24 overflow-hidden line-clamp-4' style={{ color: 'var(--text-secondary)' }}>
          {project.description}
        </p>
        <div
          className='flex items-center gap-1 mt-3 text-sm font-medium transition-colors duration-200 hover:gap-2'
          style={{ color: 'var(--accent-primary)' }}
        >
          Read More <ArrowRight className="w-4 h-4" />
        </div>
      </motion.div>
    );
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-tertiary)' }}>
      <h2 className="pl-4 pt-10 text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
        From the Same Category
      </h2>

      {/* Desktop sidebar */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className='hidden lg:flex flex-col gap-4 p-4'
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </motion.div>

      {/* Mobile/tablet grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className='grid grid-cols-1 smmd:grid-cols-2 md:grid-cols-3 lg:hidden gap-4 p-4'
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </motion.div>
    </div>
  )
}
