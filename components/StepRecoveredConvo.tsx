
import React, { useState, useEffect } from 'react';
import { TargetType } from '../types.ts';
import { ShieldCheck, ArrowRight, LockKeyhole, MapPin, Camera } from 'lucide-react';

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

  // Ajustes de posição da foto de perfil sobre o print do WhatsApp
  const LAYOUT_CONFIG = {
    husband: {
      photo: { top: '27.8%', left: '24.5%', width: '11.9%' }
    },
    wife: {
      photo: { top: '36.5%', left: '24.5%', width: '11.9%' }
    }
  };

  const currentConfig = targetType === 'husband' ? LAYOUT_CONFIG.husband : LAYOUT_CONFIG.wife;

  // Imagem do print da conversa (fundo)
  const bgImage = targetType === 'husband' 
    ? "https://i.ibb.co/1fvPbQw4/foto-conversa-mulher-converted.webp"
    : "https://i.ibb.co/CshKLy6k/foto-conversa-homem-converted.webp";

  // Lógica de imagens conforme solicitado:
  // Espionar Mulher (targetType === 'wife') -> Aparece Homens
  // Espionar Homem (targetType === 'husband') -> Aparece Mulheres
  const evidenceImages = targetType === 'wife' 
    ? [
        "https://i.ibb.co/kVY5tVBz/homem1.webp",
        "https://i.ibb.co/JR6rv4zy/homem2.webp",
        "https://i.ibb.co/5gyNBjWg/homem3.webp"
      ]
    : [
        "https://i.ibb.co/sphhf18s/mulher1.webp",
        "https://i.ibb.co/jZZxwk7Z/mulher2.webp",
        "https://i.ibb.co/CKRBmPmM/mulher3.webp"
      ];

  const mapImage = "https://i.ibb.co/Y71CMbwq/maps.webp";

  useEffect(() => {
    const timer = setTimeout(() => setShowButton(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full max-w-2xl bg-white rounded-[2.5rem] p-4 md:p-10 shadow-[0_0_100px_rgba(0,0,0,0.8)] animate-fade-in flex flex-col items-center border border-white/10 relative">
      
      {/* Container da Conversa do WhatsApp */}
      <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl bg-[#0b141a] border border-gray-100">
        <img 
          src={bgImage} 
          alt="Conversa Recuperada" 
          className="w-full h-auto block"
        />

        {/* Foto de Perfil Dinâmica */}
        <div 
          className="absolute z-20 aspect-square rounded-full overflow-hidden"
          style={{
            top: currentConfig.photo.top,
            left: currentConfig.photo.left,
            width: currentConfig.photo.width
          }}
        >
          <img 
            src={finalPhoto} 
            className="w-full h-full object-cover" 
            alt="Foto do Alvo" 
          />
        </div>
      </div>

      {/* Seção do Botão Principal */}
      <div className="mt-10 w-full flex flex-col items-center gap-5 max-w-md">
        {showButton ? (
          <button
            onClick={onNext}
            className="w-full bg-[#2CA884] hover:bg-[#248f6d] text-white font-black py-6 rounded-2xl shadow-[0_15px_40px_rgba(44,168,132,0.4)] transition-all transform hover:scale-[1.03] active:scale-95 flex flex-col items-center justify-center gap-0 animate-bounce-subtle group"
          >
            <span className="text-xl md:text-2xl uppercase tracking-tighter flex items-center gap-2">
              FINALIZE SEU CADASTRO
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <span className="text-[11px] opacity-80 font-medium uppercase tracking-[0.15em]">Liberação Imediata do Relatório Completo</span>
          </button>
        ) : (
          <div className="flex flex-col items-center gap-3 py-4">
            <div className="flex items-center gap-2 text-[#2CA884]">
              <div className="w-2.5 h-2.5 bg-[#2CA884] rounded-full animate-ping"></div>
              <span className="text-[12px] font-bold uppercase tracking-[0.2em] font-tech">Sincronizando interface de liberação...</span>
            </div>
          </div>
        )}

        {/* --- SEÇÃO DE EVIDÊNCIAS BLOQUEADAS ABAIXO DO BOTÃO --- */}
        <div className="w-full mt-6 space-y-8">
          
          {/* Fotos Suspeitas */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-gray-100 pb-2">
              <Camera size={16} className="text-red-500" />
              <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400">Fotos Suspeitas Detectadas</h4>
            </div>
            
            <div className="grid grid-cols-3 gap-3">
              {evidenceImages.map((img, idx) => (
                <div key={idx} className="relative aspect-square rounded-xl overflow-hidden shadow-md border border-gray-100 bg-gray-50">
                  <img src={img} alt={`Evidência ${idx}`} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                    <div className="bg-white/90 p-2.5 rounded-full shadow-xl">
                      <LockKeyhole size={18} className="text-red-600" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Localização Suspeita */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-gray-100 pb-2">
              <MapPin size={16} className="text-red-500" />
              <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400">Localização Suspeita Encontrada</h4>
            </div>
            
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-100 bg-gray-50">
              <img src={mapImage} alt="Localização" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/5 flex items-center justify-center">
                <div className="bg-white/95 p-4 rounded-3xl shadow-2xl flex items-center gap-3 border border-red-100">
                  <div className="bg-red-50 p-2 rounded-full">
                    <LockKeyhole size={24} className="text-red-600" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-black uppercase tracking-tight text-red-600 leading-none">Acesso Bloqueado</span>
                    <span className="text-[8px] font-bold text-gray-400 uppercase tracking-widest mt-1">Finalize o cadastro para ver</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Selo de Segurança Final */}
        <div className="flex items-center gap-2 opacity-40 mt-6 pb-4">
          <ShieldCheck size={16} className="text-gray-400" />
          <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Protocolo Seguro 256-bit AES</span>
        </div>
      </div>

      <style>{`
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 2s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default StepRecoveredConvo;
