import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="w-full pt-8 pb-4 px-4 flex flex-col items-center text-center">
      {/* Logos Row - Easy to replace in /public/logos/ */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6 flex-wrap">
        {/* IEEE SMC Logo */}
        <div className="h-10 px-2 rounded-lg bg-neutral-900/90 border border-neutral-800 flex items-center justify-center hover:border-[#FF5722]/50 transition-colors shadow-sm">
          <img
            src="/logos/ieee-smc.svg"
            alt="IEEE SMC KARE"
            className="h-7 w-auto object-contain"
            onError={(e) => {
              // Fallback text badge if image is missing
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          <span className="text-xs font-bold text-neutral-300 px-2">IEEE SMC</span>
        </div>

        {/* KARE University Logo */}
        <div className="h-10 px-2 rounded-lg bg-neutral-900/90 border border-neutral-800 flex items-center justify-center hover:border-[#FF5722]/50 transition-colors shadow-sm">
          <img
            src="/logos/kare.svg"
            alt="KARE"
            className="h-7 w-auto object-contain"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          <span className="text-xs font-bold text-neutral-300 px-2">KARE</span>
        </div>

        {/* SCRS Logo */}
        <div className="h-10 px-2 rounded-lg bg-neutral-900/90 border border-neutral-800 flex items-center justify-center hover:border-[#FF5722]/50 transition-colors shadow-sm">
          <img
            src="/logos/scrs.svg"
            alt="SCRS KARE"
            className="h-7 w-auto object-contain"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          <span className="text-xs font-bold text-neutral-300 px-2">SCRS</span>
        </div>
      </div>

      {/* F1 Speed Accent Line */}
      <div className="w-20 h-1 rounded-full speed-stripes mb-5 opacity-90"></div>

      {/* Main Title */}
      <div className="inline-flex items-center gap-2 mb-1.5">
        <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF5722] animate-pulse"></span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-racing uppercase">
          IEEE CODE <span className="text-[#FF5722]">F1</span>
        </h1>
      </div>

      {/* Subtitle */}
      <p className="text-sm sm:text-base font-bold tracking-[0.2em] text-[#FF7043] uppercase mb-1.5">
        PARTICIPANT PORTAL
      </p>

      {/* Small Helper Subtitle */}
      <p className="text-xs sm:text-sm text-neutral-400 max-w-sm">
        Access all event resources from one place
      </p>
    </header>
  );
};

export default Header;
