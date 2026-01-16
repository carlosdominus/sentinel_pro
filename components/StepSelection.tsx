
import React from 'react';
import { User, UserCheck, Zap, Lock, ShieldAlert } from 'lucide-react';
import { TargetType } from '../types.ts';
import { SOCIAL_PROOF_COUNT } from '../constants.ts';

interface StepSelectionProps {
  onSelect: (target: TargetType) => void;
}

const StepSelection: React.FC<StepSelectionProps> = ({ onSelect }) => {
  return (
    <div className="w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl animate-fade-in relative overflow-hidden border border-gray-100">
      <div className="relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-black text-[#1a1a1a] mb-2 leading-tight uppercase tracking-tight font-tech">
            Descubra a Verdade Sobre Seu Relacionamento
          </h1>
          <p className="text-gray-500 text-sm md:text-base font-medium">
            Acesso discreto e 100% indetectável às conversas do WhatsApp
          </p>
        </div>

        <div className="mb-8">
          <p className="text-center font-bold text-[#2CA884] mb-6 uppercase tracking-wider text-[10px] font-tech">
            QUEM VOCÊ PRECISA MONITORAR?
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => onSelect('husband')}
              className="flex flex-col items-center justify-center p-6 border-2 border-gray-100 bg-gray-50 rounded-2xl transition-all duration-300 hover:border-[#2CA884] hover:bg-[#2CA884]/5 group"
            >
              <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <User className="text-gray-400 group-hover:text-[#2CA884] transition-colors" size={32} />
              </div>
              <span className="text-[10px] md:text-xs font-bold text-gray-600 group-hover:text-[#1a1a1a] text-center uppercase tracking-tighter">Meu Marido / Namorado</span>
            </button>

            <button
              onClick={() => onSelect('wife')}
              className="flex flex-col items-center justify-center p-6 border-2 border-gray-100 bg-gray-50 rounded-2xl transition-all duration-300 hover:border-[#2CA884] hover:bg-[#2CA884]/5 group"
            >
              <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <UserCheck className="text-gray-400 group-hover:text-[#2CA884] transition-colors" size={32} />
              </div>
              <span className="text-[10px] md:text-xs font-bold text-gray-600 group-hover:text-[#1a1a1a] text-center uppercase tracking-tighter">Minha Esposa / Namorada</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4 py-6 border-t border-gray-100">
          <div className="flex items-center gap-3">
            <div className="bg-[#2CA884]/10 p-2 rounded-lg">
              <Lock size={16} className="text-[#2CA884]" />
            </div>
            <span className="text-xs font-bold text-gray-500 uppercase tracking-tighter">Totalmente Anônimo</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-[#2CA884]/10 p-2 rounded-lg">
              <ShieldAlert size={16} className="text-[#2CA884]" />
            </div>
            <span className="text-xs font-bold text-gray-500 uppercase tracking-tighter">Sem Instalação no Celular Alvo</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-[#2CA884]/10 p-2 rounded-lg">
              <Zap size={16} className="text-[#2CA884]" />
            </div>
            <span className="text-xs font-bold text-gray-500 uppercase tracking-tighter">Acesso em 3 Minutos</span>
          </div>
        </div>

        <div className="text-center mt-4 pt-4 border-t border-gray-100">
          <p className="text-[10px] text-[#2CA884] font-bold uppercase tracking-widest flex items-center justify-center gap-2">
            <span className="animate-pulse">🔥</span> {SOCIAL_PROOF_COUNT.toLocaleString('pt-BR')} pessoas descobriram a verdade esta semana
          </p>
        </div>
      </div>
    </div>
  );
};

export default StepSelection;
