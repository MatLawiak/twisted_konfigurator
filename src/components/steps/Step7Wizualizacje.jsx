/**
 * Krok 7 – Wizualizacje inwestycji
 * - "tak" → pole upload plików (opcjonalne)
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
          Renderingi 3D, zdjęcia architektoniczne lub materiały wideo znacząco
          podnoszą skuteczność strony sprzedażowej.
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

      {/* Upload – gdy posiada wizualizacje */}
      {formData.maWizualizacje === 'tak' && (
        <div className="upload-field" style={{ marginTop: 16 }}>
          <label>
            <input
              type="file"
              accept="image/*,video/*,.pdf,.zip"
              multiple
              onChange={e => onChange('wizualizacjeFiles', Array.from(e.target.files))}
            />
            <span className="upload-field-icon">🖼️</span>
            <span className="upload-field-text">Wgraj wizualizacje</span>
            <span className="upload-field-hint">
              JPG, PNG, MP4, PDF, ZIP – możesz wybrać wiele plików
            </span>
            {formData.wizualizacjeFiles?.length > 0 && (
              <span className="upload-field-name">
                ✓ {formData.wizualizacjeFiles.length}{' '}
                {formData.wizualizacjeFiles.length === 1 ? 'plik' : 'pliki/ów'} wybrano
              </span>
            )}
          </label>
          <p className="upload-optional-note">Opcjonalne – możesz wgrać później</p>
        </div>
      )}

      {formData.maWizualizacje === 'nie' && (
        <div className="conditional-field" style={{ marginTop: 16 }}>
          <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.6 }}>
            <strong style={{ display: 'block', marginBottom: 4 }}>
              Nie masz wizualizacji? Możemy je stworzyć.
            </strong>
            Wykonujemy profesjonalne renderingi 3D i wizualizacje architektoniczne
            dopasowane do charakteru inwestycji.
          </p>
        </div>
      )}

      {formData.maWizualizacje === 'w-trakcie' && (
        <div className="conditional-field" style={{ marginTop: 16 }}>
          <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.6 }}>
            <strong style={{ display: 'block', marginBottom: 4 }}>
              Strona może być gotowa przed wizualizacjami.
            </strong>
            Wdrożymy stronę z placeholderami i zaktualizujemy ją od razu,
            gdy wizualizacje będą gotowe.
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
