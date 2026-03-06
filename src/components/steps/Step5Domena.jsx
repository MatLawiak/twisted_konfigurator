/**
 * Krok 5 – Domena internetowa
 * Pytanie o domenę; gdy brak – wyświetla wskazówkę o sprawdzeniu dostępności.
 */
import React from 'react';
import CardOption from '../CardOption.jsx';
import NavigationButtons from '../NavigationButtons.jsx';
import { DOMAIN_OPTIONS, isStepValid } from '../../data/config.js';

export default function Step5Domena({ formData, onChange, onNext, onBack, currentStep }) {
  const valid = isStepValid(5, formData);
  const showDomainTip = formData.maDomene === 'nie' || formData.maDomene === 'nie-wiem';

  return (
    <div className="step-content">
      <div className="section-header">
        <h2>Czy posiadasz domenę internetową?</h2>
        <p>
          Domena to adres www Twojej inwestycji. Przykład:{' '}
          <strong>nazwainwestycji.pl</strong>
        </p>
      </div>

      <div className="card-grid card-grid--1col">
        {DOMAIN_OPTIONS.map(opt => (
          <CardOption
            key={opt.value}
            value={opt.value}
            label={opt.label}
            desc={opt.desc}
            icon={opt.icon}
            selected={formData.maDomene}
            onSelect={val => onChange('maDomene', val)}
          />
        ))}
      </div>

      {/* Wskazówka gdy brak domeny */}
      {showDomainTip && (
        <div className="conditional-field" style={{ marginTop: 20 }}>
          <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.6 }}>
            <strong style={{ display: 'block', marginBottom: 4 }}>
              Pomożemy Ci zarejestrować i skonfigurować domenę.
            </strong>
            Zadbamy o właściwe ustawienia DNS i przekierowania, żeby Twoja strona działała od razu.
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
