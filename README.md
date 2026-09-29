# Harsh Solanki — Portfolio

Personal portfolio of Harsh Solanki, a full-stack engineer building production
web applications and AI agent systems. Built with Next.js 16, React 19,
TypeScript, Tailwind CSS v4, Framer Motion, and Lenis smooth scrolling.

> **Live:** replace with your deployment URL after going live (e.g.
> `https://harsh-solanki-portfolio.vercel.app`)

## Features

- **Animated hero + bio** — sticky portrait card with scroll-driven
  grayscale-to-color flip, holographic decorations, staggered reveals
- **Scroll-scrubbed manifesto** — word-by-word text reveal pinned on scroll
- **Services & featured work** — service list with tags, project cards with
  hover zoom linking out to live deployments
- **Full work archive** at `/work` — all 32 projects with screenshots
- **Working contact form** — posts to `/api/contact`, which forwards to a
  configurable webhook (or logs server-side when unset)

## Tech stack

| Layer     | Choice                                            |
| --------- | ------------------------------------------------- |
| Framework | Next.js 16 (App Router, Turbopack) + React 19     |
| Language  | TypeScript (strict)                               |
| Styling   | Tailwind CSS v4, custom design tokens in CSS      |
| Motion    | Framer Motion (reveals, springs, scroll progress) |
| Scroll    | Lenis (`lenis/react`)                             |
| Fonts     | Archivo via `next/font/google`                    |
| Tooling   | ESLint (flat config), Playwright (local scripts)  |

## Getting started

Requires **Node.js 20.9+** (Vercel builds on Node 22).

```bash
npm install
npm run dev      # http://localhost:3000
```

| Script        | What it does                              |
| ------------- | ----------------------------------------- |
| `npm run dev` | Start the dev server (Turbopack)          |
| `npm run build` | Production build (`next build`)         |
| `npm run start` | Serve the production build              |
| `npm run lint` | Lint the app (`tools/` scripts excluded) |

## Environment variables

| Variable              | Required | Purpose                                                                                                          |
| --------------------- | -------- | ---------------------------------------------------------------------------------------------------------------- |
| `GMAIL_USER`          | No*      | Gmail address the contact form sends from (must match the app-password account).                                 |
| `GMAIL_APP_PASSWORD`  | No*      | Google app password — enable 2-Step Verification, then generate one at `myaccount.google.com/apppasswords`.      |
| `CONTACT_TO_EMAIL`    | No       | Where inquiries land. Defaults to `GMAIL_USER`.                                                                  |
| `CONTACT_WEBHOOK_URL` | No       | Fallback used only when Gmail vars are unset: forwards the form JSON to Formspree, Resend, Slack, …              |

\* Set the Gmail pair (or the webhook) or submissions are only logged
server-side. Gmail allows ~500 sends/day — plenty for a contact form.

Copy `.env.example` to `.env.local` for local development. On Vercel, set
variables in **Project Settings → Environment Variables** instead — never
commit real values.

## Project structure

```
src/
├── app/
│   ├── page.tsx              # Home: HeroBio, Quote, Services, Projects, Contact
│   ├── work/page.tsx         # Full project archive (+ metadata)
│   ├── layout.tsx            # Fonts, metadata, nav, smooth scroll
│   └── api/contact/route.ts  # Contact form endpoint (validates + forwards)
├── components/               # HeroBio, Navigation, Services, Projects, ...
└── lib/projects.ts           # Project data (edit FEATURED_IDS to reorder home picks)
public/
├── projects/                 # 582×401 screenshots of each live deployment
├── portrait.jpg              # Hero portrait (grayscale → color on scroll)
└── grain.png / shape-*.png   # Texture + holographic decorations
tools/scraping/               # Local-only Playwright scripts (not deployed)
```

### Regenerating project screenshots

The `tools/scraping` scripts are local dev utilities (Playwright lives in
`devDependencies` for this reason). To re-capture all cards at their native
ratio:

```bash
node tools/scraping/capture-projects.js
```

## Deployment

The repo is prepped for Vercel (framework auto-detected, no `vercel.json`
needed):

1. Push to GitHub
2. Vercel → **Add New → Project** → import the repo, accept the defaults
3. Add `CONTACT_WEBHOOK_URL` under Environment Variables if you want the
   contact form to deliver
4. Deploy — every push to the connected branch redeploys automatically
