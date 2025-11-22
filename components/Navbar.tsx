
import React, { useState, useEffect } from 'react';
import { Menu, X, Code } from 'lucide-react';
import { PROFILE_DATA } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2 group">
          <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
            <Code className="text-accent h-6 w-6" />
          </div>
          <span className="font-bold text-xl tracking-tight text-white">Dustin.dev</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {PROFILE_DATA.navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-text hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href={PROFILE_DATA.hero.resumeUrl}
            className="px-4 py-2 text-sm font-medium text-accent border border-accent rounded hover:bg-accent/10 transition-colors"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-text hover:text-accent transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-secondary shadow-xl border-t border-slate-700">
          <div className="flex flex-col p-4 space-y-4">
            {PROFILE_DATA.navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="text-base font-medium text-text hover:text-accent block py-2"
              >
                {link.name}
              </a>
            ))}
            <a
              href={PROFILE_DATA.hero.resumeUrl}
              className="text-base font-medium text-accent block py-2"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
