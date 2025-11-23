
import React, { useState } from 'react';
import Section from './Section';
import { PROFILE_DATA } from '../constants';
import { X } from 'lucide-react';

const Contact: React.FC = () => {
  const { contact } = PROFILE_DATA;
  const [showPopup, setShowPopup] = useState(false);

  return (
    <Section id="contact" className="text-center py-32 relative">
      <p className="text-accent font-mono mb-4">{contact.sectionNumber} {contact.subtitle}</p>
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{contact.title}</h2>
      <p className="max-w-xl mx-auto text-muted text-lg mb-12 leading-relaxed">
        {contact.description}
      </p>
      
      <button
        onClick={() => setShowPopup(true)}
        className="inline-block px-10 py-5 bg-transparent border-2 border-accent text-accent font-semibold rounded hover:bg-accent/10 transition-all hover:scale-105 cursor-pointer"
      >
        {contact.buttonText}
      </button>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-primary/80 backdrop-blur-sm"
            onClick={() => setShowPopup(false)}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-secondary border border-slate-700 rounded-xl p-8 max-w-lg w-full shadow-2xl animate-fade-in-up">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-muted hover:text-accent transition-colors"
              aria-label="Close popup"
            >
              <X size={24} />
            </button>
            
            <div className="text-center pt-2">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                {contact.popupMessage}
              </p>
              
              <p className="text-lg text-slate-300 leading-relaxed">
                Want to say hello or collaborate? Email me at <a href={`mailto:${contact.email}`} className="text-accent font-mono hover:underline">{contact.email}</a> to get in touch.
              </p>
              
              <button
                onClick={() => setShowPopup(false)}
                className="mt-8 px-6 py-2 bg-accent text-primary font-bold rounded hover:bg-accent/90 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <footer className="mt-32 text-sm text-slate-500 font-mono">
        <p>{contact.footerText}</p>
      </footer>
    </Section>
  );
};

export default Contact;
