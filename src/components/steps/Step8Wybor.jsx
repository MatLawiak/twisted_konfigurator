/**
 * Krok 8 – Wybór przykładowej strony (szablonu)
 * Galeria kart z przykładowymi realizacjami stron inwestycji.
 * Każda karta zawiera: podgląd kolorystyczny, nazwę, styl i link do podglądu.
 */
import React from 'react';
import NavigationButtons from '../NavigationButtons.jsx';
import { TEMPLATE_EXAMPLES, isStepValid } from '../../data/config.js';

export default function Step8Wybor({ formData, onChange, onNext, onBack, currentStep }) {
  const valid = isStepValid(8, formData);

  return (
    <div className="step-content">
      <div className="section-header">
        <h2>Wybierz przykładową stronę inwestycji</h2>
        <p>
          Każdy szablon jest już skonfigurowany i gotowy do personalizacji.
          Kliknij kartę aby wybrać, a następnie przejdź do podglądu.
        </p>
      </div>

      <div className="template-grid">
        {TEMPLATE_EXAMPLES.map(tpl => {
          const isSelected = formData.wybranaStrona === tpl.id;
          return (
            <div
              key={tpl.id}
              className={`template-card${isSelected ? ' selected' : ''}`}
              onClick={() => onChange('wybranaStrona', tpl.id)}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && onChange('wybranaStrona', tpl.id)}
              aria-pressed={isSelected}
            >
              {/* Miniatura z kolorem tła */}
              <div
                className="template-thumbnail"
                style={{ background: tpl.bgColor }}
              >
                <span style={{ fontSize: 36 }}>{tpl.emoji}</span>
                <span className="template-thumbnail-label">{tpl.desc}</span>
              </div>

              {/* Informacje */}
              <div className="template-info">
                <div className="template-info-name">{tpl.name}</div>
                <div className="template-info-desc">{tpl.desc}</div>
                {tpl.previewUrl !== '#' ? (
                  <a
                    href={tpl.previewUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="template-info-link"
                    onClick={e => e.stopPropagation()}
                  >
                    Podgląd pełnej wersji ↗
                  </a>
                ) : (
                  <span className="template-info-link" style={{ color: 'var(--tp-gray-400)' }}>
                    Podgląd wkrótce
                  </span>
                )}
              </div>

              {/* Wybrany badge */}
              <div className="template-selected-badge">
                ✓ Wybrany szablon
              </div>
            </div>
          );
        })}
      </div>

      {/* Nota o zgodności z ustawą deweloperską */}
      <div className="template-note">
        <strong>Strony są zgodne z nową ustawą deweloperską.</strong>
        Szablony są skonfigurowane z integracją danych GOV i automatycznie dostosowują
        się do obowiązujących regulacji prawnych. Nie musisz martwić się o aktualizacje przepisów.
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
