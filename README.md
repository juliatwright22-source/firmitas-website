# Firmitas Website

Public marketing website for Firmitas, a faith-centered executive coaching and leadership development firm founded by Jonathan LaBoube.

## Stack

Plain HTML, CSS, and JavaScript — no frameworks, no build tools, no npm packages. Matches the approach used on the sister Optimize Strategic Advisors site.

## Structure

```
firmitas-website/
├── index.html, about.html, services.html, contact.html, faq.html
├── css/
│   ├── variables.css   — brand color/font design tokens
│   └── styles.css      — all site styling
├── js/
│   ├── includes.js     — injects shared header/footer partials into every page
│   ├── nav.js           — mobile nav toggle
│   └── main.js           — page interactivity
├── partials/
│   ├── header.html      — shared nav markup
│   └── footer.html      — shared footer markup
├── images/              — logo files, photography, icons
├── design-reference/    — brand mood board / inspiration images
└── CONTEXT.md           — running project log, read at the start of every session
```

Header and footer live once in `partials/` and are injected at runtime by `js/includes.js` — no copy-pasting nav/footer markup into every page.

## Local development

No build step. Open `index.html` in a browser, or serve the folder with any static file server (fetch() for the partials requires `http://`, not `file://`) — e.g. `npx serve` or the VS Code Live Server extension.

## Deployment

GitHub for version control, Netlify for continuous deployment. No build command; publish directory is the project root.

## Brand system

See the full Firmitas build brief for brand voice, color palette, typography, sitemap, and copy standards. Design tokens live in `css/variables.css`.
