# MUTHU_PORTFOLIO_26

This is a Vite + React portfolio site built with accessibility and motion in mind.

Features:

- Resume-driven content
- Theme toggle (dark / light) with persistence
- Accessible modal and focus management
- Framer Motion micro-interactions

To run locally:

```bash
npm install
npm run dev
```

To set your Formspree endpoint, copy `.env` and replace the placeholder:

```
VITE_FORMSPREE_ENDPOINT="https://formspree.io/f/your-form-id"
```

## About this template

This project began from a React + Vite starter. The following notes summarize the starter template and how to adapt it.

### React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

### React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

### ESLint / TypeScript

If you are developing a production application, consider using TypeScript with type-aware lint rules. See the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for guidance.
