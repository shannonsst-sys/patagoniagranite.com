# TM Stone Content Admin Guide

This site stays fully static. The admin page does not use a database or a custom server.
It edits JSON content files in GitHub, then Cloudflare Pages rebuilds the static site.

Admin URL:

```txt
https://tajmahalquartzite.net/admin/
```

Local URL:

```txt
http://127.0.0.1:4321/admin/
```

## GitHub Token

Create a GitHub fine-grained personal access token for:

```txt
Repository: shannonsst-sys/tajmahalquartzite.net
Permission: Contents - Read and write
```

Paste the token into the admin page. The token is stored only in the current browser session.

## Products

Products are stored here:

```txt
src/content/products/
```

Each product is one JSON file. The product `slug` becomes the product URL:

```txt
slug: natural-taj-mahal-quartzite
URL: /products/natural-taj-mahal-quartzite/
```

Use image paths that start with:

```txt
/assets/images/
```

Example gallery item:

```json
{
  "src": "/assets/images/products/natural-taj-mahal-quartzite/example.webp",
  "alt": "Natural Taj Mahal Quartzite slab detail",
  "role": "detail"
}
```

Allowed image roles:

```txt
cover
slab-full
detail
application
factory
```

## Slabs

Current slab lots are stored here:

```txt
src/content/slabs/
```

Each slab is one JSON file. The slab `slug` becomes the slab URL:

```txt
slug: taj-mahal-natural-quartzite-slab-08
URL: /slabs/taj-mahal-natural-quartzite-slab-08/
```

Use the `Slabs` tab in `/admin/` to edit:

```txt
name
productSlug
material
finish
thickness
nominalSize
availability
lotLabel
gallery
statusNote
inquiryPrompt
tags
```

The gallery can be edited visually with Add Image, Choose Image, and Delete.

## Articles

Articles are stored here:

```txt
src/content/posts/
```

Each article is one JSON file. The article `slug` becomes the article URL:

```txt
slug: taj-mahal-quartzite-kitchen-countertops-pros-cons-price-guide
URL: /blog/taj-mahal-quartzite-kitchen-countertops-pros-cons-price-guide/
```

Article sections support:

```txt
heading
body
image
images
bullets
table
note
cta
```

In the admin page, article sections can be added or removed visually. Each section supports body text, one main image, optional multi-image gallery, bullets, table JSON, note, and CTA.

## Image Picker

The admin page reads:

```txt
public/assets/images/image-manifest.json
```

Use `Choose Image` beside cover images, slab galleries, product galleries, and article section images. The picker shows image previews and inserts the correct `/assets/images/...` path automatically.

## Image Uploads

The image picker also supports direct uploads from the admin page.

Supported formats:

```txt
JPG
PNG
WEBP
```

Uploaded files are committed to GitHub under:

```txt
public/assets/images/{selected-folder}/YYYY-MM/
```

The admin page also updates:

```txt
public/assets/images/image-manifest.json
```

This makes uploaded images immediately searchable in the picker after the next Cloudflare build.

When uploading from a gallery image row, selecting multiple files will insert the uploaded files as multiple gallery rows.

Each uploaded or existing image has a category selector in the image library. Changing the category updates only the image library metadata, not the file path, so existing product, slab, or article image links stay stable.

Images can also be deleted from the image library. Delete removes the file from GitHub and removes it from `image-manifest.json`. Before deleting, make sure the image is not already used by a product, slab, article, or page section.

## Safe Workflow

1. Upload or add images under `public/assets/images/`.
2. Open `/admin/`.
3. Paste the GitHub token.
4. Edit a product, slab, or article.
5. Save to GitHub.
6. Wait for Cloudflare Pages to rebuild.
7. Check the page on the live website.

Do not edit generated `dist/` files. They are rebuilt automatically.
