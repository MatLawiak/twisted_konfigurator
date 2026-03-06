/**
 * Twisted Pixel – Konfigurator inwestycji
 * Plik konfiguracji: definicje kroków, opcji i logika rekomendacji.
 */

// ============================================================
// DEFINICJE KROKÓW
// ============================================================
export const STEPS = [
  { id: 1,  label: 'Start' },
  { id: 2,  label: 'Inwestycja' },
  { id: 3,  label: 'Strona' },
  { id: 4,  label: 'Branding' },
  { id: 5,  label: 'Domena' },
  { id: 6,  label: 'Styl' },
  { id: 7,  label: 'Wizualizacje' },
  { id: 8,  label: 'Szablon' },
  { id: 9,  label: 'Podsumowanie' },
  { id: 10, label: 'Gotowe' },
];

// Kroki z widocznym licznikiem paska postępu (Start i Gotowe nie liczą się)
export const VISIBLE_STEPS = STEPS.filter(s => s.id > 1 && s.id < 10);
export const TOTAL_VISIBLE = VISIBLE_STEPS.length; // 8

// ============================================================
// KROK 2 – Typ inwestycji
// ============================================================
export const INVESTMENT_STATUS_OPTIONS = [
  {
    value: 'w-trakcie',
    label: 'Tak – inwestycja jest w trakcie realizacji',
    icon: '🏗️',
    desc: 'Budowa trwa, potrzebuję marketingu już teraz',
  },
  {
    value: 'planowanie',
    label: 'Tak – inwestycja jest na etapie planowania',
    icon: '📋',
    desc: 'Mam projekt, zaczynam przygotowania',
  },
  {
    value: 'jeszcze-nie',
    label: 'Jeszcze nie posiadam inwestycji',
    icon: '💡',
    desc: 'Szukam informacji o tym, czego będę potrzebować',
  },
];

export const INVESTMENT_TYPE_OPTIONS = [
  {
    value: 'mieszkania',
    label: 'Mieszkania',
    icon: '🏢',
    desc: 'Osiedla mieszkaniowe, bloki, kamienice',
  },
  {
    value: 'domy',
    label: 'Domy jednorodzinne',
    icon: '🏠',
    desc: 'Domy wolnostojące, szeregowce, bliźniaki',
  },
  {
    value: 'apartamenty',
    label: 'Apartamenty',
    icon: '🏙️',
    desc: 'Apartamentowce, apartamenty inwestycyjne',
  },
  {
    value: 'premium',
    label: 'Inwestycja premium',
    icon: '💎',
    desc: 'Ekskluzywne nieruchomości wysokiego standardu',
  },
  {
    value: 'mixed-use',
    label: 'Mixed-use',
    icon: '🏗️',
    desc: 'Wielofunkcyjne obiekty komercyjno-mieszkalne',
  },
];

// ============================================================
// KROK 3 – Strona internetowa
// ============================================================
export const WEBSITE_OPTIONS = [
  {
    value: 'tak',
    label: 'Tak, mam stronę',
    icon: '✅',
    desc: 'Strona już istnieje i działa',
  },
  {
    value: 'nie',
    label: 'Nie mam strony',
    icon: '❌',
    desc: 'Inwestycja nie ma jeszcze strony internetowej',
  },
  {
    value: 'chce-nowa',
    label: 'Chcę nową stronę',
    icon: '🆕',
    desc: 'Mam stronę, ale chcę ją zastąpić nową',
  },
];

// ============================================================
// KROK 4 – Identyfikacja wizualna
// ============================================================
export const LOGO_OPTIONS = [
  { value: 'tak', label: 'Tak, mam logo', icon: '✅' },
  { value: 'nie', label: 'Nie mam logo', icon: '❌' },
];

export const IDENTITY_OPTIONS = [
  { value: 'tak',       label: 'Tak, pełna identyfikacja', icon: '✅' },
  { value: 'czesciowo', label: 'Częściowo (tylko część elementów)', icon: '🔶' },
  { value: 'nie',       label: 'Nie mam identyfikacji', icon: '❌' },
];

