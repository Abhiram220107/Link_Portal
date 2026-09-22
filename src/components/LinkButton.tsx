import React from 'react';
import { ExternalLink, AlertCircle, ChevronRight } from 'lucide-react';

interface LinkButtonProps {
  label: string;
  icon: string;
  url: string;
  subtitle?: string;
  badge?: string;
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  label,
  icon,
  url,
  subtitle,
  badge,
}) => {
  // Check if URL is valid or still placeholder
  const isConfigured = Boolean(
    url &&
    url.trim() !== '' &&
    !url.includes('YOUR_') &&
    !url.includes('<placeholder>') &&
    (url.startsWith('http://') || url.startsWith('https://'))
  );

  if (!isConfigured) {
    // Graceful disabled/unavailable state
    return (
      <div className="relative w-full min-h-[64px] p-4 rounded-2xl glass-panel border-neutral-800/80 bg-neutral-900/40 text-neutral-500 cursor-not-allowed select-none transition-all flex items-center justify-between gap-3">
        <div className="flex items-center gap-3.5 min-w-0">
          <span className="text-2xl filter grayscale opacity-50 shrink-0">{icon}</span>
          <div className="text-left min-w-0">
            <div className="text-sm sm:text-base font-bold text-neutral-400 truncate">
              {label}
            </div>
            <div className="text-[11px] text-neutral-500 flex items-center gap-1 mt-0.5">
              <AlertCircle className="w-3 h-3 text-amber-500/70 shrink-0" />
              <span>Temporarily unavailable</span>
            </div>
          </div>
        </div>

        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-neutral-800/80 text-neutral-400 shrink-0 border border-neutral-700/50">
          Standby
        </span>
      </div>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-full min-h-[64px] p-4 sm:p-5 rounded-2xl glass-panel border-neutral-800/90 hover:border-[#FF5722] hover:bg-[#141b2c] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#FF5722]/25 active:scale-[0.98] active:translate-y-0 cursor-pointer overflow-hidden"
    >
      {/* Dynamic ambient hover background sheen */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF5722]/0 via-[#FF5722]/5 to-[#FF6B00]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

      {/* Left racing orange accent marker with expanding glow on hover */}
      <div className="absolute left-0 top-3 bottom-3 w-1.5 bg-[#FF5722] rounded-r-full group-hover:w-2.5 group-hover:bg-[#FF6B00] group-hover:shadow-[0_0_16px_rgba(255,87,34,0.9)] transition-all duration-300"></div>

      <div className="relative z-10 flex items-center justify-between gap-3">
        {/* Left Side: Icon and Labels */}
        <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
          <div className="text-2xl sm:text-3xl shrink-0 transition-transform duration-300 ease-out group-hover:scale-125 group-hover:-rotate-6">
            {icon}
          </div>

          <div className="text-left min-w-0">
            {badge && (
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#FF7043] font-bold mb-0.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 group-hover:animate-ping"></span>
                <span>{badge}</span>
              </div>
            )}
            <div className="text-base sm:text-lg font-extrabold text-white group-hover:text-[#FF7043] transition-colors duration-200 truncate tracking-tight">
              {label}
            </div>
            {subtitle && (
              <div className="text-xs text-neutral-400 group-hover:text-neutral-300 transition-colors duration-200 truncate">
                {subtitle}
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Launch Button / Icon with Hover Animation */}
        <div className="flex items-center gap-1 shrink-0">
          <div className="p-2 sm:p-2.5 rounded-xl bg-neutral-900/80 border border-neutral-800 text-neutral-400 group-hover:text-white group-hover:bg-[#FF5722] group-hover:border-[#FF5722] group-hover:shadow-lg group-hover:shadow-[#FF5722]/40 group-hover:scale-110 transition-all duration-300 ease-out">
            <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
          <ChevronRight className="w-4 h-4 text-neutral-600 group-hover:text-[#FF5722] group-hover:translate-x-1 transition-all duration-300 opacity-0 group-hover:opacity-100 hidden sm:block" />
        </div>
      </div>
    </a>
  );
};

export default LinkButton;
