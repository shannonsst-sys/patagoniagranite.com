# TM Stone Taj Mahal Collection Static Site Design

Date: 2026-07-07

## Goal

Build a pure static, high-end product and SEO website for `tajmahalquartzite.net`.

The site represents TM Stone's Taj Mahal collection, not a generic stone blog and not a heavy e-commerce inventory system. It must present two product lines clearly:

- Natural Taj Mahal Quartzite: premium Brazilian natural quartzite for villas, designers, fabricators, importers, hospitality, and luxury commercial projects.
- Taj Mahal Inspired Quartz: engineered quartz alternatives for repeatable color, project consistency, easier maintenance, and budget-sensitive volume work.

The website must be deployable to GitHub plus Cloudflare Pages as static files, with no database, no backend, no SSR, no WordPress, no Shopify, and no login system.

## Positioning

The site should feel like a specialist collection site from a real stone supplier:

- High-end but practical.
- Visual first, but not empty.
- Clear about natural quartzite versus engineered quartz.
- Strong enough for wholesale and project buyers, while still readable for designers and builders.
- Built around inquiry conversion rather than instant checkout.

The tone should be restrained, warm, architectural, and trade-friendly. Avoid loud renovation-company styling, oversized orange estimate buttons, and low-trust sales copy.

## Reference Patterns

Competitor references reviewed:

- Favorita: strong high-end natural stone branding, simple material pages, origin, color, finish, and warehouse availability.
- MSI Surfaces: strong product data, application data, specs, finish options, and SEO structure.
- Pacific Shore Stones: strong material education pages, applications, benefits, inventory CTA, and related articles.
- RMS Marble: useful in-stock slab page pattern with gallery, finish, size, square meters, shipment, enquiry, applications, and related products.
- SK Stones USA: simple product page pattern with product summary, attributes, enquiry, and description.

The TM Stone site should combine these patterns:

- Favorita for brand feel.
- MSI for structured product data.
- Pacific Shore Stones for SEO content flow.
- RMS for slab and current-lot presentation.
- SK Stones for simple inquiry-first product page clarity.

## Architecture

Use an Astro static site with TypeScript and data-driven content.

Required top-level structure follows the project AGENTS rules:

- `public/assets/images/` for processed site images.
- `public/assets/icons/` for static icons.
- `public/assets/downloads/` for catalogs, company profile PDFs, and documents.
- `src/components/` split by layout, common, home, product, blog.
- `src/data/` for site, navigation, footer, categories, products, posts, FAQs, and slab data.
- `src/pages/` for static routes and dynamic static routes.
- `src/styles/` for variables, global layout, utilities, and component-friendly styles.
- `src/utils/` for SEO, slugs, related content, and sitemap helpers.
- `docs/` for site map, module map, maintenance SOP, and changelog.

The implementation should keep business content in data files rather than duplicating text across pages.

## Page Model

### Home

The home page is the high-end collection entrance.

Sections:

- Full-bleed hero with actual Taj Mahal material or refined interior image.
- Two-line collection split: Natural Taj Mahal Quartzite and Taj Mahal Inspired Quartz.
- Material story: warmth, ivory tone, gold/taupe movement, project versatility.
- Featured product line cards.
- Selected slab gallery preview.
- Factory and sourcing credibility.
- Application band: kitchens, islands, vanities, walls, flooring, hospitality.
- Inquiry CTA focused on current slabs, samples, drawings, quantities, finish, thickness, and destination.

### Product Collection

`/products/` lists both main product lines and representative slabs.

It should help visitors choose:

- Natural quartzite for uniqueness, depth, premium budgets, and signature projects.
- Engineered quartz for repeatable look, easier maintenance, and larger project consistency.

### Product Detail

Each product detail page contains:

- Product hero with image gallery.
- Product summary.
- Attributes panel:
  - Origin
  - Material
  - Type
  - Finish
  - Thickness
  - Nominal size
  - Availability
  - Best suited
  - MOQ
  - Sample availability
  - Lead time
- Slab or surface gallery.
- Applications.
- Product specs.
- Natural versus engineered clarification where relevant.
- FAQ.
- Related products or related slabs.
- Inquiry CTA.

### Current Slabs / Current Lots

Use a semi-dynamic inventory model, not a full stock database.

Route options:

- `/slabs/`
- `/products/current-slabs/`

Each slab item is a representative current-lot or recent-lot display, not a permanent promise of exact stock.

Display rules:

