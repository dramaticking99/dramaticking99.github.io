# Chetan — Terminal Portfolio

Single-page freelance portfolio for Chetan, full-stack & systems engineer in Delhi. Dark "terminal" aesthetic: near-black background, phosphor-green accent, JetBrains Mono paired with Space Grotesk display type.

Live at [dramaticking99.github.io](https://dramaticking99.github.io).

## Sections

1. **Nav** — `chetan@dev:~$` prompt with `./work ./stack ./about ./contact` anchor links
2. **Hero** — headline with blinking block cursor, intro, CTAs
3. **Services marquee** — continuously scrolling strip of offered services
4. **Selected work** — numbered project rows (Wavelength, Chromium Browser, DJ Mixing Software, ChatWise)
5. **Stack** — 2×2 hairline card grid (Mobile / Backend & Infra / AI & Voice / Systems)
6. **About + Contact** — statement, links, and a contact form (mailto fallback)
7. **Footer** — `exit 0`

## Tech

- Plain HTML/CSS/JS, no build step, no frameworks
- Google Fonts: Space Grotesk (display) + JetBrains Mono (body)
- IntersectionObserver scroll reveals, `prefers-reduced-motion` respected

## Structure

```
├── index.html                 # Main portfolio page
├── resume.png                 # Current resume
├── assets/
│   ├── css/
│   │   ├── style.css          # Design tokens + all section styles
│   │   └── responsive.css     # <900px / <560px breakpoints
│   ├── js/
│   │   └── main.js            # Scroll reveals + contact form
│   ├── images/                # Project thumbnails
│   └── documents/             # Resume PDF
└── design_handoff_terminal_portfolio/   # Design reference this site implements
```

## Design tokens

```css
:root {
  --bg: #0b0d0b;        /* page background */
  --line: #1e231e;      /* hairline borders */
  --text: #d8ddd6;      /* body */
  --accent: #7df179;    /* phosphor green */
}
```

## Local development

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deployment

Pushed to `main` → served by GitHub Pages.

## Contact

**Chetan Sanwariya** — [github/dramaticking99](https://github.com/dramaticking99) · [linkedin/in/chetan](https://linkedin.com/in/Chetan) · cksanwariya6@gmail.com
