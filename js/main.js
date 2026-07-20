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

// Contact form — submits to HubSpot's Forms API instead of a page reload.
// Tries the na2 regional endpoint first (this portal's data center), falling
// back to the generic global endpoint if that request fails for any reason.
(function () {
  var form = document.querySelector('.contact-card');
  if (!form) return;

  var HUBSPOT_PORTAL_ID = '242578018';
  var HUBSPOT_FORM_GUID = '986fd153-7e52-43cf-a231-65b8040b8320';
  var SUBMIT_ENDPOINTS = [
    'https://api-na2.hsforms.com/submissions/v3/integration/submit/' + HUBSPOT_PORTAL_ID + '/' + HUBSPOT_FORM_GUID,
    'https://api.hsforms.com/submissions/v3/integration/submit/' + HUBSPOT_PORTAL_ID + '/' + HUBSPOT_FORM_GUID
  ];

  var statusEl = document.createElement('p');
  statusEl.className = 'form-status';
  statusEl.setAttribute('aria-live', 'polite');
  form.appendChild(statusEl);

  function splitName(fullName) {
    var parts = fullName.trim().split(/\s+/);
    var firstname = parts.shift() || '';
    return { firstname: firstname, lastname: parts.join(' ') };
  }

  function submitToHubspot(url, payload) {
    return fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }).then(function (res) {
      if (!res.ok) throw new Error('HubSpot submission failed: ' + res.status);
      return res;
    });
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    var name = splitName(form.querySelector('#contact-name').value);
    var fields = [
      { name: 'firstname', value: name.firstname },
      { name: 'lastname', value: name.lastname },
      { name: 'email', value: form.querySelector('#contact-email').value.trim() },
      { name: 'phone', value: form.querySelector('#contact-phone').value.trim() },
      { name: 'company___role', value: form.querySelector('#contact-role').value.trim() },
      { name: 'coaching_inquiry_type', value: form.querySelector('#contact-type').value },
      { name: 'leadership_challenge', value: form.querySelector('#contact-message').value.trim() },
      { name: 'how_did_you_hear_about_firmitas', value: form.querySelector('#contact-referral').value.trim() },
      { name: 'faith_methodology_acknowledgment', value: form.querySelector('[name="faith-acknowledgment"]').checked ? 'true' : 'false' }
    ].filter(function (field) { return field.value !== ''; });

    var payload = {
      fields: fields,
      context: {
        pageUri: window.location.href,
        pageName: document.title
      }
    };

    var submitBtn = form.querySelector('button[type="submit"]');
    var originalLabel = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';
    statusEl.textContent = '';
    statusEl.className = 'form-status';

    submitToHubspot(SUBMIT_ENDPOINTS[0], payload)
      .catch(function () {
        return submitToHubspot(SUBMIT_ENDPOINTS[1], payload);
      })
      .then(function () {
        form.reset();
        statusEl.textContent = 'Thank you — your message has been sent. Jonathan will be in touch soon.';
        statusEl.classList.add('form-status--success');
      })
      .catch(function () {
        statusEl.textContent = 'Something went wrong sending your message — please try again or email us directly.';
        statusEl.classList.add('form-status--error');
      })
      .then(function () {
        submitBtn.disabled = false;
        submitBtn.textContent = originalLabel;
      });
  });
})();
