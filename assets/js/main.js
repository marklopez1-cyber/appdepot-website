// AppDepot LLC — site interactions
(function () {
  // Mobile nav toggle
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    // Close menu when a link is tapped
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Auto-format phone as (XXX)XXX-XXXX
  var phone = document.getElementById('phone');
  if (phone) {
    phone.addEventListener('input', function () {
      var d = phone.value.replace(/\D/g, '').slice(0, 10);
      var out = '';
      if (d.length < 3) out = d.length ? '(' + d : '';
      else if (d.length < 6) out = '(' + d.slice(0, 3) + ')' + d.slice(3);
      else out = '(' + d.slice(0, 3) + ')' + d.slice(3, 6) + '-' + d.slice(6);
      phone.value = out;
    });
  }

  // Current year in footer
  var yr = document.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();

  // Reveal-on-scroll
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.card, .product, .step, .plan, .stat, .quote').forEach(function (el) {
      el.classList.add('reveal');
      io.observe(el);
    });
  }
})();
