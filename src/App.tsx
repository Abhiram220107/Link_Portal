import React from 'react';
import { Header } from './components/Header';
import { LinkButton } from './components/LinkButton';
import { Footer } from './components/Footer';
import { LINKS } from './config/links';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0B0E14] bg-racing-grid flex flex-col justify-between selection:bg-[#FF5722] selection:text-white">
      {/* Top F1 Racing Speed Accent Bar */}
      <div className="w-full h-1 speed-stripes"></div>

      {/* Main Content Area */}
      <div className="w-full max-w-md mx-auto px-4 flex-1 flex flex-col items-center">
        <Header />

        <main className="w-full my-6 space-y-4">
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
      </div>

      <Footer />
    </div>
  );
};

export default App;
