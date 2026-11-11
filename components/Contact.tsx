import React from 'react';
import Section from './Section';
import { PROFILE_DATA } from '../constants';
import { ArrowUpRight, Mail } from 'lucide-react';
import Reveal from './Reveal';

const Contact: React.FC = () => {
  const { contact } = PROFILE_DATA;

  return (
    <Section id="contact" className="relative pb-10 pt-24">
      <Reveal>
        <div className="relative overflow-hidden border border-white/10 bg-secondary px-7 py-10 sm:px-12 sm:py-14 md:px-16 md:py-20">
          <div className="absolute right-0 top-0 h-full w-2 bg-accent" aria-hidden="true" />
          <div className="relative max-w-3xl">
            <p className="mb-4 text-sm font-medium text-accent">{contact.subtitle}</p>
            <h2 className="font-display text-4xl font-semibold tracking-[-.05em] text-white sm:text-5xl md:text-6xl">
              Let's make Android more dependable.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
              I'm open to conversations about Android engineering, app performance, and platform reliability.
            </p>
            <a href={`mailto:${contact.email}`} className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-accent px-6 py-3.5 font-semibold text-primary transition-all hover:bg-white hover:shadow-[0_0_30px_rgba(196,243,107,0.2)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
              <Mail size={17} aria-hidden="true" />
              Email Duc
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <p className="mt-4 text-sm text-muted">{contact.email}</p>
          </div>
        </div>
      </Reveal>

      <footer className="mt-8 flex flex-col gap-2 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>{contact.footerText}</p>
        <a href="#top" className="w-fit rounded-sm transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent">Back to top</a>
      </footer>
    </Section>
  );
};

export default Contact;
