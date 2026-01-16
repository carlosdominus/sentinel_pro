
import React from 'react';
import { ShieldCheck, Lock } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="flex flex-col items-center pt-8 pb-4 animate-fade-in">
      <div className="flex items-center gap-2 mb-1">
        <ShieldCheck className="text-[#2CA884]" size={28} />
        <span className="font-tech text-3xl font-bold text-white tracking-wider">SENTINEL PRO</span>
      </div>
      <div className="flex items-center gap-1.5 opacity-80">
        <Lock className="text-[#2CA884]" size={14} />
        <p className="text-white text-xs uppercase tracking-widest font-tech">Sistema Avançado de Monitoramento Confidencial</p>
      </div>
    </header>
  );
};

export default Header;
