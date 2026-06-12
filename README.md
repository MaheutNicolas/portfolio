# Nicolas Maheut — Portfolio

Personal portfolio website built with Vue 3, showcasing my projects, skills, and contact information.

🔗 **Live site:** [maheutnicolascv.fr](https://maheutnicolascv.fr)

---

## Overview

This portfolio presents my background as a full-stack web developer, along with a curated list of projects ranging from professional client work to personal experiments such as **Akasha**, a browser-based game with a magical terminal interface.

The site is built as a Vue 3 single-page application with a custom SCSS design system, optimized for SEO and performance.

---

## Tech Stack

- **Framework:** Vue 3 (Composition API)
- **Build tool:** Vite
- **Styling:** SCSS (custom design system)
- **Fonts:** Playfair Display (headings), IBM Plex Mono (technical/code accents)
- **Server:** Nginx (see `ngnix.conf`)
- **Contact form backend:** Node.js + Mailtrap (SMTP)

---

## Project Structure

```
.
├── public/
│   ├── Akasha.webp
│   ├── DocInkTatoo.webp
│   ├── Kasa.webp
│   ├── Librairie.webp
│   ├── Skorpia.webp
│   ├── thibibi.webp
│   ├── favicon.ico
│   ├── og-image.jpg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/
│   │   ├── sass/
│   │   │   └── index.scss          # Main SCSS entry point
│   │   └── style/
│   │       ├── component/
│   │       │   ...
│   │       ├── navigation/
│   │       │   ...
│   │       ├── page/
│   │       │   ...
│   │       ├── animations.scss     # Handle animations
│   │       ├── html.scss           # Handle base html
│   │       ├── responsive.scss     # Handle responsive mixins  
│   │       ├── shared.scss         # Group all scss file who as depedencies      
│   │       ├── text.scss           # Handle text for all instance
│   │       └── variable.scss       # Design tokens (colors, fonts, etc.)
│   ├── component/
│   │   ├── icon/
│   │   │   ├── GitHub.vue
│   │   │   └── Linkedin.vue
│   │   ├── navigation/
│   │   │   ├── Footer.vue
│   │   │   └── Header.vue
│   │   ├── About.vue
│   │   ├── Contact.vue
│   │   ├── Hero.vue
│   │   ├── Project.vue
│   │   └── TimeLine.vue
│   ├── page/
│   │   └── Home.vue
│   ├── App.vue
│   ├── index.css
│   └── main.js
├── index.html
├── jsconfig.json
├── ngnix.conf
├── package.json
├── Todo.txt
└── vite.config.js
```

---

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- npm

### Installation

```bash
git clone https://github.com/MaheutNicolas/portfolio.git
cd portfolio
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:5173` (or the port shown in your terminal).

### Build for production

```bash
npm run build
```

The production-ready files will be generated in the `dist/` folder.

---

## Design System

The visual identity relies on a small set of SCSS variables and conventions defined in `src/assets/style/variable.scss` and imported through `src/assets/sass/index.scss`:

- **Accent color:** `#2f6be0`
- **Heading font:** Playfair Display (serif, elegant)
- **Monospace/technical font:** IBM Plex Mono
- **Layout:** clean, light, professional theme

Component-specific styles live under `src/assets/style/component/` (one file per section: Hero, About, Projects, Contact, Timeline...), while layout and navigation styles are split into `page/` and `navigation/`.

---

## Components Overview

- **`Hero.vue`** — Landing section with introduction and call-to-action
- **`About.vue`** — Background, skills, and bio
- **`TimeLine.vue`** — Career / experience timeline
- **`Project.vue`** — Project cards (Akasha, Skorpia, Librairie Backend, Kasa, Thibibi, DocInkTatoo...)
- **`Contact.vue`** — Contact form (recruitment-oriented)
- **`navigation/Header.vue`** / **`navigation/Footer.vue`** — Site navigation
- **`icon/GitHub.vue`** / **`icon/Linkedin.vue`** — Inline SVG social icons

All sections are assembled in `page/Home.vue` and rendered through `App.vue`.

---

## Contact Form

The contact form sends messages via a small Node.js server using **Mailtrap** as the SMTP provider. Make sure to configure the required environment variables (Mailtrap credentials) before running the email server locally or in production.

---

## Deployment

The site is served via **Nginx**. The configuration file (`ngnix.conf`) handles serving the static `dist/` build and SPA fallback routing (so client-side routes resolve correctly).

---

## SEO

The project includes basic SEO optimizations:

- Custom `<title>`, meta description, and Open Graph / Twitter Card tags in `index.html`
- `robots.txt` and `sitemap.xml` in the `public/` folder
- JSON-LD structured data (`Person` schema)
- Optimized favicon set (ICO, plus social preview image `og-image.jpg`)

---

## Featured Projects

A selection of projects presented on the site:

- **Akasha** — Web game with a magical terminal interface, ASCII rune system, BFS enemy pathfinding, interactive SVG map, and event-driven Symfony architecture.
- **Skorpia** — Server rental association website and back-office (Next.js, PHP, SQL).
- **Librairie Backend** — REST API for a book management application (Node.js, Express).
- **Kasa Frontend** — Housing rental management interface (React).
- **Thibibi** — Showcase website for a professional sports coach (PHP, HTML).
- **DocInkTatoo** — Showcase website for an independent tattoo artist (HTML).

---

## License

This project is for personal/portfolio use. Feel free to take inspiration from the structure, but please don't reuse personal content (text, images, project descriptions) without permission.

---

## Contact

- **GitHub:** [github.com/MaheutNicolas](https://github.com/MaheutNicolas)
- **Website:** [maheutnicolascv.fr](https://maheutnicolascv.fr)