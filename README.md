# Muhammad Ibsam — Web Developer Poster

A React + Vite promotional poster (1080×1350) with a dark IDE/terminal-inspired
theme, built entirely with plain CSS (no UI libraries, no backend).

## Your photo

Your uploaded portrait is already placed at:

```
src/assets/portrait.png
```

and imported directly in `src/App.jsx`:

```js
import portrait from './assets/portrait.png'
```

To swap in a different photo later, just replace that file (keep the same
name, or update the `import` path in `App.jsx`) — a tall/portrait-orientation
photo works best since the frame crops to a vertical rectangle.

## Run it

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

## Export it as an image

The poster is a fixed 1080×1350 aspect-ratio panel that scales fluidly to
fit the screen. To export a crisp PNG for posting:

1. Run `npm run build && npm run preview`.
2. Open the preview URL in Chrome, open DevTools → Rendering / Device
   toolbar, and set a custom viewport of roughly **1150×1450** (a little
   larger than the poster so it renders at full size).
3. Right-click the poster and "Capture node screenshot" (Chrome DevTools
   command menu → "Capture node screenshot" with the `.poster` element
   selected), or use a screenshot extension — this gives a pixel-accurate
   1080×1350 PNG.

## Project structure

```
├── index.html          # HTML shell, loads Space Grotesk + JetBrains Mono
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx         # React entry point
    ├── App.jsx          # Poster layout, content and inline icon set
    ├── App.css          # All styling, tokens, and animations
    └── assets/
        └── portrait.png # Your photo
```

## Editing your details

All personal content (name, title, contact info, skills, services, headline)
lives as plain data/JSX near the top and inside `src/App.jsx` — search for
`SKILLS`, `SERVICES`, or the `<ContactRow` lines to edit them.
