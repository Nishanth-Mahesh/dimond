/* ==========================================================
   Diamond Ridge — Packages section
   Edit the PACKAGES list below to change rates or features.
   Edit WHATSAPP_NUMBER if the enquiry number ever changes.
   ========================================================== */
(function () {
  'use strict';

  var WHATSAPP_NUMBER = '917795472010'; // country code + number, no + or spaces

  var PACKAGES = [
    {
      name: 'Ridge Essential', rate: 1750, level: 1, tint: '#c3c8d1',
      tag: 'Solid foundations, honest pricing.',
      feats: [
        '9 ft floors, M20 RMC, solid block walls',
        'Vitrified tiles and a granite kitchen counter',
        'Teak main door with aluminium windows',
        '2D architectural layout and basic 3D elevation'
      ]
    },
    {
      name: 'Ridge Premium', rate: 1999, level: 2, tint: '#d7c7a1',
      tag: 'Sharper finishes, smarter spaces.',
      feats: [
        '10 ft floors with M25 RMC concrete',
        'Marble-finish vitrified living, granite staircase',
        'uPVC windows and Tractor Shine emulsion paint',
        '2D plans, 3D elevation and isometric views'
      ]
    },
    {
      name: 'Ridge Elite', rate: 2299, level: 3, tint: '#e0be71',
      tag: 'Design-led living with smart provisions.',
      feats: [
        '10 ft floors, M25 RMC, designer architectural elements',
        'Granite or marble living area, no tile-size limit',
        'Teak main and puja doors, Kommerling uPVC windows',
        'Home automation, EV point and AC in all rooms'
      ]
    },
    {
      name: 'Ridge Supreme', rate: 2599, level: 4, tint: '#e8a622',
      tag: 'Luxury detail, from plan to handover.',
      feats: [
        '10 ft 6 in floors, M25 concrete, JSW / SAIL / Vizag steel',
        'Italian marble living and dining, granite staircase',
        'Teak main and puja doors, Fenesta uPVC windows',
        '3D walkthrough and up to 40 design revisions'
      ]
    },
    {
      name: 'Ridge Supreme+', rate: 2999, level: 5, tint: '#f2b826',
      tag: 'Statement finishes, throughout.',
      feats: [
        '11 ft floors and a wire-cut brick UG sump',
        'Italian marble, texture and Royale Play accent walls',
        'Digital switches, home automation and CCTV provision',
        'Glass cubicle and jacuzzi provision on larger builds'
      ]
    },
    {
      name: 'Ridge Signature', rate: 3999, level: 6, tint: '#f6c343', flagship: true,
      tag: 'Our most complete, uncompromised build.',
      feats: [
        '11 ft 6 in floors with wire-cut red brick walls',
        'Marble throughout, marble or wood staircase',
        'Royale Shyne interiors, ABB / Schneider / Legrand electricals',
        'Teak and glass railing, jaali and HPL compound wall'
      ]
    }
  ];

  /* ---- Gem icon: redrawn from the brand logo's diamond emblem ----
     Shape: pointed top triangle, a horizontal double band, pointed
     bottom triangle — same silhouette as the brushed-steel mark.
     Facets are added one at a time as the tier goes up; the flagship
     tier also shows the small pillar glyph from the centre of the logo. */
  var OUTLINE = 'M32 4L52 24H12Z M12 30H52L32 60Z';
  var BAND    = 'M10 24H54 M10 30H54';
  var FACETS = {
    1: [],
    2: ['M32 4L25 24'],
    3: ['M32 4L39 24'],
    4: ['M32 60L21 30'],
    5: ['M32 60L43 30']
  };
  var PILLAR = 'M29 10H35V20H29Z M29 10Q29 7 32 7Q35 7 35 10';

  function gemSVG(level, uid, flagship) {
    var facetLines = [];
    for (var l = 2; l <= level; l++) facetLines = facetLines.concat(FACETS[l] || []);
    var facets = facetLines.map(function (d, i) {
      return '<path class="ln" pathLength="1" style="--i:' + (i + 1) + '" d="' + d + '"/>';
    }).join('');
    return '' +
      '<svg class="rp-gem" viewBox="0 0 64 64" aria-hidden="true" focusable="false">' +
        '<defs><clipPath id="clip-' + uid + '"><path d="M12 24H52V30H12Z M18 4H46V56H18Z"/></clipPath></defs>' +
        '<path class="fill" d="' + OUTLINE + '"/>' +
        '<g clip-path="url(#clip-' + uid + ')"><path class="sheen" d="M22 0L30 0L20 64L12 64Z"/></g>' +
        '<path class="ln" pathLength="1" style="--i:0" d="' + OUTLINE + '"/>' +
        '<path class="band" pathLength="1" style="--i:0" d="' + BAND + '"/>' +
        facets +
        (flagship ? '<path class="mark" d="' + PILLAR + '"/>' : '') +
      '</svg>';
  }

  var WA_ICON =
    '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>';

  function fmt(n) { return n.toLocaleString('en-IN'); }

  /* ---- WhatsApp: opens a chat with the interest message already typed ---- */
  function waLink(p) {
    var msg =
      'Hello Diamond Ridge Constructions,\n\n' +
      'I am interested in the ' + p.name + ' Package (\u20B9' + fmt(p.rate) + ' per sq.ft, incl. GST).\n' +
      'Please share the full details.\n\n' +
      'Plot size: \nLocation: ';
    return 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(msg);
  }

  function cardHTML(p, i) {
    var id = 'rp' + i;
    return '' +
      '<article class="rp-card' + (p.flagship ? ' rp-card--flagship' : '') + '" style="--tint:' + p.tint + ';--d:' + ((i % 3) * 120) + 'ms">' +
        (p.flagship ? '<span class="rp-badge">Flagship</span>' : '') +
        gemSVG(p.level, id, !!p.flagship) +
        '<div><h3 class="rp-name">' + p.name + '</h3><p class="rp-tag">' + p.tag + '</p></div>' +
        '<div class="rp-price" aria-label="' + fmt(p.rate) + ' rupees per square foot">' +
          '<span class="rp-cur">\u20B9</span><span class="rp-num" data-to="' + p.rate + '">' + fmt(p.rate) + '</span><span class="rp-unit">/ sq.ft</span>' +
        '</div>' +
        '<p class="rp-gst">Inclusive of 18% GST</p>' +
        '<ul class="rp-feats">' + p.feats.map(function (f) { return '<li>' + f + '</li>'; }).join('') + '</ul>' +
        '<a class="rp-cta" href="' + waLink(p) + '" target="_blank" rel="noopener" aria-label="Get ' + p.name + ' details on WhatsApp">' +
          WA_ICON + '<span>Get details on WhatsApp</span></a>' +
      '</article>';
  }

  function init() {
    var section = document.getElementById('packages');
    var grid = document.getElementById('rpGrid');
    if (!section || !grid) return;

    grid.innerHTML = PACKAGES.map(cardHTML).join('');

    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var cards = grid.querySelectorAll('.rp-card');

    /* One orchestrated moment: gems draw themselves, prices count up */
    if (!reduce && 'IntersectionObserver' in window) {
      section.classList.add('is-armed');
      cards.forEach(function (c) { c.querySelector('.rp-num').textContent = '0'; });

      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (!en.isIntersecting) return;
          var card = en.target;
          var delay = parseInt(card.style.getPropertyValue('--d'), 10) || 0;
          card.classList.add('is-in');
          setTimeout(function () { countUp(card.querySelector('.rp-num')); }, delay + 250);
          io.unobserve(card);
        });
      }, { threshold: 0.3 });
      cards.forEach(function (c) { io.observe(c); });
    }

    /* Glass tilt + light that follows the cursor (mouse only, never on touch) */
    if (!reduce && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      grid.addEventListener('pointermove', function (e) {
        var c = e.target.closest('.rp-card'); if (!c) return;
        var r = c.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width;
        var y = (e.clientY - r.top) / r.height;
        c.style.setProperty('--mx', (x * 100).toFixed(1) + '%');
        c.style.setProperty('--my', (y * 100).toFixed(1) + '%');
        c.style.setProperty('--rx', ((0.5 - y) * 6).toFixed(2) + 'deg');
        c.style.setProperty('--ry', ((x - 0.5) * 8).toFixed(2) + 'deg');
      });
      grid.addEventListener('pointerout', function (e) {
        var c = e.target.closest('.rp-card');
        if (c && !c.contains(e.relatedTarget)) {
          c.style.setProperty('--rx', '0deg');
          c.style.setProperty('--ry', '0deg');
        }
      });
    }
  }

  function countUp(el) {
    var to = parseInt(el.getAttribute('data-to'), 10);
    var dur = 1100, t0 = null;
    function step(t) {
      if (t0 === null) t0 = t;
      var p = Math.min((t - t0) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt(Math.round(to * eased));
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
