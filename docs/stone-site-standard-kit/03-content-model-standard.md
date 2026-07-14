# 03 Content Model Standard

所有长期维护的内容必须数据化。

## Product

产品线代表一个稳定产品类别，例如 Natural Taj Mahal Quartzite、Patagonia Granite、Calacatta Quartz。

必须字段：

- `slug`
- `name`
- `categorySlug`
- `material`
- `origin`
- `summary`
- `description`
- `finishes`
- `thicknesses`
- `nominalSize`
- `availabilityLabel`
- `coverImage`
- `gallery`
- `specs`
- `tags`

天然石材要强调：

- 每片板有自然差异。
- 当前 lot 需要确认。
- 可提供现货照片、数量、尺寸、表面处理。

人造石英石要强调：

- 批量稳定。
- 颜色一致。
- 项目供货能力。
- 可做 polished / honed 等表面。

## Slab / Current Lot

板面页代表当前或代表性板材，不保证长期库存。

必须字段：

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
- `gallery`
- `statusNote`
- `inquiryPrompt`

默认文案：

```txt
Slab lots update quickly. Please contact us for current lot photos, quantities, and updated slab sizes.
```

## Post

SEO 文章不是普通博客，要像落地页一样有图、有表、有 CTA、有内链。

必须字段：

- `slug`
- `title`
- `description`
- `date`
- `category`
- `tags`
- `coverImage`
- `sections`
- `relatedProductSlugs`

## Gallery Item

```json
{
  "src": "/assets/images/products/material/example.webp",
  "alt": "Clear image description",
  "role": "application"
}
```

常用 role：

```txt
cover
slab-full
detail
application
factory
```

