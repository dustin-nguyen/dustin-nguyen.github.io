import React from 'react';
import { ArrowDownRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { PROFILE_DATA } from '../constants';

const Hero: React.FC = () => {
  const { hero, socials, contact } = PROFILE_DATA;

  return (
    <section className="relative flex min-h-[calc(100svh-5rem)] items-center overflow-hidden pb-14 pt-28 md:pb-20 md:pt-32">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-[1.12fr_.88fr] lg:gap-16">
          <div className="relative z-10">
            <p className="mb-6 flex items-center gap-3 text-sm text-muted">
              <span className="h-px w-8 bg-accent" aria-hidden="true" />
              Duc Nguyen <span className="text-white/30">/</span> Android engineer
            </p>

            <h1 className="max-w-3xl font-display text-[clamp(3.4rem,7.3vw,6.5rem)] font-semibold leading-[.92] tracking-[-.055em] text-white">
              Build for the moment <span className="text-accent">after launch.</span>
            </h1>
            <p className="mt-7 max-w-lg text-lg leading-relaxed text-muted md:text-xl">
              I make high-traffic Android apps faster, more reliable, and easier to ship. Currently building at Walmart Global Tech.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#experience" className="group inline-flex min-h-12 items-center gap-3 rounded-full bg-accent px-6 py-3.5 font-semibold text-primary transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
                Explore the work
                <ArrowDownRight size={18} aria-hidden="true" />
              </a>
              <a href={hero.resumeUrl} className="inline-flex min-h-12 items-center gap-3 rounded-full border border-white/20 px-6 py-3.5 font-semibold text-white transition-colors hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
                <Download size={17} aria-hidden="true" />
                Resume
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-muted">
              <span>Experience at</span>
              <span className="font-semibold text-white">Walmart</span>
              <span className="h-1 w-1 rounded-full bg-accent/70" aria-hidden="true" />
              <span className="font-semibold text-white">BMW</span>
              <span className="flex items-center gap-4 border-l border-white/15 pl-5">
                {socials.map((social) => {
                  const Icon = social.platform === 'GitHub' ? Github : Linkedin;
                  return <a key={social.platform} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.platform} className="rounded-sm hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"><Icon size={18} aria-hidden="true" /></a>;
                })}
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[25rem] md:max-w-none">
            <div className="absolute -right-3 top-7 h-[82%] w-[72%] border border-accent/60 sm:-right-5 md:-right-6" aria-hidden="true" />
            <div className="relative aspect-[4/4.5] overflow-hidden border border-white/10 bg-[#e8e8df] shadow-2xl shadow-black/30">
              {hero.heroImageUrl && <img src={hero.heroImageUrl} alt="Duc Nguyen" className="h-full w-full object-cover object-top" />}
            </div>
            <div className="relative mt-5 flex items-start justify-between gap-4 border-t border-white/15 pt-4 text-sm">
              <div>
                <p className="font-semibold text-white">Android at production scale</p>
                <p className="mt-1 text-muted">Kotlin · Performance · Reliability</p>
              </div>
              <a href={`mailto:${contact.email}`} aria-label="Email Duc" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent text-primary transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
                <Mail size={19} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
