import React from 'react';
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { PROFILE_DATA } from '../constants';

const Hero: React.FC = () => {
  const { hero, socials, contact } = PROFILE_DATA;

  return (
    <section className="relative flex min-h-[calc(100svh-5rem)] items-center pb-14 pt-28 md:pb-20 md:pt-32">
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <div className="grid items-center gap-14 md:grid-cols-[1.08fr_.92fr] lg:gap-20">
          <div className="relative z-10">
            <p className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[.035] px-4 py-2 text-sm text-muted">
              <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
              Android engineer at <span className="font-semibold text-white">Walmart Global Tech</span>
            </p>

            <h1 className="max-w-3xl font-display text-[clamp(3.3rem,7vw,6.25rem)] font-semibold leading-[.96] tracking-[-.065em] text-white">
              Android apps for <span className="text-accent">real-world scale.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
              I’m Duc Nguyen. I make high-traffic Android apps faster, more reliable, and easier to ship.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href={`mailto:${contact.email}`} className="group inline-flex min-h-12 items-center gap-3 rounded-full bg-accent px-6 py-3.5 font-semibold text-primary transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
                <Mail size={17} aria-hidden="true" />
                Email Duc
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
              <a href="#experience" className="inline-flex min-h-12 items-center gap-3 rounded-full border border-white/20 px-6 py-3.5 font-semibold text-white transition-colors hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
                See the results
                <ArrowDownRight size={18} aria-hidden="true" />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-muted">
              <span>Previously at</span>
              <span className="font-semibold text-white">BMW</span>
              <span className="h-1 w-1 rounded-full bg-accent/70" aria-hidden="true" />
              <span className="font-semibold text-white">Hatchando</span>
              <span className="flex items-center gap-4 border-l border-white/15 pl-5">
                {socials.map((social) => {
                  const Icon = social.platform === 'GitHub' ? Github : Linkedin;
                  return <a key={social.platform} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.platform} className="rounded-sm hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"><Icon size={18} aria-hidden="true" /></a>;
                })}
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[27rem] md:max-w-none">
            <div className="absolute -right-3 top-8 h-[82%] w-[72%] border border-accent/60 sm:-right-5 md:-right-6" aria-hidden="true" />
            <div className="relative aspect-[4/5] overflow-hidden border border-white/10 bg-[#e8e8df] shadow-2xl shadow-black/30">
              {hero.heroImageUrl && <img src={hero.heroImageUrl} alt="Duc Nguyen" className="h-full w-full object-cover object-top" />}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/65 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-white sm:bottom-7 sm:left-7 sm:right-7">
                <div>
                  <p className="font-display text-2xl font-semibold tracking-tight">Duc Nguyen</p>
                  <p className="mt-1 text-sm text-white/80">Android · Kotlin · Performance</p>
                </div>
                <a href={hero.resumeUrl} aria-label="Download Duc Nguyen’s resume" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/60 bg-black/20 transition-colors hover:bg-accent hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
                  <ArrowUpRight size={20} aria-hidden="true" />
                </a>
              </div>
            </div>
            <p className="relative mt-5 border-l-2 border-accent pl-4 text-sm leading-relaxed text-muted md:ml-8">
              Engineering for millions of everyday moments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
