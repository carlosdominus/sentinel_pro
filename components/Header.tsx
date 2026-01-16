
import React from 'react';
import { ShieldCheck, Lock } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="flex flex-col items-center pt-8 pb-4 animate-fade-in z-50">
      <div className="flex items-center gap-2 mb-1 group cursor-default">
        <ShieldCheck className="text-[#2CA884] group-hover:animate-pulse" size={28} />
        <span className="font-tech text-3xl font-black text-white tracking-widest uppercase glitch-hover">SENTINEL PRO</span>
      </div>
      <div className="flex items-center gap-1.5 opacity-60">
        <div className="w-1 h-1 bg-[#2CA884] rounded-full animate-ping"></div>
        <p className="text-white text-[9px] uppercase tracking-[0.3em] font-tech font-bold">Secure Investigative Interface</p>
      </div>
    </header>
  );
};

export default Header;
