# 02 Image Asset Standard

图片是石材网站的核心资产。建站前必须先整理图片，否则页面会显得杂乱、廉价、缺少信任感。

## 图片分类

```txt
public/assets/images/
  hero/
  products/
  slabs/
  applications/
  factory/
  blog/
  uploads/
  logo/
```

## 分类用途

- `hero/`：首页和重要落地页首屏。
- `products/`：产品线主图、纹理、应用效果图。
- `slabs/`：完整大板、库存板、代表性 lot。
- `applications/`：厨房、浴室、墙面、地面、商业空间效果图。
- `factory/`：矿区、荒料、切割、抛光、CNC、质检、包装、装柜。
- `blog/`：SEO 文章配图。
- `uploads/`：后台临时上传或未归类图片。
- `logo/`：品牌标识。

## 命名规则

不要用中文、微信截图名、随机数字名。

推荐：

```txt
material-name-application-01.webp
taj-mahal-quartzite-kitchen-island-01.webp
patagonia-granite-slab-close-up-01.webp
calacatta-quartz-factory-polishing-01.webp
```

## 展示规则

- 完整大板图必须完整展示，用 `contain` 思路，不裁板面。
- 应用效果图可以 `cover`，但不能裁掉台面、墙面或材料主体。
- 工厂图要证明能力，不做装饰背景。
- Hero 图要真实显示材料或应用，不要纯氛围图。
- 图片下方文字不能被裁切、遮挡或压住表格。

## 建议尺寸

```txt
Hero: 1600x900 或更大
Product cover: 1200x900
Complete slab: 保留原比例，宽度建议 1400+
Application: 1400x1000 或接近横图
Factory: 1400x900
Blog: 1400x900
```

## Alt 文案

Alt 必须描述材料、场景、用途。

好：

```txt
Taj Mahal Quartzite kitchen island with warm ivory veining
Patagonia Granite backlit slab wall in luxury interior
Quartz slab polishing line in stone factory
```

差：

```txt
image 01
beautiful stone
factory photo
```

## 后台图库规则

- 上传时选择分类。
- 上传后可以在图库中修改分类。
- 删除图片前确认没有被页面使用。
- 删除图片会同时删除 GitHub 文件和图库清单记录。
- 不要把没有筛选过的大量原始素材全部上传到正式图库。