- Use complete slab images without cropping.
- Show a clean attributes table:
  - Type: Slab
  - Finish: Polished / Honed / Leathered / Brushed
  - Nominal Size: Call for available slab sizes
  - Thickness: 2cm / 3cm / 20mm / 30mm
  - Availability: Current lots available / Contact for latest slabs
- Optional fields when available:
  - Lot number
  - Shipment number
  - Approximate slab size
  - M2 per slab
  - Bundle quantity
  - Location

Important wording:

- Use "Contact us for current lot photos" and "Call for available sizes" where exact inventory changes quickly.
- Avoid pretending the site has live inventory.
- Make it clear that slab photos represent real material style and available selection, while exact lots should be confirmed.

### Blog / Stone Guide

The blog should support SEO and buyer education.

Initial content topics:

- Taj Mahal Quartzite vs Taj Mahal Inspired Quartz
- Taj Mahal Quartzite price factors
- Is Taj Mahal Quartzite good for kitchens?
- Polished vs honed vs leathered Taj Mahal Quartzite
- How to choose Taj Mahal Quartzite slabs from a China supplier
- Natural quartzite vs engineered quartz for hotel and apartment projects
- Care and maintenance for Taj Mahal Quartzite
- Why full slab photos matter before stone confirmation

### About

The about page should build supplier trust:

- TM Stone company summary.
- Factory base in Shuitou, Nan'an, Fujian, China.
- Brazilian block and slab sourcing.
- Factory processing capability.
- Cut-to-size and project fabrication.
- Packing, container loading, and export support.

### Contact

The contact page should be inquiry-first:

- Email: `Info@tajmahalquartzite.net`
- WhatsApp / phone: `+61 8702620038`
- Address: Fushan Industrial Zone, Shuitou Town, Nan'an, Fujian, China.
- Simple static form UI if wanted, but no backend dependency. If no form endpoint is configured, use mailto/WhatsApp CTA and inquiry guidance.

## Image Strategy

Images must be processed before final site build. This is central to the project.

### Image Categories

Use separate image roles:

- `hero`: immersive homepage or landing page visuals.
- `cover`: cropped product cards and blog cards.
- `slab-full`: complete slab images that must not be cropped.
- `detail`: close-up texture images.
- `application`: kitchen, vanity, wall, hotel, commercial, and furniture usage.
- `factory`: quarry, block, cutting, polishing, inspection, warehouse, packaging, loading.
- `logo`: brand assets.

### Cropping Rules

Use two display modes:

- `cover`: for hero images, cards, and editorial sections. These may be cropped for visual polish.
- `contain`: for full slab gallery and current-lot pages. These must show the entire slab face.

Never use a single CSS rule for all product images. Slab images and lifestyle images need different behavior.

### Generated Sizes

Generate processed derivatives into `public/assets/images/`:

- Hero: wide desktop and mobile versions.
- Card: consistent card thumbnail ratio.
- Gallery: high-quality display image.
- Thumb: small navigation thumbnail.
- Full slab: large contain-safe image with enough padding or neutral background if needed.

Original source images stay in the material collection folder and should not be manually edited page by page.

### Image Metadata

Create and maintain image metadata for:

- Source path
- Output path
- Role
- Product or slab association
- Alt text
- Caption
- Width
- Height
- Aspect ratio
- Crop mode
- Focal point where needed

Alt text should describe the actual material and context, not keyword stuff.

Example:

- "Natural Taj Mahal quartzite slab with warm ivory background and soft taupe veining"
- "Taj Mahal inspired quartz kitchen island with waterfall edge"
- "TM Stone factory slab inspection for Taj Mahal quartzite"

## Data Model

### `src/data/site.ts`

Stores company and domain-level data:

- Brand name
- Company name
- Domain
- Email
- WhatsApp
- Phone
- Address
- Export markets
- Default SEO title and description
- Social links if available

### `src/data/products.ts`

Products are structured objects, not duplicated page HTML.

Fields:

- `slug`
- `name`
- `category`
- `material`
- `origin`
- `summary`
- `description`
- `finishes`
- `thicknesses`
- `nominalSize`
- `availabilityLabel`
- `bestSuited`
- `applications`
- `gallery`
- `coverImage`
- `specs`
- `faqs`
- `relatedProductSlugs`

### `src/data/slabs.ts`

Representative current-lot and slab-display data.

Fields:

- `slug`
- `name`
- `productSlug`
- `material`
- `type`
- `finish`
- `thickness`
- `nominalSize`
- `availability`
- `lotLabel`
- `approxSize`
- `m2PerSlab`
- `gallery`
- `statusNote`
- `inquiryPrompt`

If exact size is unknown or changes often, use:

