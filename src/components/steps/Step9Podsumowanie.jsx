/**
 * Krok 9 – Podsumowanie
 * - Screenshot wybranego szablonu (thum.io)
 * - Pełne podsumowanie odpowiedzi
 * - Cena 2200 PLN (base) lub 4500 PLN (z add-on dane.gov.pl)
 * - Informacja o add-on i ustawie deweloperskiej gdy aktywne
 * - Mock bramki płatności (Przelewy24 / karta / BLIK)
 * - Gwarancja zwrotu pieniędzy
 * - Lista korzyści
 */
import React, { useState } from 'react';
import {
  generateRecommendations,
  INVESTMENT_TYPE_OPTIONS,
  STYLE_OPTIONS,
  TEMPLATE_EXAMPLES,
} from '../../data/config.js';

function thumbUrl(siteUrl) {
  return `https://image.thum.io/get/width/800/crop/500/noanimate/${siteUrl}`;
}

function getLabel(options, value) {
  return options.find(o => o.value === value)?.label ?? value ?? '—';
}

function yesNo(value) {
  if (value === 'tak')        return { label: 'Tak',             cls: 'positive' };
  if (value === 'nie')        return { label: 'Nie',             cls: 'negative' };
  if (value === 'czesciowo')  return { label: 'Częściowo',       cls: '' };
  if (value === 'nie-wiem')   return { label: 'Nie wiem',        cls: '' };
  if (value === 'chce-nowa')  return { label: 'Chcę nową stronę', cls: 'negative' };
  if (value === 'w-trakcie')  return { label: 'W trakcie',       cls: '' };
  return { label: value ?? '—', cls: '' };
}

const PAYMENT_METHODS = [
  { id: 'przelewy24', label: 'Przelewy24', icon: '🏦' },
  { id: 'card',       label: 'Karta',      icon: '💳' },
  { id: 'blik',       label: 'BLIK',       icon: '📱' },
];

