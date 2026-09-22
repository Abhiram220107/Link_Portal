import React from 'react';
import { ExternalLink, AlertCircle } from 'lucide-react';

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
      <div className="relative w-full min-h-[60px] p-4 rounded-2xl glass-panel border-neutral-800/80 bg-neutral-900/40 text-neutral-500 cursor-not-allowed select-none transition-all flex items-center justify-between gap-3">
        <div className="flex items-center gap-3.5 min-w-0">
          <span className="text-2xl filter grayscale opacity-60 shrink-0">{icon}</span>
          <div className="text-left min-w-0">
            <div className="text-sm sm:text-base font-bold text-neutral-400 truncate">
              {label}
            </div>
            <div className="text-[11px] text-neutral-500 flex items-center gap-1">
              <AlertCircle className="w-3 h-3 text-amber-500/70 shrink-0" />
              <span>Temporarily unavailable</span>
            </div>
          </div>
        </div>

        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-neutral-800 text-neutral-400 shrink-0">
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
      className="group relative block w-full min-h-[60px] p-4 rounded-2xl glass-panel glass-panel-glow border-neutral-800/90 hover:border-[#FF5722]/60 hover:bg-[#141b2a] transition-all duration-200 active:scale-[0.98] shadow-lg shadow-black/40"
    >
      {/* Left racing orange accent bar */}
      <div className="absolute left-0 top-3 bottom-3 w-1 bg-[#FF5722] rounded-r-full group-hover:w-1.5 transition-all"></div>

      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3.5 min-w-0">
          <span className="text-2xl shrink-0 group-hover:scale-110 transition-transform">
            {icon}
          </span>
          <div className="text-left min-w-0">
            {badge && (
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#FF7043] font-semibold mb-0.5">
                {badge}
              </div>
            )}
            <div className="text-base sm:text-lg font-bold text-white group-hover:text-[#FF7043] transition-colors truncate">
              {label}
            </div>
            {subtitle && (
              <div className="text-xs text-neutral-400 truncate">
                {subtitle}
              </div>
            )}
          </div>
        </div>

        <div className="shrink-0 p-2 rounded-xl bg-neutral-900/60 border border-neutral-800 text-neutral-400 group-hover:text-white group-hover:bg-[#FF5722] group-hover:border-[#FF5722] transition-all">
          <ExternalLink className="w-4 h-4" />
        </div>
      </div>
    </a>
  );
};

export default LinkButton;
