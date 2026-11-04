# Trainbow HUB Design Identity & Originality Specification

## 1. Overview & Purpose
This document establishes the inviolable visual identity, design tokens, typography, component hierarchies, and interactive contracts for the **Trainbow HUB** platform.

All responsive adaptations on mobile phones and tablets must preserve this exact aesthetic, tone, and character. Desktop experiences at $\ge 1280\text{px}$ must remain visually unchanged ($\le 0.5\%$ diff tolerance).

---

## 2. Brand Anchor & Tagline
- **Platform Name**: `Trainbow HUB`
- **Short Name**: `Trainbow`
- **Canonical Tagline**: `"Learn • Build • Grow"` (defined exclusively via constant `BRAND.tagline` in `src/lib/brand.ts`)
- **Primary Hero Headline**: `"Learn smarter. Find the right tutor."`
- **Hero Subtitle**: `"Structured lessons, AI help and tutors matched to you, built for Nigerian students and their families."`
- **Logo Mark**: Integrated SVG badge featuring the multi-colour learning arch with `"Trainbow HUB"` wordmark and `"Learn • Build • Grow"` sub-text.

---

## 3. Color Tokens & Service Matrix
All color values are governed by `tailwind.config.ts`. No arbitrary or non-token hex codes are permitted in responsive layouts.

### 3.1 Primary Brand Core
| Role | Token | Hex | Usage |
| :--- | :--- | :--- | :--- |
| **Brand Navy 900** | `bg-brand-navy-900` / `text-brand-navy-900` | `#0B1B3A` | Dark hero sections, major headers, dark surfaces |
| **Brand Navy 950** | `bg-brand-navy-950` | `#070F24` | Midnight contrast backdrops, terminal contrast |
| **Brand Blue 600** | `bg-brand-blue-600` / `text-brand-blue-600` | `#2563EB` | Primary interactive buttons, links, active tab borders |
| **Brand Blue 500** | `bg-brand-blue-500` | `#3B82F6` | Hover state on dark backgrounds |
| **Brand Blue 700** | `bg-brand-blue-700` | `#1D4ED8` | Active/pressed state on light backgrounds |
| **Brand Blue 50** | `bg-brand-blue-50` | `#EFF4FF` | Soft tinted card backgrounds, active badge fills |

### 3.2 Four Quadrant Services Matrix
The platform is organized around 4 distinct services with strictly standardized accent colors:
1. **Academy** (Blue):
   - Accent: `#2563EB` (`brand-blue-600`)
   - Descriptor: *"Lessons and quizzes"*
2. **AI Workspace** (Violet):
   - Accent: `#7C3AED` (`service-ai-600`) / Light: `#8B5CF6` / Dark: `#6D28D9`
   - Descriptor: *"Instant study help"*
3. **Get a Tutor** (Teal):
   - Accent: `#0D9488` (`service-tutor-600`) / Light: `#14B8A6` / Dark: `#0F766E`
   - Descriptor: *"Matched to you"*
4. **Music Tuition** (Amber):
   - Accent: `#D97706` (`service-music-600`) / Light: `#F59E0B` / Amber 400: `#FBBF24`
   - Descriptor: *"Theory and instruments"*

### 3.3 Neutrals & Slate Palette
- `neutral-slate-50`: `#F8FAFC` (Page background for light theme)
- `neutral-slate-100`: `#F1F5F9` (Dividers, borders, subtle fills)
- `neutral-slate-200`: `#E2E8F0` (Card borders, input borders)
- `neutral-slate-300`: `#CBD5E1` (Muted indicators, disabled borders)
- `neutral-slate-400`: `#94A3B8` (Placeholder text, secondary icons)
- `neutral-slate-500`: `#64748B` (Secondary text, metadata, captions)
- `neutral-slate-600`: `#475569` (Body text reading on light cards)
- `neutral-slate-700`: `#334155` (Emphasized text, card headings)
- `neutral-slate-800`: `#1E293B` (Dark accents, deep slate)
- `neutral-slate-900`: `#0F172A` (Primary text headlines on light mode)

### 3.4 Status & Feedback Tokens
- **Success / Verified**: `status-green-600` (`#16A34A`), `status-green-500` (`#22C55E`), `bg-green-50`
- **Warning / Review**: `status-orange-600` (`#D97706`), `status-orange-500` (`#F97316`), `bg-amber-50`
- **Danger / Error**: `status-red-600` (`#DC2626`), `status-red-500` (`#EF4444`), `bg-rose-50`

