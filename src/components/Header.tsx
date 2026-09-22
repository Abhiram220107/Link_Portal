import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="w-full pt-3 sm:pt-6 pb-1 px-2 flex flex-col items-center text-center">
      {/* Top Organization Logos Row */}
      <div className="flex items-center justify-center gap-2.5 sm:gap-4 mb-2.5 sm:mb-3.5 flex-wrap">
        {/* IEEE SMC KARE SBC Logo */}
        <div className="h-11 sm:h-13 px-2.5 py-1 rounded-xl bg-white shadow-md shadow-black/40 border border-neutral-700/30 flex items-center justify-center hover:scale-105 transition-transform">
          <img
            src="/logos/smc_sbc_logo.jpg"
            alt="IEEE SMC KARE SBC"
            className="h-8 sm:h-9 w-auto max-w-[95px] sm:max-w-[115px] object-contain"
          />
        </div>

        {/* KARE University Logo */}
        <div className="h-11 sm:h-13 px-2.5 py-1 rounded-xl bg-white shadow-md shadow-black/40 border border-neutral-700/30 flex items-center justify-center hover:scale-105 transition-transform">
          <img
            src="/logos/kare_logo.jpeg"
            alt="KARE University"
            className="h-8 sm:h-9 w-auto max-w-[95px] sm:max-w-[115px] object-contain"
          />
        </div>

        {/* SCRS Logo */}
        <div className="h-11 sm:h-13 px-2.5 py-1 rounded-xl bg-white shadow-md shadow-black/40 border border-neutral-700/30 flex items-center justify-center hover:scale-105 transition-transform">
          <img
            src="/logos/scrs_logo.jpg"
            alt="SCRS KARE"
            className="h-8 sm:h-9 w-auto max-w-[95px] sm:max-w-[115px] object-contain"
          />
        </div>
      </div>

      {/* Official Code F1 Logo Badge - Proportional Sizing */}
      <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-xl bg-white p-1 shadow-md shadow-[#FF5722]/20 border border-[#FF5722]/50 mb-2 mx-auto transition-transform hover:scale-105 flex items-center justify-center overflow-hidden">
        <img
          src="/logos/code-f1-logo.png"
          alt="Code F1 Official Logo"
          className="w-full h-full object-contain"
        />
      </div>

      {/* F1 Speed Accent Line */}
      <div className="w-14 h-0.5 rounded-full speed-stripes mb-2 opacity-90"></div>

      {/* Main Title */}
      <div className="inline-flex items-center gap-1.5 mb-0.5">
        <span className="inline-block w-2 h-2 rounded-full bg-[#FF5722] animate-pulse"></span>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white font-racing uppercase">
          IEEE CODE <span className="text-[#FF5722]">F1</span>
        </h1>
      </div>

      {/* Subtitle */}
      <p className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-[#FF7043] uppercase mb-0.5 font-mono">
        PARTICIPANT PORTAL
      </p>

      {/* Small Helper Subtitle */}
      <p className="text-[11px] sm:text-xs text-neutral-400 max-w-xs">
        Access all event resources from one place
      </p>
    </header>
  );
};

export default Header;
