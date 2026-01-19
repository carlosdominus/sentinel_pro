
import React from 'react';

interface HeaderProps {
  theme?: 'light' | 'dark';
}

const Header: React.FC<HeaderProps> = ({ theme = 'light' }) => {
  const isDark = theme === 'dark';
  const logoUrl = "https://i.ibb.co/My7SWXTF/whatsapp-logo-whatsapp-icon-whatsapp-transparent-free-png.webp";
  
  return (
    <header className="flex flex-col items-center pt-8 pb-4 animate-fade-in z-50">
      <div className="flex items-center gap-2 mb-1 group cursor-default">
        <img 
          src={logoUrl} 
          alt="Logo" 
          className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300" 
        />
        <span className={`font-tech text-3xl font-black tracking-widest uppercase glitch-hover ${isDark ? 'text-white' : 'text-[#1a1a1a]'}`}>APLICATIVO ESPIÃO</span>
      </div>
      <div className="flex items-center gap-1.5 opacity-60">
        <div className="w-1 h-1 bg-[#2CA884] rounded-full animate-ping"></div>
        <p className={`${isDark ? 'text-white' : 'text-[#1a1a1a]'} text-[9px] uppercase tracking-[0.3em] font-tech font-bold`}>Interface de Investigação Segura</p>
      </div>
    </header>
  );
};

export default Header;
