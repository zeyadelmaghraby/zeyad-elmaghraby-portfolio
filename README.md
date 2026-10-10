# Zeyad Elmaghraby Portfolio

Personal portfolio built with React, TypeScript, Vite, shadcn-ui, and Tailwind CSS.

## Local Development

Requirements:
- Node.js 18+
- npm

Run locally:

```sh
npm install
npm run dev
```

Build for production:

```sh
npm run build
npm run preview
```

## Project Structure

- `src/pages`: route-level pages and one-page section rendering
- `src/components`: shared UI and layout components
- `public`: static assets
- `src/data/caseStudies.ts`: content for the project case-study pages (`/projects/<slug>`)
- `public/projects/<project>`: screenshots used by the case studies

## Adding a Project Case Study

1. Put the screenshots in `public/projects/<project>/` (WebP keeps the page light).
2. Add an entry to the `caseStudies` array in `src/data/caseStudies.ts`.

The card in the Projects section and the page at `/projects/<slug>` are both generated from that entry.
