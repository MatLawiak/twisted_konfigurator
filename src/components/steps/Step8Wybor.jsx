/**
 * Krok 8 – Wybór przykładowej strony inwestycji
 * Miniaturki generowane przez thum.io (darmowy screenshot API, bez klucza).
 * Każda karta ma podgląd strony + link do pełnej wersji.
 */
import React, { useState } from 'react';
import NavigationButtons from '../NavigationButtons.jsx';
import { TEMPLATE_EXAMPLES, isStepValid } from '../../data/config.js';

// Generuje URL miniaturki przez thum.io
function thumbUrl(siteUrl) {
  return `https://image.thum.io/get/width/600/crop/400/noanimate/${siteUrl}`;
}

function TemplateCard({ tpl, isSelected, onSelect }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className={`template-card${isSelected ? ' selected' : ''}`}
      onClick={() => onSelect(tpl.id)}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onSelect(tpl.id)}
      aria-pressed={isSelected}
    >
      <div className="template-thumbnail">
        {!imgError ? (
          <img
            src={thumbUrl(tpl.previewUrl)}
            alt={`Podgląd strony ${tpl.name}`}
            onError={() => setImgError(true)}
            loading="lazy"
          />
        ) : (
          <div
            className="template-thumbnail-fallback"
            style={{ background: tpl.bgColor }}
          >
            <span>{tpl.emoji}</span>
          </div>
        )}
        <span className="template-thumbnail-label">{tpl.desc}</span>
      </div>

      <div className="template-info">
        <div className="template-info-name">{tpl.name}</div>
        <div className="template-info-desc">{tpl.desc}</div>
        <a
          href={tpl.previewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="template-info-link"
          onClick={e => e.stopPropagation()}
        >
          Zobacz pełną stronę ↗
        </a>
      </div>

      <div className="template-selected-badge">✓ Wybrany szablon</div>
    </div>
  );
}

export default function Step8Wybor({ formData, onChange, onNext, onBack, currentStep }) {
  const valid = isStepValid(8, formData);

  return (
    <div className="step-content">
      <div className="section-header">
        <h2>Wybierz przykładową stronę inwestycji</h2>
        <p>
          Kliknij kartę aby wybrać szablon. Każda strona dostępna jest do pełnego podglądu —
          kliknij link pod miniaturką.
        </p>
      </div>

      <div className="template-grid">
        {TEMPLATE_EXAMPLES.map(tpl => (
          <TemplateCard
            key={tpl.id}
            tpl={tpl}
            isSelected={formData.wybranaStrona === tpl.id}
            onSelect={id => onChange('wybranaStrona', id)}
          />
        ))}
      </div>

      <div className="template-note">
        <strong>Strony są zgodne z nową ustawą deweloperską.</strong>
        Każdy szablon jest skonfigurowany z integracją danych GOV i automatycznie
        dostosowuje się do obowiązujących regulacji prawnych.
        Nie musisz martwić się o aktualizacje przepisów.
      </div>

      <NavigationButtons
        currentStep={currentStep}
        totalSteps={10}
        canGoNext={valid}
        onBack={onBack}
        onNext={onNext}
        nextLabel="Zobacz podsumowanie →"
      />
    </div>
  );
}
