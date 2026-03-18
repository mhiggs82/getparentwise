/**
 * ParentWise Design System — behaviours
 * Handles: theme toggle, FAQ accordion (.pw-faq-*), scroll reveal (.pw-reveal).
 * Theme is driven by  data-mode="dark"|"light"  on <html>.
 */
(function () {
  'use strict';

  function applyTheme(mode) {
    document.documentElement.setAttribute('data-mode', mode);
    localStorage.setItem('pw-theme', mode);
  }

  document.addEventListener('DOMContentLoaded', function () {

    /* ── 1. Theme toggle ─────────────────────────────────────────── */
    var toggleBtn =
      document.getElementById('themeToggle') ||
      document.querySelector('.pw-theme-toggle, .theme-toggle');

    if (toggleBtn) {
      toggleBtn.addEventListener('click', function () {
        var current = document.documentElement.getAttribute('data-mode');
        applyTheme(current === 'dark' ? 'light' : 'dark');
      });
    }

    /* ── 2. FAQ accordion ────────────────────────────────────────── */
    /*
     * Markup contract:
     *   <div class="pw-faq">
     *     <div class="pw-faq-item">
     *       <button class="pw-faq-q" aria-expanded="false">
     *         Question <span class="pw-faq-chevron">▾</span>
     *       </button>
     *       <div class="pw-faq-a">Answer</div>
     *     </div>
     *   </div>
     *
     * Clicking a .pw-faq-q toggles .open on its parent .pw-faq-item.
     * Only one item per .pw-faq container can be open at a time.
     */
    document.querySelectorAll('.pw-faq-q').forEach(function (q) {
      q.addEventListener('click', function () {
        var item = q.closest('.pw-faq-item');
        if (!item) return;

        var isOpen = item.classList.contains('open');

        // Collapse all siblings in the same accordion
        var container = item.closest('.pw-faq') || item.parentNode;
        container.querySelectorAll('.pw-faq-item.open').forEach(function (el) {
          el.classList.remove('open');
          var qEl = el.querySelector('.pw-faq-q');
          if (qEl) qEl.setAttribute('aria-expanded', 'false');
        });

        // Expand this item if it was closed
        if (!isOpen) {
          item.classList.add('open');
          q.setAttribute('aria-expanded', 'true');
        }
      });
    });

    /* ── 3. Scroll reveal ────────────────────────────────────────── */
    /*
     * Add  class="pw-reveal"  to any element that should animate in
     * as it enters the viewport. The CSS handles the fade + slide.
     * Use  pw-reveal:nth-child  stagger for grid items automatically.
     */
    if ('IntersectionObserver' in window) {
      var revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });

      document.querySelectorAll('.pw-reveal').forEach(function (el) {
        revealObserver.observe(el);
      });
    } else {
      // Graceful fallback for very old browsers
      document.querySelectorAll('.pw-reveal').forEach(function (el) {
        el.classList.add('visible');
      });
    }

  });

}());
