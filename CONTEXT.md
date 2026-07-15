# Firmitas Website — Project Context

Running log for continuity across sessions. Read this at the start of every session; update it at the end.

---

## Session 1 — 2026-07-15

**Built:**
- Scaffolded the full file structure per the build brief: `index.html`, `about.html`, `services.html`, `contact.html`, `faq.html`, `css/variables.css`, `css/styles.css`, `js/includes.js`, `js/nav.js`, `js/main.js`, `partials/header.html`, `partials/footer.html`, `images/`, `design-reference/`.
- Defined brand design tokens in `css/variables.css` (Ink Navy `#0F1B2D`, Limestone `#F2EFE6`, Heritage Gold `#C8A461`, Playfair Display + Archivo).
- Base `styles.css` with reset, typography defaults, `.photo-placeholder`, `.btn-gold`, footer band styling.
- `js/includes.js` fetches `partials/header.html` and `partials/footer.html` into `#site-header` / `#site-footer` mount points on every page.
- Header partial includes nav with primary CTA ("Schedule a Discovery Conversation"). Footer partial includes logo mount, contact placeholders, and LinkedIn/Instagram/Facebook social links only.
- All HTML pages are structural shells with section comments marking what goes where — no real copy written yet, per the sitemap-confirmation step in the brief.
- Initialized git and made the first commit (scaffold only, before any real content).

**Pending / needs Julia's input before further build:**
1. **Mood board images** — Section 4.5 of the brief calls for saving the mood board images into `design-reference/` and attaching them directly to the chat. No images were attached in this session. `design-reference/` folder exists and is ready — please add the brand mood board sheet, the "Clarity is a competitive advantage" compass ad, the pillar/column sketch, the mountain-summit graphic, and the monogram close-up.
2. **Interim logo files** — `images/logo-primary.png`, `images/logo-monogram.png`, `images/favicon.png` are referenced in the header/footer partials but do not exist yet. Save the AI-generated placeholder logo images into `images/` with those exact filenames.
3. **Sitemap confirmation** — the proposed sitemap (Home, About, Services, Contact, FAQ) matches Section 6 of the brief. Confirm before full content is written, especially whether FAQ should be a standalone page or a section on About/Contact.
4. **GitHub repo** — not yet created. Per the brief, use VS Code's Source Control panel → "Publish to GitHub", named `firmitas-website`.
5. **Netlify** — not yet connected. Do this after the GitHub repo exists.
6. **Contact form handling** — still undecided (Netlify Forms vs. external scheduler link). `contact.html` has no submission logic wired up yet.
7. **Real contact info** — phone/email are `[PHONE NUMBER — ASK JULIA]` / `[EMAIL — ASK JULIA]` placeholders in the footer.
8. **Domain** — likely `firmitas.life`, needs exact confirmation before use in metadata or Netlify.
9. **Founder bio specifics** — whether to name past employers, or keep generic — not yet decided.

**Not built (intentionally, per brief):**
- No Insights/Articles section.
- No gated membership area.
- No pricing anywhere.
- No ICF-certified language — founder is pursuing the credential, not yet certified.

**Next session should:** confirm sitemap + placement of FAQ, then build out `index.html` homepage content first (per the approved section flow), followed by About, Services, Contact.
