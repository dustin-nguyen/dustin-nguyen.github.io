import React, { useState } from 'react';
import Section from './Section';
import { PROFILE_DATA } from '../constants';

const JobCard = ({ job, index }: { job: typeof PROFILE_DATA.experience.jobs[0], index: number }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div 
      className="relative pl-8 md:pl-16 group animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Timeline Dot */}
      <div className="absolute -left-[9px] top-0 md:top-8 h-4 w-4 rounded-full bg-slate-800 group-hover:bg-accent transition-colors border-2 border-primary shadow-[0_0_0_4px_rgba(15,23,42,1)] z-10"></div>
      
      <div className="flex flex-col md:flex-row gap-6 md:gap-10">
        {/* Logo Container - consistently sized and centered */}
        <div className="shrink-0 mt-2">
          <div className={`relative w-24 h-24 md:w-32 md:h-32 rounded-2xl p-4 flex items-center justify-center overflow-hidden shadow-xl hover:shadow-accent/20 transition-all duration-300 border-2 border-slate-700/50 group-hover:border-accent group-hover:-translate-y-1 z-0 ${imgError || !job.logoUrl ? 'bg-slate-800' : 'bg-white'}`}>
            
            {/* Gloss Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            {!imgError && job.logoUrl ? (
              <img 
                src={job.logoUrl} 
                alt={`${job.company} logo`} 
                className="w-full h-full object-contain z-10 relative" 
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="flex items-center justify-center w-full h-full z-10">
                <span className="text-4xl md:text-5xl text-accent font-bold font-mono">
                  {job.company.charAt(0)}
                </span>
              </div>
            )}
          </div>
        </div>

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
  );
};

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
          <JobCard key={job.id} job={job} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default Experience;
