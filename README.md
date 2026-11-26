# Trans-IT Internship Devlog

A week-by-week account of my 15-week software development internship at Trans-IT. I built the site with React, TypeScript, Vite and React Router. Readers can filter entries by topic and switch between English, Dutch and French.

[Read the live devlog](https://wpl-stage-blog.vercel.app)

## Run locally

Use Node.js 24 and npm.

```sh
npm ci
npm run dev
```

Run `npm run lint` to check the source and `npm run build` to type-check the app and build it into `dist/`. Use `npm run preview` to serve that build locally.

Pages are in `src/pages`, shared navigation and layout are in `src/components`, and post metadata and translations are in `src/data/posts.ts` and `src/i18n.ts`. The Vercel rewrite in `vercel.json` lets client-side routes open directly.
