# ParentWise · Brand Design Reference

> **v2.3 · March 2026** — Dark Mode
> getparentwise.com · offers.marcushiggs.com

---

## Fixed Brand Colors

| Name | Hex | Usage |
|------|-----|-------|
| Deep Plum | `#5A3D8F` | Primary brand · headers |
| Brand Purple | `#6B4CA3` | CTAs · icons on light |
| Hero Violet | `#7B5AB5` | Gradient start |
| Deep Indigo | `#3D2970` | Gradient end |
| Honey Gold | `#D4B97E` | Button start · icons on dark |
| Gold Mid | `#C9A96E` | Labels · text on dark |
| Gold Deep | `#B8943A` | Button end · text on light |
| On-Gold Text | `#1A0E00` | 10.2:1 contrast — never changes |
| Warm Cream | `#F5F1E8` | Page bg (light) |
| Greige Canvas | `#C9C3B4` | Page surround (both modes) |
| Near Black | `#1A1A2E` | Page bg (dark) |
| Ghost Lavender | `#F0EAF8` | Primary text (dark) |
| Lavender Tint | `#EDE8F5` | Icon bg · hover (light) |

---

## Gradients

| Name | CSS Value |
|------|-----------|
| Hero | `linear-gradient(155deg, #7B5AB5 0%, #5A3D8F 45%, #3D2970 100%)` |
| Gold Button | `linear-gradient(135deg, #D4B97E 0%, #B8943A 100%)` |
| Dark Section | `linear-gradient(180deg, #1A1A2E 0%, #0F0820 100%)` |
| Dark Card | `linear-gradient(135deg, #2A1950 0%, #1A1035 100%)` |
| Chapter Bar | `linear-gradient(90deg, #5A3D8F 0%, #6B4CA3 100%)` |

---

## Dark Mode — Design Tokens

### Backgrounds

| Token | Value |
|-------|-------|
| `--bg-page` | `#1A1A2E` |
| `--bg-alt` | `#120D24` |
| `--bg-card` | `#211545` |
| `--bg-card-feat` | `#2A1A52` |
| `--bg-inset` | `#0E0919` |
| `--bg-overlay` | `rgba(107,76,163,.2)` |
| `--footer-bg` | `#08040F` |

### Text

| Token | Value | Contrast |
|-------|-------|----------|
| `--tx-primary` | `#F0EAF8` | 14.8:1 on bg-page |
| `--tx-secondary` | `#C8BAE0` | 8.1:1 |
| `--tx-muted` | `#9C8BB8` | 4.6:1 |
| `--tx-label` | `#C9A96E` | gold/brown labels |
| `--tx-serif` | `#D4B97E` | pull-quote serif |
| `--tx-code` | `#C5B3E0` | code blocks |

### Borders

| Token | Value |
|-------|-------|
| `--bd-default` | `rgba(255,255,255,.1)` |
| `--bd-strong` | `rgba(255,255,255,.22)` |
| `--bd-gold` | `rgba(212,185,126,.5)` |
| `--bd-purple` | `rgba(107,76,163,.55)` |

### Icons

| Token | Value |
|-------|-------|
| `--icon-color` | `#D4B97E` |
| `--icon-bg` | `rgba(212,185,126,.12)` |

### Badges

| Token | Value |
|-------|-------|
| `--badge-sci-bg` | `#2D1E50` |
| `--badge-sci-tx` | `#C8B4F0` |
| `--badge-ph-bg` | `#1D1338` |
| `--badge-ph-tx` | `#B8A8D8` |
| `--badge-ol-tx` | `#A897C8` |
| `--badge-ol-bd` | `#7A6A98` |

### Buttons

| Token | Value |
|-------|-------|
| `--btn-pur-bg` | `#6B4CA3` |
| `--btn-pur-hbg` | `#7D5AB8` |
| `--btn-pur-tx` | `#FFFFFF` |
| `--btn-ol-tx` | `#C8BAE0` |
| `--btn-ol-bd` | `rgba(200,186,224,.4)` |
| `--btn-ol-hbg` | `rgba(255,255,255,.07)` |
| `--btn-ol-hbd` | `rgba(200,186,224,.7)` |
| `--btn-gol-tx` | `#D4B97E` |
| `--btn-gol-bd` | `#C9A96E` |
| `--btn-gol-hbg` | `rgba(212,185,126,.1)` |
| `--btn-gol-hbd` | `#D4B97E` |

### Cards

