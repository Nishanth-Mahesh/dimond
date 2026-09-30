# Diamond Ridge Constructions — Website

A lightweight, single-page website for Diamond Ridge Constructions. No frameworks — plain HTML, CSS and vanilla JavaScript. Opens directly by double-clicking `index.html`.

## Folder structure

```
Diamond-Ridge/
├── index.html      All page content and structure
├── style.css        All styling, colors, typography, animations
├── script.js         Nav behavior, scroll reveal, form handling
├── assets/
│   └── logo.png      Placeholder logo — replace with the real one
└── README.md
```

## Replacing the logo

1. Export your final logo as a transparent PNG (square canvas recommended, e.g. 512×512 or 600×600).
2. Name it `logo.png` and drop it into the `assets/` folder, replacing the placeholder.
3. The logo is used in two places: the navbar (`.nav__logo`) and the footer (`.footer__brand img`). Both are already sized and centered — no extra edits needed unless your logo's proportions are very different from a square.

## Colors

All colors are defined once at the top of `style.css` as CSS variables, so the whole site can be re-themed from one place:

```css
:root{
  --white:#FFFFFF;
  --bone:#F8F7F3;       /* page background */
  --graphite:#1A1A1A;   /* dark sections, headline text */
  --silver:#C9C9C9;     /* metallic accent lines */
  --gold:#C6A05A;       /* primary luxury accent */
  --gold-light:#E7C97A; /* highlight text */
  --gold-deep:#9C7A3C;  /* shadows, labels */
}
```

## Editing text

Everything visible — headline, About copy, service descriptions, testimonials, contact details — lives directly in `index.html`. Open it in VS Code and search for the section comment (e.g. `<!-- SERVICES -->`) to jump to it.

## Images

Project, hero and about images are pulled from Unsplash by URL (no image files to manage). To swap one, replace the `src` on the relevant `<img>` tag with another image URL, or point it at a local file inside `assets/`.

## WhatsApp button

The floating WhatsApp button and the contact form both open a pre-filled chat to `+91 77954 72010`. To change the number or default message, search `wa.me` in `index.html` and `script.js`.

## Contact form

The form currently has no backend — submitting it opens a pre-filled WhatsApp message with the visitor's details instead of sending an email. To wire it to a real backend (e.g. Formspree, EmailJS, or your own server), replace the `submit` handler in `script.js`.

## Browser support

Built with standard, well-supported CSS (Grid, custom properties, `backdrop-filter`) and vanilla JS (`IntersectionObserver`). Works in all current versions of Chrome, Safari, Firefox and Edge, on both desktop and mobile.
