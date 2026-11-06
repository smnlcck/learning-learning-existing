# learning-learning-existing

Replica of the **Learning** section from the simonalcock.ie homepage, rebuilt as a React component with a staggered rise-and-dock reveal.

- Component: `src/components/Learning.jsx` + `Learning.css`
- Motion tokens live at the top of `Learning.css` (`--learning-rise`, `--learning-duration`, `--learning-stagger`, `--learning-ease`)
- Motion is guarded by `prefers-reduced-motion`
- Type and colour tokens match `hero-hero-existing` (Eudoxus Sans Medium for display, Helvetica for body, #333 / #666)
- Logos and the licensed Eudoxus font load from simonalcock.ie and are not in this repo. The font only loads if simonalcock.ie sends an `Access-Control-Allow-Origin` header for its font files; otherwise it falls back to Helvetica

```bash
npm install
npm run dev
```

Pushes to `main` deploy to GitHub Pages via `.github/workflows/deploy.yml`.