- `nominalSize: "Call for available slab sizes"`
- `availability: "Current lots available"`
- `statusNote: "Please contact TM Stone for current lot photos, quantities, and updated slab sizes."`

### `src/data/posts.ts`

Blog posts are data-driven.

Fields:

- `slug`
- `title`
- `description`
- `date`
- `category`
- `tags`
- `coverImage`
- `sections` or content file reference
- `relatedProductSlugs`

## SEO Strategy

The website should target both commercial and educational searches.

Primary terms:

- Taj Mahal Quartzite
- Taj Mahal Quartzite slabs
- Taj Mahal Quartzite supplier
- Taj Mahal Quartzite from China
- Brazilian Taj Mahal Quartzite
- Taj Mahal Inspired Quartz
- Taj Mahal Quartz slabs

Support terms:

- Taj Mahal quartzite kitchen countertops
- Taj Mahal quartzite price
- Taj Mahal quartzite vs quartz
- Taj Mahal quartzite polished honed leathered
- natural quartzite slabs wholesale
- quartzite slabs for hotel projects

Technical SEO:

- Semantic HTML.
- Unique title and meta description per page.
- Open Graph image per major page.
- Product structured data where appropriate.
- FAQ structured data on guide pages.
- Breadcrumb structured data.
- Article structured data for blog posts.
- Static sitemap generation.
- Robots.txt.
- Clean URLs.
- Descriptive image filenames and alt text.

## Visual Direction

The design should be premium and understated.

Preferred feel:

- Warm ivory, stone white, soft taupe, charcoal, muted bronze accents.
- Large real material images.
- Fine borders and clean tables.
- Spacious product detail layouts.
- Calm typography with strong hierarchy.
- No decorative gradient blobs or loud sales colors.
- No generic stock-like hero if real slab or project imagery is available.

Product pages should prioritize clarity:

- Left: image gallery with large visual.
- Right: product identity, attributes, CTA.
- Below: details, applications, slabs, FAQ, related items.

Inventory/current slab pages should feel like a high-end showroom catalogue, not a shopping cart.

## Inquiry Strategy

Main conversion action:

- "Request current slab photos"
- "Ask for available sizes"
- "Send project drawings"
- "Request samples"
- "Discuss thickness and finish"

Inquiry guidance should ask for:

- Product line
- Finish
- Thickness
- Quantity
- Destination country or port
- Application
- Required delivery timing
- Drawings or cut list if available

Avoid checkout, cart, login, and fake live stock behavior.

## Maintenance Workflow

### Add A Product

1. Put images into the source material folder.
2. Process images into the correct `public/assets/images/` roles.
3. Add one product object to `src/data/products.ts`.
4. Add FAQs or related posts if needed.
5. Build and verify.

### Add A Slab / Current Lot

1. Add complete slab images.
2. Use `slab-full` role and contain-safe display.
3. Add one entry to `src/data/slabs.ts`.
4. Use approximate or call-for-size fields if the lot changes quickly.
5. Build and verify.

### Add A Blog Post

1. Add post data or content file.
2. Add one SEO cover image.
3. Link related products.
4. Build and verify sitemap.

## Testing And Verification

Before delivery:

- Run package install if needed.
- Run static build.
- Verify generated routes.
- Check desktop and mobile layouts.
- Check that full slab images are not cropped.
- Check hero/card images are visually polished.
- Check no text overlaps on mobile.
- Check product data renders from data files.
- Check sitemap and robots.
- Check key pages have unique metadata.

Browser visual checks should include:

- Home page.
- Natural Taj Mahal Quartzite product page.
- Taj Mahal Inspired Quartz product page.
- Current slabs page.
- A slab detail page.
- Blog index.
- One blog post.
- Contact page.

## Open Decisions

These can be finalized during implementation planning:

- Exact route name for current slabs: `/slabs/` or `/products/current-slabs/`.
- Whether to include a static inquiry form using a future Cloudflare Pages form handler or only mailto/WhatsApp links at first.
- Whether blog content will be stored directly in TypeScript data or Markdown/MDX content files.
- Whether the first launch includes all existing 20 natural slab examples or a curated smaller set.

## Approved Direction

The approved direction is:

High-end TM Stone Taj Mahal series entrance site, containing Natural Taj Mahal Quartzite and Taj Mahal Inspired Quartz. The site will not be a heavy live-inventory e-commerce system. It will use representative slab/current-lot displays, complete slab imagery, nominal sizes, and inquiry-first CTAs so the site stays accurate even when real slab inventory changes quickly.
