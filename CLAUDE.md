# dreamitprintfinds.com: notes for Claude

@AGENTS.md

## What this repo is

The website for the @dreamitprintfinds affiliate operation (Limitless 3D Labs). Its one job: turn Instagram/TikTok/Pinterest
visitors into shop visits with code **DREAMITPRINT10** copied. Planning, content and to-dos live in
`Evolving2Code/operation-limitless` (spec: `docs/HANDOFF.md` → "Site spec").

Stack: Next.js 16 App Router + TypeScript + Tailwind v4, hosted on Vercel with Vercel Web Analytics. Static pages, minimal
client JavaScript (visitors are mostly in the Instagram in-app browser). No database, Framer or Lottie. shadcn only if a
component is really needed.

## Layout

| Path | What |
|------|------|
| `app/page.tsx` | Link page (homepage): disclosure, code box, order-by countdown, buttons, popular picks, socials, footer |
| `app/go/[slug]/route.ts` | 307 redirect to `lib/links.ts`, records a Vercel Analytics `go` event with the slug. Unknown slug → shop homepage |
| `lib/links.ts` | **Single place for every shop URL.** Swap in the affiliate link here when the shop sends it |
| `components/deadline.tsx` | Order-by dates (Halloween Oct 15 → Christmas Dec 10), computed on the client |
| `components/copy-code.tsx` | Copy-code button |
| `content/guides/` | Reserved for MDX gift guides (`/guides/[slug]`, operation-limitless issue #19). Empty for now |
| `public/profile.png` | Logo, also favicon and OG image |
| `docs/homepage-390.png` | Reference screenshot of the homepage at 390px |

Brand colors are Tailwind theme tokens in `app/globals.css` (`bg`, `card`, `line`, `text`, `muted`, `accent`).

## Rules that must hold

- Every on-site link to the shop uses `/go/<slug>` (`go()` from `lib/links.ts`), never a raw shop URL.
- Affiliate disclosure stays visible above the first link. Never use the word "official". Credit photos to Limitless 3D Labs.
- Never put personal emails, logins, or the shop's private contact details in this repo.
- Mobile first: 16px side gutter, no horizontal scroll at 390px. Check with a 390px-wide screenshot after layout changes.
- Product photos are hotlinked from `cdn.shopify.com` through `next/image` (allowed in `next.config.ts`).

## Commands

```bash
npm run dev     # local dev server
npm run lint
npm run build   # must pass before pushing; Vercel runs the same build
```

## How Victor wants to work

- Always say when something is fixable on Victor's end (DNS, Vercel settings, blocked domains), with exact steps.
- Proactively suggest improvements. The goal of everything is maximum sales on code DREAMITPRINT10.