export const MATERIALS_OPTIONS = [
  { value: 'tak', label: 'Tak, mam materiały', icon: '✅' },
  { value: 'nie', label: 'Nie mam materiałów', icon: '❌' },
];

// ============================================================
// KROK 5 – Domena
// ============================================================
export const DOMAIN_OPTIONS = [
  {
    value: 'tak',
    label: 'Tak, mam domenę',
    icon: '✅',
    desc: 'Zarejestrowana i gotowa do użycia',
  },
  {
    value: 'nie',
    label: 'Nie mam domeny',
    icon: '❌',
    desc: 'Trzeba będzie zarejestrować domenę dla inwestycji',
  },
  {
    value: 'nie-wiem',
    label: 'Nie wiem',
    icon: '❓',
    desc: 'Nie jestem pewien, czy inwestycja ma domenę',
  },
];

// ============================================================
// KROK 6 – Styl strony
// ============================================================
export const STYLE_OPTIONS = [
  {
    value: 'minimalizm',
    label: 'Nowoczesny minimalizm',
    desc: 'Czyste linie, przestrzeń, elegancja',
    cssClass: 'style-minimalizm',
    emoji: '◻️',
  },
  {
    value: 'premium',
    label: 'Luksusowy premium',
    desc: 'Ciemne tła, ekskluzywny charakter',
    cssClass: 'style-premium',
    emoji: '🌑',
  },
  {
    value: 'sprzedazowy',
    label: 'Sprzedażowy',
    desc: 'Skupiony na konwersji i leadach',
    cssClass: 'style-sprzedazowy',
    emoji: '🎯',
  },
  {
    value: 'architektoniczny',
    label: 'Architektoniczny',
    desc: 'Duże zdjęcia, rzuty, technika',
    cssClass: 'style-architektoniczny',
    emoji: '📐',
  },
];

// ============================================================
// KROK 7 – Wizualizacje
// ============================================================
export const VISUALIZATION_OPTIONS = [
  {
    value: 'tak',
    label: 'Tak, mam wizualizacje',
    icon: '✅',
    desc: 'Gotowe renderingi 3D lub fotografie inwestycji',
  },
  {
    value: 'nie',
    label: 'Nie mam wizualizacji',
    icon: '❌',
    desc: 'Inwestycja nie posiada wizualizacji architektonicznych',
  },
  {
    value: 'w-trakcie',
    label: 'Są w trakcie przygotowania',
    icon: '⏳',
    desc: 'Wizualizacje są zlecone lub w trakcie tworzenia',
  },
];

// ============================================================
// KROK 8 – Szablony stron
// ============================================================
export const TEMPLATE_EXAMPLES = [
  {
    id: 'malta',
    name: 'Malta View',
    desc: 'Luksusowy premium',
    style: 'premium',
    bgColor: 'linear-gradient(135deg, #1a1814 0%, #2d2820 100%)',
    emoji: '💫',
    previewUrl: 'https://maltaview.pl/',
  },
  {
    id: 'ogrody',
    name: 'Ogrody Potasze',
    desc: 'Nowoczesny minimalizm',
    style: 'minimalizm',
    bgColor: 'linear-gradient(135deg, #f5f5f0 0%, #ddddd8 100%)',
    emoji: '🌿',
    previewUrl: 'https://ogrodypotasze.pl/',
  },
  {
    id: 'atinwest',
    name: 'AT-Inwest',
    desc: 'Sprzedażowy',
    style: 'sprzedazowy',
    bgColor: 'linear-gradient(135deg, #fdf0e8 0%, #ffd4b5 100%)',
    emoji: '🎯',
    previewUrl: 'https://at-inwest.pl/',
  },
  {
    id: 'artbud',
    name: 'ArtBud Group',
    desc: 'Architektoniczny',
    style: 'architektoniczny',
    bgColor: 'linear-gradient(135deg, #e8eef2 0%, #b8cdd8 100%)',
    emoji: '📐',
    previewUrl: 'https://artbudgroup.pl/',
  },
];

