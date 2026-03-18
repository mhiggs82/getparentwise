# ParentWise — Claude Code Instructions

This file is read automatically at the start of every Claude Code session in this repo.
Follow all rules here before writing or modifying any HTML, CSS, or JS.

---

## Repo Overview

**Five live pages:**
| Path | Purpose |
|------|---------|
| `/index.html` | Homepage |
| `/offers/index.html` | Offerings landing page |
| `/first/index.html` | 5-Day First Steps challenge |
| `/path/index.html` | 90-Day Pathway coaching |
| `/book/index.html` | Book sales page |

**Design system files (served from repo root):**
| File | Purpose |
|------|---------|
| `/parentwise-design-system.css` | All tokens + component classes |
| `/parentwise-design-system.js` | Theme toggle, FAQ accordion, scroll reveal |
| `/template.html` | Starter file for every new page |
| `/style-guide/index.html` | Live visual reference for all components |

---

## Starting a New Page

**Always copy `template.html`.** Never start from scratch.

```bash
cp template.html new-page/index.html
```

Then fill every `<!-- TODO -->` comment. Remove sections you don't need.
Run through `NEW-PAGE-CHECKLIST.md` before committing.

---

## Design Tokens

All tokens live in `parentwise-design-system.css`. **Never redefine them in a page's `<style>` block.**

Key tokens to know:

```css
--bg-primary:      #F5F1E8   /* warm cream — default page background */
--bg-tint:         #EDE8DC   /* warm taupe — alternate section background */
--purple:          #6B4CA3   /* brand purple */
--accent-gold:     #C9A96E   /* brand gold */
--accent-gold-light: #D4B97E
--btn-gol-tx:      #1A1000   /* ALWAYS use this for text on gold buttons */
--ink:             #2A2118   /* primary text */
--ink-mid:         #5C4F3A   /* secondary text */
```

Dark mode tokens are set on `[data-mode="dark"]`. Theme is driven by `data-mode` on `<html>`, **not** `data-theme`.

---

## Non-Negotiable Rules

### 1. Anti-flash script must come first
This script must be the **first `<script>` in `<head>`**, before any `<link>` or `<style>`.
It prevents a light/dark flicker on page load.

```html
<script>(function(){var t=localStorage.getItem('pw-theme');var d=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(t!=='light'&&d))document.documentElement.setAttribute('data-mode','dark');else document.documentElement.setAttribute('data-mode','light')})();</script>
```

### 2. Gold buttons never use white text
Gold buttons are light — white text fails WCAG contrast.

```css
/* ✅ Correct */
color: var(--btn-gol-tx);   /* #1A1000 — dark brown */

/* ❌ Wrong */
color: #fff;
color: white;
```

This applies to every element with a gold gradient background:
`linear-gradient(135deg, var(--accent-gold-light) 0%, #B8943A 100%)`

### 3. CSS links must point to local files
```html
<!-- ✅ Correct -->
<link rel="stylesheet" href="/parentwise-design-system.css" />
<script src="/parentwise-design-system.js"></script>

<!-- ❌ Wrong — CDN files may not exist yet -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/..." />
```

### 4. Never redefine design tokens in a page's `<style>` block
```css
/* ❌ Never do this in a page */
:root { --purple: #6B4CA3; }
[data-mode="dark"] { --bg-primary: #1C1C26; }
```

### 5. Page-specific styles belong in the inline `<style>` block
Only unique layout rules and one-off overrides. Never re-implement a component that already exists in the design system.

```css
/* ✅ OK in a page <style> */
.my-unique-grid { display: grid; grid-template-columns: 1fr 2fr; }

/* ❌ Not OK — already in the design system */
.my-btn { background: linear-gradient(...); border-radius: 6px; ... }
.my-faq-item { border-bottom: 1px solid var(--divider); ... }
```

---

## Component Classes (use these, don't reinvent them)

### Layout
```html
<div class="pw-container">        <!-- max-width 860px, centered -->
<div class="pw-container-wide">   <!-- max-width 1100px -->
<div class="pw-container-narrow"> <!-- max-width 640px -->
```

### Sections
```html
<section class="pw-section">       <!-- cream bg -->
<section class="pw-section-alt">   <!-- tinted bg -->
<section class="pw-section-white"> <!-- white bg -->
<section class="pw-cta-section">   <!-- purple bg, closing CTA -->
```

