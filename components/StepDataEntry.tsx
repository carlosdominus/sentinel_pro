
import React, { useState } from 'react';
import { Smartphone, User, Phone, ArrowRight, MessageCircle, Clock, CheckCircle2 } from 'lucide-react';
import { TargetType } from '../types.ts';

interface StepDataEntryProps {
  targetType: TargetType;
  onSubmit: (data: { name: string; phone: string }) => void;
}

const StepDataEntry: React.FC<StepDataEntryProps> = ({ targetType, onSubmit }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const targetLabel = targetType === 'husband' ? 'Marido' : 'Esposa';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && phone) {
      onSubmit({ name, phone });
    }
  };

  return (
    <div className="w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl animate-fade-in relative overflow-hidden border border-gray-100">
      <div className="relative z-10">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[10px] font-bold text-[#2CA884] uppercase tracking-widest font-tech">Passo 2 de 3</span>
            <span className="text-[10px] font-bold text-[#2CA884] font-tech">66% Concluído</span>
          </div>
          <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div className="w-2/3 h-full bg-[#2CA884] shadow-[0_0_10px_rgba(44,168,132,0.3)] transition-all duration-1000"></div>
          </div>
        </div>

        <div className="flex justify-center mb-6">
          <div className="relative">
            <Smartphone size={64} className="text-gray-100" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
               <MessageCircle size={32} className="text-[#2CA884] animate-pulse" />
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-black text-[#1a1a1a] mb-2 uppercase tracking-tighter font-tech">Insira os Dados do Alvo</h2>
          <p className="text-gray-500 text-sm font-medium">
            Estas informações são criptografadas e 100% confidenciais
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 mb-8">
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder={`Nome do(a) ${targetLabel}`}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-[#1a1a1a] placeholder-gray-400 focus:outline-none focus:border-[#2CA884] transition-all"
            />
          </div>

          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 border-r pr-2 border-gray-200">
              <span className="text-xs font-bold text-gray-400">+55</span>
              <Phone size={18} className="text-gray-400" />
            </div>
            <input
              type="tel"
              placeholder="(00) 00000-0000"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full pl-24 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl text-[#1a1a1a] placeholder-gray-400 focus:outline-none focus:border-[#2CA884] transition-all"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#2CA884] hover:bg-[#248f6d] text-white font-bold py-5 rounded-2xl shadow-lg transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 mt-4 font-tech uppercase tracking-widest italic"
          >
            Acessar Dashboard Secreto
            <ArrowRight size={20} />
          </button>
        </form>

        <div className="space-y-4 text-left border-t border-gray-100 pt-6">
          <div className="flex items-start gap-3">
            <div className="mt-1 bg-gray-50 p-1.5 rounded-full">
              <CheckCircle2 size={14} className="text-[#2CA884]" />
            </div>
            <p className="text-[11px] text-gray-500 font-medium uppercase tracking-tighter">Segurança ponta-a-ponta garantida</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepDataEntry;
