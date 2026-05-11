# Tushar Bhandarkar — AI Portfolio

Personal portfolio website for an AI practitioner transitioning into the AI industry.

## Tech Stack

- **Next.js 16** (App Router, static export)
- **TypeScript** (strict)
- **Tailwind CSS v4**
- **Framer Motion** (scroll animations)
- **Lucide React** (icons)
- **Google Fonts** — Syne (display) + DM Sans (body)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build & Export

```bash
npm run build
```

Produces an `out/` directory ready for static hosting.

## Deploying to Vercel

### Option 1 — Vercel CLI

```bash
npm install -g vercel
vercel --prod
```

### Option 2 — GitHub + Vercel Dashboard

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Vercel auto-detects Next.js — click **Deploy**
4. Every push to `main` triggers an automatic redeploy

## Updating Content

All content lives in `src/data/` — no hunting through JSX:

| File | What it controls |
|------|-----------------|
| `src/data/projects.ts` | Project cards — add one object to add a project |
| `src/data/skills.ts` | Skill bars by category |
| `src/data/timeline.ts` | 6-month journey timeline |

### Adding a project

Open `src/data/projects.ts` and add an object to the array:

```ts
{
  id: "my-new-project",
  title: "My New Project",
  description: "What it does and why it matters.",
  tools: ["Claude", "Zapier"],
  link: "https://github.com/yourusername/project",
}
```

## Personalisation Checklist

- [ ] Replace `public/resume.pdf` with your actual resume PDF
- [ ] Add `public/og-image.png` (1200×630) for social sharing previews
- [ ] Update the photo placeholder in `src/components/sections/About.tsx`
- [ ] Update the Formspree action URL in `src/components/sections/Contact.tsx`
- [ ] Update GitHub link in `src/components/sections/Hero.tsx` and `Footer.tsx`

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Fonts, metadata, JSON-LD
│   ├── page.tsx         # Composes all sections
│   └── globals.css      # CSS variables + Tailwind
├── components/
│   ├── ui/              # Button, Card, Badge, ProgressBar, SocialIcons
│   ├── sections/        # Hero, About, Timeline, Projects, Skills, Resume, Roadmap, Contact
│   └── layout/          # Navbar, Footer
├── data/                # projects.ts, skills.ts, timeline.ts
├── hooks/               # useInView, useScrollProgress
└── lib/                 # utils.ts
```