| Token | Value |
|-------|-------|
| `--card-name` | `#F0EAF8` |
| `--card-price` | `#D4B97E` |
| `--card-sub` | `#9C8BB8` |
| `--card-desc` | `#C8BAE0` |
| `--cbtn-ol-tx` | `#C8BAE0` |
| `--cbtn-ol-bd` | `rgba(200,186,224,.3)` |
| `--cbtn-ol-htx` | `#F0EAF8` |
| `--cbtn-ol-hbd` | `rgba(200,186,224,.6)` |
| `--cbtn-ol-hbg` | `rgba(255,255,255,.06)` |

### Navigation

| Token | Value |
|-------|-------|
| `--nav-bg` | `#0F0820` |
| `--nav-pill-bg` | `rgba(255,255,255,.07)` |
| `--nav-pill-tx` | `rgba(255,255,255,.6)` |
| `--nav-hbg` | `rgba(212,185,126,.16)` |
| `--nav-htx` | `#D4B97E` |

### Miscellaneous

| Token | Value |
|-------|-------|
| `--pullquote-bg` | `rgba(107,76,163,.18)` |
| `--pq-border` | `#C9A96E` |
| `--tile-bg` | `#1D1338` |
| `--tile-bd` | `rgba(255,255,255,.09)` |
| `--tile-tx1` | `#F0EAF8` |
| `--tile-tx2` | `#9C8BB8` |
| `--tile-htx` | `#C9A96E` |
| `--code-bg` | `#0A0615` |
| `--tw-bg` | `#211545` |
| `--tw-bd` | `rgba(255,255,255,.15)` |
| `--tw-track` | `#2D1A50` |
| `--tw-dot` | `#D4B97E` |
| `--hs-label-tx` | `#9C8BB8` |
| `--hs-val-tx` | `#D4B97E` |

---

## Typography

| Role | Family | Size | Weight | Notes |
|------|--------|------|--------|-------|
| Display | DM Sans | clamp(24px–40px) | 700 | Hero title |
| H1 | DM Sans | 26px | 700 | Section headings |
| Serif / Pull Quote | Cormorant Garamond | 21px | 400 italic | Emotional content |
| Body | DM Sans | 16px | 400 | Line-height 1.8 |
| Gold Label | DM Sans | 12px | 700 | UPPERCASE, 0.14em spacing |
| Caption | DM Sans | 13px | 400 | Sub-labels |

---

## Component Specifications

### Gold Button (Primary CTA)

```css
/* Base */
background: linear-gradient(135deg, #D4B97E 0%, #B8943A 100%);
color: #1A0E00; /* 10.2:1 contrast */
border-radius: 8px; padding: 12px 24px;
animation: goldPulse 3s infinite, floatY 4s infinite;

/* :hover */
transform: translateY(-3px) scale(1.01);
box-shadow: 0 12px 40px rgba(201,169,110,.65);
animation-play-state: paused;
filter: brightness(1.06);

/* :active */
transform: translateY(0) scale(.98);
box-shadow: 0 3px 12px rgba(201,169,110,.4);

/* :focus-visible */
outline: 2px solid #C9A96E; outline-offset: 3px;
```

### Purple Button

```css
background: #6B4CA3; color: #FFFFFF;
border-radius: 8px;
/* :hover */ background: #7D5AB8; transform: translateY(-2px);
/* :active */ background: #5A3D8F; transform: translateY(1px);
```

### Outline Button

```css
color: #C8BAE0; border: 1px solid rgba(200,186,224,.4);
/* :hover */ background: rgba(255,255,255,.07); border-color: rgba(200,186,224,.7);
           transform: translateY(-2px);
```

### Gold Outline Button

```css
color: #D4B97E; border: 1px solid #C9A96E;
/* :hover */ background: rgba(212,185,126,.1); border-color: #D4B97E;
```

---

## Motion Tokens

| Name | Definition |
|------|-----------|
| Fade Slide In | `0.6s cubic-bezier(.22,1,.36,1)` — opacity 0→1, translateY 22px→0 |
| Gold Pulse | `goldPulse 3s infinite` — box-shadow glow oscillation |
| Float Y | `floatY 4s infinite` — translateY 0 → -4px → 0 |
| Shine Sweep | `shimmer` on ::before — skewed element left -80% → 130% |
| Orb Drift | `orbDrift` — hero bg orbs, translate(20px, -15px) staggered |
| Mode Switch | `background-color .35s ease, color .28s ease` |

---

## Spacing System

| Token | Value | Name |
|-------|-------|------|
| sp-1 | `4px` | Tight |
| sp-2 | `8px` | Compact |
| sp-3 | `16px` | Base |
| sp-4 | `24px` | Section |
| sp-5 | `40px` | Open |
| sp-6 | `64px` | Hero |

