
import React, { useEffect, useState } from 'react';
import { ShieldCheck, Database, Search, Target } from 'lucide-react';

interface StepProfileFoundProps {
  targetPhone: string;
  photoUrl: string | null;
}

const StepProfileFound: React.FC<StepProfileFoundProps> = ({ targetPhone, photoUrl }) => {
  const defaultPhoto = "https://i.ibb.co/TqntNH0j/pngtree-whatsapp-default-profile-photo-vector-png-image-17034397.webp";
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>(['Inicializando banco de dados...']);

  const today = new Date();
  const formattedDate = today.toLocaleDateString('pt-BR');

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev < 92 ? prev + 0.8 : prev));
    }, 40);

    const logMessages = [
      'Conectando ao nó de rastreamento...',
      'Recuperando metadados de mídia...',
      'Localizando foto de perfil vinculada...',
      'Extraindo token de sessão...',
      'Perfil localizado com sucesso!'
    ];

    logMessages.forEach((msg, i) => {
      setTimeout(() => {
        setLogs(prev => [...prev, msg]);
      }, (i + 1) * 800);
    });

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-md bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_0_40px_rgba(44,168,132,0.15)] animate-fade-in flex flex-col items-center text-center relative overflow-hidden">
      {/* Grid subtle overlay */}
      <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none"></div>

      <div className="relative z-10 w-full flex flex-col items-center">
        <div className="inline-flex items-center gap-2 bg-[#2CA884]/10 text-[#2CA884] px-4 py-1.5 rounded-full mb-8 border border-[#2CA884]/20">
          <Target size={14} className="animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-widest font-tech">Alvo Localizado no Sistema</span>
        </div>

        <h2 className="text-white text-2xl font-black mb-8 leading-tight font-tech uppercase tracking-tighter">
          RASTREAMENTO <span className="text-[#2CA884]">CONCLUÍDO</span>
        </h2>

        <div className="relative mb-8 group">
          <div className="w-44 h-44 rounded-full border-2 border-[#2CA884]/30 p-1 bg-black/50 relative overflow-hidden shadow-[0_0_25px_rgba(44,168,132,0.2)]">
            {/* Scanline Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2CA884]/40 to-transparent h-1/2 w-full animate-scan z-20 pointer-events-none"></div>
            
            <img 
              src={photoUrl || defaultPhoto} 
              alt="Perfil" 
              className="w-full h-full rounded-full object-cover filter brightness-75 group-hover:brightness-100 transition-all duration-700"
            />
            
            {/* Digital Frame Elements */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#2CA884] z-30"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#2CA884] z-30"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#2CA884] z-30"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#2CA884] z-30"></div>
          </div>
        </div>

        <div className="space-y-2 mb-8 bg-white/5 p-4 rounded-2xl border border-white/5 w-full">
          <p className="text-gray-400 text-xs font-bold uppercase tracking-widest font-tech">Perfil Identificado</p>
          <p className="text-[#2CA884] font-mono text-xl font-bold">{targetPhone}</p>
        </div>

        <div className="w-full mb-8">
          <div className="flex justify-between text-[10px] text-gray-400 font-mono mb-2 px-1">
            <span>DATABASE_RETRIEVAL</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#2CA884]/50 to-[#2CA884] shadow-[0_0_10px_#2CA884] transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className="w-full text-left mb-10 h-24 overflow-hidden bg-black/20 rounded-xl p-3 border border-white/5">
          <div className="flex flex-col gap-1">
            {logs.slice(-4).map((l, i) => (
              <div key={i} className="flex items-center gap-2 font-mono text-[9px]">
                <span className="text-[#2CA884]">{'>'}</span>
                <span className="text-gray-400 uppercase">{l}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-tech">
          INVESTIGAÇÃO ATIVA - <span className="text-white font-bold">{formattedDate}</span>
        </p>
      </div>
    </div>
  );
};

export default StepProfileFound;