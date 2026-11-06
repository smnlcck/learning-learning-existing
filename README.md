# learning-learning-existing

Replica of the **Learning** section from the simonalcock.ie homepage, rebuilt as a React component with a staggered rise-and-dock reveal.

- Component: `src/components/Learning.jsx` + `Learning.css`
- Motion tokens live at the top of `Learning.css` (`--learning-rise`, `--learning-duration`, `--learning-stagger`, `--learning-ease`)
- Motion is guarded by `prefers-reduced-motion`
- Logos load from simonalcock.ie; licensed fonts are not included in this repo

```bash
npm install
npm run dev
```

Pushes to `main` deploy to GitHub Pages via `.github/workflows/deploy.yml`.
