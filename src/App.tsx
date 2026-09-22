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
          {/* Button 1: Participant Login */}
          <LinkButton
            label="Participant Login"
            icon="🔐"
            url={LINKS.login}
            badge="Authentication"
            subtitle="Access participant dashboard & credentials"
          />

          {/* Button 2: Coding Platform */}
          <LinkButton
            label="Coding Platform"
            icon="💻"
            url={LINKS.coding}
            badge="Contest Workspace"
            subtitle="Problem statements, editor & submissions"
          />

          {/* Button 3: Live Leaderboard */}
          <LinkButton
            label="Live Leaderboard"
            icon="🏆"
            url={LINKS.leaderboard}
            badge="Live Standings"
            subtitle="Real-time scoreboard & standings"
          />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;