// ============================================================
// LOGIKA REKOMENDACJI
// ============================================================

/**
 * Na podstawie odpowiedzi użytkownika generuje listę rekomendowanych
 * usług oraz proponowany pakiet.
 *
 * @param {Object} data - formData z App.jsx
 * @returns {{ services: Array, packageName: string, packageDesc: string }}
 */
export function generateRecommendations(data) {
  const services = [];

  // --- Branding ---
  if (data.maLogo === 'nie') {
    services.push({
      id: 'logo',
      label: 'Stworzenie logo inwestycji',
      category: 'branding',
      priority: 'high',
      icon: '🎨',
    });
  }

  if (data.maIdentyfikacje === 'nie') {
    services.push({
      id: 'identyfikacja',
      label: 'Pełna identyfikacja wizualna',
      category: 'branding',
      priority: 'high',
      icon: '🖌️',
    });
  } else if (data.maIdentyfikacje === 'czesciowo') {
    services.push({
      id: 'identyfikacja-rozbudowa',
      label: 'Rozbudowa identyfikacji wizualnej',
      category: 'branding',
      priority: 'medium',
      icon: '🖌️',
    });
  }

  if (data.maMaterialy === 'nie') {
    services.push({
      id: 'materialy',
      label: 'Materiały sprzedażowe (broszury, karty)',
      category: 'branding',
      priority: 'medium',
      icon: '📄',
    });
  }

  // --- Web ---
  if (data.maStrone === 'nie' || data.maStrone === 'chce-nowa') {
    services.push({
      id: 'strona',
      label: 'Strona internetowa inwestycji',
      category: 'web',
      priority: 'high',
      icon: '🌐',
    });
  }

  if (data.maDomene === 'nie' || data.maDomene === 'nie-wiem') {
    services.push({
      id: 'domena',
      label: 'Rejestracja i konfiguracja domeny',
      category: 'web',
      priority: 'high',
      icon: '🔗',
    });
  }

  // --- Content ---
  if (data.maWizualizacje === 'nie') {
    services.push({
      id: 'wizualizacje',
      label: 'Wizualizacje architektoniczne 3D',
      category: 'content',
      priority: 'medium',
      icon: '🏗️',
    });
  } else if (data.maWizualizacje === 'w-trakcie') {
    services.push({
      id: 'wizualizacje-wsparcie',
      label: 'Wsparcie i optymalizacja wizualizacji',
      category: 'content',
      priority: 'low',
      icon: '🏗️',
    });
  }

  // --- Dobór pakietu ---
  const highCount = services.filter(s => s.priority === 'high').length;

  let packageName = 'Pakiet Optymalizacja';
  let packageDesc =
    'Uzupełnienie i optymalizacja istniejących materiałów marketingowych Twojej inwestycji.';

  if (highCount >= 3) {
    packageName = 'Pakiet Kompletny';
    packageDesc =
      'Kompleksowy zestaw usług od podstaw – brand, strona i treści – wszystko czego potrzebuje nowa inwestycja.';
  } else if (highCount >= 1) {
    packageName = 'Pakiet Rozbudowany';
    packageDesc =
      'Uzupełnienie kluczowych elementów marketingowych wraz z wdrożeniem strony internetowej.';
  }

  return { services, packageName, packageDesc };
}

// ============================================================
// WALIDACJA KROKÓW
// ============================================================

/**
 * Sprawdza czy dany krok ma wypełnione wymagane pola.
 * @param {number} step
 * @param {Object} formData
 * @returns {boolean}
 */
export function isStepValid(step, formData) {
  switch (step) {
    case 2:
      return !!formData.statusInwestycji && !!formData.typInwestycji;
    case 3:
      return !!formData.maStrone;
    case 4:
      return !!formData.maLogo && !!formData.maIdentyfikacje && !!formData.maMaterialy;
    case 5:
      return !!formData.maDomene;
    case 6:
      return !!formData.stylStrony;
    case 7:
      return !!formData.maWizualizacje;
    case 8:
      return !!formData.wybranaStrona;
    default:
      return true;
  }
}
