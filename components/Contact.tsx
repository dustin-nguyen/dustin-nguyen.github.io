
import React from 'react';
import Section from './Section';
import { PROFILE_DATA } from '../constants';

const Contact: React.FC = () => {
  const { contact } = PROFILE_DATA;

  return (
    <Section id="contact" className="text-center py-32">
      <p className="text-accent font-mono mb-4">{contact.sectionNumber} {contact.subtitle}</p>
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{contact.title}</h2>
      <p className="max-w-xl mx-auto text-muted text-lg mb-12 leading-relaxed">
        {contact.description}
      </p>
      
      <a
        href={`mailto:${contact.email}`}
        className="inline-block px-10 py-5 bg-transparent border-2 border-accent text-accent font-semibold rounded hover:bg-accent/10 transition-all hover:scale-105"
      >
        {contact.buttonText}
      </a>

      <footer className="mt-32 text-sm text-slate-500 font-mono">
        <p>{contact.footerText}</p>
      </footer>
    </Section>
  );
};

export default Contact;
