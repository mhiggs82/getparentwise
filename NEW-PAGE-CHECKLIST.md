# New Page Checklist — ParentWise

Run through this before committing any new or significantly updated page.

---

## Starting Point

- [ ] Page was copied from `template.html`, not written from scratch
- [ ] All `<!-- TODO -->` comments have been filled in or removed
- [ ] Unused template sections (FAQ, CTA section, etc.) have been deleted

---

## `<head>` Wiring

- [ ] Anti-flash script is the **first `<script>`** in `<head>`, before any `<link>` or `<style>`
- [ ] Google Fonts `<link>` is present (DM Sans + Cormorant Garamond)
- [ ] Design system CSS: `<link rel="stylesheet" href="/parentwise-design-system.css" />`
- [ ] No CDN URL for the design system (CDN files may not exist)
- [ ] Page title ends with `— ParentWise`
- [ ] Favicon `<link>` points to `/assets/images/flower-lotus-duotone.svg`

---

## CSS Rules

- [ ] No `:root {}` token redefinitions in the page `<style>` block
- [ ] No `[data-mode="dark"] {}` token overrides in the page `<style>` block
- [ ] No re-implementation of components that exist in the design system (buttons, cards, FAQ, nav, footer, etc.)
- [ ] `* { box-sizing }` reset is NOT in the page `<style>` (covered by design system)
- [ ] `body { font-family; color }` is NOT in the page `<style>` (covered by design system)

---

## Gold Buttons

- [ ] Every gold button uses `color: var(--btn-gol-tx)` — **never `color: #fff` or `color: white`**
- [ ] Gold gradient is: `linear-gradient(135deg, var(--accent-gold-light) 0%, #B8943A 100%)`
- [ ] Gold hover darkens: `linear-gradient(135deg, var(--accent-gold) 0%, #9A7028 100%)`

---

## Components

- [ ] Top bar (if used): `<div class="pw-top-bar">` with text content
- [ ] Nav (if used): `pw-nav-bar` > `pw-nav-inner` > `pw-logo` + `pw-nav-cta`
- [ ] Hero eyebrow on dark background: `pw-eyebrow pw-eyebrow--dark`
- [ ] FAQ (if used): `pw-faq` > `pw-faq-item` > `button.pw-faq-q` + `div.pw-faq-a`
  - FAQ questions use `<button>`, not `<div>` or `<span>`
  - No custom `toggleFaq` JS — the design system handles it
- [ ] Scroll reveal: `pw-reveal` added to hero inner, section containers, card grids
  - No custom `IntersectionObserver` JS — the design system handles it
- [ ] Theme toggle button present just before `</body>`: `<button class="theme-toggle" id="themeToggle">`

---

## Scripts

- [ ] Design system JS at bottom of body: `<script src="/parentwise-design-system.js"></script>`
- [ ] No duplicate FAQ accordion JS (custom `toggleFaq`, `querySelectorAll('.faq-item')`, etc.)
- [ ] No duplicate scroll observer JS (custom `IntersectionObserver` on `.fade-in`, `.animate`, etc.)
- [ ] No duplicate theme toggle JS (custom `localStorage.setItem('pw-theme')` handlers)

---

## Light + Dark Mode

- [ ] Page has been viewed in **light mode** — all text is readable, no invisible elements
- [ ] Page has been viewed in **dark mode** — all text is readable, no invisible elements
- [ ] Any hardcoded colours (`#fff`, `#000`, `rgba(...)`) have been checked in both modes
- [ ] Images and SVG icons are visible in both modes

---

## Before Committing

- [ ] Validated HTML (no unclosed tags, no duplicate `id` attributes)
- [ ] Checked on mobile width (~375px)
- [ ] Opened `style-guide/index.html` to confirm components match the reference
- [ ] Commit message describes what the page is and what changed
