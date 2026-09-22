import React from 'react';
import { Header } from './components/Header';
import { LinkButton } from './components/LinkButton';
import { Footer } from './components/Footer';
import { LINKS } from './config/links';

export const App: React.FC = () => {
  return (
    <div className="h-screen h-[100dvh] w-full bg-[#0B0E14] bg-racing-grid flex flex-col justify-between overflow-hidden selection:bg-[#FF5722] selection:text-white">
      {/* Top F1 Racing Speed Accent Bar */}
      <div className="w-full h-1 speed-stripes shrink-0"></div>

      {/* Main Content Area - Vertically balanced in viewport */}
      <div className="w-full max-w-md mx-auto px-4 flex-1 flex flex-col justify-between py-1 sm:py-3 min-h-0">
        <Header />

        <main className="w-full space-y-2.5 sm:space-y-3 my-auto">
          {/* 1st Link: Code F1 Coding Platform */}
          <LinkButton
            label="Code F1 Coding"
            icon="💻"
            url={LINKS.coding}
            badge="Platform"
            subtitle="Launch contest editor & submit solutions"
          />

          {/* 2nd Link: Participant Attendance */}
          <LinkButton
            label="Participant Attendance"
            icon="📋"
            url={LINKS.attendance}
            badge="Check-in"
            subtitle="Mark your contest attendance"
          />

          {/* 3rd Link: Rules & Regulations */}
          <LinkButton
            label="Rules & Regulations"
            icon="📜"
            url={LINKS.rules}
            badge="Guidelines"
            subtitle="Contest scoring, rules & integrity policy"
          />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;
