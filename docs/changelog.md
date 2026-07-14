# Changelog

## 2026-07-07

- Added project design spec for the TM Stone Taj Mahal Collection static site.
- Added implementation plan.
- Scaffolded Astro static site with TypeScript and Vitest.
- Added data models for products, representative slabs, posts, FAQs, navigation, footer, and site details.
- Added curated launch image set and image manifest generation.
- Added high-end shared layout, product, slab, blog, and home components.
- Added static pages for home, products, categories, slabs, blog, about, contact, 404, and sitemap.
- Added maintenance documentation for future product, slab, article, and contact updates.
- Expanded image usage from curated starter images to a larger site asset set.
- Added application gallery and factory capability pages.
- Added product-level application galleries and factory proof sections.
- Updated phone and WhatsApp to `+8618702620038`.
- Added Formspree inquiry form endpoint `https://formspree.io/f/mjgdjeeb`.
- Added `/admin/` static content admin for GitHub-based product and article editing.
- Moved products and posts into one-file-per-item JSON content collections under `src/content/`.
- Added slab lot editing to `/admin/` and moved representative slabs into `src/content/slabs/`.
- Added visual image picker, gallery row controls, and visual article section editing to the admin page.
- Refined article admin editing into document-style blocks with inline image insertion, block movement, and empty-image placeholders.
- Added direct image uploads in `/admin/`, including multi-image gallery insertion and automatic `image-manifest.json` updates.
- Added image library category editing and GitHub-backed image deletion controls.
- Added a reusable `stone-site-standard-kit` documentation pack for future stone websites.
