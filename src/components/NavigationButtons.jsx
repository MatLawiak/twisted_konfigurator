/**
 * NavigationButtons – przyciski Wstecz / Dalej widoczne pod każdym krokiem.
 */
import React from 'react';

/**
 * @param {number}   currentStep  - aktualny krok
 * @param {number}   totalSteps   - łączna liczba kroków
 * @param {boolean}  canGoNext    - czy przycisk "Dalej" jest aktywny
 * @param {Function} onBack       - obsługa kliknięcia Wstecz
 * @param {Function} onNext       - obsługa kliknięcia Dalej
 * @param {string}   [nextLabel]  - własna etykieta przycisku Dalej
 */
export default function NavigationButtons({
  currentStep,
  totalSteps,
  canGoNext,
  onBack,
  onNext,
  nextLabel,
}) {
  const isLast = currentStep === totalSteps - 1; // krok 9 = ostatni przed "Gotowe"

  const defaultNextLabel = isLast ? 'Przejdź do płatności' : 'Dalej →';
  const label = nextLabel ?? defaultNextLabel;

  return (
    <div className="step-nav">
      {currentStep > 2 && (
        <button className="btn btn-back" onClick={onBack} type="button">
          ← Wstecz
        </button>
      )}
      <button
        className="btn btn-next"
        onClick={onNext}
        disabled={!canGoNext}
        type="button"
        style={{ marginLeft: currentStep <= 2 ? 'auto' : undefined }}
      >
        {label}
      </button>
    </div>
  );
}
