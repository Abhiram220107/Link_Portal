import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full py-2.5 sm:py-3 px-4 flex flex-col items-center text-center mt-auto border-t border-neutral-900/80 shrink-0">
      <div className="flex items-center justify-center gap-1.5 text-[11px] sm:text-xs font-semibold text-neutral-300 tracking-wide">
        <span>IEEE SMC KARE SBC</span>
        <span className="text-[#FF5722] font-bold">×</span>
        <span>SCRS KARE</span>
      </div>

      <div className="text-[10px] sm:text-[11px] text-neutral-500 font-medium tracking-wider uppercase mt-0.5">
        IEEE CODE F1 • KARE • 2026
      </div>
    </footer>
  );
};

export default Footer;
