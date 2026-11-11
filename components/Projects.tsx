
import React from 'react';
import Section from './Section';
import { PROFILE_DATA } from '../constants';
import { Github, ExternalLink, Folder } from 'lucide-react';
import Reveal from './Reveal';

const Projects: React.FC = () => {
  const { projects } = PROFILE_DATA;

  const handleCardClick = (url?: string) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Section id="projects">
      <Reveal>
        <div className="flex items-center mb-12">
          <h2 className="text-3xl font-bold text-white flex items-center">
            <span className="text-accent mr-2 font-mono text-2xl">{projects.sectionNumber}</span> {projects.title}
          </h2>
          <div className="h-px bg-slate-700 flex-grow ml-6 max-w-xs"></div>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.items.map((project, index) => {
          const targetUrl = project.demoUrl || project.repoUrl;
          
          return (
            <Reveal key={project.id} delay={index * 0.08} direction={index % 2 === 0 ? 'up' : 'up'}>
              <div
                onClick={() => handleCardClick(targetUrl)}
                className={`group rounded-xl overflow-hidden bg-secondary hover:bg-secondary/80 transition-all duration-300 shadow-lg hover:shadow-2xl border border-transparent hover:border-accent/20 flex flex-col h-full ${targetUrl ? 'cursor-pointer' : ''}`}
              >
                {/* Image Container */}
                <div className="h-48 overflow-hidden relative bg-slate-800">
                  {project.imageUrl ? (
                    <>
                      <img 
                        src={project.imageUrl} 
                        alt={project.title} 
                        className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          // Hide image and show fallback icon container on error
                          (e.target as HTMLElement).style.display = 'none';
                          const fallback = (e.target as HTMLElement).parentElement?.querySelector('.img-fallback');
                          if (fallback) (fallback as HTMLElement).style.display = 'flex';
                        }} 
                      />
                      <div className="img-fallback hidden w-full h-full items-center justify-center bg-secondary">
                        <Folder className="w-12 h-12 text-accent opacity-50" />
                      </div>
                      <div className="absolute inset-0 bg-primary/30 group-hover:bg-transparent transition-colors duration-300" />
                    </>
                  ) : (
                     <div className="w-full h-full flex items-center justify-center bg-secondary">
                        <Folder className="w-12 h-12 text-accent opacity-50" />
                     </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-3">
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-muted hover:text-accent transition-colors relative z-10 p-1"
                          aria-label="GitHub Repo"
                        >
                          <Github size={18} />
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-muted hover:text-accent transition-colors relative z-10 p-1"
                          aria-label="Live Demo"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-muted text-sm mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  <ul className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech) => (
                      <li key={tech} className="text-xs font-mono text-accent/80 bg-accent/5 px-2 py-1 rounded">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
};

export default Projects;
