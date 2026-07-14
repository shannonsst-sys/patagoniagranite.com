# TM Stone Taj Mahal Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the first static Astro version of `tajmahalquartzite.net` as a high-end TM Stone Taj Mahal collection site with product lines, current slab display, SEO content, and maintainable data files.

**Architecture:** Astro renders static pages from TypeScript data files. Product, slab, FAQ, navigation, footer, and blog content live in `src/data/` so future additions do not require page rewrites. Image usage is role-based: cropped cover images for cards and heroes, contain-safe full slab images for current lots and galleries.

**Tech Stack:** Astro, TypeScript, Vitest, CSS variables, static WebP/PNG assets, GitHub plus Cloudflare Pages static deployment.

## Global Constraints

- Build output must be pure static files.
- No database.
- No backend service.
- No SSR.
- No WordPress.
- No Shopify.
- No login system.
- No heavy UI framework unless the implementation proves it is necessary.
- Business content must be modular, data-driven, and reusable.
- Slab inventory must not pretend to be live stock; use representative slabs, nominal sizes, and inquiry-first wording.
- Full slab images must use contain-safe display and must not be cropped.
- Cover, hero, card, and application images may use cropped presentation for visual polish.

---

## File Structure

Create or modify:

- `package.json`: scripts and dependencies.
- `astro.config.mjs`: static Astro config.
- `tsconfig.json`: strict TypeScript project config.
- `vitest.config.ts`: unit test config.
- `public/robots.txt`: crawler rules.
- `public/favicon.svg`: simple TM Stone favicon.
- `public/assets/images/`: processed images copied from source material.
- `public/assets/downloads/`: downloads placeholder folder.
- `scripts/build-image-manifest.mjs`: scans site images and writes metadata.
- `src/data/site.ts`: company and domain data.
- `src/data/navigation.ts`: header navigation.
- `src/data/footer.ts`: footer columns and CTAs.
- `src/data/categories.ts`: product/category taxonomy.
- `src/data/products.ts`: Natural Taj Mahal Quartzite and Taj Mahal Inspired Quartz data.
- `src/data/slabs.ts`: representative current slab data.
- `src/data/posts.ts`: initial SEO posts.
- `src/data/faqs.ts`: shared FAQ entries.
- `src/utils/slug.ts`: slug helpers.
- `src/utils/seo.ts`: metadata helpers and JSON-LD helpers.
- `src/utils/related.ts`: related product/post helpers.
- `src/utils/sitemap.ts`: route collection helper for sitemap page.
- `src/components/layout/BaseLayout.astro`: shared HTML shell.
- `src/components/layout/Header.astro`: responsive header.
- `src/components/layout/Footer.astro`: reusable footer.
- `src/components/layout/Breadcrumb.astro`: breadcrumb UI and schema hook.
- `src/components/common/Button.astro`: link/button style primitive.
- `src/components/common/CTA.astro`: inquiry CTA band.
- `src/components/common/SEO.astro`: metadata and JSON-LD renderer.
- `src/components/common/SectionTitle.astro`: section headings.
- `src/components/product/ProductCard.astro`: product card.
- `src/components/product/ProductGrid.astro`: product grid.
- `src/components/product/ProductHero.astro`: product detail hero.
- `src/components/product/ProductSpecs.astro`: specs table.
- `src/components/product/ProductGallery.astro`: gallery with cover/contain variants.
- `src/components/product/RelatedProducts.astro`: related product links.
- `src/components/blog/BlogCard.astro`: blog card.
- `src/components/blog/BlogList.astro`: blog list.
- `src/components/blog/RelatedPosts.astro`: related article links.
- `src/components/home/Hero.astro`: home hero.
- `src/components/home/FeaturedProducts.astro`: two product-line feature.
- `src/components/home/CategorySection.astro`: material/category split.
- `src/components/home/WhyChooseUs.astro`: supplier trust section.
- `src/pages/index.astro`: home.
- `src/pages/about.astro`: supplier trust page.
- `src/pages/contact.astro`: inquiry page.
- `src/pages/products/index.astro`: products overview.
- `src/pages/products/category/[slug].astro`: category pages.
- `src/pages/products/[slug].astro`: product details.
- `src/pages/slabs/index.astro`: representative current slabs.
- `src/pages/slabs/[slug].astro`: slab detail pages.
- `src/pages/blog/index.astro`: blog index.
- `src/pages/blog/[slug].astro`: blog details.
- `src/pages/404.astro`: static not-found page.
- `src/pages/sitemap.xml.ts`: sitemap output.
- `src/styles/variables.css`: design tokens.
- `src/styles/global.css`: base elements.
- `src/styles/layout.css`: reusable layout primitives.
- `src/styles/utilities.css`: small utilities.
- `tests/utils.test.ts`: utility unit tests.
- `tests/data.test.ts`: data integrity tests.
- `docs/site-map.md`: final route map.
- `docs/module-map.md`: module responsibilities.
- `docs/maintenance-sop.md`: how to add products, slabs, and posts.
- `docs/changelog.md`: project change log.