export default function Step9Podsumowanie({ formData, onNext, onBack }) {
  const { services, packageName, packageDesc } = generateRecommendations(formData);
  const [payMethod, setPayMethod]   = useState('przelewy24');
  const [imgError, setImgError]     = useState(false);

  const price = formData.autoDaneGov ? '4 500 PLN' : '2 200 PLN';

  const selectedTemplate = TEMPLATE_EXAMPLES.find(t => t.id === formData.wybranaStrona);

  return (
    <div className="step-content">
      <div className="section-header">
        <h2>Twoje podsumowanie</h2>
        <p>Na podstawie odpowiedzi przygotowaliśmy spersonalizowaną rekomendację.</p>
      </div>

      <div className="summary-section">

        {/* ── Podgląd wybranego szablonu ── */}
        {selectedTemplate && (
          <div className="summary-card">
            <h3>🌐 Wybrany szablon strony</h3>
            <div className="summary-template-preview">
              {!imgError ? (
                <img
                  src={thumbUrl(selectedTemplate.previewUrl)}
                  alt={`Podgląd ${selectedTemplate.name}`}
                  onError={() => setImgError(true)}
                />
              ) : (
                <div
                  className="summary-template-preview-fallback"
                  style={{ background: selectedTemplate.bgColor }}
                >
                  <span>{selectedTemplate.emoji}</span>
                </div>
              )}
            </div>
            <div className="summary-template-caption">
              <span><strong>{selectedTemplate.name}</strong> — {selectedTemplate.desc}</span>
              <a
                href={selectedTemplate.previewUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Podgląd ↗
              </a>
            </div>
          </div>
        )}

        {/* ── Inwestycja ── */}
        <div className="summary-card">
          <h3>🏗️ Inwestycja</h3>
          <div className="summary-row">
            <span className="summary-row-label">Status</span>
            <span className="summary-row-value">
              {formData.statusInwestycji === 'w-trakcie'   && 'W trakcie realizacji'}
              {formData.statusInwestycji === 'planowanie'  && 'Na etapie planowania'}
              {formData.statusInwestycji === 'jeszcze-nie' && 'Jeszcze nie posiada'}
            </span>
          </div>
          {formData.nazwaInwestycji && (
            <div className="summary-row">
              <span className="summary-row-label">Nazwa</span>
              <span className="summary-row-value">{formData.nazwaInwestycji}</span>
            </div>
          )}
          <div className="summary-row">
            <span className="summary-row-label">Typ</span>
            <span className="summary-row-value">
              {getLabel(INVESTMENT_TYPE_OPTIONS, formData.typInwestycji)}
            </span>
          </div>
        </div>

        {/* ── Strona i domena ── */}
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
                   style={{ color: 'var(--tp-orange)' }}>
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
            <span className="summary-row-label">Wybrany styl</span>
            <span className="summary-row-value">
              {getLabel(STYLE_OPTIONS, formData.stylStrony)}
            </span>
          </div>
        </div>

        {/* ── Identyfikacja wizualna ── */}
        <div className="summary-card">
          <h3>🎨 Identyfikacja wizualna</h3>
          <div className="summary-row">
            <span className="summary-row-label">Logo</span>
            <span className={`summary-row-value ${yesNo(formData.maLogo).cls}`}>
              {yesNo(formData.maLogo).label}
              {formData.logoFile && ` (${formData.logoFile.name})`}
            </span>
          </div>
          <div className="summary-row">
            <span className="summary-row-label">Identyfikacja wizualna</span>
            <span className={`summary-row-value ${yesNo(formData.maIdentyfikacje).cls}`}>
              {yesNo(formData.maIdentyfikacje).label}
            </span>
          </div>
          {formData.identyfikacjaCzesciowo?.length > 0 && (
            <div className="summary-row">
              <span className="summary-row-label">Posiadane elementy</span>
              <span className="summary-row-value" style={{ fontSize: 12 }}>
                {formData.identyfikacjaCzesciowo.join(', ')}
              </span>
            </div>
          )}
          <div className="summary-row">
            <span className="summary-row-label">Materiały sprzedażowe</span>
            <span className={`summary-row-value ${yesNo(formData.maMaterialy).cls}`}>
              {yesNo(formData.maMaterialy).label}
            </span>
          </div>
          <div className="summary-row">
            <span className="summary-row-label">Wizualizacje</span>
            <span className={`summary-row-value ${yesNo(formData.maWizualizacje).cls}`}>
              {yesNo(formData.maWizualizacje).label}
              {formData.wizualizacjeFiles?.length > 0 &&
                ` (${formData.wizualizacjeFiles.length} pliki)`}
            </span>
          </div>
        </div>

        {/* ── Rekomendowany pakiet ── */}
        <div className="recommendation-card">
          <div className="rec-badge">Rekomendacja Twisted Pixel</div>
          <h3>{packageName}</h3>
          <p>{packageDesc}</p>

          {services.length > 0 ? (
            <ul className="recommendation-services">
              {services.map(s => (
                <li key={s.id}>{s.label}</li>
              ))}
            </ul>
          ) : (
            <p style={{ opacity: 0.75, marginBottom: 20 }}>
              Twoja inwestycja jest dobrze wyposażona. Skupimy się na optymalizacji.
            </p>
          )}

          {/* Add-on dane.gov.pl */}
          {formData.autoDaneGov && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '10px 14px',
              marginBottom: 12,
              background: 'var(--tp-orange-light)',
              border: '1px solid rgba(235,93,28,0.25)',
              borderRadius: 'var(--radius-sm)',
            }}>
              <span style={{ fontSize: 18 }}>🏛️</span>
              <div style={{ fontFamily: 'IBM Plex Sans, sans-serif', fontSize: 13 }}>
                <strong style={{ color: 'var(--tp-dark)', display: 'block', marginBottom: 2 }}>
                  Add-on: Automatyczne raportowanie do dane.gov.pl
                </strong>
                <span style={{ color: 'var(--tp-gray-mid)' }}>
                  Codzienne generowanie i publikacja pliku CSV/XML — zgodność z art. 19b ustawy deweloperskiej
                </span>
              </div>
            </div>
          )}

          {/* Cena */}
          <div className="price-block">
            <div>
              <div className="price-block-label">Cena wdrożenia</div>
              <div className="price-block-note">
                {formData.autoDaneGov
                  ? 'pakiet + add-on dane.gov.pl, jednorazowa opłata'
                  : 'jednorazowa opłata, bez ukrytych kosztów'}
              </div>
            </div>
            <div className="price-block-amount">{price}</div>
          </div>
        </div>

        {/* ── Bramka płatności ── */}
        <div className="payment-gateway">
          <h4>Zamów wdrożenie</h4>
          <div className="payment-gateway-sub">
            Wybierz metodę płatności i złóż zamówienie.
          </div>

          {/* Gwarancja zwrotu */}
          <div className="money-back-badge">
            <span className="money-back-icon">🛡️</span>
            <div className="money-back-text">
              <strong>Gwarancja zwrotu pieniędzy</strong>
              Jeśli z jakiegoś powodu zrezygnujesz przed rozpoczęciem prac —
              zwrócimy pełną kwotę bez pytań.
            </div>
          </div>

          {/* Metody płatności */}
          <div className="payment-methods">
            {PAYMENT_METHODS.map(m => (
              <button
                key={m.id}
                type="button"
                className={`payment-method-tag${payMethod === m.id ? ' active' : ''}`}
                onClick={() => setPayMethod(m.id)}
              >
                <span>{m.icon}</span>
                {m.label}
              </button>
            ))}
          </div>

          {/* Formularz karty */}
          {payMethod === 'card' && (
            <>
              <div className="payment-form-row">
                <div className="payment-input-group" style={{ gridColumn: '1 / -1' }}>
                  <label>Numer karty</label>
                  <input type="text" placeholder="0000 0000 0000 0000" maxLength={19} />
                </div>
              </div>
              <div className="payment-form-row">
                <div className="payment-input-group">
                  <label>Data ważności</label>
                  <input type="text" placeholder="MM / RR" maxLength={7} />
                </div>
                <div className="payment-input-group">
                  <label>CVV</label>
                  <input type="text" placeholder="•••" maxLength={4} />
                </div>
              </div>
            </>
          )}

          {payMethod === 'blik' && (
            <div className="payment-form-row">
              <div className="payment-input-group" style={{ gridColumn: '1 / -1' }}>
                <label>Kod BLIK</label>
                <input type="text" placeholder="000 000" maxLength={7} />
              </div>
            </div>
          )}

          {payMethod === 'przelewy24' && (
            <p style={{
              fontSize: 13,
              color: 'var(--tp-gray-mid)',
              marginBottom: 16,
              padding: '12px 14px',
              background: 'var(--bg-body)',
              borderRadius: 'var(--radius-sm)',
            }}>
              Po kliknięciu „Zamów" zostaniesz przekierowany do bezpiecznej bramki
              Przelewy24, gdzie wybierzesz swój bank.
            </p>
          )}

          <button
            className="btn btn-cta"
            type="button"
            onClick={onNext}
            style={{ width: '100%', justifyContent: 'center', marginTop: 4 }}
          >
            Zamów za {price} →
          </button>
        </div>

        {/* ── Korzyści ── */}
        <div className="summary-card">
          <h3>✅ Dlaczego to dobry wybór</h3>
          <ul className="benefits-list">
            {[
              'Zgodność z nową ustawą deweloperską',
              'Integracja z danymi GOV – automatyczne aktualizacje regulacji',
              'Szybkie działanie i optymalizacja SEO',
              'Gotowy system generowania leadów sprzedażowych',
              'Nowoczesny design dopasowany do sprzedaży inwestycji',
              'Wsparcie techniczne i marketingowe po wdrożeniu',
              'Gwarancja zwrotu pieniędzy – zero ryzyka',
            ].map((b, i) => (
              <li key={i}>
                <span className="benefit-check">✓</span>
                {b}
              </li>
            ))}
          </ul>
        </div>

      </div>

      <div className="step-nav" style={{ borderTop: '1px solid var(--border)', marginTop: 32 }}>
        <button className="btn btn-back" onClick={onBack} type="button">
          ← Wstecz
        </button>
      </div>
    </div>
  );
}
