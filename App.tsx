
import React, { useState } from 'react';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import StepSelection from './components/StepSelection.tsx';
import StepDataEntry from './components/StepDataEntry.tsx';
import LoadingScreen from './components/LoadingScreen.tsx';
import StepProfileFound from './components/StepProfileFound.tsx';
import VSLPage from './components/VSLPage.tsx';
import { AppStep, TargetType, FormData } from './types.ts';

const App: React.FC = () => {
  const [step, setStep] = useState<AppStep>(AppStep.SELECTION);
  const [targetType, setTargetType] = useState<TargetType>(null);
  const [formData, setFormData] = useState<FormData>({ targetName: '', targetPhone: '' });
  const [profilePhoto, setProfilePhoto] = useState<string | null>(null);

  const handleTargetSelect = (target: TargetType) => {
    setTargetType(target);
    localStorage.setItem('sentinel_target_type', target || '');
    setStep(AppStep.DATA_ENTRY);
  };

  const handleDataSubmit = async (data: { name: string; phone: string }) => {
    setFormData({ targetName: data.name, targetPhone: data.phone });
    localStorage.setItem('sentinel_target_name', data.name);
    localStorage.setItem('sentinel_target_phone', data.phone);
    
    // 1. Inicia Protocolos
    setStep(AppStep.PROTOCOL);

    // 2. Faz o envio e tenta pegar a foto
    try {
      const response = await fetch('https://nen.auto-jornada.space/webhook/hook-sentinel-pro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tipoAlvo: targetType,
          nomeAlvo: data.name,
          telefoneAlvo: data.phone,
          dataHora: new Date().toLocaleString('pt-BR'),
          urlOrigem: window.location.href
        }),
      });

      if (response.ok) {
        const result = await response.json();
        if (result && result.photoUrl) {
          setProfilePhoto(result.photoUrl);
        }
      }
    } catch (error) {
      console.error('Erro ao processar webhook:', error);
    }

    // Fluxo de Transição:
    // Protocolo (4s) -> Perfil Encontrado (5s) -> Análise (5s) -> VSL
    
    setTimeout(() => {
      setStep(AppStep.PROFILE_FOUND);
      
      setTimeout(() => {
        setStep(AppStep.ANALYSIS);
        
        setTimeout(() => {
          setStep(AppStep.VSL);
        }, 5500);
      }, 5500);
    }, 4500);
  };

  // UI State: Most investigation steps should use dark theme
  const isDarkStep = step !== AppStep.SELECTION && step !== AppStep.DATA_ENTRY;

  return (
    <div className={`min-h-screen flex flex-col items-center selection:bg-[#2CA884]/30 transition-colors duration-1000 ${isDarkStep ? 'bg-[#0a0a0a]' : 'bg-gradient-to-b from-[#1a1a1a] to-[#2d2d2d]'}`}>
      {/* Background Decorator for Dark Steps */}
      {isDarkStep && (
        <div className="fixed inset-0 grid-overlay opacity-30 pointer-events-none z-0"></div>
      )}

      <div className="relative z-10 w-full flex flex-col items-center min-h-screen">
        {step !== AppStep.VSL && <Header />}

        <main className="flex-1 w-full flex items-center justify-center p-4">
          {step === AppStep.SELECTION && (
            <StepSelection onSelect={handleTargetSelect} />
          )}

          {step === AppStep.DATA_ENTRY && (
            <StepDataEntry targetType={targetType} onSubmit={handleDataSubmit} />
          )}

          {step === AppStep.PROTOCOL && (
            <LoadingScreen phase="protocol" targetType={targetType} targetName={formData.targetName} />
          )}

          {step === AppStep.PROFILE_FOUND && (
            <StepProfileFound targetPhone={formData.targetPhone} photoUrl={profilePhoto} />
          )}

          {step === AppStep.ANALYSIS && (
            <LoadingScreen phase="analysis" targetType={targetType} targetName={formData.targetName} />
          )}

          {step === AppStep.VSL && (
            <VSLPage targetType={targetType} />
          )}
        </main>

        {step !== AppStep.VSL && <Footer />}
      </div>
    </div>
  );
};

export default App;