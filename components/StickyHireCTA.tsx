import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, ArrowUpRight } from 'lucide-react';
import { PROFILE_DATA } from '../constants';

const StickyHireCTA: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past 80% of the viewport height (past the hero)
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 28 }}
          className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none"
        >
          <div className="mx-auto max-w-6xl px-4 pb-5 sm:px-6">
            <div className="pointer-events-auto flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-secondary/95 px-5 py-3.5 shadow-[0_-8px_30px_rgba(0,0,0,0.4)] backdrop-blur-xl sm:px-7 sm:py-4">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                </span>
                <p className="text-sm font-medium text-white sm:text-base">
                  <span className="hidden sm:inline">Open to new opportunities — </span>
                  <span className="sm:hidden">Available — </span>
                  <span className="text-muted">let's talk.</span>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${PROFILE_DATA.contact.email}`}
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  <Mail size={15} aria-hidden="true" />
                  <span className="hidden sm:inline">Reach out</span>
                  <span className="sm:hidden">Email</span>
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
                <button
                  onClick={() => setDismissed(true)}
                  className="rounded-full p-2 text-muted transition-colors hover:text-white"
                  aria-label="Dismiss"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 4l8 8M12 4l-8 8" /></svg>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyHireCTA;
