# ParentWise Brand Reference — Dark Mode

## Overview
Dark mode presents ParentWise in a deep, reflective palette suited to evening reading and users who prefer reduced-glare interfaces. The brand warmth is preserved through gold accents and muted purple highlights on a charcoal/midnight base.

---

## Colour Palette

| Token | Hex / Value | Usage |
|---|---|---|
| `--bg-page` | `#111118` | Page outer background (deep canvas) |
| `--bg-primary` | `#1C1C26` | Main section background |
| `--bg-secondary` | `#22222E` | Secondary / card-level background |
| `--bg-tint` | `#201E2B` | Tinted section background |
| `--bg-dark` | `linear-gradient(160deg, #0E0E18 0%, #1A1A26 100%)` | Dark CTA section (deeper) |
| `--text-primary` | `#EDE7D8` | Primary body text |
| `--text-secondary` | `rgba(237, 231, 216, 0.68)` | Secondary body text |
| `--text-muted` | `rgba(237, 231, 216, 0.38)` | Placeholder, metadata |
| `--text-on-dark` | `#EDE7D8` | Headings on dark backgrounds |
| `--text-on-dark-sub` | `rgba(237, 231, 216, 0.78)` | Sub-text on dark backgrounds |
| `--purple` | `#9B7ED4` | Primary brand accent (lightened for dark bg) |
| `--purple-deep` | `#7B5AB5` | Hover states, gradient ends |
| `--purple-light` | `#BBA2E8` | Subtle accents, focus rings |
| `--purple-pale` | `rgba(107, 76, 163, 0.22)` | Backgrounds for purple-tinted cards |
| `--purple-glow` | `rgba(155, 126, 212, 0.20)` | Shadows, glows |
| `--gold` | `#C9A96E` | Gold accent — CTAs, decorative rules |
| `--gold-light` | `#D4B97E` | Lighter gold for text |
| `--card-bg` | `#26263A` | Card / modal background |
| `--card-border` | `rgba(155, 126, 212, 0.18)` | Card border |
| `--shadow` | `rgba(0, 0, 0, 0.40)` | Box shadows |

---

## Typography

### Typefaces
Same as light mode:
- **Display / Serif:** Cormorant Garamond — quotes, author names, pullquotes
- **Body / UI:** DM Sans — body text, labels, buttons

### Scale
Identical to light mode. Font sizes and weights do not change between modes.

| Role | Size | Weight | Notes |
|---|---|---|---|
| H1 | `clamp(2.2rem, 5.5vw, 3.4rem)` | 600 | Line height 1.15, tracking -0.02em |
| H2 | `1.7rem` | 600 | Line height 1.3, tracking -0.01em |
| Emphasis | `1.35rem` | 500 | Line height 1.5 |
| Body | `1rem` | 400 | Line height 1.8 |
| Section label | `0.68rem` | 600 | Uppercase, tracking 0.2em |
| Button | `12px` | 700 | Uppercase, tracking 0.16em |

---

## Component Tokens

### Top Bar
- Background: `#0E0E18`
- Text: `--gold-light`
- Same typographic treatment as light mode

### Hero
- Background: `linear-gradient(155deg, #3D2C6B 0%, #2A1F52 60%, #1A1230 100%)`
- Heading colour: `--text-on-dark`
- Sub-text: `rgba(237, 231, 216, 0.78)`

### Section Backgrounds (dark equivalents)
| Light class | Dark background |
|---|---|
| `--cream` | `#1C1C26` |
| `--white` | `#22222E` |
| `--tint` | `#201E2B` |
| `--purple` | `linear-gradient(155deg, #3D2C6B 0%, #2A1F52 100%)` |
| `--dark` | `linear-gradient(160deg, #0E0E18 0%, #1A1A26 100%)` |

### HR Accent
- Same dimensions and gradient as light mode — gold-to-purple reads well on dark backgrounds

### Mirror Lines (audience)
- Text: `--text-primary` (`#EDE7D8`)
- Gold bullet `›` unchanged

### Separation Stakes Box
- Background: `rgba(107, 76, 163, 0.14)` with `rgba(155, 126, 212, 0.25)` left border
- Text: `--text-secondary`

### Sovereignty Statement
- Background: `rgba(107, 76, 163, 0.18)`
- Border-top: `rgba(155, 126, 212, 0.25)`
- Text: `#BBA2E8` italic

### Phase Dividers
- Border: `rgba(237, 231, 216, 0.10)`

### CTA Button
- Identical to light mode — gold gradient unchanged

### Assessment Modal
- Background: `--card-bg` (`#26263A`)
- Input border: `rgba(155, 126, 212, 0.30)`
- Input background: `#1C1C26`
- Input text: `--text-primary`

### Footer
- Background: `#0E0E18`
- Same text opacity treatments as light mode but on a deeper base

---

## Mode Toggle
- Placed in the top-right corner of the `.top-bar` or as a floating pill
- Icon: sun (☀) for light, moon (☽) for dark
- Persisted via `localStorage` key `pw-theme`
- Respect `prefers-color-scheme` as the default if no stored preference

---

## Tone & Feel
Intimate, focused, nocturnal-scholarly. The deep charcoal grounds the content while purple and gold maintain brand continuity. Dark mode should feel like reading a well-designed book by lamplight — not a generic dark UI.