---

### Task 1: Scaffold Static Astro Project

**Files:**
- Create: `package.json`
- Create: `astro.config.mjs`
- Create: `tsconfig.json`
- Create: `vitest.config.ts`
- Create: `public/robots.txt`
- Create: `public/favicon.svg`
- Create directories under `public/`, `src/`, `tests/`, and `docs/`

**Interfaces:**
- Produces: `pnpm dev`, `pnpm build`, `pnpm test`, `pnpm images` scripts.
- Produces: Astro static output in `dist/`.

- [ ] **Step 1: Create test config before production utilities**

Create `vitest.config.ts` with:

```ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    include: ['tests/**/*.test.ts'],
  },
});
```

- [ ] **Step 2: Create project package scripts**

Create `package.json` with:

```json
{
  "name": "tm-stone-taj-mahal-site",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "astro dev --host 127.0.0.1",
    "build": "astro build",
    "preview": "astro preview --host 127.0.0.1",
    "test": "vitest run",
    "images": "node scripts/build-image-manifest.mjs"
  },
  "dependencies": {
    "@astrojs/sitemap": "^3.2.1",
    "astro": "^4.16.18"
  },
  "devDependencies": {
    "typescript": "^5.6.3",
    "vitest": "^2.1.4"
  }
}
```

- [ ] **Step 3: Create Astro config**

Create `astro.config.mjs` with:

```js
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tajmahalquartzite.net',
  output: 'static',
  integrations: [sitemap()],
});
```

- [ ] **Step 4: Create TypeScript config**

Create `tsconfig.json` with:

```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@components/*": ["src/components/*"],
      "@data/*": ["src/data/*"],
      "@styles/*": ["src/styles/*"],
      "@utils/*": ["src/utils/*"]
    }
  }
}
```

- [ ] **Step 5: Create static public files**

Create `public/robots.txt`:

```txt
User-agent: *
Allow: /

Sitemap: https://tajmahalquartzite.net/sitemap-index.xml
```

Create `public/favicon.svg` as a simple text-based TM mark.

- [ ] **Step 6: Install dependencies**

Run: `pnpm install`

Expected: lockfile created and dependencies installed.

- [ ] **Step 7: Commit scaffold**

Run:

```bash
git add package.json pnpm-lock.yaml astro.config.mjs tsconfig.json vitest.config.ts public src tests docs
git commit -m "chore: scaffold static Astro site"
```

---

### Task 2: Add Data Models And Utility Tests

**Files:**
- Create: `tests/utils.test.ts`
- Create: `tests/data.test.ts`
- Create: `src/utils/slug.ts`
- Create: `src/utils/seo.ts`
- Create: `src/utils/related.ts`
- Create: `src/utils/sitemap.ts`
- Create: `src/data/*.ts`

**Interfaces:**
- Produces: `toSlug(input: string): string`
- Produces: `absoluteUrl(path: string): string`
- Produces: `createPageTitle(title?: string): string`
- Produces: `findRelatedByTags<T extends { slug: string; tags?: string[] }>(items: T[], currentSlug: string, limit?: number): T[]`
- Produces: exported arrays `products`, `slabs`, `posts`, `faqs`

- [ ] **Step 1: Write failing utility tests**

Create `tests/utils.test.ts`:

```ts
import { describe, expect, test } from 'vitest';
import { toSlug } from '../src/utils/slug';
import { absoluteUrl, createPageTitle } from '../src/utils/seo';
import { findRelatedByTags } from '../src/utils/related';

describe('slug utilities', () => {
  test('converts product names into lowercase URL slugs', () => {
    expect(toSlug('Natural Taj Mahal Quartzite Slab 01')).toBe('natural-taj-mahal-quartzite-slab-01');
  });
});

describe('seo utilities', () => {
  test('creates absolute site URLs from relative paths', () => {
    expect(absoluteUrl('/products/natural-taj-mahal-quartzite/')).toBe('https://tajmahalquartzite.net/products/natural-taj-mahal-quartzite/');
  });

  test('uses TM Stone suffix for page titles', () => {
    expect(createPageTitle('Natural Taj Mahal Quartzite')).toBe('Natural Taj Mahal Quartzite | TM Stone Taj Mahal Collection');
  });
});

describe('related utilities', () => {
  test('returns items sharing tags without returning the current item', () => {
    const items = [
      { slug: 'a', tags: ['quartzite', 'kitchen'] },
      { slug: 'b', tags: ['quartzite'] },
      { slug: 'c', tags: ['quartz'] },
    ];

    expect(findRelatedByTags(items, 'a', 2).map((item) => item.slug)).toEqual(['b']);
  });
});
```