---

## 4. Typography System
- **Heading Font**: `Plus Jakarta Sans` (`font-heading`, `var(--font-heading)`)
- **Body & Interface Font**: `Inter` (`font-sans`, `var(--font-body)`)
- **Type Scale**:
  - `text-display`: `clamp(2.5rem, 5vw, 3.75rem)` (Hero display headings)
  - `text-h1`: `clamp(2rem, 4vw, 3rem)` (Major section titles)
  - `text-h2`: `clamp(1.5rem, 2.5vw, 2.25rem)` (Section headers)
  - `text-h3`: `clamp(1.25rem, 2vw, 1.75rem)` (Subsection titles, modal titles)
  - `text-body-lg`: `1.125rem` (Hero intros, lead paragraphs)
  - `text-body`: `1rem` (16px — standard body text; guarantees zero iOS Safari auto-zoom)
  - `text-small`: `0.875rem` (14px — labels, card metadata)
  - `text-caption`: `0.75rem` (12px — tiny badges, timestamps, helper text)
- **Line Length**: Maintained between 45 and 75 characters per line (`max-w-prose` or `max-w-2xl` on desktop, fluid on mobile) for optimal legibility.

---

## 5. Shape, Elevation & Shadows
- **Corner Radii**:
  - Controls & Inputs: `8px` (`rounded-control` / `rounded-md`)
  - Cards & Service Badges: `12px` (`rounded-card` / `rounded-xl`)
  - Panels, Drawers & Modal Sheets: `16px` (`rounded-panel` / `rounded-2xl`)
  - Pills & Avatars: `9999px` (`rounded-full`)
- **Elevation Hierarchy**:
  - **Level 1 (Flat/Bordered)**: `border border-neutral-slate-200`
  - **Level 2 (Soft Elevation)**: `box-shadow: 0 2px 8px -2px rgba(11,27,58,0.05), 0 4px 16px -4px rgba(11,27,58,0.08)` (`shadow-soft` / `shadow-card`)
  - **Level 3 (Floating/Overlays)**: `box-shadow: 0 12px 32px -4px rgba(11,27,58,0.12), 0 4px 12px -2px rgba(11,27,58,0.08)` (`shadow-floating`)

---

## 6. Iconography & Visual Themes
- **Icon Set**: `lucide-react` line icons exclusively, standard `2px` stroke weight.
- **Service Icons**:
  - Academy: `BookOpen`
  - AI Workspace: `Sparkles` / `Bot`
  - Tutors: `Users` / `GraduationCap`
  - Music: `Music`
- **Dark Navy Hero Atmosphere**:
  - Deep Navy (`#0B1B3A`) background with subtle multi-color radial gradient glows (`blue-600/15`, `violet-600/15`, `teal-500/10`).
  - High contrast white heading text with soft slate-200 subtitle.

---

## 7. The Central Hub Orbit Feature
- **Identity**: Central circular node `"One account"` in navy blue with Trainbow logo.
- **Orbit Motion**:
  - 4 cards: Academy (top-left), AI (top-right), Music (bottom-right), Tutors (bottom-left) traveling clockwise along a circular trajectory.
  - Cards counter-rotate so icons and text remain upright at all angles.
  - Controlled by CSS variable `--orbit-duration` (default 48s).
- **Responsive Adaptation**:
  - On viewports $\ge 768\text{px}$: Full animated orbit with radius $\approx 180\text{px}$ to $220\text{px}$.
  - On viewports between $400\text{px}$ and $767\text{px}$: Scaled orbit with radius $\approx 130\text{px}$ to $150\text{px}$ and scaled card padding.
  - On narrow viewports ($< 400\text{px}$ or when `prefers-reduced-motion` is active): Clean static $2 \times 2$ grid centered around the `"One account"` hub badge with zero overlap or clipped cards.

---

## 8. Mobile Interaction Standards
1. **Tap Targets**: Minimum $44 \times 44\text{px}$ for all buttons, inputs, links, and accordion toggles.
2. **Form Controls**: Minimum font size $16\text{px}$ on mobile to avoid iOS Safari zoom jump.
3. **Safe Area Insets**: All sticky headers, bottom action bars, sheets, and tab bars must declare `env(safe-area-inset-top)` and `env(safe-area-inset-bottom)`.
4. **No Horizontal Page Overflow**: `overflow-x: hidden` enforced at root, table and equation scrolling contained within isolated components.

