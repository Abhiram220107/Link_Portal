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
      className="link-card"
    >
      {/* Left racing orange accent marker with expanding glow on hover */}
      <div className="accent-bar"></div>

      <div className="flex items-center justify-between gap-3">
        {/* Left Side: Icon and Labels */}
        <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
          <div className="link-icon text-2xl sm:text-3xl shrink-0">
            {icon}
          </div>

          <div className="text-left min-w-0">
            {badge && (
              <div className="text-[10px] font-mono uppercase tracking-wider text-[#FF7043] font-bold mb-0.5 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>{badge}</span>
              </div>
            )}
            <div className="link-title text-base sm:text-lg font-extrabold text-white truncate tracking-tight">
              {label}
            </div>
            {subtitle && (
              <div className="text-xs text-neutral-400 truncate">
                {subtitle}
              </div>
            )}
          </div>
        </div>

        {/* Right Side: Launch Button / Icon with Hover Animation */}
        <div className="action-btn shrink-0 p-2 sm:p-2.5 rounded-xl bg-neutral-900/80 border border-neutral-800 text-neutral-400">
          <ExternalLink className="w-4 h-4" />
        </div>
      </div>
    </a>
  );
};

export default LinkButton;
