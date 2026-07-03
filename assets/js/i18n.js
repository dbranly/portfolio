function applyTranslations(lang, t) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[lang] && t[lang][key] !== undefined) {
      el.innerHTML = t[lang][key];
    }
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  document.documentElement.lang = lang;
  localStorage.setItem('pf-lang', lang);
}

function initI18n(translations) {
  const saved = localStorage.getItem('pf-lang') || 'fr';
  applyTranslations(saved, translations);
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyTranslations(btn.dataset.lang, translations));
  });
}