### Navigation & Top Bar
```html
<div class="pw-top-bar">Cohort 3 now open</div>

<nav class="pw-nav-bar">
  <div class="pw-nav-inner">
    <a href="/offers" class="pw-logo">Parent<span>Wise</span></a>
    <a href="/first" class="pw-nav-cta">Get Started</a>
  </div>
</nav>
```

### Hero
```html
<section class="pw-hero pw-hero--wave">
  <div class="pw-hero-inner pw-reveal">
    <span class="pw-eyebrow pw-eyebrow--dark">Eyebrow</span>
    <h1>Headline</h1>
    <p class="pw-lead pw-lead--on-dark">Subhead copy.</p>
    <a href="#" class="pw-btn pw-btn-gold">CTA Label</a>
  </div>
</section>
```

### Typography
```html
<span class="pw-eyebrow">           <!-- pill label, purple on cream -->
<span class="pw-eyebrow pw-eyebrow--dark"> <!-- pill label on dark bg -->
<h2 class="pw-heading">            <!-- section heading -->
<p class="pw-lead">                 <!-- larger intro paragraph -->
<hr class="pw-rule-gold" />        <!-- thin gold rule -->
```

### Buttons
```html
<a class="pw-btn pw-btn-gold">         <!-- gold fill, dark text -->
<a class="pw-btn pw-btn-gold-outline"> <!-- gold outline -->
<a class="pw-btn pw-btn-purple">       <!-- purple fill -->
<a class="pw-btn pw-btn-outline">      <!-- purple outline -->
```

### Cards
```html
<div class="pw-card pw-card-gold pw-reveal">
  <h3>Heading</h3>
  <p>Body copy.</p>
  <a href="#" class="pw-cbtn-outline">Learn more →</a>
</div>
```

### FAQ Accordion
The JS in `parentwise-design-system.js` handles this automatically — no custom JS needed.

```html
<div class="pw-faq">
  <div class="pw-faq-item">
    <button class="pw-faq-q" aria-expanded="false">
      Question text
      <span class="pw-faq-chevron" aria-hidden="true">▾</span>
    </button>
    <div class="pw-faq-a">Answer text.</div>
  </div>
</div>
```

### Scroll Reveal
Add `pw-reveal` to any element that should animate in on scroll. The JS handles the rest.

```html
<section class="pw-section">
  <div class="pw-container pw-reveal">
    <!-- content -->
  </div>
</section>
```

### Footer
```html
<footer class="pw-footer">
  <div class="pw-footer-logo">
    <span class="pw-footer-name">Parent<span>Wise</span></span>
    <!-- lotus SVG here -->
  </div>
  <p class="pw-footer-tagline">Tagline.</p>
  <p class="pw-footer-copy">© 2025 ParentWise. All rights reserved.</p>
</footer>
```

### Theme Toggle
Place this just before `</body>`. The JS wires it up automatically.

```html
<button class="theme-toggle" id="themeToggle" aria-label="Toggle light/dark mode">
  <span class="icon-sun" aria-hidden="true">☀</span>
  <span class="icon-moon" aria-hidden="true">☽</span>
</button>
```

---

## Migrating an Existing Page

When updating an older page that uses custom classes instead of `pw-` classes:

1. **Add `pw-` classes additively** — don't break working styles by removing things prematurely
2. **Remove inline CSS only when the design system class fully covers it**
3. **Replace custom FAQ JS** with `pw-faq-*` markup (the DS JS handles it)
4. **Replace custom scroll observers** with `pw-reveal` class (the DS JS handles it)
5. **Remove `body { font-family; color; }` and `* { box-sizing }` resets** — covered by DS base styles
6. **Keep page-specific backgrounds** like `background: var(--bg-secondary)` if intentionally different from the DS default

---

## Dark Mode

- Theme is set via `data-mode="dark"` on `<html>`
- Toggled by `parentwise-design-system.js` — no custom toggle JS needed
- Token overrides for dark mode are already in `parentwise-design-system.css`
- Always test both modes after any styling change
- For eyebrows on dark backgrounds: use `pw-eyebrow--dark` modifier

---

## Style Guide

Open `/style-guide/index.html` in a browser to see every component rendered live with its class name. Use it as a reference before adding any new UI element.
