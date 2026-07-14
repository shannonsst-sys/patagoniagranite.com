# 石材网站建站规则

## 1. 项目定位

石材网站不是普通展示页，必须同时服务四件事：

- 让客户快速看懂主营材料和供应能力。
- 让 Google 能理解产品、分类、文章和图片主题。
- 让买家愿意询问当前板材、项目报价或工厂能力。
- 后期能持续新增产品、板材、案例、文章，而不用重做全站。

默认做成纯静态网站，适合部署到 GitHub + Cloudflare Pages。

## 2. 技术栈规则

默认技术栈：

- Astro 静态项目。
- TypeScript 数据文件。
- 语义化 HTML。
- 全局 CSS 变量 + 组件内局部样式。
- 少量 JavaScript 只用于必要交互，例如图集切换、置顶按钮、表单。

禁止：

- WordPress。
- Shopify。
- 数据库。
- 登录系统。
- SSR。
- 大型后台系统。
- 把每个产品复制成重复 HTML。

## 3. 推荐目录结构

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
    icons/
    downloads/
  robots.txt
  favicon.svg

src/
  components/
    layout/
    common/
    home/
    product/
    blog/
  data/
    site.ts
    navigation.ts
    footer.ts
    categories.ts
    products.ts
    slabs.ts
    galleries.ts
    posts.ts
    faqs.ts
  pages/
    index.astro
    products/
    slabs/
    applications/
    factory/
    blog/
    contact.astro
  styles/
  utils/

docs/
  stone-website-rules/
