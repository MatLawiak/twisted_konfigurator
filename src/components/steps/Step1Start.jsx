/**
 * Krok 1 – Start
 * Ekran powitalny z informacją o zgodności z ustawą deweloperską.
 */
import React from 'react';

export default function Step1Start({ onStart }) {
  return (
    <div className="step-content step-start">
      {/* Badge */}
      <div className="step-start-badge">
        <span>✦</span>
        Twisted Pixel – marketing dla deweloperów
      </div>

      {/* Heading */}
      <h1>
        Sprawdź czego potrzebuje{' '}
        <em>Twoja inwestycja</em>{' '}
        deweloperska
      </h1>

      {/* Description */}
      <p>
        Odpowiedz na kilka pytań, a przygotujemy dla Ciebie spersonalizowaną
        rekomendację strony internetowej i pakietu usług marketingowych.
      </p>

      {/* Feature tags */}
      <div className="step-start-features">
        <div className="start-feature-tag">
          <span>⏱️</span> Zajmuje 3 minuty
        </div>
        <div className="start-feature-tag">
          <span>🎯</span> Spersonalizowane rekomendacje
        </div>
        <div className="start-feature-tag">
          <span>📋</span> Gotowe podsumowanie
        </div>
      </div>

      {/* Baner: zgodność z ustawą deweloperską */}
      <div style={{
        width: '100%',
        maxWidth: 520,
        margin: '0 auto 32px',
        padding: '16px 20px',
        background: '#f0fdf4',
        border: '1px solid #bbf7d0',
        borderRadius: 10,
        textAlign: 'left',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: 12,
        }}>
          <span style={{ fontSize: 22, flexShrink: 0 }}>🏛️</span>
          <div>
            <div style={{
              fontFamily: 'Alata, sans-serif',
              fontSize: 14,
              color: '#166534',
              marginBottom: 6,
            }}>
              Nasze strony są zgodne z nową ustawą deweloperską
            </div>
            <p style={{
              fontFamily: 'IBM Plex Sans, sans-serif',
              fontSize: 13,
              color: '#166534',
              lineHeight: 1.55,
              margin: 0,
            }}>
              Każda strona stworzona przez TwistedPixel jest gotowa na wymogi
              <strong> art. 19b ustawy z dnia 20.05.2021 r.</strong> — pełna
              jawność cen ofertowych, integracja z dane.gov.pl i automatyczna
              aktualizacja danych. Bezpieczeństwo prawne bez dodatkowego wysiłku.
            </p>
          </div>
        </div>
        <div style={{
          marginTop: 10,
          display: 'flex',
          flexWrap: 'wrap',
          gap: 8,
        }}>
          {[
            '✓ Jawność cen ofertowych',
            '✓ Integracja dane.gov.pl',
            '✓ Codzienne aktualizacje',
            '✓ Pełna zgodność prawna',
          ].map(t => (
            <span key={t} style={{
              fontFamily: 'IBM Plex Sans, sans-serif',
              fontSize: 12,
              fontWeight: 600,
              color: '#166534',
              background: '#dcfce7',
              padding: '3px 10px',
              borderRadius: 99,
            }}>{t}</span>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <button className="btn btn-cta" onClick={onStart} type="button">
        Rozpocznij konfigurację →
      </button>
    </div>
  );
}
