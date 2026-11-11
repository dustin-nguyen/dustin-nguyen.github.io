import React, { useEffect, useState } from 'react';
import { Code, Menu, X } from 'lucide-react';
import { PROFILE_DATA } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 32);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);
  const navItems = PROFILE_DATA.navLinks.filter(({ name }) => ['Experience', 'Projects', 'About'].includes(name));

  return (
    <nav className={`fixed top-0 z-50 w-full border-b border-white/10 transition-colors duration-300 ${scrolled ? 'bg-primary/95 backdrop-blur-md' : 'bg-primary/75 backdrop-blur-sm'}`} aria-label="Main navigation">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#top" className="group flex items-center gap-3 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent" onClick={closeMenu}>
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-primary transition-transform group-hover:-rotate-6">
            <Code size={22} aria-hidden="true" />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-white">Duc Nguyen</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-muted transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
              {link.name === 'Experience' ? 'Work' : link.name}
            </a>
          ))}
          <a href={PROFILE_DATA.hero.resumeUrl} className="text-sm font-medium text-muted transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
            Resume
          </a>
          <a href={`mailto:${PROFILE_DATA.contact.email}`} className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
            Contact
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent md:hidden"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>

      {isOpen && (
        <div id="mobile-navigation" className="border-t border-white/10 bg-primary px-6 py-4 shadow-xl md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col">
            {PROFILE_DATA.navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={closeMenu} className="border-b border-white/10 py-3 text-base font-medium text-white transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent">
                {link.name === 'Experience' ? 'Work' : link.name}
              </a>
            ))}
            <a href={PROFILE_DATA.hero.resumeUrl} onClick={closeMenu} className="border-b border-white/10 py-3 text-base font-medium text-white transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent">Resume</a>
            <a href={`mailto:${PROFILE_DATA.contact.email}`} onClick={closeMenu} className="mt-4 rounded-full bg-accent px-5 py-3 text-center font-semibold text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">Email Duc</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
