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
├── videos/              — optimized AI-generated video clips (see Video & Animation below)
└── CONTEXT.md           — running project log, read at the start of every session
```

Header and footer live once in `partials/` and are injected at runtime by `js/includes.js` — no copy-pasting nav/footer markup into every page.

## Local development

No build step. Open `index.html` in a browser, or serve the folder with any static file server (fetch() for the partials requires `http://`, not `file://`) — e.g. `npx serve` or the VS Code Live Server extension.

## Deployment

GitHub for version control, Netlify for continuous deployment. No build command; publish directory is the project root.

## Video & animation

Julia may provide short AI-generated video clips (e.g. from Higgsfield) as animated accents — a hero background clip, a motion treatment of the architectural/compass imagery, etc. These arrive as finished video files, not code. When one is added:

- **Location:** save the exported file into `videos/`.
- **Optimize first:** compress/resize before embedding — target well under 5MB for a short loop. Convert to MP4 (H.264); a WebM version is a nice-to-have, not required.
- **Poster fallback:** every embedded video needs a static fallback image (matching still frame or photo) shown while it loads and on mobile.
- **Markup:** use the native `<video>` tag, never a GIF or a JS animation library:
  ```html
  <video class="hero-video" autoplay muted loop playsinline poster="images/hero-fallback.jpg">
    <source src="videos/hero-clip.mp4" type="video/mp4">
  </video>
  ```
- **Mobile:** don't autoplay video on small viewports — show the poster image instead, and swap in video only on larger viewports (or after user interaction).
- **`prefers-reduced-motion`:** pause or hide video for users with that setting enabled.
- **Restraint:** one hero moment, not a default treatment across every section — favor the static architectural photography direction over motion when in doubt.
- **Never fabricate:** only embed video files Julia actually provides — don't generate or source placeholder video content.

## Brand system

See the full Firmitas build brief for brand voice, color palette, typography, sitemap, and copy standards. Design tokens live in `css/variables.css`.
