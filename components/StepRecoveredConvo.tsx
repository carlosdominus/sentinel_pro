
import React, { useState, useEffect } from 'react';
import { TargetType } from '../types.ts';
import { ShieldCheck, ArrowRight, Lock } from 'lucide-react';

interface StepRecoveredConvoProps {
  photoUrl: string | null;
  targetPhone: string;
  targetType: TargetType;
  onNext: () => void;
}

const StepRecoveredConvo: React.FC<StepRecoveredConvoProps> = ({ photoUrl, targetPhone, targetType, onNext }) => {
  const [showButton, setShowButton] = useState(false);
  const defaultPhoto = "https://i.ibb.co/TqntNH0j/pngtree-whatsapp-default-profile-photo-vector-png-image-17034397.webp";
  const finalPhoto = photoUrl || defaultPhoto;

  // Imagem base dinâmica
  const bgImage = targetType === 'husband' 
    ? "https://i.ibb.co/Wd9qN6y/app-espi-o.webp"
    : "https://i.ibb.co/1Y8RBfMK/0101-jgivu4.png";

  useEffect(() => {
    // Pequeno delay para o botão aparecer após o usuário processar a imagem
    const timer = setTimeout(() => setShowButton(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full max-w-lg bg-white rounded-3xl p-5 shadow-[0_0_80px_rgba(0,0,0,0.8)] animate-fade-in flex flex-col items-center border border-white/5 relative">
      
      <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-inner border border-gray-100 bg-[#e5ddd5]">
        {/* Imagem de Fundo Base Dinâmica - Sem Blur agora */}
        <img 
          src={bgImage} 
          alt="Conversa Recuperada" 
          className="w-full h-full object-contain"
        />

        {/* --- OVERLAYS DE FOTO DINÂMICA --- */}
        <div className="absolute top-[26.5%] left-[23.5%] w-[10.5%] aspect-square rounded-full overflow-hidden">
          <img src={finalPhoto} className="w-full h-full object-cover" alt="target" />
        </div>

        <div className="absolute top-[59.6%] left-[23.5%] w-[10.2%] aspect-square rounded-full overflow-hidden">
          <img src={finalPhoto} className="w-full h-full object-cover opacity-90" alt="target" />
        </div>
        
        <div className="absolute top-[70.0%] left-[23.5%] w-[10.2%] aspect-square rounded-full overflow-hidden">
          <img src={finalPhoto} className="w-full h-full object-cover opacity-90" alt="target" />
        </div>

        <div className="absolute top-[80.4%] left-[23.5%] w-[10.2%] aspect-square rounded-full overflow-hidden">
          <img src={finalPhoto} className="w-full h-full object-cover opacity-90" alt="target" />
        </div>

        <div className="absolute top-[90.5%] left-[23.5%] w-[10.2%] aspect-square rounded-full overflow-hidden">
          <img src={finalPhoto} className="w-full h-full object-cover opacity-90" alt="target" />
        </div>
      </div>

      <div className="mt-6 w-full flex flex-col items-center gap-4">
        {showButton ? (
          <button
            onClick={onNext}
            className="w-full bg-[#2CA884] hover:bg-[#248f6d] text-white font-black py-5 rounded-2xl shadow-[0_10px_30px_rgba(44,168,132,0.4)] transition-all transform hover:scale-[1.03] active:scale-95 flex flex-col items-center justify-center gap-0 animate-bounce-subtle group"
          >
            <span className="text-lg md:text-xl uppercase tracking-tighter flex items-center gap-2">
              FINALIZE SEU CADASTRO
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <span className="text-[10px] opacity-80 font-medium uppercase tracking-[0.1em]">Liberação Imediata do Relatório Completo</span>
          </button>
        ) : (
          <div className="flex items-center justify-center gap-2 text-[#2CA884]">
            <div className="w-2 h-2 bg-[#2CA884] rounded-full animate-ping"></div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] font-tech">Preparando interface de liberação...</span>
          </div>
        )}

        <div className="flex items-center gap-2 opacity-50">
          <ShieldCheck size={14} className="text-gray-400" />
          <span className="text-[9px] text-gray-500 font-bold uppercase tracking-widest">Protocolo de Segurança 256-bit SSL</span>
        </div>
      </div>

      <style>{`
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 2s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default StepRecoveredConvo;
