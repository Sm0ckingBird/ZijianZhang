# zijianzhang.dev

Personal site for Zijian Zhang, built with [Next.js](https://nextjs.org) and
[Tailwind CSS](https://tailwindcss.com), statically exported and served via GitHub Pages at
https://sm0ckingbird.github.io/ZijianZhang/.

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Content

All page content (bio, education, experience, open source contributions, publications/talks)
lives in [`lib/data.ts`](lib/data.ts) — edit there, no need to touch component files for
routine updates.

## Deploying

GitHub Pages serves the static export committed to `/docs` on the `master` branch (repo
Settings → Pages → Source: Deploy from a branch → `master` / `docs`). To rebuild and publish:

```bash
npm run deploy
```

This runs `next build`, copies the `out/` export into `/docs`, and adds the `.nojekyll`
marker GitHub Pages needs to serve the `_next/` asset folder as-is. Commit and push the
resulting `docs/` changes.
