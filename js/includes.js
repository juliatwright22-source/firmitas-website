// Loads shared header/footer partials into every page.
// Requires <div id="site-header"></div> and <div id="site-footer"></div> mount points in each HTML file.

async function loadPartial(mountId, path) {
  const mount = document.getElementById(mountId);
  if (!mount) return;
  const response = await fetch(path);
  mount.innerHTML = await response.text();
}

document.addEventListener('DOMContentLoaded', () => {
  loadPartial('site-header', 'partials/header.html').then(() => {
    document.dispatchEvent(new Event('header:loaded'));
  });
  loadPartial('site-footer', 'partials/footer.html');
});
