
import React, { useEffect, useState } from 'react';
import { Loader2, ShieldCheck, Database, Cpu, AlertTriangle, Search, MapPin, MessageSquareOff } from 'lucide-react';
import { TargetType } from '../types';

interface LoadingScreenProps {
  targetType: TargetType;
  targetName: string;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ targetType, targetName }) => {
  const [phase, setPhase] = useState<'protocol' | 'analysis'>('protocol');
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
    let currentIdx = 0;
    const interval = setInterval(() => {
      if (currentIdx < protocolStages.length) {
        setStatus(protocolStages[currentIdx]);
        currentIdx++;
      } else {
        clearInterval(interval);
        setTimeout(() => setPhase('analysis'), 500);
      }
    }, 400);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (phase === 'analysis') {
      analysisStages.forEach((_, idx) => {
        setTimeout(() => {
          setVisibleAnalysis(prev => [...prev, idx]);
        }, (idx + 1) * 600);
      });
    }
  }, [phase]);

  return (
    <div className="w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl animate-fade-in flex flex-col items-center">
      {phase === 'protocol' ? (
        <>
          <div className="relative mb-10">
            <div className="absolute inset-0 bg-[#2CA884]/20 rounded-full animate-ping"></div>
            <div className="relative w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center border-2 border-[#2CA884]">
              <Loader2 className="text-[#2CA884] animate-spin" size={48} />
            </div>
          </div>

          <div className="text-center w-full">
            <h3 className="text-lg font-bold text-gray-800 mb-6 uppercase tracking-widest font-tech">Processando Protocolos</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
                 <ShieldCheck size={20} className="text-[#2CA884]" />
                 <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-[#2CA884] origin-left animate-[grow_2s_ease-in-out]"></div>
                 </div>
                 <span className="text-[10px] font-bold text-[#2CA884]">SECURE</span>
              </div>
              <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
                 <Cpu size={20} className="text-[#2CA884]" />
                 <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-[#2CA884] origin-left animate-[grow_1.5s_ease-in-out]"></div>
                 </div>
                 <span className="text-[10px] font-bold text-gray-400">PROXY</span>
              </div>
            </div>

            <p className="text-sm font-semibold text-[#2CA884] animate-pulse min-h-[1.5rem]">
              {status}
            </p>
          </div>
        </>
      ) : (
        <div className="w-full animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center border-2 border-red-500 animate-pulse">
              <AlertTriangle className="text-red-500" size={32} />
            </div>
          </div>
          
          <h3 className="text-center text-lg font-bold text-gray-800 mb-6 uppercase tracking-widest font-tech">
            Analisando Integridade de {targetName}
          </h3>

          <div className="space-y-3">
            {analysisStages.map((stage, idx) => (
              <div 
                key={idx}
                className={`flex items-center gap-3 p-4 rounded-xl border border-gray-100 transition-all duration-500 transform ${visibleAnalysis.includes(idx) ? 'opacity-100 translate-y-0 bg-gray-50' : 'opacity-0 translate-y-4'}`}
              >
                <stage.icon size={18} className={stage.color} />
                <span className={`text-xs font-bold uppercase tracking-wide ${stage.color}`}>
                  {stage.text}
                </span>
                {visibleAnalysis.includes(idx) && (
                  <div className="ml-auto">
                    <div className={`w-2 h-2 rounded-full animate-pulse ${stage.color.replace('text', 'bg')}`}></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="text-center text-[10px] text-gray-400 mt-8 font-bold animate-pulse">
            CONSOLIDANDO RELATÓRIO FINAL...
          </p>
        </div>
      )}

      <style>{`
        @keyframes grow {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
