# Sergi Conejo – Frontend Portfolio

Personal portfolio built with **Bun**, **Astro 5**, and **Tailwind 4**.

🔗 Live: [sergiconejo.dev](https://sergiconejo.dev)

Feel free to fork it, experiment with it, and use it as a base without worries.

---

## ✨ Highlights

- 🌍 Full i18n architecture
  - All content centralized in i18n.ts

  - Default language served from /

  - /defaultLang automatically redirects to /

  - Routes available per language (/lang)

- 🌗 System-based theme with prefers-color-scheme
  - CSS-driven toggle (no JS required)

  - JavaScript used only for preference persistence

  - Automatically syncs if system theme changes

- 📲 Native Share API with Clipboard fallback
  - Accessible popover feedback (even with JavaScript disabled)

- 🖼️ Automatic image optimization (AVIF / WebP) using `astro:assets <Picture />`

- 🔎 SEO automation via `Bun seo` generating `robots.txt` and `sitemap.xml` in /public.

- ❌ Custom 404 page with links to / and localized routes.

- ♿ Fully accessible.

---

## ⚙️ Set-up:

Bun only needed for `bun seo`, you can use npm/pnpm/yarn without `---bun`

Install dependencies:
`bun install`

Generate SEO files:
`bun seo`

Start localhost server:
`bunx --bun astro dev`

Generate production build:
`bunx --bun astro build`

Preview production build:
`bunx --bun astro preview`

---

## 🤝 Contact

LinkedIn: [https://linkedin.com/in/sergiconejo](linkedin.com/in/sergiconejo)

Email: [contact@sergiconejo.dev](mailto:contact@sergiconejo.dev)
