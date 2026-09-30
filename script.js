/* Diamond Ridge Constructions — site interactions
   Vanilla JS only. No dependencies. */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Ridge loader ---------- */
  const loader = document.getElementById('ridgeLoader');
  window.addEventListener('load', () => {
    setTimeout(() => loader && loader.classList.add('is-hidden'), 500);
  });
  // fallback in case 'load' fires very late (slow external images)
  setTimeout(() => loader && loader.classList.add('is-hidden'), 2500);

  /* ---------- Sticky nav on scroll ---------- */
  const nav = document.getElementById('siteNav');
  const onScroll = () => {
    if (window.scrollY > 40) nav.classList.add('is-scrolled');
    else nav.classList.remove('is-scrolled');
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Mobile menu ---------- */
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    navToggle.classList.toggle('is-open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      navToggle.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Contact form (client-side only placeholder) ---------- */
  const form = document.getElementById('contactForm');
  const note = document.getElementById('formNote');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = (data.get('name') || '').toString().trim();
const countryCode = (data.get('countryCode') || '').toString().trim();
const phone = countryCode + ' ' + (data.get('phone') || '').toString().trim();      const message = (data.get('message') || '').toString().trim();

      if (!name || !phone || !message) {
        note.textContent = 'Please fill in every field before sending.';
        return;
      }

      // No backend is wired up yet — hand the enquiry to WhatsApp instead.
      const text = encodeURIComponent(
        `Hello Diamond Ridge Constructions,\nMy name is ${name} (${phone}).\n${message}`
      );
      note.textContent = 'Opening WhatsApp to send your enquiry…';
      window.open(`https://wa.me/917795472010?text=${text}`, '_blank');
      form.reset();
    });
  }

});