- [ ] **Step 2: Verify tests fail before implementation**

Run: `pnpm test -- tests/utils.test.ts`

Expected: FAIL because `src/utils/slug`, `src/utils/seo`, and `src/utils/related` do not exist.

- [ ] **Step 3: Implement utility modules**

Create `src/utils/slug.ts`, `src/utils/seo.ts`, `src/utils/related.ts`, and `src/utils/sitemap.ts` with the named functions.

- [ ] **Step 4: Run utility tests**

Run: `pnpm test -- tests/utils.test.ts`

Expected: PASS.

- [ ] **Step 5: Write failing data tests**

Create `tests/data.test.ts` to assert:

```ts
import { describe, expect, test } from 'vitest';
import { products } from '../src/data/products';
import { slabs } from '../src/data/slabs';
import { posts } from '../src/data/posts';
import { site } from '../src/data/site';

describe('site data', () => {
  test('stores TM Stone contact details', () => {
    expect(site.domain).toBe('https://tajmahalquartzite.net');
    expect(site.email).toBe('Info@tajmahalquartzite.net');
  });

  test('contains both Taj Mahal product lines', () => {
    expect(products.map((product) => product.slug)).toContain('natural-taj-mahal-quartzite');
    expect(products.map((product) => product.slug)).toContain('taj-mahal-inspired-quartz');
  });

  test('uses inquiry-safe wording for fast-changing slab availability', () => {
    expect(slabs.length).toBeGreaterThanOrEqual(6);
    expect(slabs.every((slab) => slab.nominalSize.length > 0)).toBe(true);
    expect(slabs.some((slab) => slab.nominalSize.includes('Call for available'))).toBe(true);
  });

  test('includes SEO guide posts linked to product tags', () => {
    expect(posts.length).toBeGreaterThanOrEqual(4);
    expect(posts.some((post) => post.tags.includes('quartzite-vs-quartz'))).toBe(true);
  });
});
```

- [ ] **Step 6: Verify data tests fail before data implementation**

Run: `pnpm test -- tests/data.test.ts`

Expected: FAIL because data modules do not exist.

- [ ] **Step 7: Implement data files**

Create site, navigation, footer, categories, products, slabs, posts, and FAQs data files matching the tested exports.

- [ ] **Step 8: Run data tests**

Run: `pnpm test -- tests/data.test.ts`

Expected: PASS.

- [ ] **Step 9: Commit data and utilities**

Run:

```bash
git add src/data src/utils tests
git commit -m "feat: add site data models"
```

---

### Task 3: Add Image Assets And Manifest

**Files:**
- Create: `scripts/build-image-manifest.mjs`
- Create: `public/assets/images/**`
- Create: `public/assets/images/image-manifest.json`

**Interfaces:**
- Produces: processed/copy-ready image paths used by data files.
- Produces: manifest JSON with `{ path, width, height, role }[]`.

- [ ] **Step 1: Write image manifest script**

Create `scripts/build-image-manifest.mjs` using Node built-ins. The script scans `public/assets/images` for `.webp`, `.png`, `.jpg`, and `.jpeg`, derives image role from folder name, and writes `public/assets/images/image-manifest.json`.

- [ ] **Step 2: Copy curated images**

Copy a curated first-launch set from `素材收集_请放这里` into:

```txt
public/assets/images/hero/
public/assets/images/products/natural-taj-mahal-quartzite/
public/assets/images/products/taj-mahal-inspired-quartz/
public/assets/images/slabs/
public/assets/images/applications/
public/assets/images/factory/
public/assets/images/logo/
```

Minimum launch set:

- 2 hero images.
- 12 natural quartzite product/slab images.
- 6 engineered quartz product images.
- 8 application images.
- 8 factory images.
- 1 logo image.

- [ ] **Step 3: Run manifest generation**

Run: `pnpm images`

Expected: `public/assets/images/image-manifest.json` exists and lists copied images.

- [ ] **Step 4: Commit images**

Run:

```bash
git add public/assets/images scripts/build-image-manifest.mjs
git commit -m "feat: add curated image assets"
```

---

### Task 4: Build Layout, Styles, And Shared Components

**Files:**
- Create all layout/common components.
- Create `src/styles/variables.css`, `global.css`, `layout.css`, `utilities.css`.

**Interfaces:**
- Produces: `BaseLayout` with props `{ title, description, image?, canonical?, jsonLd? }`.
- Produces: shared header/footer and section primitives used by all pages.

