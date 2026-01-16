
import React, { useEffect, useState } from 'react';
import { Loader2, ShieldCheck, AlertTriangle, MessageSquareOff, MapPin, Search, Terminal, Cpu } from 'lucide-react';
import { TargetType } from '../types.ts';

interface LoadingScreenProps {
  phase: 'protocol' | 'analysis';
  targetType: TargetType;
  targetName: string;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ phase, targetType, targetName }) => {
  const [status, setStatus] = useState('Iniciando conexão segura...');
  
  const protocolStages = [
    'Conectando ao firewall do servidor...',
    'Bypassing criptografia end-to-end...',
    'Sincronizando banco de dados local...',
    'Aguardando resposta do protocolo SSL...',
    'Garantindo anonimato da conexão...'
  ];

  const analysisStages = [
    { text: 'mensagens apagadas detectadas', color: 'text-red-500', icon: MessageSquareOff },
    { text: 'conversas suspeitas encontradas', color: 'text-red-500', icon: AlertTriangle },
    { text: 'rastreador de localização ativo', color: 'text-green-500', icon: MapPin },
    { 
      text: targetType === 'wife' ? 'elogios de outros homens detectados' : 'mensagens elogiando outras mulheres', 
      color: 'text-red-500', 
      icon: Search 
    }
  ];

  const [visibleAnalysis, setVisibleAnalysis] = useState<number[]>([]);

  useEffect(() => {
    if (phase === 'protocol') {
      let currentIdx = 0;
      const interval = setInterval(() => {
        if (currentIdx < protocolStages.length) {
          setStatus(protocolStages[currentIdx]);
          currentIdx++;
        }
      }, 700);
      return () => clearInterval(interval);
    } else {
      analysisStages.forEach((_, idx) => {
        setTimeout(() => {
          setVisibleAnalysis(prev => [...prev, idx]);
        }, (idx + 1) * 800);
      });
    }
  }, [phase]);

  return (
    <div className="w-full max-w-md bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-[0_0_50px_rgba(44,168,132,0.1)] animate-fade-in flex flex-col items-center relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-20 pointer-events-none"></div>

      {phase === 'protocol' ? (
        <div className="relative z-10 w-full flex flex-col items-center">
          <div className="relative mb-12">
            <div className="absolute inset-0 bg-[#2CA884]/20 rounded-full animate-ping"></div>
            <div className="relative w-28 h-28 bg-black/50 rounded-full flex items-center justify-center border-2 border-[#2CA884] shadow-[0_0_20px_rgba(44,168,132,0.4)]">
              <Cpu className="text-[#2CA884] animate-pulse" size={48} />
            </div>
          </div>

          <div className="text-center w-full">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Terminal size={18} className="text-[#2CA884]" />
              <h3 className="text-xl font-black text-white uppercase tracking-tighter font-tech">Executando Scripts</h3>
            </div>
            
            <div className="space-y-4 mb-10 w-full">
              <div className="bg-black/40 p-5 rounded-2xl border border-white/5 relative overflow-hidden">
                 <div className="flex items-center gap-4">
                   <ShieldCheck size={24} className="text-[#2CA884] shrink-0" />
                   <div className="flex-1 space-y-2">
                     <div className="flex justify-between text-[9px] font-mono text-gray-500 uppercase">
                       <span>Encrypt_Bypass</span>
                       <span className="animate-pulse">Active</span>
                     </div>
                     <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-r from-transparent via-[#2CA884] to-transparent animate-[scan_2s_infinite] origin-left"></div>
                     </div>
                   </div>
                 </div>
              </div>
            </div>
            
            <div className="bg-[#2CA884]/5 py-3 px-4 rounded-lg border border-[#2CA884]/10">
              <p className="text-xs font-bold text-[#2CA884] animate-pulse font-mono uppercase tracking-widest">
                {'>'} {status}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full animate-fade-in relative z-10">
          <div className="flex items-center justify-center mb-8">
            <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center border border-red-500/30 animate-pulse shadow-[0_0_30px_rgba(239,68,68,0.2)]">
              <AlertTriangle className="text-red-500" size={40} />
            </div>
          </div>
          
          <div className="text-center mb-10">
            <h3 className="text-xl font-black text-white mb-2 uppercase tracking-tighter font-tech">
              RELATÓRIO DE INTEGRIDADE
            </h3>
            <p className="text-gray-500 text-[10px] uppercase font-mono tracking-widest">User: {targetName}</p>
          </div>

          <div className="space-y-3">
            {analysisStages.map((stage, idx) => (
              <div 
                key={idx}
                className={`flex items-center gap-4 p-4 rounded-2xl border transition-all duration-700 transform ${visibleAnalysis.includes(idx) ? 'opacity-100 translate-y-0 bg-white/5 border-white/10' : 'opacity-0 translate-y-6 border-transparent'}`}
              >
                <div className={`p-2 rounded-lg ${stage.color.replace('text', 'bg')}/10`}>
                  <stage.icon size={20} className={stage.color} />
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-[0.15em] font-tech ${stage.color}`}>{stage.text}</span>
                {visibleAnalysis.includes(idx) && (
                  <div className="ml-auto">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-ping"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LoadingScreen;