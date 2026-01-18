
import React, { useState, useEffect } from 'react';
import { Users, Activity } from 'lucide-react';

const HitsBadge: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  // Custom URL for your GitHub Pages
  const hitsUrl = `https://hitscounter.dev/api/hit?url=https%3A%2F%2Fdustin-nguyen.github.io%2F&label=Visitors&icon=person-workspace&color=%2305b327&message=&style=for-the-badge&tz=US%2FEastern`;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div 
      className={`fixed bottom-6 right-6 z-[100] transition-all duration-700 ease-out transform ${
        isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="group relative flex items-center bg-secondary/80 backdrop-blur-xl border border-slate-600/30 rounded-full px-4 py-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:border-accent/50 hover:shadow-accent/5 transition-all duration-300">
        <div className="flex items-center space-x-3">
          {/* Icon with pulse effect */}
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-accent/20 rounded-full animate-ping scale-150 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Users className="w-4 h-4 text-accent relative z-10" />
          </div>

          {/* Badge Image or Fallback */}
          <div className="flex items-center min-w-[60px] h-5 overflow-hidden">
            {!imageError ? (
              <img 
                src={hitsUrl} 
                alt="Visitor Count" 
                className={`h-full transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
                style={{ 
                  filter: 'hue-rotate(180deg) saturate(0.8) brightness(1.2) contrast(1.1)',
                  transform: 'scale(1.05)'
                }}
              />
            ) : (
              <div className="flex items-center space-x-1.5 text-[11px] font-mono text-slate-400 font-medium">
                <Activity className="w-3 h-3 text-emerald-400" />
                <span>Live Status</span>
              </div>
            )}
            
            {/* Skeleton loader while image is loading */}
            {!imageLoaded && !imageError && (
              <div className="absolute left-[44px] right-4 h-3 bg-slate-700/50 rounded animate-pulse"></div>
            )}
          </div>
        </div>
        
        {/* Tooltip on hover */}
        <div className="absolute bottom-full right-0 mb-4 px-3 py-1.5 bg-primary/95 border border-slate-700 rounded-lg text-[10px] font-mono text-slate-300 whitespace-nowrap opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all pointer-events-none shadow-2xl backdrop-blur-md">
          <div className="flex items-center space-x-2">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
            <span>Real-time Traffic Tracking</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HitsBadge;
