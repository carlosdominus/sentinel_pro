
import React from 'react';

interface StepRecoveredConvoProps {
  photoUrl: string | null;
  targetPhone: string;
}

const StepRecoveredConvo: React.FC<StepRecoveredConvoProps> = ({ photoUrl, targetPhone }) => {
  const defaultPhoto = "https://i.ibb.co/TqntNH0j/pngtree-whatsapp-default-profile-photo-vector-png-image-17034397.webp";
  const finalPhoto = photoUrl || defaultPhoto;

  return (
    <div className="w-full max-w-lg bg-white rounded-3xl p-5 shadow-[0_0_80px_rgba(0,0,0,0.8)] animate-fade-in flex flex-col items-center border border-white/5">
      <div className="text-center mb-5 px-4">
        <p className="text-gray-600 text-[13px] leading-snug">
          Esta conversa, previamente <span className="font-bold">excluída</span>, foi <span className="font-bold">recuperada e classificada</span> como criticamente <span className="font-bold">suspeita</span>.
        </p>
      </div>

      <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-inner border border-gray-100 bg-[#e5ddd5]">
        {/* Imagem de Fundo Base (Conversa do WhatsApp) */}
        <img 
          src="https://i.ibb.co/1Y8RBfMK/0101-jgivu4.png" 
          alt="Conversa Recuperada" 
          className="w-full h-full object-contain"
        />

        {/* --- OVERLAYS DE FOTO DINÂMICA - POSICIONAMENTO CORRIGIDO --- */}
        
        {/* 1. Foto no Áudio (Mensagem de Voz) */}
        <div className="absolute top-[35.6%] left-[26.8%] w-[9.3%] aspect-square rounded-full overflow-hidden">
          <img src={finalPhoto} className="w-full h-full object-cover" alt="target" />
        </div>

        {/* 2. Fotos na Lista Inferior (Censurada) */}
        {/* Item 1 */}
        <div className="absolute top-[64.8%] left-[26.8%] w-[9%] aspect-square rounded-full overflow-hidden">
          <img src={finalPhoto} className="w-full h-full object-cover opacity-90" alt="target" />
        </div>
        
        {/* Item 2 */}
        <div className="absolute top-[74.2%] left-[26.8%] w-[9%] aspect-square rounded-full overflow-hidden">
          <img src={finalPhoto} className="w-full h-full object-cover opacity-90" alt="target" />
        </div>

        {/* Item 3 */}
        <div className="absolute top-[83.6%] left-[26.8%] w-[9%] aspect-square rounded-full overflow-hidden">
          <img src={finalPhoto} className="w-full h-full object-cover opacity-90" alt="target" />
        </div>

        {/* Item 4 */}
        <div className="absolute top-[93.0%] left-[26.8%] w-[9%] aspect-square rounded-full overflow-hidden">
          <img src={finalPhoto} className="w-full h-full object-cover opacity-90" alt="target" />
        </div>

        {/* Overlay de Bloqueio - Estilo Botão WhatsApp */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
           <div className="bg-white px-6 py-4 rounded-full shadow-[0_15px_40px_rgba(0,0,0,0.3)] border border-gray-100 flex items-center gap-3 animate-pulse">
              <span className="text-2xl">🔐</span>
              <span className="font-black text-gray-800 uppercase tracking-tighter text-lg italic">ATIVE SEU CADASTRO</span>
           </div>
        </div>
      </div>

      <div className="mt-6 w-full flex flex-col items-center">
        <div className="flex items-center justify-center gap-2 text-[#2CA884]">
          <div className="w-2 h-2 bg-[#2CA884] rounded-full animate-ping"></div>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] font-tech">Descriptografando anexos ocultos...</span>
        </div>
      </div>
    </div>
  );
};

export default StepRecoveredConvo;