- [ ] **Step 1: Create CSS design system**

Use warm stone, ivory, taupe, charcoal, and restrained bronze tokens. Define contain-safe image classes and cover image classes separately.

- [ ] **Step 2: Create SEO and BaseLayout components**

Render page metadata, Open Graph, global CSS imports, header, main slot, footer, and JSON-LD.

- [ ] **Step 3: Create header, footer, breadcrumb, button, section title, and CTA components**

Use data from `src/data/navigation.ts`, `src/data/footer.ts`, and `src/data/site.ts`.

- [ ] **Step 4: Run build**

Run: `pnpm build`

Expected: PASS or fail only because page files are not created yet. If it fails for missing page imports, proceed to Task 5.

- [ ] **Step 5: Commit shared UI**

Run:

```bash
git add src/components/layout src/components/common src/styles
git commit -m "feat: add shared layout components"
```

---

### Task 5: Build Product, Slab, Blog, And Home Components

**Files:**
- Create product components.
- Create blog components.
- Create home components.

**Interfaces:**
- Produces: reusable components that consume `products`, `slabs`, and `posts`.
- Produces: `ProductGallery` with `mode="cover" | "contain"` behavior.

- [ ] **Step 1: Create product components**

Product cards use cropped cover images. Product gallery accepts a mode prop and uses contain mode for slab/full-gallery contexts.

- [ ] **Step 2: Create blog components**

Blog cards and lists use post data, category labels, tags, and cover images.

- [ ] **Step 3: Create home components**

Hero, featured products, category section, and trust section must render actual assets and data-driven text.

- [ ] **Step 4: Commit feature components**

Run:

```bash
git add src/components/product src/components/blog src/components/home
git commit -m "feat: add collection presentation components"
```

---

### Task 6: Build Static Pages And Routes

**Files:**
- Create all page files listed in File Structure.

**Interfaces:**
- Produces: routes `/`, `/about/`, `/contact/`, `/products/`, `/products/[slug]/`, `/products/category/[slug]/`, `/slabs/`, `/slabs/[slug]/`, `/blog/`, `/blog/[slug]/`, `/404/`, `/sitemap.xml`.

- [ ] **Step 1: Create home, about, contact, and 404 pages**

Use `BaseLayout` and shared components.

- [ ] **Step 2: Create products index and category pages**

Use `products` and `categories` data.

- [ ] **Step 3: Create product detail dynamic route**

Use `getStaticPaths()` from `products`.

- [ ] **Step 4: Create slabs index and slab detail route**

Use `slabs` data. Full slab images must render in contain-safe gallery mode.

- [ ] **Step 5: Create blog index and post detail route**

Use `posts` data and related post helper.

- [ ] **Step 6: Create sitemap route helper if needed**

Use Astro sitemap integration and local route helper for documentation.

- [ ] **Step 7: Run tests and build**

Run:

```bash
pnpm test
pnpm build
```

Expected: all tests pass and Astro build succeeds.

- [ ] **Step 8: Commit pages**

Run:

```bash
git add src/pages
git commit -m "feat: add static site pages"
```

---

### Task 7: Add Maintenance Docs And Final Verification

**Files:**
- Create: `docs/site-map.md`
- Create: `docs/module-map.md`
- Create: `docs/maintenance-sop.md`
- Create or modify: `docs/changelog.md`
- Modify: `README.md`

**Interfaces:**
- Produces: human-maintainable documentation for future product, slab, and blog updates.

- [ ] **Step 1: Write site map**

Document all public routes and their source data.

- [ ] **Step 2: Write module map**

Document component and data responsibilities.

- [ ] **Step 3: Write maintenance SOP**

Document how to add a product, add a representative slab/current lot, add a blog post, update contact details, and run build.

- [ ] **Step 4: Update README**

Replace old Nero Marquina references with TM Stone Taj Mahal deployment and maintenance instructions.

- [ ] **Step 5: Run final verification**

Run:

```bash
pnpm test
pnpm images
pnpm build
```

Expected: all commands pass.

- [ ] **Step 6: Browser check**

Start dev server:

```bash
pnpm dev
```

Check desktop and mobile:

- `/`
- `/products/natural-taj-mahal-quartzite/`
- `/products/taj-mahal-inspired-quartz/`
- `/slabs/`
- One `/slabs/[slug]/`
- `/blog/`
- One `/blog/[slug]/`
- `/contact/`

Confirm:

- Full slab images are not cropped.
- Cover images are visually polished.
- Text does not overlap on mobile.
- Header and footer work.
- CTAs point to email or WhatsApp.

- [ ] **Step 7: Commit docs and verification fixes**

Run:

```bash
git add README.md docs
git commit -m "docs: add maintenance guide"
```
