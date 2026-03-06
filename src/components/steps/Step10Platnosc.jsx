/**
 * Krok 10 – Dziękujemy!
 * Strona pojawi się na hostingu w ciągu 24h.
 */
import React from 'react';

export default function Step10Platnosc({ formData, onRestart }) {
  const nazwa = formData.nazwaInwestycji
    ? `inwestycji „${formData.nazwaInwestycji}"`
    : 'Twojej inwestycji';

  return (
    <div className="step-content step-done">
      <div className="step-done-icon">✓</div>

      <h2>Dziękujemy za zamówienie!</h2>

      <p>
        Zamówienie dla {nazwa} zostało przyjęte.
        Nasz zespół skontaktuje się z Tobą w ciągu kilku godzin.
      </p>

      <div className="step-done-info-card">
        <p style={{ fontFamily: 'IBM Plex Sans', fontWeight: 700, fontSize: 14, marginBottom: 12 }}>
          Co się teraz dzieje?
        </p>
        <ul>
          <li>Nasz specjalista przegląda Twoje odpowiedzi</li>
          <li>Przygotowujemy projekt i konfigurację strony</li>
          <li>Skontaktujemy się telefonicznie lub mailowo</li>
          <li>Po akceptacji – wdrożenie i uruchomienie strony</li>
        </ul>
      </div>

      {/* 24h obietnica */}
      <div className="step-done-24h">
        <span style={{ fontSize: 22 }}>🚀</span>
        Twoja strona pojawi się na hostingu w ciągu <strong style={{ marginLeft: 4 }}>24 godzin</strong>
      </div>

      <div
        style={{
          marginTop: 20,
          padding: '14px 20px',
          background: '#f0fdf4',
          border: '1px solid #bbf7d0',
          borderRadius: 'var(--radius-sm)',
          maxWidth: 460,
          margin: '20px auto 0',
          fontFamily: 'IBM Plex Sans, sans-serif',
          fontSize: 13,
          color: '#166534',
          lineHeight: 1.6,
        }}
      >
        <strong style={{ display: 'block', marginBottom: 4 }}>🛡️ Gwarancja zwrotu</strong>
        Jeśli z jakiegoś powodu zrezygnujesz przed rozpoczęciem prac –
        zwrócimy pełną kwotę bez pytań.
      </div>

      <button
        className="btn btn-back"
        onClick={onRestart}
        type="button"
        style={{ marginTop: 36 }}
      >
        ← Zacznij od nowa
      </button>
    </div>
  );
}
