
import React, { useState, useEffect } from 'react';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import StepSelection from './components/StepSelection.tsx';
import StepDataEntry from './components/StepDataEntry.tsx';
import LoadingScreen from './components/LoadingScreen.tsx';
import VSLPage from './components/VSLPage.tsx';
import { AppStep, TargetType, FormData } from './types.ts';

const App: React.FC = () => {
  const [step, setStep] = useState<AppStep>(AppStep.SELECTION);
  const [targetType, setTargetType] = useState<TargetType>(null);
  const [formData, setFormData] = useState<FormData>({ targetName: '', targetPhone: '' });

  const handleTargetSelect = (target: TargetType) => {
    setTargetType(target);
    localStorage.setItem('sentinel_target_type', target || '');
    setStep(AppStep.DATA_ENTRY);
  };

  const handleDataSubmit = (data: { name: string; phone: string }) => {
    setFormData({ targetName: data.name, targetPhone: data.phone });
    localStorage.setItem('sentinel_target_name', data.name);
    localStorage.setItem('sentinel_target_phone', data.phone);
    setStep(AppStep.LOADING);

    setTimeout(() => {
      setStep(AppStep.VSL);
    }, 6500);
  };

  return (
    <div className={`min-h-screen flex flex-col items-center selection:bg-[#2CA884]/30 transition-colors duration-1000 ${step === AppStep.VSL ? 'bg-[#120a0a]' : 'bg-gradient-to-b from-[#1a1a1a] to-[#2d2d2d]'}`}>
      {step !== AppStep.VSL && <Header />}

      <main className="flex-1 w-full flex items-center justify-center p-4">
        {step === AppStep.SELECTION && (
          <StepSelection onSelect={handleTargetSelect} />
        )}

        {step === AppStep.DATA_ENTRY && (
          <StepDataEntry targetType={targetType} onSubmit={handleDataSubmit} />
        )}

        {step === AppStep.LOADING && (
          <LoadingScreen targetType={targetType} targetName={formData.targetName} />
        )}

        {step === AppStep.VSL && (
          <VSLPage targetType={targetType} />
        )}
      </main>

      {step !== AppStep.VSL && <Footer />}
    </div>
  );
};

export default App;
