import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="w-full pt-8 pb-4 px-4 flex flex-col items-center text-center">
      {/* Top Organization Logos Row - Prominent Club & KARE Logos */}
      <div className="flex items-center justify-center gap-3 sm:gap-5 mb-5 flex-wrap">
        {/* IEEE SMC KARE SBC Logo */}
        <div className="h-14 sm:h-16 px-3.5 py-1.5 rounded-2xl bg-white shadow-lg shadow-black/40 border border-neutral-700/30 flex items-center justify-center hover:scale-105 transition-transform">
          <img
            src="/logos/smc_sbc_logo.jpg"
            alt="IEEE SMC KARE SBC"
            className="h-10 sm:h-12 w-auto max-w-[110px] sm:max-w-[130px] object-contain"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = '/logos/ieee-smc.svg';
            }}
          />
        </div>

        {/* KARE University Logo */}
        <div className="h-14 sm:h-16 px-3.5 py-1.5 rounded-2xl bg-white shadow-lg shadow-black/40 border border-neutral-700/30 flex items-center justify-center hover:scale-105 transition-transform">
          <img
            src="/logos/kare_logo.jpeg"
            alt="KARE University"
            className="h-10 sm:h-12 w-auto max-w-[110px] sm:max-w-[130px] object-contain"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = '/logos/kare.svg';
            }}
          />
        </div>

        {/* SCRS Logo */}
        <div className="h-14 sm:h-16 px-3.5 py-1.5 rounded-2xl bg-white shadow-lg shadow-black/40 border border-neutral-700/30 flex items-center justify-center hover:scale-105 transition-transform">
          <img
            src="/logos/scrs_logo.jpg"
            alt="SCRS KARE"
            className="h-10 sm:h-12 w-auto max-w-[110px] sm:max-w-[130px] object-contain"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = '/logos/scrs.svg';
            }}
          />
        </div>
      </div>

      {/* Official Code F1 Logo Badge - Clean White Card (Matches Competition Platform) */}
      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white p-1.5 shadow-lg shadow-[#FF5722]/20 border border-[#FF5722]/50 mb-3 mx-auto transition-transform hover:scale-105 flex items-center justify-center overflow-hidden">
        <img
          src="/logos/code-f1-logo.png"
          alt="Code F1 Official Logo"
          className="w-full h-full object-contain"
        />
      </div>

      {/* F1 Speed Accent Line */}
      <div className="w-16 h-1 rounded-full speed-stripes mb-3.5 opacity-90"></div>

      {/* Main Title */}
      <div className="inline-flex items-center gap-2 mb-1">
        <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#FF5722] animate-pulse"></span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-racing uppercase">
          IEEE CODE <span className="text-[#FF5722]">F1</span>
        </h1>
      </div>

      {/* Subtitle */}
      <p className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[#FF7043] uppercase mb-1.5 font-mono">
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
