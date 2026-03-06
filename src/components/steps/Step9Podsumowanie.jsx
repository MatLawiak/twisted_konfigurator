/**
 * Krok 9 – Podsumowanie
 * Wyświetla pełne podsumowanie odpowiedzi użytkownika,
 * wygenerowany pakiet rekomendacji i listę sugerowanych usług.
 * Opcjonalnie zawiera formularz kontaktowy lub CTA do płatności.
 */
import React from 'react';
import NavigationButtons from '../NavigationButtons.jsx';
import {
  generateRecommendations,
  INVESTMENT_TYPE_OPTIONS,
  STYLE_OPTIONS,
  TEMPLATE_EXAMPLES,
} from '../../data/config.js';

// Helper: pobiera label z listy opcji na podstawie value
function getLabel(options, value) {
  return options.find(o => o.value === value)?.label ?? value ?? '—';
}

// Mapowanie wartości tak/nie na czytelny tekst
function yesNo(value) {
  if (value === 'tak') return { label: 'Tak', cls: 'positive' };
  if (value === 'nie') return { label: 'Nie', cls: 'negative' };
  if (value === 'czesciowo') return { label: 'Częściowo', cls: '' };
  if (value === 'nie-wiem') return { label: 'Nie wiem', cls: '' };
  if (value === 'chce-nowa') return { label: 'Chcę nową stronę', cls: 'negative' };
  if (value === 'w-trakcie') return { label: 'W trakcie', cls: '' };
  return { label: value ?? '—', cls: '' };
}

export default function Step9Podsumowanie({ formData, onNext, onBack, currentStep }) {
  const { services, packageName, packageDesc } = generateRecommendations(formData);

  const selectedTemplate = TEMPLATE_EXAMPLES.find(t => t.id === formData.wybranaStrona);

  return (
    <div className="step-content">
      <div className="section-header">
        <h2>Twoje podsumowanie</h2>
        <p>
          Na podstawie Twoich odpowiedzi przygotowaliśmy spersonalizowaną rekomendację.
        </p>
      </div>

      <div className="summary-section">

        {/* --- Karta: Inwestycja --- */}
        <div className="summary-card">
          <h3>🏗️ Inwestycja</h3>

          <div className="summary-row">
            <span className="summary-row-label">Status inwestycji</span>
            <span className="summary-row-value">
              {formData.statusInwestycji === 'w-trakcie' && 'W trakcie realizacji'}
              {formData.statusInwestycji === 'planowanie' && 'Na etapie planowania'}
              {formData.statusInwestycji === 'jeszcze-nie' && 'Jeszcze nie posiada'}
            </span>
          </div>

          {formData.nazwaInwestycji && (
            <div className="summary-row">
              <span className="summary-row-label">Nazwa inwestycji</span>
              <span className="summary-row-value">{formData.nazwaInwestycji}</span>
            </div>
          )}

          <div className="summary-row">
            <span className="summary-row-label">Typ inwestycji</span>
            <span className="summary-row-value">
              {getLabel(INVESTMENT_TYPE_OPTIONS, formData.typInwestycji)}
            </span>
          </div>
        </div>

        {/* --- Karta: Strona i domena --- */}
        <div className="summary-card">
          <h3>🌐 Strona i domena</h3>

          <div className="summary-row">
            <span className="summary-row-label">Posiada stronę www</span>
            <span className={`summary-row-value ${yesNo(formData.maStrone).cls}`}>
              {yesNo(formData.maStrone).label}
            </span>
          </div>

          {formData.adresStrony && (
            <div className="summary-row">
              <span className="summary-row-label">Adres strony</span>
              <span className="summary-row-value">
                <a href={formData.adresStrony} target="_blank" rel="noreferrer"
                   style={{ color: 'var(--tp-purple)' }}>
                  {formData.adresStrony}
                </a>
              </span>
            </div>
          )}

          <div className="summary-row">
            <span className="summary-row-label">Posiada domenę</span>
            <span className={`summary-row-value ${yesNo(formData.maDomene).cls}`}>
              {yesNo(formData.maDomene).label}
            </span>
          </div>

          <div className="summary-row">
            <span className="summary-row-label">Wybrany styl strony</span>
            <span className="summary-row-value">
              {getLabel(STYLE_OPTIONS, formData.stylStrony)}
            </span>
          </div>

          {selectedTemplate && (
            <div className="summary-row">
              <span className="summary-row-label">Wybrany szablon</span>
              <span className="summary-row-value">{selectedTemplate.name}</span>
            </div>
          )}
        </div>

        {/* --- Karta: Identyfikacja wizualna --- */}
        <div className="summary-card">
          <h3>🎨 Identyfikacja wizualna</h3>

          <div className="summary-row">
            <span className="summary-row-label">Logo inwestycji</span>
            <span className={`summary-row-value ${yesNo(formData.maLogo).cls}`}>
              {yesNo(formData.maLogo).label}
            </span>
          </div>

          <div className="summary-row">
            <span className="summary-row-label">Identyfikacja wizualna</span>
            <span className={`summary-row-value ${yesNo(formData.maIdentyfikacje).cls}`}>
              {yesNo(formData.maIdentyfikacje).label}
            </span>
          </div>

          <div className="summary-row">
            <span className="summary-row-label">Materiały sprzedażowe</span>
            <span className={`summary-row-value ${yesNo(formData.maMaterialy).cls}`}>
              {yesNo(formData.maMaterialy).label}
            </span>
          </div>

          <div className="summary-row">
            <span className="summary-row-label">Wizualizacje inwestycji</span>
            <span className={`summary-row-value ${yesNo(formData.maWizualizacje).cls}`}>
              {yesNo(formData.maWizualizacje).label}
            </span>
          </div>
        </div>

        {/* --- Rekomendowany pakiet --- */}
        <div className="recommendation-card">
          <div className="rec-badge">Rekomendacja Twisted Pixel</div>
          <h3>{packageName}</h3>
          <p>{packageDesc}</p>

          {services.length > 0 ? (
            <ul className="recommendation-services">
              {services.map(s => (
                <li key={s.id}>
                  <span>{s.icon}</span>
                  {s.label}
                </li>
              ))}
            </ul>
          ) : (
            <p style={{ opacity: 0.8, marginBottom: 20 }}>
              Twoja inwestycja jest dobrze wyposażona! Możemy skupić się na optymalizacji.
            </p>
          )}

          <button
            className="btn btn-cta"
            onClick={onNext}
            type="button"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            Zamów wdrożenie →
          </button>
        </div>

        {/* --- Dlaczego warto --- */}
        <div className="summary-card">
          <h3>✅ Dlaczego ta strona jest dobrym wyborem</h3>
          <ul className="benefits-list">
            {[
              'Zgodność z nową ustawą deweloperską',
              'Integracja z danymi GOV i automatyczne aktualizacje',
              'Szybkie działanie i optymalizacja SEO',
              'Gotowy system generowania leadów sprzedażowych',
              'Nowoczesny design dopasowany do sprzedaży inwestycji',
              'Wsparcie techniczne i marketing po wdrożeniu',
            ].map((benefit, i) => (
              <li key={i}>
                <span className="benefit-check">✓</span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="step-nav" style={{ borderTop: '1px solid var(--tp-gray-200)', marginTop: 32 }}>
        <button className="btn btn-back" onClick={onBack} type="button">
          ← Wstecz
        </button>
      </div>
    </div>
  );
}
