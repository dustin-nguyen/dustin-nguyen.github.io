import React from 'react';
import { motion } from 'motion/react';
import { ArrowDownRight, Download, Github, Linkedin, MoveUpRight } from 'lucide-react';
import { PROFILE_DATA } from '../constants';

const releaseSignals = [
  { value: '40%', label: 'fewer app crashes' },
  { value: '20%', label: 'less development time' },
  { value: '30%', label: 'fewer post-release bugs' },
];

const Hero: React.FC = () => {
  const { hero, socials, contact } = PROFILE_DATA;

  return (
    <section className="relative flex min-h-[calc(100svh-5rem)] items-center overflow-hidden pb-14 pt-28 md:pb-20 md:pt-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="hero-gradient-orb absolute -left-[20%] -top-[30%] h-[70vh] w-[70vh] rounded-full bg-accent/[0.04] blur-[120px]" />
        <div className="hero-gradient-orb-delayed absolute -right-[10%] top-[20%] h-[50vh] w-[50vh] rounded-full bg-accent/[0.03] blur-[100px]" />
        <div className="hero-gradient-orb absolute bottom-0 left-[30%] h-[40vh] w-[60vh] rounded-full bg-accent/[0.02] blur-[130px]" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-[1.12fr_.88fr] lg:gap-16">
          <div className="relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="max-w-3xl text-balance font-display text-[clamp(3.4rem,7vw,6rem)] font-semibold leading-[.94] tracking-[-.04em] text-white"
            >
              Make the next Android release safer.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-7 max-w-lg text-lg leading-relaxed text-muted md:text-xl"
            >
              I help product teams ship Android that stays fast, stable, and maintainable after launch. I build at Walmart Global Tech.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a href={`mailto:${contact.email}`} className="group inline-flex min-h-12 items-center gap-3 rounded-full bg-accent px-6 py-3.5 font-semibold text-primary transition-all hover:bg-white hover:shadow-[0_10px_30px_rgba(196,243,107,0.2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
                Start a conversation
                <MoveUpRight size={18} aria-hidden="true" />
              </a>
              <a href="#impact" className="inline-flex min-h-12 items-center gap-3 rounded-full border border-white/20 px-6 py-3.5 font-semibold text-white transition-colors hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
                See the production results
                <ArrowDownRight size={18} aria-hidden="true" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-muted"
            >
              <span className="font-semibold text-white">Duc Nguyen</span>
              <span>Android engineer</span>
              <span className="h-1 w-1 rounded-full bg-accent/70" aria-hidden="true" />
              <span>Walmart · BMW</span>
              <span className="flex items-center gap-4 border-l border-white/15 pl-5">
                {socials.map((social) => {
                  const Icon = social.platform === 'GitHub' ? Github : Linkedin;
                  return <a key={social.platform} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.platform} className="rounded-sm hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"><Icon size={18} aria-hidden="true" /></a>;
                })}
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[25rem] md:max-w-none"
          >
            <div className="absolute -right-3 top-7 h-[82%] w-[72%] border border-accent/60 sm:-right-5 md:-right-6" aria-hidden="true" />
            <div className="relative aspect-[4/4.5] overflow-hidden border border-white/10 bg-[#e8e8df] shadow-2xl shadow-black/30">
              {hero.heroImageUrl && <img src={hero.heroImageUrl} alt="Duc Nguyen" className="h-full w-full object-cover object-top" />}
              <div className="absolute inset-x-0 bottom-0 border-t border-white/15 bg-primary/95 px-5 py-4 backdrop-blur-sm">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="font-display text-lg font-semibold tracking-[-.02em] text-white">Release health</h2>
                  <span className="text-xs font-medium text-accent">Walmart Global Tech</span>
                </div>
                <dl className="mt-4 grid grid-cols-3 divide-x divide-white/15">
                  {releaseSignals.map((signal, index) => (
                    <div key={signal.label} className={index === 0 ? 'pr-3' : index === releaseSignals.length - 1 ? 'pl-3' : 'px-3'}>
                      <dt className="sr-only">{signal.label}</dt>
                      <dd className="font-display text-2xl font-semibold leading-none tracking-[-.03em] text-accent sm:text-3xl">{signal.value}</dd>
                      <p className="mt-2 text-xs leading-snug text-muted">{signal.label}</p>
                    </div>
                  ))}
                </dl>
                <a
                  href="#experience"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white underline decoration-accent/70 underline-offset-4 transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  Read the engineering work
                  <ArrowDownRight size={16} aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="relative mt-5 flex items-start justify-between gap-4 border-t border-white/15 pt-4 text-sm">
              <div>
                <p className="font-semibold text-white">Available for the hard parts</p>
                <p className="mt-1 text-muted">Performance · Stability · Architecture</p>
              </div>
              <a href={hero.resumeUrl} aria-label="Download Duc's resume" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent text-primary transition-all hover:bg-white hover:shadow-[0_10px_20px_rgba(196,243,107,0.3)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
                <Download size={18} aria-hidden="true" />
              </a>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
