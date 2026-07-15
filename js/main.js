// Page interactivity beyond nav/includes goes here as pages are built.

// Scroll-told column story (homepage). Enhances the static fallback layout into
// a sticky, scroll-driven sequence: the column crumbles frame by frame while the
// message panels slide in and out. Skipped entirely for reduced-motion visitors.
(() => {
  const scrolly = document.querySelector('[data-scrolly]');
  if (!scrolly) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  scrolly.classList.add('scrolly--js');

  const frames = Array.from(scrolly.querySelectorAll('.scrolly-frame'));
  const panels = Array.from(scrolly.querySelectorAll('.scrolly-panel'));

  // Scroll-progress thresholds (0..1 across the whole section).
  // Frame index = number of thresholds passed: intact → cracked → falling → foundation → three pillars.
  const FRAME_STEPS = [0.16, 0.38, 0.6, 0.8];
  // [enter, exit] band for each text panel.
  const PANEL_BANDS = [
    [0.02, 0.26],
    [0.3, 0.52],
    [0.54, 0.76],
    [0.82, 1.01],
  ];

  let ticking = false;

  function update() {
    ticking = false;
    const total = scrolly.offsetHeight - window.innerHeight;
    if (total <= 0) return;
    const progress = Math.min(1, Math.max(0, -scrolly.getBoundingClientRect().top / total));

    let frameIndex = 0;
    for (const step of FRAME_STEPS) {
      if (progress > step) frameIndex++;
    }
    frames.forEach((frame, i) => frame.classList.toggle('is-visible', i === frameIndex));

    panels.forEach((panel, i) => {
      const band = PANEL_BANDS[i] || [0, 0];
      panel.classList.remove('is-active', 'is-above');
      if (progress >= band[0] && progress <= band[1]) {
        panel.classList.add('is-active');
      } else if (progress > band[1]) {
        panel.classList.add('is-above');
      }
    });
  }

  function requestUpdate() {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(update);
    }
  }

  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate, { passive: true });
  update();
})();
