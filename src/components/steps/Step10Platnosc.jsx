/**
 * Krok 10 – Gotowe / Potwierdzenie zamówienia
 * Ekran końcowy wyświetlany po kliknięciu CTA z kroku 9.
 * W produkcji: tu podpinamy bramkę płatności (np. Stripe, PayU, Przelewy24).
 */
import React from 'react';

export default function Step10Platnosc({ formData, onRestart }) {
  const nazwa = formData.nazwaInwestycji
    ? `inwestycji „${formData.nazwaInwestycji}"`
    : 'Twojej inwestycji';

  return (
    <div className="step-content step-done">
      {/* Ikona sukcesu */}
      <div className="step-done-icon">✓</div>

      <h2>Dziękujemy za konfigurację!</h2>

      <p>
        Twoje zamówienie dla {nazwa} zostało przyjęte.
        Skontaktujemy się z Tobą w ciągu <strong>24 godzin</strong>.
      </p>

      {/* Informacja o dalszych krokach */}
      <div className="step-done-info-card">
        <p>
          <strong style={{ display: 'block', marginBottom: 12, fontSize: 15 }}>
            Co się teraz dzieje?
          </strong>
        </p>
        <ul style={{ paddingLeft: 20, color: '#374151', fontSize: 14, lineHeight: 1.8 }}>
          <li>Nasz specjalista przeanalizuje Twoje odpowiedzi</li>
          <li>Przygotujemy szczegółową wycenę projektu</li>
          <li>Skontaktujemy się z Tobą telefonicznie lub mailowo</li>
          <li>Po akceptacji – strona pojawi się w ciągu 24 godzin na Twojej domenie</li>
        </ul>
      </div>

      {/* Nota o płatności */}
      <div
        style={{
          marginTop: 24,
          padding: '16px 20px',
          background: 'var(--tp-purple-light)',
          borderRadius: 'var(--radius-sm)',
          maxWidth: 440,
          margin: '24px auto 0',
          fontSize: 13,
          color: 'var(--tp-purple-dark)',
          lineHeight: 1.6,
        }}
      >
        <strong style={{ display: 'block', marginBottom: 4 }}>
          Bramka płatności
        </strong>
        Po akceptacji oferty otrzymasz link do bezpiecznej płatności online (Przelewy24 / karta).
      </div>

      {/* Restart konfiguratora */}
      <button
        className="btn btn-back"
        onClick={onRestart}
        type="button"
        style={{ marginTop: 32 }}
      >
        ← Zacznij od nowa
      </button>
    </div>
  );
}
