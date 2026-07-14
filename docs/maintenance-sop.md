# Maintenance SOP

## Add Or Edit Company Details

1. Open `src/data/site.ts`.
2. Edit email, WhatsApp, phone, address, export markets, or default description.
3. Run:

```bash
pnpm test
pnpm build
```

## Add A Product Line

1. Put curated images into `public/assets/images/products/<product-slug>/`.
2. Add the product object to `src/data/products.ts`.
3. Add any related FAQs in `src/data/faqs.ts`.
4. Add current-lot examples in `src/data/slabs.ts` if needed.
5. Run:

```bash
pnpm images
pnpm test
pnpm build
```

## Add A Representative Slab / Current Lot

1. Copy the complete slab image into `public/assets/images/slabs/`.
2. Add a slab object to `src/data/slabs.ts`.
3. Use inquiry-safe values when exact inventory changes quickly:

```ts
nominalSize: 'Call for available slab sizes',
availability: 'Current lots available',
statusNote: 'Slab lots update quickly. Please contact TM Stone for current lot photos, quantities, and updated slab sizes.',
```

4. Run:

```bash
pnpm images
pnpm test
pnpm build
```

## Add A Blog Article

1. Copy the cover image into the correct `public/assets/images/` folder.
2. Add a post object to `src/data/posts.ts`.
3. Include tags that overlap with related posts or products.
4. Run:

```bash
pnpm images
pnpm test
pnpm build
```

## Image Rules

- Use `cover` style for hero, cards, and editorial previews.
- Use `contain` style for complete slab images and current-lot pages.
- Do not crop full slab images.
- Keep source material in `素材收集_请放这里/`.
- Commit only curated site images in `public/assets/images/`.

## Deployment

1. Push `main` to GitHub.
2. Connect the repo to Cloudflare Pages.
3. Use:

```txt
Build command: pnpm install && pnpm images && pnpm build
Output directory: dist
```

4. Set Node version to 22 or newer.
