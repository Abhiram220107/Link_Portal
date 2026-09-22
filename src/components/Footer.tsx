import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 px-4 flex flex-col items-center text-center mt-auto border-t border-neutral-900/80">
      <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-neutral-300 mb-1 tracking-wide">
        <span>IEEE SMC KARE SBC</span>
        <span className="text-[#FF5722] font-bold">×</span>
        <span>SCRS KARE</span>
      </div>

      <div className="text-[11px] sm:text-xs text-neutral-500 font-medium tracking-wider uppercase">
        IEEE CODE F1 • KARE • 2026
      </div>
    </footer>
  );
};

export default Footer;
