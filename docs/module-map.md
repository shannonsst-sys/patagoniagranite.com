# Module Map

## Data

- `src/data/site.ts` - Brand, domain, email, WhatsApp, phone, address, export markets, and default SEO copy.
- `src/data/navigation.ts` - Header navigation.
- `src/data/footer.ts` - Footer columns.
- `src/data/galleries.ts` - Application and factory gallery image data.
- `src/data/categories.ts` - Product taxonomy.
- `src/data/products.ts` - Natural Taj Mahal Quartzite and Taj Mahal Inspired Quartz product data.
- `src/data/slabs.ts` - Representative current slab/current lot data.
- `src/data/posts.ts` - Stone guide article data.
- `src/data/faqs.ts` - Shared FAQ entries.

## Utilities

- `src/utils/slug.ts` - Slug generation.
- `src/utils/seo.ts` - Absolute URLs, titles, Organization JSON-LD, Breadcrumb JSON-LD.
- `src/utils/related.ts` - Related content by shared tags.
- `src/utils/sitemap.ts` - Static route collection for sitemap output.

## Components

- `src/components/layout/` - Base layout, header, footer, breadcrumbs.
- `src/components/common/` - SEO renderer, CTA, buttons, section titles.
- `src/components/common/ImageGrid.astro` - Reusable image gallery grid for application and factory pages.
- `src/components/product/` - Product cards, product hero, specs, gallery, related products.
- `src/components/blog/` - Blog cards, lists, related posts.
- `src/components/home/` - Home hero, featured products, category split, trust section.

## Styles

- `src/styles/variables.css` - Design tokens.
- `src/styles/global.css` - Base elements and imports.
- `src/styles/layout.css` - Section, container, grid, split layout, image cover/contain classes.
- `src/styles/utilities.css` - Small utilities.

## Scripts

- `scripts/build-image-manifest.mjs` - Scans `public/assets/images/` and writes `public/assets/images/image-manifest.json`.
