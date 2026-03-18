# ParentWise Brand Reference — Light Mode

## Overview
Light mode is the default presentation for ParentWise. It conveys warmth, clarity, and grounded authority using cream backgrounds, deep purple accents, and gold highlights.

---

## Colour Palette

| Token | Hex / Value | Usage |
|---|---|---|
| `--bg-page` | `#C9C3B4` | Page outer background (canvas) |
| `--bg-primary` | `#F5F1E8` | Main section background (cream) |
| `--bg-secondary` | `#FDFCF9` | White sections, cards |
| `--bg-tint` | `#EAE4D4` | Tinted / warm cream sections |
| `--bg-dark` | `linear-gradient(160deg, #1A1A2E 0%, #2C2C2C 100%)` | Dark CTA section |
| `--text-primary` | `#1A1A1A` | Body text, headings on light backgrounds |
| `--text-secondary` | `rgba(26, 26, 26, 0.65)` | Secondary body text, captions |
| `--text-muted` | `rgba(26, 26, 26, 0.38)` | Placeholder, metadata |
| `--text-on-dark` | `#F5F1E8` | Text on dark/purple backgrounds |
| `--text-on-dark-sub` | `rgba(245, 241, 232, 0.82)` | Sub-text on dark backgrounds |
| `--purple` | `#6B4CA3` | Primary brand accent |
| `--purple-deep` | `#5A3D8F` | Hover states, gradients |
| `--purple-light` | `#9B7ED4` | Subtle accents, focus rings |
| `--purple-pale` | `#EDE7F8` | Backgrounds for purple-tinted cards |
| `--purple-glow` | `rgba(107, 76, 163, 0.18)` | Shadows, overlays |
| `--gold` | `#C9A96E` | Gold accent — CTAs, decorative rules |
| `--gold-light` | `#D4B97E` | Lighter gold for text on dark bg |
| `--card-bg` | `#FFFFFF` | Card / modal background |
| `--card-border` | `rgba(107, 76, 163, 0.14)` | Card border |
| `--shadow` | `rgba(107, 76, 163, 0.18)` | Box shadows |

---

## Typography

### Typefaces
- **Display / Serif:** Cormorant Garamond — used for quotes, author names, large pullquotes
- **Body / UI:** DM Sans — used for all body text, labels, buttons, navigation

### Scale
| Role | Size | Weight | Notes |
|---|---|---|---|
| H1 | `clamp(2.2rem, 5.5vw, 3.4rem)` | 600 | Line height 1.15, tracking -0.02em |
| H2 | `1.7rem` | 600 | Line height 1.3, tracking -0.01em |
| Emphasis | `1.35rem` | 500 | Line height 1.5 |
| Body | `1rem` | 400 | Line height 1.8 |
| Section label | `0.68rem` | 600 | Uppercase, tracking 0.2em |
| Button | `12px` | 700 | Uppercase, tracking 0.16em |
| Caption / meta | `0.7rem` | 400 | Uppercase or normal, tracking 0.06–0.1em |

---

## Component Tokens

### Top Bar
- Background: `--purple-deep`
- Text: `--gold-light`
- Font: DM Sans 11px, weight 600, uppercase, tracking 1.4px

### Hero
- Background: `linear-gradient(155deg, #7B5AB5 0%, #5A3D8F 60%, #3D2970 100%)`
- Heading colour: `--text-on-dark` (white/cream)
- Sub-text: `rgba(255,255,255,0.82)`

### Section Backgrounds
| Class | Background |
|---|---|
| `--cream` | `#F5F1E8` |
| `--white` | `#FDFCF9` |
| `--tint` | `#EAE4D4` |
| `--purple` | gradient purple |
| `--dark` | gradient dark |

### HR Accent
- Width: 48px, Height: 3px
- Gradient: `linear-gradient(90deg, #C9A96E, #9B7ED4)`

### CTA Button
- Background: `linear-gradient(135deg, #D4B97E 0%, #B8943A 100%)`
- Text: white, uppercase, 700 weight
- Padding: `18px 52px`
- Border radius: 6px
- Shadow: `0 4px 20px rgba(201,169,110,0.45)`

### Footer
- Background: `#1A1A1A`
- Logo text: `rgba(255,255,255,0.7)`, serif italic
- Logo accent span: `--gold-light`
- Tagline: `rgba(255,255,255,0.35)`
- Copyright: `rgba(255,255,255,0.2)`

---

## Tone & Feel
Calm, grounded, premium. No harsh contrasts. The cream-and-purple palette communicates expertise with warmth. Gold adds a sense of earned authority without ostentation.
