# Ruthwik Pendem – Portfolio v3

React 19.2 + Bootstrap 5.3.8 + Vite 8 + react-icons 5.
All content lives in `src/data/portfolioData.js`; all styling and animation lives in `src/styles/main.css`.

## Run it

Requires **Node.js 20.19+ or 22.12+** (Vite 8 requirement).

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build into dist/
npm run preview    # preview the production build
```

Deploy `dist/` to Vercel, Netlify, GitHub Pages or any static host.

## What's in it

- **Hero:** letter-by-letter name reveal, typing role line, core-skill logo chips, portrait with two orbiting
  rings of tech logos, typing code card, interactive particle network and cursor spotlight.
- **Section separators:** animated layered waves, tilts and curves (`SectionDivider.jsx`), plus two crossing
  scrolling ribbons of skill logos.
- **Scroll animations:** reusable `<Reveal variant="up|left|right|zoom|blur|clip">` wrapper, word-by-word
  headings with a hand-drawn underline, counters, scroll-filled timeline, parallax images, terminal print-out.
- **Interactions:** 3D tilt cards, magnetic button, sliding skill tabs, copy-email button,
  React 19 `useActionState` contact form, scroll progress bar, back-to-top ring.

## Responsive behaviour

Tested for horizontal overflow at 320, 360, 375, 390, 414, 568 (landscape), 768, 820, 1024 (both orientations),
1280, 1440, 1920 and 2560 px wide.

| Device | Layout |
| --- | --- |
| Phones (< 768) | Portrait and orbit first, then the copy. Code card hidden. Skill tabs wrap into chips. Sideways reveal animations become upward ones. |
| Small phones (< 576 / < 360) | Smaller orbit icons, chips and type; 2-column skill grid; full-width buttons. |
| Tablet portrait (768–991) | Two-column hero with a compact visual; code card sits under the portrait. Single-column timeline. |
| Laptop (992–1199) | Full layout with a tighter navbar. |
| Large screens (1600+ / 2200+) | Wider container, larger hero visual and body text. |
| Landscape phones (height < 520) | Slimmer navbar, shorter hero, scrollable mobile menu. |
| Touch screens | Tilt and hover-only effects switched off so nothing "sticks" after a tap. |
| Notched phones | Navbar, back-to-top button and footer respect safe areas. |

Every animation is disabled for visitors who have "reduce motion" turned on in their OS.

## Images

- Your photo: `public/assets/profile.webp` (converted from `pp.png`, transparent background kept).
- Project screenshots: `public/preview/*.webp`.
- Section photos are free stock photos from **Pexels** (free to use, no attribution required),
  loaded from `images.pexels.com`. Swap any URL in `portfolioData.js` (`images` and `expertise[].image`)
  for your own photo in `public/assets/`.

## Customising

- **Colours:** the tokens at the top of `main.css` (`--orange`, `--amber`, `--ink`, ...).
- **Hero core skills / orbit logos:** `hero.coreSkills`, `hero.orbitInner`, `hero.orbitOuter`.
  Names must match a key in `skillIcons` (add new logos there from `react-icons/si`).
- **GitHub repo links:** fill in `projects[].github` to show a "Source code" button.
