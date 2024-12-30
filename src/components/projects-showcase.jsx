import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowRight, FileText } from 'lucide-react'

import { projects } from '../assets/data/projects'

export default function ProjectsShowcase() {

  return (
    <section id='Work' className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full"></div>
          
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.slice(0, 3).map((project) => (
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

