/**
 * Krok 4 – Identyfikacja wizualna
 * 3 niezależne pytania: logo, identyfikacja wizualna, materiały sprzedażowe.
 */
import React from 'react';
import CardOption from '../CardOption.jsx';
import NavigationButtons from '../NavigationButtons.jsx';
import {
  LOGO_OPTIONS,
  IDENTITY_OPTIONS,
  MATERIALS_OPTIONS,
  isStepValid,
} from '../../data/config.js';

export default function Step4Identyfikacja({ formData, onChange, onNext, onBack, currentStep }) {
  const valid = isStepValid(4, formData);

  return (
    <div className="step-content">
      {/* --- Logo --- */}
      <div className="section-header">
        <h2>Czy posiadasz logo inwestycji?</h2>
        <p>Logo to podstawa identyfikacji wizualnej każdej inwestycji.</p>
      </div>

      <div className="card-grid card-grid--2col" style={{ marginBottom: 32 }}>
        {LOGO_OPTIONS.map(opt => (
          <CardOption
            key={opt.value}
            value={opt.value}
            label={opt.label}
            icon={opt.icon}
            selected={formData.maLogo}
            onSelect={val => onChange('maLogo', val)}
          />
        ))}
      </div>

      {/* --- Identyfikacja wizualna --- */}
      <div className="section-header">
        <h2>Czy posiadasz identyfikację wizualną?</h2>
        <p>Paleta kolorów, typografia, zasady użycia logo.</p>
      </div>

      <div className="card-grid card-grid--1col" style={{ marginBottom: 32 }}>
        {IDENTITY_OPTIONS.map(opt => (
          <CardOption
            key={opt.value}
            value={opt.value}
            label={opt.label}
            icon={opt.icon}
            selected={formData.maIdentyfikacje}
            onSelect={val => onChange('maIdentyfikacje', val)}
          />
        ))}
      </div>

      {/* --- Materiały sprzedażowe --- */}
      <div className="section-header">
        <h2>Czy posiadasz materiały sprzedażowe?</h2>
        <p>Broszury, karty lokali, prezentacje, bannery.</p>
      </div>

      <div className="card-grid card-grid--2col" style={{ marginBottom: 8 }}>
        {MATERIALS_OPTIONS.map(opt => (
          <CardOption
            key={opt.value}
            value={opt.value}
            label={opt.label}
            icon={opt.icon}
            selected={formData.maMaterialy}
            onSelect={val => onChange('maMaterialy', val)}
          />
        ))}
      </div>

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
