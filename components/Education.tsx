
import React from 'react';
import Section from './Section';
import { PROFILE_DATA } from '../constants';

const Education: React.FC = () => {
  const { education } = PROFILE_DATA;

  return (
    <Section id="education">
      <div className="flex items-center mb-12 animate-fade-in-up">
        <h2 className="text-3xl font-bold text-white flex items-center">
          <span className="text-accent mr-2 font-mono text-2xl">{education.sectionNumber}</span> {education.title}
        </h2>
        <div className="h-px bg-slate-700 flex-grow ml-6 max-w-xs"></div>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {education.items.map((item, index) => (
          <div 
            key={item.id} 
            className="group relative bg-secondary/30 hover:bg-secondary/50 rounded-xl p-6 md:p-8 transition-all duration-300 border border-transparent hover:border-accent/20 animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex flex-col md:flex-row gap-6 items-start">
              {/* School Logo */}
              <div className="shrink-0">
                <div className="w-16 h-16 rounded-xl bg-white p-1 overflow-hidden shadow-lg">
                  {item.logoUrl ? (
                    <img src={item.logoUrl} alt={item.school} className="w-full h-full object-contain" />
                  ) : (
                    <div className="w-full h-full bg-slate-200 flex items-center justify-center text-primary font-bold text-xl">
                      {item.school.charAt(0)}
                    </div>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow w-full">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                      {item.school}
                    </h3>
                    <p className="text-lg text-slate-300 font-medium mt-1">
                      {item.degree}
                    </p>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                     <span className="block font-mono text-sm text-accent">
                      {item.period}
                    </span>
                    <span className="block text-sm text-muted mt-1">
                      {item.location}
                    </span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-slate-700/50">
                   <ul className="space-y-2">
                    {item.description.map((desc, idx) => (
                      <li key={idx} className="flex items-start text-muted text-base leading-relaxed">
                        <span className="text-accent mr-2 mt-1.5 text-xs">▹</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                   </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Education;