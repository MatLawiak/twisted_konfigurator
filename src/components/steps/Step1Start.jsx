/**
 * Krok 1 – Start
 * Ekran powitalny z krótkim opisem i przyciskiem CTA.
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
        <span>Twoja inwestycja</span>{' '}
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
        <div className="start-feature-tag">
          <span>🆓</span> Bezpłatne
        </div>
      </div>

      {/* CTA Button */}
      <button className="btn btn-cta" onClick={onStart} type="button">
        Rozpocznij konfigurację →
      </button>
    </div>
  );
}
