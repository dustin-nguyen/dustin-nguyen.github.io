
import React from 'react';
import Section from './Section';
import { PROFILE_DATA } from '../constants';

const About: React.FC = () => {
  const { about } = PROFILE_DATA;

  return (
    <Section id="about">
      <div className="flex items-center mb-12 animate-fade-in-up">
        <h2 className="text-3xl font-bold text-white flex items-center">
          <span className="text-accent mr-2 font-mono text-2xl">{about.sectionNumber}</span> {about.title}
        </h2>
        <div className="h-px bg-slate-700 flex-grow ml-6 max-w-xs"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2 text-muted text-lg leading-relaxed space-y-4 animate-fade-in-up delay-200">
          {about.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <ul className="grid grid-cols-2 gap-2 text-sm font-mono mt-4">
             {about.recentTechnologies.map(skill => (
               <li key={skill} className="flex items-center">
                 <span className="text-accent mr-2">▹</span> {skill}
               </li>
             ))}
          </ul>
        </div>
        
        <div className="relative group mx-auto md:mx-0 w-64 h-64 md:w-auto md:h-auto animate-fade-in-up delay-300">
           <div className="absolute inset-0 border-2 border-accent rounded-lg translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
           <div className="relative rounded-lg overflow-hidden bg-accent/20 w-full aspect-square max-w-[300px]">
              <img 
                src={about.profileImageUrl} 
                alt="Profile" 
                className="w-full h-full object-cover mix-blend-overlay group-hover:mix-blend-normal transition-all duration-300 filter grayscale group-hover:grayscale-0" 
              />
              <div className="absolute inset-0 bg-accent/20 group-hover:bg-transparent transition-colors duration-300"></div>
           </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
