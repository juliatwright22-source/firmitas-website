// Page interactivity beyond nav/includes goes here as pages are built.

// Homepage story carousel — auto-rotates the 3 navy panels every 5s.
// Skipped entirely for prefers-reduced-motion visitors; they get the
// static stacked fallback defined in styles.css.
(function () {
  var carousel = document.querySelector('[data-carousel]');
  if (!carousel) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var panels = carousel.querySelectorAll('[data-panel]');
  if (panels.length < 2) return;

  carousel.classList.add('carousel-ready');
  var current = 0;

  setInterval(function () {
    panels[current].classList.remove('is-active');
    current = (current + 1) % panels.length;
    panels[current].classList.add('is-active');
  }, 5000);
})();
