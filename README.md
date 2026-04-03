# Scientific Method

React + Vite stepped flow through scientific-method stages (question, hypothesis, experiment, data, conclusion—exact steps in `ScientificMethod.jsx`). Primarily navigational/content UI with optional inputs.

**Live site:** [https://content-interactives.github.io/scientific_method_2](https://content-interactives.github.io/scientific_method_2)

Curriculum alignment and placement: [Standards.md](Standards.md).

---

## Stack

| Layer | Notes |
|--------|--------|
| Build | Vite 6, `@vitejs/plugin-react` |
| UI | React 19 |
| Styling | Tailwind 3 |
| Icons | lucide-react |
| Deploy | `gh-pages -d dist`; `predeploy` runs `vite build` |

---

## Layout

```
vite.config.js          # base: '/scientific_method_2/'
src/
  main.jsx → App.jsx → components/ScientificMethod.jsx
  components/ui/
```

---

## `vite.config.js`

`base: '/scientific_method_2/'` must match the GitHub Pages repository path.

---

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Vite dev server |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview production build |
| `npm run lint` | ESLint |
| `npm run deploy` | Build and push `dist/` to `gh-pages` |

---

## Embedding

Multi-step vertical layout; use `ScientificMethod.jsx` or root container min-height for iframe.
