'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Heart, ExternalLink, Github, ArrowRight, FileText } from 'lucide-react'

import { projects, categories } from '../assets/data/projects'

export default function ProjectsShowcase() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [likedProjects, setLikedProjects] = useState({})

  useEffect(() => {
    const savedLikes = localStorage.getItem('projectLikes')
    if (savedLikes) {
      setLikedProjects(JSON.parse(savedLikes))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('projectLikes', JSON.stringify(likedProjects))
  }, [likedProjects])

  const toggleLike = (projectId) => {
    setLikedProjects(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }))
  }

  const filteredProjects = projects.filter(project => 
    selectedCategory === "All" || project.category === selectedCategory
  ).slice(0, 6) // Limit to 6 projects for showcase

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Check out some of my recent work
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300
                  ${selectedCategory === category 
                    ? 'bg-emerald-500 text-white' 
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700/50 backdrop-blur-sm hover:border-emerald-500/50 transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                />
                <button
                  onClick={() => toggleLike(project.id)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-colors duration-300"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      likedProjects[project.id] 
                        ? 'fill-emerald-500 text-emerald-500' 
                        : 'text-white'
                    }`}
                  />
                </button>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {project.title}
                    </h3>
                    <span className="inline-block px-3 py-1 text-sm text-emerald-400 bg-emerald-400/10 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-slate-400 hover:text-emerald-400 transition-colors"
                      aria-label="View GitHub Repository"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-slate-400 hover:text-emerald-400 transition-colors"
                      aria-label="View Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <a
                      href={project.links.docs || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-slate-400 hover:text-emerald-400 transition-colors"
                      aria-label="View Documentation"
                    >
                      <FileText className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <p className="text-slate-400 mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm text-slate-300 bg-slate-700/50 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center mt-12">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white rounded-full font-medium hover:bg-emerald-600 transition-colors duration-300"
          >
            See All Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}

