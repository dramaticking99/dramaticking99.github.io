# Handoff: Terminal Portfolio — Chetan (Freelance Full-Stack Engineer)

## Overview
A single-page freelance portfolio for Chetan, a full-stack & systems engineer in Delhi. Aesthetic: dark "terminal" — near-black background, phosphor-green accent, monospace labels paired with a bold grotesk display face. Sections: nav, hero, services marquee, selected work, tech stack, about, contact form, footer.

## About the Design Files
The file in this bundle (`terminal-portfolio.html`) is a **design reference created in HTML** — a prototype showing the intended look and behavior, not production code to copy verbatim. The task is to **recreate this design in the target codebase's existing environment** (Next.js, React, Astro, plain HTML — whatever the repo uses) following its established patterns. If no project exists yet, choose an appropriate framework (a static site or Next.js is a good fit for a portfolio) and implement the design there.

## Fidelity
**High-fidelity.** Colors, typography, spacing, and copy are final. Recreate pixel-perfectly. Project image placeholders (striped boxes) should become real `<img>` slots the owner fills later — keep the 120px-tall thumbnail geometry in work rows.

## Design Tokens
Colors:
- `--bg: #0b0d0b` (page background)
- `--bg-alt: #0e110e` (marquee strip, form inputs)
- `--bg-hover: #0f120f` (row/card hover)
- `--line: #1e231e` (hairline borders between all sections)
- `--line-strong: #2c332c` (input borders, secondary button border, link underlines)
- `--text: #d8ddd6` (body)
- `--text-bright: #f2f5f0` (headings)
- `--text-dim: #8a938a` (secondary text)
- `--text-faint: #5d675d` (numbers, footer, marquee)
- `--accent: #7df179` (phosphor green — section labels, CTAs, stack tags, cursor)

Typography:
- Display: **Space Grotesk** (Google Fonts), 700 — headings
- Mono: **JetBrains Mono** (Google Fonts), 400/700 — everything else (body default)
- Scale: hero H1 88px / 1.02 / -0.02em; project titles 30px; about statement 26px / 1.4; stack card titles 17px; body/desc 13–14px / 1.6–1.7; labels & nav 13px; tags 12px; footer 11px

Spacing:
- Section horizontal padding: 48px
- Section vertical padding: 72–96px
- Every section separated by a 1px `--line` border
- Buttons: 13px 26px padding, square corners (no border-radius anywhere)

## Screens / Views
Single page, desktop-first at ~1240px+ content width.

### Nav
Flex row, space-between, 20px 48px padding, bottom hairline. Left: `chetan@dev:~$` in accent green, 700. Right: links `./work ./stack ./about ./contact` (contact in accent), 13px mono, 32px gap. Links anchor-scroll to sections.

### Hero
- Green mono label: `// full-stack & systems engineer — delhi, india`
- H1 (Space Grotesk 88px, #f2f5f0): "I build software that actually ships" followed by a **blinking block cursor** (inline-block, 0.45em × 0.9em, accent bg, `blink` 1.1s step-end infinite)
- Below, flex row (48px gap): 460px paragraph + two buttons — primary "start a project →" (accent bg, dark text, 700) and secondary "see work" (1px `--line-strong` border)
- Whole hero fades/rises in on load (`riseIn` 0.7s: opacity 0→1, translateY 24px→0)

### Services marquee
Full-width strip, `--bg-alt`, hairline top/bottom, 14px vertical padding. Text (13px, `--text-faint`): "MVPs FOR STARTUPS ✦ FULL-STACK WEB APPS ✦ FRONTEND / UI ✦ BACKEND & APIs ✦ VOICE AI AGENTS ✦ MOBILE APPS ✦" duplicated twice; container `width: max-content`, animation translateX(0 → -50%) 22s linear infinite.

### Selected work (`// selected_work`)
Rows in a 4-column grid: `70px | 1fr | 340px | 320px`, 32px gap, aligned center, 30px vertical padding, 1px top border per row. Hover: row background `--bg-hover`, cursor pointer.
- Col 1: number ("01"…) 13px faint
- Col 2: title (Space Grotesk 30px 700 bright) + description (13px dim, max-width 420px)
- Col 3: stack list in accent green 12px
- Col 4: 120px-tall image placeholder (repeating 45° stripes #12160f/#0e110e, hairline border, centered mono caption)

Projects (exact copy):
1. **Wavelength** — "React Native dating app taken from first commit to production. Voice AI agents for onboarding, scaled 0 to 20K users." — React Native · LiveKit · FastAPI
2. **Chromium Browser** — "Browser features and rendering optimizations deep in Chromium's C++ codebase for a custom Android browser." — C++ · Chromium · Android
3. **DJ Mixing Software** — "Cross-platform DJ software with real-time, low-latency audio manipulation. Built solo as a freelance contract." — JUCE · C++ · Audio DSP
4. **ChatWise** — "iOS social app with XMPP real-time chat — diagnosed and optimized reliability and performance." — Swift · XMPP · Core Data

### Stack (`// stack`)
Grid `300px | 1fr`. Right side: 2×2 card grid built with 1px gaps over a `--line` background (creates hairline dividers). Each card: `--bg` background, 28px padding, title (Space Grotesk 17px 700) + items (13px dim). Hover: `--bg-hover`.
Cards: Mobile / Backend & Infra / AI & Voice / Systems (contents in the HTML).

### About + Contact
Two-column grid (1fr 1fr, 64px gap).
- About: green label, statement (Space Grotesk 26px / 1.4 bright): "Founding engineer at Wavelength. Ex-Chromium intern. B.Tech, Delhi Technological University. I work across the whole stack — and below it." Links: github/dramaticking99, linkedin/in/chetan (13px dim, 1px bottom border `--line-strong`).
- Contact: green label, form — email input, textarea ("what are we building?"), submit button "send()" (accent bg, dark text, 700). Inputs: `--bg-alt` bg, 1px `--line-strong` border, 14px 16px padding, mono 13px. Below form: mailto link `cksanwariya6@gmail.com` and WhatsApp link `wa.me/918920743129` (12px faint).

### Footer
Hairline top, 20px 48px, 11px faint, space-between: "© 2026 chetan — delhi, india" / "exit 0".

## Interactions & Behavior
- Nav/CTA links smooth-scroll to anchors (`#work`, `#stack`, `#about`, `#contact`)
- Hero rise-in on page load (0.7s ease). Optionally stagger: label → H1 → row (0.08s increments)
- Blinking cursor: `step-end` blink, 1.1s loop, infinite
- Marquee: continuous, 22s loop; pause on hover is a nice-to-have
- Work rows + stack cards: background shifts to `--bg-hover` on hover
- Contact form: client-side validation (email required, message required); wire submit to the owner's preferred backend (e.g. Formspree, API route, or mailto fallback)
- The owner wants **surprising scroll animations** — recommended enhancement: IntersectionObserver-driven rise-in reveals per section, respecting `prefers-reduced-motion`
- Responsive: design is desktop-first. For <900px collapse work rows and about/contact grids to single column, shrink H1 to ~44–52px, stack hero buttons

## State Management
Static site — only state is contact-form fields and submit status (idle/sending/sent/error).

## Assets
- Fonts from Google Fonts: Space Grotesk (400/500/700), JetBrains Mono (400/500/700 + italic)
- No images shipped — the four project thumbnails are striped CSS placeholders to be replaced with real screenshots
- No icon library needed (✦ and → are plain text characters)

## Files
- `terminal-portfolio.html` — the full design reference (open in a browser to see it live; all styles inline/embedded)
