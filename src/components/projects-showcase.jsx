import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowRight, FileText } from 'lucide-react'
import { Latest, SoftwareDev } from '../components/data/projects'
import Badge from './ui/Badge'

export default function ProjectsShowcase({ displayProject }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const handleProjectClick = (project) => {
    // Use componentKey if available, otherwise fall back to component
    const componentToDisplay = project.componentKey || project.component;
    displayProject(componentToDisplay, project.category);
  };

  const handleViewAllClick = () => {
    // Default to first software dev project
    const firstProject = SoftwareDev[0];
    const componentToDisplay = firstProject.componentKey || firstProject.component;
    displayProject(componentToDisplay, 'Software Development');
  };

  return (
    <section id='Work' className="py-24 md:py-20" style={{
      backgroundColor: 'var(--bg-primary)'
    }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Featured Projects
          </h2>
          <div className="h-1 w-20 mx-auto rounded-full" style={{
            backgroundColor: 'var(--button-bg)'
          }}></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {Latest.slice(0, 3).map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="group cursor-pointer rounded-xl overflow-hidden border transition-all duration-300"
              style={{
                backgroundColor: 'var(--card-bg)',
                borderColor: 'var(--card-border)',
              }}
              onClick={() => handleProjectClick(project)}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3"
                  style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
                >
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-3 rounded-full transition-colors duration-200"
                      style={{ backgroundColor: 'var(--bg-secondary)' }}
                      aria-label="View GitHub Repository"
                    >
                      <Github className="w-5 h-5" style={{ color: 'var(--text-primary)' }} />
                    </a>
                  )}
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-3 rounded-full transition-colors duration-200"
                      style={{ backgroundColor: 'var(--bg-secondary)' }}
                      aria-label="View Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" style={{ color: 'var(--text-primary)' }} />
                    </a>
                  )}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProjectClick(project);
                    }}
                    className="p-3 rounded-full transition-colors duration-200"
                    style={{ backgroundColor: 'var(--bg-secondary)' }}
                    aria-label="View Documentation"
                  >
                    <FileText className="w-5 h-5" style={{ color: 'var(--text-primary)' }} />
                  </button>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div className="mb-2 sm:mb-0">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                      {project.title}
                    </h3>
                    <Badge variant="accent" size="sm">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                <p className="text-sm sm:text-base mb-4 line-clamp-2" style={{ color: 'var(--text-secondary)' }}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.skills.slice(0, 4).map((skill) => (
                    <Badge key={skill} size="sm" variant="default">
                      {skill}
                    </Badge>
                  ))}
                  {project.skills.length > 4 && (
                    <Badge size="sm" variant="muted">
                      +{project.skills.length - 4}
                    </Badge>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mt-8 sm:mt-12"
        >
          <motion.button
            onClick={handleViewAllClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-colors duration-300"
            style={{
              backgroundColor: 'var(--button-bg)',
              color: 'var(--text-primary)'
            }}
          >
            See All Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
