# Patagonia Granite

Static Astro website for `patagoniagranite.com`, built for TM Stone.

## Local commands

```bash
pnpm install
pnpm test
pnpm build
pnpm verify
pnpm dev
```

## Deployment

- Production branch: `main`
- Build command: `pnpm build`
- Output directory: `dist`
- Recommended host: Cloudflare Pages

The contact form posts to Formspree. Core content is maintained in `src/data/`; page imagery lives under `public/assets/images/`.
