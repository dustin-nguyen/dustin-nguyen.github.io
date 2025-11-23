
import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { PROFILE_DATA } from '../constants';

const Hero: React.FC = () => {
  const { hero, socials } = PROFILE_DATA;

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-12 md:pt-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          
          {/* Left Content */}
          <div className="flex flex-col items-start w-full md:w-3/5 z-10">
            <span className="font-mono text-accent text-lg mb-6 ml-1 animate-fade-in-up">
              {hero.greeting}
            </span>
            
            <h1 className="text-5xl sm:text-7xl font-bold text-white tracking-tight mb-4 animate-fade-in-up delay-100 leading-tight">
              {hero.name}.
            </h1>
            
            <h2 className="text-4xl sm:text-5xl font-bold text-muted tracking-tight mb-8 animate-fade-in-up delay-200 leading-tight">
              {hero.tagline}
            </h2>
            
            <p className="max-w-xl text-lg text-muted mb-12 leading-relaxed animate-fade-in-up delay-300">
              {hero.description}
            </p>

            <div className="flex flex-wrap gap-6 animate-fade-in-up delay-400">
              <a
                href="#experience"
                className="group flex items-center px-8 py-4 bg-transparent text-accent border border-accent rounded font-mono font-semibold hover:bg-accent/10 transition-all"
              >
                {hero.ctaText}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <div className="flex items-center gap-6 px-2">
                {socials.map((social) => {
                  const Icon = social.platform === 'GitHub' ? Github : social.platform === 'LinkedIn' ? Linkedin : Mail;
                  return (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-accent transition-colors transform hover:-translate-y-1"
                      aria-label={social.platform}
                    >
                      <Icon size={24} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Image (Hero Image) */}
          {hero.heroImageUrl && (
            <div className="w-full md:w-2/5 flex justify-center md:justify-end animate-fade-in-up delay-200">
               <div className="relative w-64 h-64 md:w-80 md:h-80 group">
                  <div className="absolute inset-0 bg-accent rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-slate-700/50 shadow-2xl">
                     <img 
                       src={hero.heroImageUrl} 
                       alt={hero.name} 
                       className="w-full h-full object-cover mix-blend-normal hover:scale-110 transition-transform duration-500"
                     />
                  </div>
               </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default Hero;
