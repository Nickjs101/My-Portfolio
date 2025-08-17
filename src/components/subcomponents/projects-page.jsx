import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, ExternalLink, Github, FileText } from 'lucide-react'

// You can import the projects array from a separate file
import { Latest as projects, categories } from '../data/projects'

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [likedProjects, setLikedProjects] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('projectLikes')
      return saved ? JSON.parse(saved) : {}
    }
    return {}
  })

  const toggleLike = (projectId) => {
    setLikedProjects(prev => {
      const newLikes = {
        ...prev,
        [projectId]: !prev[projectId]
      }
      localStorage.setItem('projectLikes', JSON.stringify(newLikes))
      return newLikes
    })
  }

  const filteredProjects = projects.filter(project => 
    selectedCategory === "All" || project.category === selectedCategory
  )

  return (
    <div className="min-h-screen py-20" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center" style={{ color: 'var(--text-primary)' }}>
          All Projects
        </h1>
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300`}
              style={{
                backgroundColor: selectedCategory === category ? 'var(--accent-primary)' : 'var(--bg-secondary)',
                color: selectedCategory === category ? 'var(--text-primary)' : 'var(--text-secondary)'
              }}
            >
              {category}
            </button>
          ))}
        </div>

        <AnimatePresence mode="popLayout">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="card rounded-xl overflow-hidden border backdrop-blur-sm transition-all duration-300"
                style={{
                  borderColor: 'var(--card-border)',
                  '&:hover': { borderColor: 'var(--accent-primary)' }
                }}
              >
                <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                />
                <button
                  onClick={() => toggleLike(project.id)}
                  className="absolute top-4 right-4 p-2 rounded-full backdrop-blur-sm transition-colors duration-300"
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' }
                  }}
                >
                  <Heart
                    className="w-5 h-5"
                    style={{
                      fill: likedProjects[project.id] ? 'var(--accent-primary)' : 'none',
                      stroke: likedProjects[project.id] ? 'var(--accent-primary)' : 'var(--text-primary)'
                    }}
                  />
                </button>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                      {project.title}
                    </h3>
                    <span className="inline-block px-3 py-1 text-sm rounded-full" style={{
                      backgroundColor: 'var(--accent-primary)',
                      color: 'var(--text-primary)',
                      opacity: 0.8
                    }}>
                      {project.category}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 transition-colors"
                      style={{ color: 'var(--text-secondary)' }}
                      aria-label="View GitHub Repository"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 transition-colors"
                      style={{ color: 'var(--text-secondary)' }}
                      aria-label="View Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <a
                      href={project.links.docs || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 transition-colors"
                      style={{ color: 'var(--text-secondary)' }}
                      aria-label="View Documentation"
                    >
                      <FileText className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <p className="mb-4 line-clamp-2" style={{ color: 'var(--text-secondary)' }}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm rounded-full"
                      style={{
                        backgroundColor: 'var(--bg-secondary)',
                        color: 'var(--text-secondary)'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default ProjectsPage