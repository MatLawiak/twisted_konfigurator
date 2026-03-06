/**
 * Krok 4 – Identyfikacja wizualna
 * - Logo: tak → pole upload (opcjonalne)
 * - Identyfikacja wizualna: częściowo → lista checkboxów co posiadasz
 * - Materiały sprzedażowe: tak/nie
 */
import React, { useState } from 'react';
import CardOption from '../CardOption.jsx';
import NavigationButtons from '../NavigationButtons.jsx';
import {
  LOGO_OPTIONS,
  IDENTITY_OPTIONS,
  MATERIALS_OPTIONS,
  isStepValid,
} from '../../data/config.js';

const PARTIAL_ITEMS = [
  'Logo inwestycji',
  'Paleta kolorów marki',
  'Typografia (czcionki)',
  'Szablony graficzne',
  'Wizytówki',
  'Materiały drukowane (ulotki, broszury)',
  'Bannery / reklamy online',
];

function UploadField({ label, hint, onChange, fileName }) {
  return (
    <div className="upload-field">
      <label>
        <input
          type="file"
          accept="image/*,.pdf,.svg,.ai,.eps,.zip"
          onChange={e => onChange(e.target.files[0] ?? null)}
        />
        <span className="upload-field-icon">📎</span>
        <span className="upload-field-text">{label}</span>
        <span className="upload-field-hint">{hint}</span>
        {fileName && <span className="upload-field-name">✓ {fileName}</span>}
      </label>
      <p className="upload-optional-note">Opcjonalne – możesz wgrać później</p>
    </div>
  );
}

export default function Step4Identyfikacja({ formData, onChange, onNext, onBack, currentStep }) {
  const [partialChecks, setPartialChecks] = useState(formData.identyfikacjaCzesciowo ?? []);
  const valid = isStepValid(4, formData);

  function togglePartial(item) {
    const next = partialChecks.includes(item)
      ? partialChecks.filter(i => i !== item)
      : [...partialChecks, item];
    setPartialChecks(next);
    onChange('identyfikacjaCzesciowo', next);
  }

  return (
    <div className="step-content">

      {/* ── Logo ── */}
      <div className="section-header">
        <h2>Czy posiadasz logo inwestycji?</h2>
        <p>Logo to wizytówka każdej inwestycji – podstawa identyfikacji.</p>
      </div>

      <div className="card-grid card-grid--2col" style={{ marginBottom: 4 }}>
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

      {formData.maLogo === 'tak' && (
        <UploadField
          label="Wgraj plik logo"
          hint="PNG, SVG, PDF, AI, EPS – maks. 20 MB"
          fileName={formData.logoFile?.name}
          onChange={file => onChange('logoFile', file)}
        />
      )}

      {/* ── Identyfikacja wizualna ── */}
      <div className="section-header" style={{ marginTop: 32 }}>
        <h2>Czy posiadasz identyfikację wizualną?</h2>
        <p>Paleta kolorów, typografia, zasady użycia logo i materiałów.</p>
      </div>

      <div className="card-grid card-grid--1col" style={{ marginBottom: 4 }}>
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

      {formData.maIdentyfikacje === 'czesciowo' && (
        <div className="partial-checks">
          <div className="partial-checks-title">Wskaż co posiadasz:</div>
          {PARTIAL_ITEMS.map(item => (
            <label key={item} className="partial-check-item">
              <input
                type="checkbox"
                checked={partialChecks.includes(item)}
                onChange={() => togglePartial(item)}
              />
              <span>{item}</span>
            </label>
          ))}
        </div>
      )}

      {/* ── Materiały sprzedażowe ── */}
      <div className="section-header" style={{ marginTop: 32 }}>
        <h2>Czy posiadasz materiały sprzedażowe?</h2>
        <p>Broszury, karty lokali, prezentacje, bannery reklamowe.</p>
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
