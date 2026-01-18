
import React, { useState, useEffect } from 'react';
import { Users, Activity } from 'lucide-react';

const HitsBadge: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  // Custom URL for your GitHub Pages
  // Using the original color specified in the URL (#05b327)
  const hitsUrl = `https://hitscounter.dev/api/hit?url=https%3A%2F%2Fdustin-nguyen.github.io%2F&label=Visitor&icon=github&color=%2305b327&message=&style=for-the-badge&tz=US%2FEastern`;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div 
      className={`fixed bottom-6 right-6 z-[100] transition-all duration-700 ease-out transform ${
        isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="group relative flex items-center bg-secondary/90 backdrop-blur-xl border border-slate-700 rounded-lg px-4 py-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:border-accent/40 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] transition-all duration-300">
        <div className="flex items-center space-x-3">
          {/* Icon with pulse effect on the container */}
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-accent/20 rounded-full animate-ping scale-150 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Users className="w-4 h-4 text-accent relative z-10" />
          </div>

          {/* Badge Image or Fallback */}
          <div className="flex items-center min-w-[80px] h-6 overflow-hidden">
            {!imageError ? (
              <img 
                src={hitsUrl} 
                alt="Visitor Count" 
                className={`h-full block transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
                // CSS filters removed as requested to preserve original badge colors
              />
            ) : (
              <div className="flex items-center space-x-2 text-[11px] font-mono text-slate-400 font-medium whitespace-nowrap">
                <Activity className="w-3.5 h-3.5 text-emerald-400" />
                <span>Live Traffic</span>
              </div>
            )}
            
            {/* Skeleton loader while image is loading */}
            {!imageLoaded && !imageError && (
              <div className="w-24 h-4 bg-slate-800 rounded animate-pulse"></div>
            )}
          </div>
        </div>
        
        {/* Tooltip on hover */}
        <div className="absolute bottom-full right-0 mb-4 px-3 py-2 bg-primary/95 border border-slate-700 rounded-lg text-[11px] font-mono text-slate-300 whitespace-nowrap opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all pointer-events-none shadow-2xl backdrop-blur-md">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span>Unique Visitor Tracking</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HitsBadge;
