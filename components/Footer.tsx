
import React from 'react';
import { Lock, Shield } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full max-w-lg mt-8 mb-12 px-4 animate-fade-in text-center">
      <div className="flex justify-center items-center gap-6 mb-4 opacity-50 grayscale hover:grayscale-0 transition-all">
        <div className="flex items-center gap-1">
          <Lock size={16} className="text-white" />
          <span className="text-white text-[10px] font-bold uppercase tracking-tighter">SSL SECURE</span>
        </div>
        <div className="flex items-center gap-1">
          <Shield size={16} className="text-white" />
          <span className="text-white text-[10px] font-bold uppercase tracking-tighter">MILITARY GRADE ENCRYPTION</span>
        </div>
      </div>
      <p className="text-gray-400 text-[10px] leading-relaxed px-8">
        © 2024 Sentinel Pro. Todos os direitos reservados.<br />
        Este sistema é destinado apenas para uso ético e legal. Seus dados nunca são compartilhados ou vendidos.
      </p>
    </footer>
  );
};

export default Footer;
