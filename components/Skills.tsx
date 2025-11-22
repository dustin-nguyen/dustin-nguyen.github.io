
import React from 'react';
import Section from './Section';
import { PROFILE_DATA } from '../constants';

const Skills: React.FC = () => {
  const { skills } = PROFILE_DATA;

  return (
    <Section id="skills" className="bg-secondary/20">
      <div className="flex items-center mb-12 animate-fade-in-up">
        <h2 className="text-3xl font-bold text-white flex items-center">
          <span className="text-accent mr-2 font-mono text-2xl">{skills.sectionNumber}</span> {skills.title}
        </h2>
        <div className="h-px bg-slate-700 flex-grow ml-6 max-w-xs"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.categories.map((category, index) => (
          <div 
            key={category.name} 
            className="bg-secondary/50 p-6 rounded-lg hover:bg-secondary transition-colors duration-300 border border-transparent hover:border-slate-700 animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <h3 className="text-lg font-bold text-accent mb-4 inline-block">
              {category.name}
            </h3>
            <ul className="space-y-3">
              {category.skills.map((skill) => (
                <li key={skill} className="flex items-center text-muted group-hover:text-white transition-colors">
                  <span className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3 group-hover:bg-accent transition-colors"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
