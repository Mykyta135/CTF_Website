# CTF_Website

The website for **BEST::CTF 2024**, the first offline CTF in Lviv, organised by BEST Lviv. It's a single landing page in Ukrainian: what the event is, why to take part, partners and organisers, and how to register. Registration and team search run through the event's Telegram bot ([CTF_Bot](https://github.com/Mykyta135/CTF_Bot)), so the site sends people there.

## What's on the page

- Intro, event description, mission and "why take part" sections
- Partners and a section for companies interested in partnering
- Organisers
- Registration call to action linking to the Telegram bot
- Light / dark theme toggle and scroll animations

## Structure

```
src/app/page.tsx            # the landing page, composed from section components
src/components/<Section>/   # Intro, Description, Why, Partners, ForPartners, Organizators, Registration…
src/components/ui/          # shadcn/ui primitives
src/components/ColorTheme/  # theme provider and toggle
```

## Run

```bash
npm install
npm run dev
```

## Stack

Next.js 14 (App Router) · TypeScript · Tailwind CSS · shadcn/ui · Framer Motion
