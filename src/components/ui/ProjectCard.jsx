import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import Badge from './Badge';

export default function ProjectCard({
  title,
  description,
  image,
  skills = [],
  links = {},
  onClick,
  className = '',
}) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className={`
        group cursor-pointer rounded-xl overflow-hidden
        border transition-all duration-300
        ${className}
      `}
      style={{
        backgroundColor: 'var(--card-bg)',
        borderColor: 'var(--card-border)',
      }}
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-video">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
        >
          {links.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-3 rounded-full transition-colors duration-200"
              style={{ backgroundColor: 'var(--bg-secondary)' }}
              aria-label="View on GitHub"
            >
              <Github className="w-5 h-5" style={{ color: 'var(--text-primary)' }} />
            </a>
          )}
          {links.live && (
            <a
              href={links.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-3 rounded-full transition-colors duration-200"
              style={{ backgroundColor: 'var(--bg-secondary)' }}
              aria-label="View live demo"
            >
              <ExternalLink className="w-5 h-5" style={{ color: 'var(--text-primary)' }} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3
          className="text-lg font-semibold mb-2 line-clamp-1"
          style={{ color: 'var(--text-primary)' }}
        >
          {title}
        </h3>
        <p
          className="text-sm mb-4 line-clamp-2"
          style={{ color: 'var(--text-secondary)' }}
        >
          {description}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {skills.slice(0, 4).map((skill, index) => (
            <Badge key={index} size="sm" variant="default">
              {skill}
            </Badge>
          ))}
          {skills.length > 4 && (
            <Badge size="sm" variant="muted">
              +{skills.length - 4}
            </Badge>
          )}
        </div>
      </div>
    </motion.div>
  );
}
