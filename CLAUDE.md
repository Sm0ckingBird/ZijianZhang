# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Zijian Zhang's personal site: a single-page Next.js (App Router) portfolio, statically
exported and served via GitHub Pages at https://sm0ckingbird.github.io/ZijianZhang/.
Dark "hacker resume" aesthetic (navy background, teal accent), one long scrolling page
with a sticky left sidebar — modeled after brittanychiang.com's layout conventions.

## Commands

```bash
npm install
npm run dev      # dev server — note: serves at http://localhost:3000/ZijianZhang/, NOT /
npm run build    # next build (static export to out/, per next.config.ts output:"export")
npm run lint     # eslint
npm run deploy   # next build && rm -rf docs && cp -r out docs && touch docs/.nojekyll
```

There is no test suite in this repo (no test runner configured, no test files).

### Deploying — read this before saying a change is "live"

GitHub Pages is configured to serve from `/docs` on the `master` branch (no GitHub Actions
workflow does this automatically). Pushing a commit that only changes source files
(`components/`, `lib/`, `public/`, etc.) **does not update the live site**. To publish:

1. `npm run deploy` — rebuilds and replaces the committed `/docs` directory with a fresh
   static export.
2. `git add -A docs && git commit && git push` — the regenerated `docs/` files (hashed
   `_next/static` chunk names change on every build) must themselves be committed.

If asked to check whether a change is live, `curl`/fetch the GitHub Pages URL directly
rather than assuming a recent push covered it — verify the deployed HTML actually reflects
the change, since it's easy to push source and forget the docs/ rebuild step.

### Verifying UI changes locally

`next dev` and the exported `out/` both live under the `/ZijianZhang` basePath (see
`next.config.ts` / `lib/basePath.ts`), so:
- `next dev` → check `http://localhost:3000/ZijianZhang/`, not the bare root (404s).
- To preview a static export (`out/`) with a plain file server, nest it one level down
  (e.g. copy `out/` into a `ZijianZhang/` folder and serve the parent dir) or asset URLs
  won't resolve.
- Headless Chrome (`google-chrome --headless --screenshot=...`) is available in this
  environment and is the practical way to visually verify layout/spacing changes since
  there's no other browser automation tool wired up here.

## Architecture

**Content/component separation.** `lib/data.ts` is the single source of truth for every
piece of page content — `profile`, `skills`, `education`, `experience`, `openSource`,
`publicationsAndTalks`, `navLinks`. Components (`About.tsx`, `Experience.tsx`,
`OpenSource.tsx`, `PublicationsTalks.tsx`, `Sidebar.tsx`, `Footer.tsx`) are purely
presentational — they `.map()` over this data. Routine content edits (new job, new
publication, tweaked bio) only need `lib/data.ts`; component files only change for
layout/styling work.

**`app/page.tsx`** assembles the whole page: `Spotlight` (cursor-follow glow effect) +
`Sidebar` + the section components in order, followed by `Footer`. Section order and
numbering (`01. About`, `02. Open Source`, etc., via `SectionHeading`) must stay in sync
with `navLinks` in `lib/data.ts` and the `id` attributes on each `<section>`.

**Static export + basePath.** `next.config.ts` sets `output: "export"`,
`basePath: "/ZijianZhang"`, `assetPrefix`, and `images.unoptimized: true` (required for
export — `next/image` optimization needs a server). Because of this, every asset
reference in the codebase uses plain `<img>` tags run through `withBasePath()` from
`lib/basePath.ts`, never `next/image`. The resulting ESLint `no-img-element` warnings on
every `<img>` are expected and intentional, not something to "fix" by introducing
`next/image`.

**Sidebar (`components/Sidebar.tsx`, client component).** Handles: active-section
highlighting via `IntersectionObserver` over the section `id`s; a sticky full-height
desktop sidebar vs. a fixed mobile top bar + slide-down menu (`lg:` breakpoint); and an
avatar lightbox (click photo → fullscreen modal, closes on backdrop click/Escape/close
button). The mobile menu and desktop sidebar duplicate the nav + social icons markup
intentionally (different layout containers, not worth abstracting further for this size
of component).

## Design conventions established in this codebase

- **Teal (`--color-teal`, `text-teal`) is the only accent color** and is applied
  sparingly and deliberately — e.g. specific keywords in prose, the active nav indicator,
  hover states — not applied to every technical term or heading.
- **Logo sizing:** company/school/project logos have wildly different aspect ratios
  (e.g. ByteDance's wide banner logo vs. Cilium/Tux's near-square icons). The convention
  is a fixed height with `w-auto` and a `max-w-[...]` cap (`object-contain` as a
  safety net), *not* a fixed square box — squaring them off either shrinks wide logos to
  near-invisibility or letterboxes them oddly. The one exception is the About-page
  education list, where both logos are already near-square, so they get a fixed-size
  centering wrapper (`flex h-9 w-9 items-center justify-center`) specifically so the
  degree/school text lines up across rows.
- **Section spacing:** subsections use `py-8` (not more) so the single-page scroll feels
  dense rather than sparse; content column widths are `max-w-4xl` so the main content
  area fills the space next to the fixed-width sidebar instead of leaving a large empty
  gap on wide viewports.
