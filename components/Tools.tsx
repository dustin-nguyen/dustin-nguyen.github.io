
import React from 'react';
import Section from './Section';
import { PROFILE_DATA } from '../constants';
import { Github, ExternalLink, Box } from 'lucide-react';

const Tools: React.FC = () => {
  const { tools } = PROFILE_DATA;

  const handleCardClick = (url?: string) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Section id="tools">
      <div className="flex items-center mb-12 animate-fade-in-up">
        <h2 className="text-3xl font-bold text-white flex items-center">
          <span className="text-accent mr-2 font-mono text-2xl">{tools.sectionNumber}</span> {tools.title}
        </h2>
        <div className="h-px bg-slate-700 flex-grow ml-6 max-w-xs"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tools.items.map((tool, index) => {
          const targetUrl = tool.demoUrl || tool.repoUrl;
          
          return (
            <div
              key={tool.id}
              onClick={() => handleCardClick(targetUrl)}
              className={`group rounded-xl overflow-hidden bg-secondary/50 hover:bg-secondary/80 transition-all duration-300 shadow-lg hover:shadow-2xl border border-transparent hover:border-accent/20 flex flex-col h-full animate-fade-in-up ${targetUrl ? 'cursor-pointer' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="h-48 overflow-hidden relative bg-slate-800">
                {tool.imageUrl ? (
                  <>
                    <img 
                      src={tool.imageUrl} 
                      alt={tool.title} 
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-primary/30 group-hover:bg-transparent transition-colors duration-300" />
                  </>
                ) : (
                   <div className="w-full h-full flex items-center justify-center bg-secondary">
                      <Box className="w-12 h-12 text-accent opacity-50" />
                   </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                    {tool.title}
                  </h3>
                  <div className="flex gap-3">
                    {tool.repoUrl && (
                      <a
                        href={tool.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-muted hover:text-accent transition-colors relative z-10 p-1"
                        aria-label="GitHub Repo"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {tool.demoUrl && (
                      <a
                        href={tool.demoUrl}
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
                  {tool.description}
                </p>

                <ul className="flex flex-wrap gap-2 mt-auto">
                  {tool.technologies.map((tech) => (
                    <li key={tech} className="text-xs font-mono text-accent/80 bg-accent/5 px-2 py-1 rounded">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Tools;
