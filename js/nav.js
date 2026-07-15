// Mobile nav toggle behavior — runs after header.html is injected by includes.js

document.addEventListener('header:loaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-menu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen);
  });

  // Mark the current page's nav link (gold underline via [aria-current] styling)
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  menu.querySelectorAll('a').forEach((link) => {
    if (link.getAttribute('href') === currentPage && !link.classList.contains('btn-gold')) {
      link.setAttribute('aria-current', 'page');
    }
  });
});
