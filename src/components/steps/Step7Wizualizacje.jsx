/**
 * Krok 7 – Wizualizacje inwestycji
 * Pytanie o posiadanie wizualizacji architektonicznych 3D / zdjęć.
 */
import React from 'react';
import CardOption from '../CardOption.jsx';
import NavigationButtons from '../NavigationButtons.jsx';
import { VISUALIZATION_OPTIONS, isStepValid } from '../../data/config.js';

export default function Step7Wizualizacje({ formData, onChange, onNext, onBack, currentStep }) {
  const valid = isStepValid(7, formData);

  return (
    <div className="step-content">
      <div className="section-header">
        <h2>Czy posiadasz wizualizacje inwestycji?</h2>
        <p>
          Wizualizacje 3D, renderingi architektoniczne lub zdjęcia gotowych obiektów
          znacząco zwiększają skuteczność strony sprzedażowej.
        </p>
      </div>

      <div className="card-grid card-grid--1col">
        {VISUALIZATION_OPTIONS.map(opt => (
          <CardOption
            key={opt.value}
            value={opt.value}
            label={opt.label}
            desc={opt.desc}
            icon={opt.icon}
            selected={formData.maWizualizacje}
            onSelect={val => onChange('maWizualizacje', val)}
          />
        ))}
      </div>

      {/* Informacja kontekstowa */}
      {formData.maWizualizacje === 'nie' && (
        <div className="conditional-field" style={{ marginTop: 20 }}>
          <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.6 }}>
            <strong style={{ display: 'block', marginBottom: 4 }}>
              Nie masz jeszcze wizualizacji? Nic straconego.
            </strong>
            Możemy stworzyć profesjonalne wizualizacje 3D Twojej inwestycji lub pomóc
            w doborze fotografa architektonicznego.
          </p>
        </div>
      )}

      {formData.maWizualizacje === 'w-trakcie' && (
        <div className="conditional-field" style={{ marginTop: 20 }}>
          <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.6 }}>
            <strong style={{ display: 'block', marginBottom: 4 }}>
              Strona może być gotowa zanim będą wizualizacje.
            </strong>
            Wdrożymy stronę z placeholderami i zaktualizujemy ją, gdy wizualizacje będą gotowe.
          </p>
        </div>
      )}

      <NavigationButtons
        currentStep={currentStep}
        totalSteps={10}
        canGoNext={valid}
        onBack={onBack}
        onNext={onNext}
      />
    </div>
  );
}
