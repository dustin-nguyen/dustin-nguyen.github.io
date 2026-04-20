import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [canScroll, setCanScroll] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollWidth, clientWidth } = scrollRef.current;
      setCanScroll(scrollWidth > clientWidth);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [images]);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  const nextLightboxImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % images.length);
  };

  const prevLightboxImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Scroll current image into view if it's hidden during navigation
  useEffect(() => {
    if (scrollRef.current) {
      const child = scrollRef.current.children[currentIndex] as HTMLElement;
      if (child) {
        scrollRef.current.scrollTo({
          left: child.offsetLeft - scrollRef.current.offsetWidth / 2 + child.offsetWidth / 2,
          behavior: 'smooth'
        });
      }
    }
  }, [currentIndex]);

  if (!images || images.length === 0) return null;

  return (
    <div className="mt-8 space-y-4 w-full max-w-full overflow-hidden">
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-sm font-mono text-slate-400 uppercase tracking-widest">UI Screenshots</h4>
      </div>

      <div className="relative group/carousel w-full">
        {/* Navigation Arrows - Overlayed and Inset */}
        {canScroll && (
          <>
            <div className={`absolute top-1/2 left-2 -translate-y-1/2 z-20 transition-all duration-300 ${currentIndex === 0 ? 'opacity-30 pointer-events-none' : 'opacity-100'}`}>
              <button 
                onClick={prevImage}
                className="p-3 rounded-full border border-slate-700 bg-slate-900/90 hover:bg-slate-800 hover:text-accent transition-all text-slate-200 shadow-2xl backdrop-blur-sm"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
            </div>
            
            <div className={`absolute top-1/2 right-2 -translate-y-1/2 z-20 transition-all duration-300 ${currentIndex === images.length - 1 ? 'opacity-30 pointer-events-none' : 'opacity-100'}`}>
              <button 
                onClick={nextImage}
                className="p-3 rounded-full border border-slate-700 bg-slate-900/90 hover:bg-slate-800 hover:text-accent transition-all text-slate-200 shadow-2xl backdrop-blur-sm"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </>
        )}

        {/* Main Carousel View */}
        <div 
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-4 select-none w-full relative px-10 md:px-16"
        >
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              layoutId={`img-${idx}`}
              className={`relative flex-none w-48 md:w-56 aspect-[9/16] rounded-xl overflow-hidden cursor-pointer border-2 transition-all duration-300 snap-center group/item ${
                currentIndex === idx ? 'border-accent shadow-lg shadow-accent/20' : 'border-slate-800'
              }`}
              onClick={() => {
                setCurrentIndex(idx);
                openLightbox(idx);
              }}
            >
              <img 
                src={img} 
                alt={`Screenshot ${idx + 1}`} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/item:opacity-100 transition-opacity flex items-center justify-center">
                <Maximize2 className="text-white" size={24} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pagination Indicators */}
      {images.length > 1 && (
        <div className="flex justify-center gap-2 mt-2 py-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentIndex === idx ? 'w-8 bg-accent' : 'w-2 bg-slate-700 hover:bg-slate-500'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-10"
            onClick={() => setIsLightboxOpen(false)}
          >
            <button 
              className="absolute top-6 right-6 p-2 text-white/70 hover:text-white z-10 transition-colors"
              onClick={() => setIsLightboxOpen(false)}
            >
              <X size={32} />
            </button>

            <button 
              className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white z-10 transition-all"
              onClick={prevLightboxImage}
            >
              <ChevronLeft size={36} />
            </button>

            <button 
              className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white z-10 transition-all"
              onClick={nextLightboxImage}
            >
              <ChevronRight size={36} />
            </button>

            <motion.div 
              className="relative max-w-full max-h-full flex items-center justify-center p-4"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.img 
                  key={lightboxIndex}
                  src={images[lightboxIndex]} 
                  alt={`Screenshot Full ${lightboxIndex + 1}`} 
                  className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl border border-white/10"
                  referrerPolicy="no-referrer"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                />
              </AnimatePresence>
              
              <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 text-white/50 font-mono text-sm">
                {lightboxIndex + 1} / {images.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageCarousel;
