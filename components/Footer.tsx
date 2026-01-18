
import React from 'react';
import { Lock, Shield } from 'lucide-react';

interface FooterProps {
  theme?: 'light' | 'dark';
}

const Footer: React.FC<FooterProps> = ({ theme = 'light' }) => {
  const isDark = theme === 'dark';

  return (
    <footer className="w-full max-w-lg mt-8 mb-12 px-4 animate-fade-in text-center">
      <div className="flex justify-center items-center gap-6 mb-4 opacity-50 grayscale hover:grayscale-0 transition-all">
        <div className="flex items-center gap-1">
          <Lock size={16} className={isDark ? 'text-white' : 'text-[#1a1a1a]'} />
          <span className={`${isDark ? 'text-white' : 'text-[#1a1a1a]'} text-[10px] font-bold uppercase tracking-tighter`}>SSL SECURE</span>
        </div>
        <div className="flex items-center gap-1">
          <Shield size={16} className={isDark ? 'text-white' : 'text-[#1a1a1a]'} />
          <span className={`${isDark ? 'text-white' : 'text-[#1a1a1a]'} text-[10px] font-bold uppercase tracking-tighter`}>MILITARY GRADE ENCRYPTION</span>
        </div>
      </div>
      <p className="text-gray-400 text-[10px] leading-relaxed px-8 uppercase font-bold tracking-tighter opacity-70">
        © 2024 Aplicativo Espião. Todos os direitos reservados.<br />
        Este sistema é destinado apenas para uso ético e legal.
      </p>
    </footer>
  );
};

export default Footer;
