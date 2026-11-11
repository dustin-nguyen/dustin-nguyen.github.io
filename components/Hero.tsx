import React from 'react';
import { motion } from 'motion/react';
import { ArrowDownRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { PROFILE_DATA } from '../constants';

const Hero: React.FC = () => {
  const { hero, socials, contact } = PROFILE_DATA;

  return (
    <section className="relative flex min-h-[calc(100svh-5rem)] items-center overflow-hidden pb-14 pt-28 md:pb-20 md:pt-32">
      {/* Animated gradient mesh background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="hero-gradient-orb absolute -left-[20%] -top-[30%] h-[70vh] w-[70vh] rounded-full bg-accent/[0.04] blur-[120px]" />
        <div className="hero-gradient-orb-delayed absolute -right-[10%] top-[20%] h-[50vh] w-[50vh] rounded-full bg-accent/[0.03] blur-[100px]" />
        <div className="hero-gradient-orb absolute bottom-0 left-[30%] h-[40vh] w-[60vh] rounded-full bg-accent/[0.02] blur-[130px]" />
        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
        }} />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-[1.12fr_.88fr] lg:gap-16">
          <div className="relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 flex items-center gap-3 text-sm text-muted"
            >
              <span className="h-px w-8 bg-accent" aria-hidden="true" />
              Duc Nguyen <span className="text-white/30">/</span> Android engineer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="max-w-3xl font-display text-[clamp(3.4rem,7.3vw,6.5rem)] font-semibold leading-[.92] tracking-[-.055em] text-white"
            >
              Build for the moment <span className="text-accent">after launch.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-7 max-w-lg text-lg leading-relaxed text-muted md:text-xl"
            >
              I make high-traffic Android apps faster, more reliable, and easier to ship. Currently building at Walmart Global Tech.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a href="#experience" className="group inline-flex min-h-12 items-center gap-3 rounded-full bg-accent px-6 py-3.5 font-semibold text-primary transition-all hover:bg-white hover:shadow-[0_0_30px_rgba(196,243,107,0.2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
                Explore the work
                <ArrowDownRight size={18} aria-hidden="true" />
              </a>
              <a href={hero.resumeUrl} className="inline-flex min-h-12 items-center gap-3 rounded-full border border-white/20 px-6 py-3.5 font-semibold text-white transition-colors hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
                <Download size={17} aria-hidden="true" />
                Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-muted"
            >
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
            </div>
            <div className="relative mt-5 flex items-start justify-between gap-4 border-t border-white/15 pt-4 text-sm">
              <div>
                <p className="font-semibold text-white">Android at production scale</p>
                <p className="mt-1 text-muted">Kotlin · Performance · Reliability</p>
              </div>
              <a href={`mailto:${contact.email}`} aria-label="Email Duc" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent text-primary transition-all hover:bg-white hover:shadow-[0_0_20px_rgba(196,243,107,0.3)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
                <Mail size={19} aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