```

## 4. 图片规则

图片是石材站的第一生产资料。建站前必须先整理图片。

### 4.1 图片分类

至少分成这些目录：

- `hero/`：首页和重要落地页首屏图。
- `products/<product-slug>/`：产品线图片，包括大板、纹理、效果图。
- `slabs/`：当前代表性大板或库存板。
- `applications/`：厨房、浴室、墙面、地面、商业空间效果图。
- `factory/`：矿区、荒料、切割、抛光、CNC、质检、包装、装柜。
- `blog/<article-slug>/`：SEO 文章配图。

### 4.2 图片命名

图片文件名必须包含关键词，不用中文名，不用随机截图名。

推荐格式：

```txt
taj-mahal-quartzite-kitchen-island-01.webp
taj-mahal-quartzite-slab-close-up-veining.webp
taj-mahal-quartzite-factory-slab-selection-01.webp
```

### 4.3 图片尺寸和展示

- 首屏图：16:9 或接近横图，建议 1600px 以上宽度。
- 产品卡片：可以裁切，但主体必须清楚。
- 完整大板：必须用 `contain` 思路展示，不能裁掉板面。
- 应用效果图：用 `cover` 可以接受，但不能让核心台面、墙面、板材被裁没。
- 工厂图：重点展示可信度，不要只放装饰感图片。

### 4.4 图片上线前检查

必须检查：

- 图片路径真实存在。
- alt 文案写清材料、场景、用途。
- 首屏图不空白、不糊、不被过度遮罩。
- 图集缩略图点击后能切换主图。
- 图注不压住表格或正文。

## 5. 页面结构规则

### 5.1 首页

首页第一屏必须直接表达：

- 品牌名或产品主题。
- 主营材料类型。
- 面向谁供货。
- 可以做什么询盘动作。

推荐模块：

- 高端视觉 Hero。
- 两条产品线入口。
- 当前板材 / current lots 入口。
- 应用场景。
- 工厂能力。
- SEO 文章入口。
- 联系 / WhatsApp / 表单 CTA。

避免：

- 纯导航页。
- 空洞 slogan。
- 装饰卡片过多。
- 看不出是石材网站。

### 5.2 产品线页面

每个产品线页面必须包含：

- 产品名称。
- 材料类型。
- 原产地或生产地。
- 厚度。
- 表面处理。
- 应用场景。
- 图集：大板、纹理、效果图。
- 询盘提示。
- 相关产品或当前板材入口。

天然石材要强调批次差异和 current lot confirmation。人造石英石要强调批量稳定、颜色一致、项目供应。

### 5.3 大板 / 当前库存页

大板页目标不是承诺库存永远有，而是让客户询问当前 lot。

必须写：

```txt
Slab lots update quickly. Please contact us for current lot photos, quantities, and updated slab sizes.
```

尺寸可以写：

```txt
Call for available slab sizes
```

不要写死容易过期的库存数量。

### 5.4 应用页面

应用页面要帮助客户想象使用场景。

建议分类：

- Kitchen island
- Countertop
- Full-height backsplash
- Bathroom vanity
- Feature wall
- Flooring / stairs
- Commercial reception

图片下方文字必须可读，不能被裁掉或压住。

### 5.5 工厂页面

工厂页面不是随便放图片，必须建立信任。

建议模块顺序：

1. Quarry / block source
2. Slab selection
3. Gang saw / multi-wire saw
4. Polishing / honed finish
5. CNC / five-axis fabrication
6. Dry layout / bookmatch
7. Quality inspection
8. Packing / container loading
9. Export support

能写机器和能力就写清楚，不要只写“factory images”。

### 5.6 联系页面

必须包含：

- WhatsApp。
- 电话。
- 邮箱。
- Formspree 或其他静态表单。
- 询盘字段：material, thickness, finish, quantity, drawings, destination。

浮动按钮建议：

- WhatsApp
- Call
- Top

## 6. SEO 文章规则

SEO 文章不能只是普通博客，要像落地页。

每篇文章需要：

- 明确关键词。
- 明确 URL slug。
- Meta title。
- Meta description。
- Hero 图。
- 正文配图。
- 表格。
- FAQ 或购买建议。
- 内链到产品页、分类页、工厂页、联系页。
- CTA。
- Article JSON-LD。

文章配图建议独立放在：

```txt
public/assets/images/blog/<article-slug>/
```

价格文章不要写死单一报价，优先写影响因素和询价逻辑。

## 7. 数据化规则

所有可长期维护的内容都必须在 `src/data/` 里。

推荐：

- `site.ts`：品牌、域名、电话、WhatsApp、邮箱。
- `navigation.ts`：导航。
- `products.ts`：产品线。
- `slabs.ts`：大板 / lot。
- `galleries.ts`：应用图和工厂图。
- `posts.ts`：文章。
- `faqs.ts`：FAQ。

不要把产品参数、联系方式、导航链接到处硬编码。

## 8. 设计规则

石材站要高端，但不能做成装饰网站。

推荐：

- 大图驱动。
- 留白清楚。
- 标题有层级。
- 表格清晰。
- 图集可点。
- CTA 明确。
- 产品信息容易扫读。

避免：

- 标题过大导致断行难看。
- 图片说明压住表格。
- 卡片套卡片。
- 大板图被裁切。
- 只有一种颜色调到底。
- 首屏看不出产品。
- 用图片数量当卖点。

## 9. 部署规则

默认部署链路：

1. GitHub repo。
2. Cloudflare Pages。
3. Build command:

```txt
pnpm build
```

4. Output directory:

```txt
dist
```

5. Production branch:

```txt
main
```

6. 提交 sitemap 到 Google Search Console：

```txt
https://domain.com/sitemap.xml
```

## 10. 上线前必须验证

每次改完必须跑：

```bash
pnpm test
pnpm build
```

必要时还要打开页面检查：

- 首页首屏。
- 产品页。
- 大板详情页。
- 博客文章页。
- 移动端宽度。
- 图片是否加载。
- 表格和图注是否重叠。
- WhatsApp / Call / 表单是否存在。

## 11. 以后做新石材站的默认流程

1. 先整理图片。
2. 确定产品线和分类。
3. 写 `site.ts` 联系方式和品牌信息。
4. 写产品数据。
5. 写板材 / lot 数据。
6. 写应用图和工厂图数据。
7. 做首页。
8. 做产品页。
9. 做工厂、应用、联系页面。
10. 做 SEO 文章。
11. 测试构建。
12. GitHub + Cloudflare 部署。
13. Google Search Console 提交 sitemap。
