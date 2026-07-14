# 01 Build Rules

## 核心原则

石材网站必须是可维护的静态网站，不做一次性 HTML 页面。

必须满足：

- 纯静态构建。
- 不依赖数据库。
- 不依赖后端服务。
- 不使用 SSR。
- 内容数据化。
- 图片规范化。
- 页面有清晰询盘路径。
- 后期能通过内容文件或静态后台维护。

## 默认技术栈

- Astro。
- TypeScript。
- CSS variables + component styles。
- 少量 JavaScript 只用于图库、置顶、表单、图片放大等必要交互。
- GitHub repo。
- Cloudflare Pages。

## 禁止项

- WordPress。
- Shopify。
- 数据库。
- 登录系统。
- 服务端渲染。
- 大型后台管理系统。
- 把产品、板面、文章写死在多个页面里。
- 用图片数量当卖点。
- 让完整大板图被裁切。

## 推荐目录

```txt
public/
  assets/
    images/
      hero/
      products/
      slabs/
      applications/
      factory/
      blog/
      uploads/
    icons/
    downloads/
  admin/
  robots.txt
  favicon.svg

src/
  components/
    layout/
    common/
    home/
    product/
    blog/
  content/
    products/
    slabs/
    posts/
  data/
    site.ts
    navigation.ts
    footer.ts
    categories.ts
    faqs.ts
  pages/
    index.astro
    products/
    slabs/
    applications/
    factory/
    blog/
    contact.astro
    sitemap.xml.ts
  styles/
  utils/

docs/
  stone-site-standard-kit/
```

## 部署标准

Cloudflare Pages:

```txt
Build command: pnpm build
Output directory: dist
Production branch: main
```

如果项目使用图片清单脚本：

```txt
Build command: pnpm images && pnpm build
```

上线后提交：

```txt
https://domain.com/sitemap.xml
```

