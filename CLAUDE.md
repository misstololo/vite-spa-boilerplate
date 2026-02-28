# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**DreamSense** — a product that connects to your dreams and tells you what you dreamed. Built as a vanilla JS SPA using Vite, located in `vite-spa-boilerplate/`.

## Workflow

**After every code change, commit and push — no exceptions.**

```bash
git add <files>
git commit -m "..."
git push
```

- Remote: `https://github.com/misstololo/vite-spa-boilerplate.git`
- Branch: `dev`
- Working directory for all git commands: `vite-spa-boilerplate/`

## Commands

All commands run from `vite-spa-boilerplate/`:

```bash
npm run dev      # Dev server at http://localhost:5173 with HMR
npm run build    # Production build → dist/
npm run preview  # Preview the production build locally
```

No test runner or linter is configured.

## Architecture

This is a **no-framework vanilla JS SPA**. There is no React, Vue, or component system. The entire page is rendered by `src/main.js` via a single `innerHTML` assignment on `#app`, after which JS initializes interactive behaviors.

### Key files

| File | Role |
|---|---|
| `src/main.js` | Single source of truth — defines all SVG icons, data arrays, HTML templates, and boots `initStars()` + `initReveal()` |
| `src/style.css` | Complete design system — CSS custom properties, all component styles, animations, responsive breakpoints |
| `index.html` | Shell with Google Fonts (`Inter`) import; no logic here |

### Rendering model

`main.js` builds the full page as a template literal string and sets `document.getElementById('app').innerHTML`. After that:
- **`initStars()`** — drives the hero `<canvas>` starfield animation via `requestAnimationFrame`
- **`initReveal()`** — wires up `IntersectionObserver` to add `.visible` to `.reveal` elements on scroll

### Design system

- Base palette: `#000` dark, `#f5f5f7` light, `#a78bfa` accent (violet)
- Apple-style: large bold type with tight `letter-spacing`, pill buttons (`border-radius: 980px`), sticky frosted-glass nav (`backdrop-filter`)
- Scroll animation: add class `reveal` (+ optional `rd1`–`rd6` for staggered delay) to any element — it fades up when entering the viewport
- Section backgrounds: `.section-dark`, `.section-dark-2`, `.section-light` control color scheme per panel

### Adding new sections

1. Define any data arrays and HTML template strings near the top of `main.js`
2. Inject them into the `innerHTML` template literal
3. Style with existing CSS custom properties and utility classes from `style.css`
