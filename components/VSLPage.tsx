
import React, { useEffect } from 'react';
import { ShieldAlert, CheckCircle2 } from 'lucide-react';
import { TargetType } from '../types';

interface VSLPageProps {
  targetType: TargetType;
}

const VSLPage: React.FC<VSLPageProps> = ({ targetType }) => {
  const pronoun = targetType === 'wife' ? 'ELA' : 'ELE';

  useEffect(() => {
    // Inject the Vturb player script dynamically on mount
    const s = document.createElement("script");
    s.src = "https://scripts.converteai.net/853c4f04-8442-44da-b89d-0541d78036bb/players/6967cafd00d5e38957962d07/v4/player.js";
    s.async = true;
    document.head.appendChild(s);

    return () => {
      // Cleanup script if necessary (usually not needed for landing pages, but good practice)
      if (document.head.contains(s)) {
        document.head.removeChild(s);
      }
    };
  }, []);

  return (
    <div className="w-full max-w-4xl animate-fade-in flex flex-col items-center px-4">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-500 border border-red-500/20 px-4 py-1.5 rounded-full mb-6">
           <ShieldAlert size={16} />
           <span className="text-[10px] font-bold uppercase tracking-widest">Acesso Restrito - Relatório de Risco</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight uppercase tracking-tight">
          ASSISTA ATÉ O FINAL E DESCUBRA COMO AGIR E O QUE <span className="text-red-500">{pronoun} ESTÁ ESCONDENDO DE VOCÊ</span>
        </h1>
      </div>

      {/* Vturb SmartPlayer Container */}
      <div className="w-full flex justify-center mb-8">
        <div className="w-full max-w-[640px] shadow-[0_0_50px_rgba(231,76,60,0.3)] rounded-2xl overflow-hidden border-2 border-red-500/20 bg-black">
          <div dangerouslySetInnerHTML={{ __html: `
            <vturb-smartplayer 
              id="vid-6967cafd00d5e38957962d07" 
              style="display: block; margin: 0 auto; width: 100%; aspect-ratio: 16/9;"
            ></vturb-smartplayer>
          ` }} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 w-full max-w-4xl">
        <div className="bg-red-500/5 backdrop-blur-md p-6 rounded-2xl border border-red-500/20 flex items-center gap-4 transition-all hover:bg-red-500/10">
          <CheckCircle2 className="text-red-500 shrink-0" size={24} />
          <p className="text-white text-xs font-bold uppercase tracking-wider">Histórico de Mensagens Apagadas</p>
        </div>
        <div className="bg-red-500/5 backdrop-blur-md p-6 rounded-2xl border border-red-500/20 flex items-center gap-4 transition-all hover:bg-red-500/10">
          <CheckCircle2 className="text-red-500 shrink-0" size={24} />
          <p className="text-white text-xs font-bold uppercase tracking-wider">Registros de Chamadas Ocultas</p>
        </div>
        <div className="bg-red-500/5 backdrop-blur-md p-6 rounded-2xl border border-red-500/20 flex items-center gap-4 transition-all hover:bg-red-500/10">
          <CheckCircle2 className="text-red-500 shrink-0" size={24} />
          <p className="text-white text-xs font-bold uppercase tracking-wider">Mídias de Visualização Única</p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <div className="inline-block bg-white/5 px-6 py-3 rounded-xl border border-white/10">
          <p className="text-red-500 text-sm font-bold animate-pulse">
            ⚠️ ATENÇÃO: Este vídeo será removido permanentemente em 10:00 minutos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VSLPage;
