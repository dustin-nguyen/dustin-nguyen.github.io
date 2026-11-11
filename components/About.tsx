import React from 'react';
import Section from './Section';
import { PROFILE_DATA } from '../constants';
import Reveal from './Reveal';

const About: React.FC = () => {
  const { about } = PROFILE_DATA;

  return (
    <Section id="about">
      <Reveal>
        <div className="flex items-center mb-12">
          <h2 className="text-3xl font-bold text-white flex items-center">
            <span className="text-accent mr-2 font-mono text-2xl">{about.sectionNumber}</span> {about.title}
          </h2>
          <div className="h-px bg-slate-700 flex-grow ml-6 max-w-xs"></div>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <Reveal delay={0.15} className="md:col-span-2">
          <div className="text-muted text-lg leading-relaxed space-y-4">
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
        </Reveal>
        
        <Reveal delay={0.3} direction="right">
          <div className="relative mx-auto md:mx-0 w-full max-w-[300px]">
             <div className="relative rounded-lg overflow-hidden bg-secondary">
                <img 
                  src={about.profileImageUrl} 
                  alt="Profile" 
                  className="w-full h-auto object-cover block" 
                />
             </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
};

export default About;
