import React from 'react';
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { PROFILE_DATA } from '../constants';

const Hero: React.FC = () => {
  const { hero, socials, contact } = PROFILE_DATA;

  return (
    <section className="min-h-[calc(100svh-5rem)] flex items-center pt-28 pb-16 md:pt-20 md:pb-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-[1.15fr_.85fr] items-center gap-12 lg:gap-20">
          <div className="relative z-10">
            <p className="flex items-center gap-3 text-sm text-muted mb-7">
              <span className="w-2 h-2 rounded-full bg-accent" />
              {hero.greeting} <span className="text-white">Duc Nguyen</span>
            </p>

            <h1 className="max-w-3xl text-[clamp(3.4rem,8vw,6.7rem)] leading-[.96] font-bold tracking-[-.065em] text-white">
              I build Android experiences <span className="text-accent">at scale.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted">
              {hero.description}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#projects" className="group inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3.5 font-semibold text-primary transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
                {hero.ctaText}
                <ArrowDownRight size={18} aria-hidden="true" />
              </a>
              <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 font-semibold text-white transition-colors hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
                <Mail size={17} aria-hidden="true" />
                Let’s talk
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted">
              <span>Previously at</span>
              <span className="font-semibold text-white">Walmart Global Tech</span>
              <span className="font-semibold text-white">BMW</span>
              <span className="flex items-center gap-4 border-l border-white/15 pl-5">
                {socials.map((social) => {
                  const Icon = social.platform === 'GitHub' ? Github : Linkedin;
                  return <a key={social.platform} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.platform} className="hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"><Icon size={18} /></a>;
                })}
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[27rem] md:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[48%_48%_1.5rem_1.5rem] border border-white/10 bg-secondary">
              {hero.heroImageUrl && <img src={hero.heroImageUrl} alt="Duc Nguyen" className="h-full w-full object-cover" />}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-primary/75 to-transparent" />
              <div className="absolute bottom-6 left-6 text-sm text-white/80">Engineering for millions of everyday moments</div>
            </div>
            <div className="absolute -left-5 bottom-10 w-44 rounded-2xl border border-white/10 bg-[#20231c] p-5 shadow-2xl sm:-left-9 sm:w-52">
              <div className="text-5xl font-bold tracking-[-.06em] text-accent">40%</div>
              <p className="mt-1 text-sm leading-snug text-white">fewer app crashes</p>
              <p className="mt-3 text-xs text-muted">Walmart Global Tech</p>
              <ArrowUpRight className="absolute right-4 top-4 text-muted" size={17} aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
