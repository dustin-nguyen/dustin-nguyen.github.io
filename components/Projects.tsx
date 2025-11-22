
import React from 'react';
import Section from './Section';
import { PROFILE_DATA } from '../constants';
import { Github, ExternalLink, Folder } from 'lucide-react';

const Projects: React.FC = () => {
  const { projects } = PROFILE_DATA;

  return (
    <Section id="projects">
      <div className="flex items-center mb-12 animate-fade-in-up">
        <h2 className="text-3xl font-bold text-white flex items-center">
          <span className="text-accent mr-2 font-mono text-2xl">{projects.sectionNumber}</span> {projects.title}
        </h2>
        <div className="h-px bg-slate-700 flex-grow ml-6 max-w-xs"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.items.map((project, index) => (
          <div
            key={project.id}
            className={`group rounded-xl overflow-hidden bg-secondary hover:bg-secondary/80 transition-all duration-300 shadow-lg hover:shadow-2xl border border-transparent hover:border-accent/20 flex flex-col h-full animate-fade-in-up`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Image Container */}
            <div className="h-48 overflow-hidden relative bg-slate-800">
              {project.imageUrl ? (
                <>
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500" 
                  />
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
                      className="text-muted hover:text-accent transition-colors"
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
                      className="text-muted hover:text-accent transition-colors"
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
        ))}
      </div>
    </Section>
  );
};

export default Projects;
