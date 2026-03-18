/**
 * ParentWise Design System — behaviors
 * Handles theme toggle and persists preference to localStorage.
 * Reads/writes  data-mode="dark"|"light"  on  <html>.
 */
(function () {
  'use strict';

  function applyTheme(mode) {
    document.documentElement.setAttribute('data-mode', mode);
    localStorage.setItem('pw-theme', mode);
  }

  document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('themeToggle') ||
              document.querySelector('.pw-theme-toggle, .theme-toggle');
    if (!btn) return;

    btn.addEventListener('click', function () {
      var current = document.documentElement.getAttribute('data-mode');
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  });
}());