> **Base unit: 4px.** All spacing is a multiple of the base unit.

---

## Radius System

| Value | Usage |
|-------|-------|
| `6px` | Badges |
| `8px` | Buttons |
| `12px` | Cards |
| `16px` | Containers |
| `50% 50% 0 0 / 100% 100% 0 0` | Hero wave curve |

---

## Icon System

**Library:** Phosphor Icons (duotone weight) · `@phosphor-icons/webcomponents@2.1`

**Color rule:** `--icon-color` = `#D4B97E` (gold on dark)

### Core Icons

| Icon | Tag | Product |
|------|-----|---------|
| Plant | `<ph-plant>` | First Steps |
| Globe | `<ph-globe-hemisphere-west>` | Circle |
| Compass | `<ph-compass>` | Pathway |
| Shield Check | `<ph-shield-check>` | Trust / Safety |
| Users Three | `<ph-users-three>` | Community |
| Heart | `<ph-heart>` | Care |
| Flower Lotus | `<ph-flower-lotus>` | Brand Mark |
| Brain | `<ph-brain>` | Science |
| Chat Circle Dots | `<ph-chat-circle-dots>` | Conversation |
| Lightbulb | `<ph-lightbulb>` | Insight |
| Seal Check | `<ph-seal-check>` | Credibility |
| Book Open | `<ph-book-open>` | Learning |
| Hand Heart | `<ph-hand-heart>` | Empathy |
| Sparkle | `<ph-sparkle>` | Delight |
| Arrow Circle Right | `<ph-arrow-circle-right>` | Navigation |

### Icon Sizes

`16px · 20px · 24px · 32px · 40px · 48px · 64px`

```html
<ph-compass color="var(--icon-color)" weight="duotone" size="32"></ph-compass>
```

---

## Design Principles

| # | Principle | Rule |
|---|-----------|------|
| 01 | Contrast first | Every token WCAG AA. Text minimum 4.5:1. Gold button text #1A1000 = 10.2:1. |
| 02 | Gold = primary CTA | The animated gold button is highest-hierarchy. One per section max. |
| 03 | Hover = 3 properties | Every interactive: position (translateY), border/shadow, background/brightness. |
| 04 | :active presses back | Active reverses hover lift — translateY(0) or translateY(1px). |
| 05 | Focus = gold ring | `2px solid var(--gold-mid)` at `3px` offset on every interactive element. |
| 06 | Icons follow bg | `--icon-color` is single source of truth. Purple on light, gold on dark. |

---

## Code Reference

```css
/* ── Gold button — all states ───────────────────────── */
.btn-gold { animation: goldPulse 3s infinite, floatY 4s infinite; }
.btn-gold:hover  { transform: translateY(-3px) scale(1.01);
                   box-shadow: 0 12px 40px rgba(201,169,110,.65);
                   animation-play-state: paused; filter: brightness(1.06); }
.btn-gold:active { transform: translateY(0) scale(.98);
                   box-shadow: 0 3px 12px rgba(201,169,110,.4); }
.btn-gold:focus-visible { outline: 2px solid var(--gold-mid); outline-offset: 3px; }

/* ── Purple button ──────────────────────────────────── */
.btn-purple:hover  { background: var(--btn-pur-hbg); transform: translateY(-2px); }
.btn-purple:active { background: var(--purple-deep); transform: translateY(1px); }

/* ── Outline button ─────────────────────────────────── */
.btn-ol:hover { background: var(--btn-ol-hbg); border-color: var(--btn-ol-hbd);
                color: var(--tx-primary); transform: translateY(-2px); }

/* ── Badges ─────────────────────────────────────────── */
.b-gold:hover  { filter: brightness(1.08); transform: translateY(-1px); }
.b-sci:hover   { background: var(--badge-sci-hbg); transform: translateY(-1px); }
.b-ol:hover    { background: var(--badge-ol-hbg); border-color: var(--tx-muted); }

/* ── Cards ──────────────────────────────────────────── */
.card:hover      { transform: translateY(-4px); border-color: var(--bd-gold); }
.card.feat:hover { box-shadow: 0 14px 40px rgba(212,185,126,.25); }
.cbtn-gold:hover { filter: brightness(1.08); transform: translateY(-1px); }
.cbtn-ol:hover   { background: var(--cbtn-ol-hbg); color: var(--cbtn-ol-htx); }

/* ── Icon color rule ────────────────────────────────── */
[data-mode="dark"]  { --icon-color: #D4B97E; } /* gold on dark  */
[data-mode="light"] { --icon-color: #6B4CA3; } /* purple on light */
```

---

*ParentWise Brand Reference · v2.3 · getparentwise.com*