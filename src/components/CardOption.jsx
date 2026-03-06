/**
 * CardOption – reużywalny komponent karty do wyboru opcji (radio-style).
 * Wyświetla ikonę, tytuł, opis i wizualny wskaźnik zaznaczenia.
 */
import React from 'react';

/**
 * @param {string}   value      - wartość opcji
 * @param {string}   label      - tekst główny
 * @param {string}   [desc]     - opis pomocniczy (opcjonalny)
 * @param {string}   [icon]     - emoji lub tekst ikony
 * @param {string}   [selected] - aktualnie wybrana wartość
 * @param {Function} onSelect   - callback (value) => void
 */
export default function CardOption({ value, label, desc, icon, selected, onSelect }) {
  const isSelected = selected === value;

  return (
    <button
      className={`card-option${isSelected ? ' selected' : ''}`}
      onClick={() => onSelect(value)}
      type="button"
      aria-pressed={isSelected}
    >
      {icon && (
        <span className="card-option-icon" aria-hidden="true">
          {icon}
        </span>
      )}
      <span className="card-option-text">
        <span className="card-option-title">{label}</span>
        {desc && <span className="card-option-desc">{desc}</span>}
      </span>
      <span className="card-option-check" aria-hidden="true">
        {isSelected ? '✓' : ''}
      </span>
    </button>
  );
}
