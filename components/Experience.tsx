
import React from 'react';
import Section from './Section';
import { PROFILE_DATA } from '../constants';

const Experience: React.FC = () => {
  const { experience } = PROFILE_DATA;

  return (
    <Section id="experience">
      <div className="flex items-center mb-16 animate-fade-in-up">
        <h2 className="text-3xl font-bold text-white flex items-center">
          <span className="text-accent mr-2 font-mono text-2xl">{experience.sectionNumber}</span> {experience.title}
        </h2>
        <div className="h-px bg-slate-700 flex-grow ml-6 max-w-xs"></div>
      </div>

      <div className="relative border-l-2 border-slate-800 ml-6 md:ml-24 space-y-20">
        {experience.jobs.map((job, index) => (
          <div 
            key={job.id} 
            className="relative pl-8 md:pl-16 group animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[9px] top-0 md:top-8 h-4 w-4 rounded-full bg-slate-800 group-hover:bg-accent transition-colors border-2 border-primary shadow-[0_0_0_4px_rgba(15,23,42,1)] z-10"></div>
            
            <div className="flex flex-col md:flex-row gap-6 md:gap-10">
              {/* Significant Image Container - Now much larger and visually prevalent */}
              {job.logoUrl && (
                <div className="shrink-0 mt-2">
                  <div className="relative w-24 h-24 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-2xl bg-white p-4 flex items-center justify-center overflow-hidden shadow-2xl hover:shadow-accent/30 transition-all duration-500 border-4 border-slate-700/50 group-hover:border-accent group-hover:-translate-y-2 z-0">
                    {/* Gloss Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    
                    <img 
                      src={job.logoUrl} 
                      alt={`${job.company} logo`} 
                      className="w-full h-full object-contain z-10 relative" 
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.parentElement!.classList.add('bg-slate-800');
                        target.parentElement!.innerHTML = `<div class="text-center"><span class="text-2xl md:text-4xl text-accent font-bold block mb-1">${job.company.substring(0,1)}</span><span class="text-xs text-slate-400 font-mono">IMG MISSING</span></div>`;
                      }}
                    />
                  </div>
                </div>
              )}

              <div className="flex-grow pt-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                      {job.role}
                    </h3>
                    <div className="text-accent font-mono text-lg md:text-xl mt-2">
                      @ {job.company}
                    </div>
                  </div>
                  <div className="font-mono text-sm font-semibold text-slate-300 bg-secondary px-4 py-2 rounded-full border border-slate-700 w-fit mt-3 md:mt-0 shadow-sm">
                    {job.period}
                  </div>
                </div>

                <div className="bg-secondary/30 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-slate-800 hover:border-slate-600/50 transition-colors shadow-md">
                  <ul className="space-y-4 mb-8">
                    {job.description.map((desc, idx) => (
                      <li key={idx} className="flex items-start text-slate-300 text-base md:text-lg leading-relaxed">
                        <span className="text-accent mr-3 mt-2 text-xs">▹</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                  {job.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-3 border-t border-slate-700/50 pt-6">
                      {job.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-sm font-medium text-accent bg-accent/10 rounded-md border border-accent/20 hover:bg-accent/20 transition-colors cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
