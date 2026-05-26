(function () {
  'use strict';

  const langToggle = document.getElementById('langToggle');
  const themeToggle = document.getElementById('themeToggle');
  const LANG_KEY = 'labo-lang-preference';
  const THEME_KEY = 'labo-theme-preference';
  const DEFAULT_LANG = 'en';
  const DEFAULT_THEME = 'light';

  function setLanguage(lang) {
    document.body.classList.toggle('lang-en', lang === 'en');
    document.documentElement.lang = lang === 'en' ? 'en' : 'es';

    const spans = langToggle.querySelectorAll('span');
    spans[0].textContent = lang === 'en' ? 'EN' : 'ES';
    spans[0].className = 'lang-active';
    spans[2].textContent = lang === 'en' ? 'ES' : 'EN';
    spans[2].className = 'lang-inactive';

    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch (e) {}
  }

  function getStoredLanguage() {
    try {
      return localStorage.getItem(LANG_KEY);
    } catch (e) {
      return null;
    }
  }

  function toggleLanguage() {
    const currentLang = document.body.classList.contains('lang-en') ? 'en' : 'es';
    setLanguage(currentLang === 'en' ? 'es' : 'en');
  }

  function setTheme(theme) {
    document.body.classList.toggle('dark', theme === 'dark');
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch (e) {}
  }

  function getStoredTheme() {
    try {
      return localStorage.getItem(THEME_KEY);
    } catch (e) {
      return null;
    }
  }

  function toggleTheme() {
    const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  }

  const storedLang = getStoredLanguage() || DEFAULT_LANG;
  setLanguage(storedLang);

  const storedTheme = getStoredTheme() || DEFAULT_THEME;
  setTheme(storedTheme);

  langToggle.addEventListener('click', toggleLanguage);
  themeToggle.addEventListener('click', toggleTheme);
})();
