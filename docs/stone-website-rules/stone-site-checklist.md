# 石材网站上线检查清单

## 项目基础

- [ ] 使用 Astro 或同等级静态项目。
- [ ] 不使用数据库。
- [ ] 不使用 SSR。
- [ ] 不使用 WordPress / Shopify。
- [ ] 页面内容数据化，不重复硬编码。
- [ ] `src/data/site.ts` 已配置品牌、域名、邮箱、电话、WhatsApp。
- [ ] `robots.txt` 存在。
- [ ] `sitemap.xml` 可以生成。

## 图片

- [ ] 图片已按 `hero / products / slabs / applications / factory / blog` 分类。
- [ ] 文件名包含英文关键词。
- [ ] 首屏图加载正常。
- [ ] 完整大板图没有被裁切。
- [ ] 应用效果图主体没有被裁掉。
- [ ] 工厂图能展示矿区、荒料、机器、质检、包装或装柜。
- [ ] 每张上线图片有合适 alt。
- [ ] 图注不压住表格、按钮或正文。

## 首页

- [ ] 第一屏能看出品牌和主营石材。
- [ ] 有产品线入口。
- [ ] 有当前大板 / current lots 入口。
- [ ] 有应用场景入口。
- [ ] 有工厂能力入口。
- [ ] 有 WhatsApp / Request / Contact CTA。
- [ ] 移动端标题不溢出。

## 产品页

- [ ] 产品名称清楚。
- [ ] 材料类型清楚。
- [ ] 原产地或生产地清楚。
- [ ] 厚度清楚。
- [ ] 表面处理清楚。
- [ ] 应用场景清楚。
- [ ] 产品图集可切换。
- [ ] 相关产品或大板入口存在。
- [ ] CTA 明确。

## 大板页

- [ ] 完整板面显示完整。
- [ ] 缩略图点击能切换主图。
- [ ] 当前 lot 文案不写死库存。
- [ ] 尺寸使用 `Call for available slab sizes` 或可更新字段。
- [ ] 有 WhatsApp / inquiry CTA。

## 应用页面

- [ ] 厨房、浴室、墙面、地面、商业空间至少覆盖核心场景。
- [ ] 图文不重叠。
- [ ] 图片说明可读。
- [ ] 页面不是单纯堆图。

## 工厂页面

- [ ] 有矿区或荒料说明。
- [ ] 有大板选择或库存展示。
- [ ] 有切割机器说明。
- [ ] 有抛光 / 表面处理说明。
- [ ] 有 CNC / 加工能力说明。
- [ ] 有质检说明。
- [ ] 有包装 / 装柜 / 出口说明。
- [ ] 不写“多少张图片”当卖点。

## SEO 文章

- [ ] 每篇文章有独立 slug。
- [ ] 有 Meta title 和 Meta description。
- [ ] 有 Hero 图。
- [ ] 有正文配图。
- [ ] 有表格或清单。
- [ ] 有内部链接或 CTA。
- [ ] 有 Article JSON-LD。
- [ ] 图片路径真实存在。
- [ ] 文章页图注、表格、图片不重叠。

## 联系与转化

- [ ] WhatsApp 号码正确。
- [ ] 电话正确。
- [ ] 邮箱正确。
- [ ] 表单 endpoint 正确。
- [ ] 浮动 WhatsApp / Call / Top 按钮正常。
- [ ] Contact 页面能引导客户提交材料、尺寸、厚度、数量、图纸和目的港。

## 构建与部署

- [ ] `pnpm test` 通过。
- [ ] `pnpm build` 通过。
- [ ] GitHub 已推送 main。
- [ ] Cloudflare Pages build command 为 `pnpm build`。
- [ ] Cloudflare Pages output directory 为 `dist`。
- [ ] 自定义域名 HTTPS 正常。
- [ ] Google Search Console 已添加域名。
- [ ] GSC 已提交 `sitemap.xml`。
