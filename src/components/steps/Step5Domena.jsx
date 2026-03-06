/**
 * Krok 5 – Domena internetowa
 * - "nie" lub "nie wiem" → wyszukiwarka domen z Cyberfolks jako dostawca
 */
import React, { useState } from 'react';
import CardOption from '../CardOption.jsx';
import NavigationButtons from '../NavigationButtons.jsx';
import { DOMAIN_OPTIONS, isStepValid } from '../../data/config.js';

export default function Step5Domena({ formData, onChange, onNext, onBack, currentStep }) {
  const valid = isStepValid(5, formData);
  const [domainQuery, setDomainQuery] = useState('');
  const showSearch = formData.maDomene === 'nie' || formData.maDomene === 'nie-wiem';

  // Buduje URL wyszukiwania w Cyberfolks
  function getCyberfolksUrl() {
    const q = domainQuery.trim()
      .replace(/^https?:\/\//, '')
      .replace(/\/$/, '');
    const base = 'https://cyberfolks.pl/domeny/wyszukaj/';
    return q ? `${base}?domain=${encodeURIComponent(q)}` : base;
  }

  return (
    <div className="step-content">
      <div className="section-header">
        <h2>Czy posiadasz domenę internetową?</h2>
        <p>
          Domena to adres Twojej inwestycji w sieci.{' '}
          Przykład: <strong>nazwainwestycji.pl</strong>
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

      {/* Wyszukiwarka domen – gdy brak lub nie wiem */}
      {showSearch && (
        <div className="domain-search-box">
          <div className="domain-search-box-title">Sprawdź dostępność domeny</div>
          <div className="domain-search-box-subtitle">
            Wpisz nazwę inwestycji i sprawdź czy domena jest wolna.
          </div>

          <div className="domain-search-row">
            <input
              type="text"
              placeholder="np. zielone-wzgorza, apartamenty-nova"
              value={domainQuery}
              onChange={e => setDomainQuery(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter' && domainQuery.trim()) {
                  window.open(getCyberfolksUrl(), '_blank', 'noopener');
                }
              }}
            />
            <button
              className="btn-domain-search"
              type="button"
              onClick={() => {
                if (domainQuery.trim()) {
                  window.open(getCyberfolksUrl(), '_blank', 'noopener');
                } else {
                  window.open('https://cyberfolks.pl/domeny/', '_blank', 'noopener');
                }
              }}
            >
              Sprawdź →
            </button>
          </div>

          <div className="domain-provider-note">
            <span>Powered by</span>
            <a
              href="https://cyberfolks.pl/domeny/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cyberfolks.pl
            </a>
            <span>— rejestracja domen od 29 zł/rok</span>
          </div>
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
