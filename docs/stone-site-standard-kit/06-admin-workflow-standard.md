# 06 Admin Workflow Standard

后台必须保持静态，不使用数据库。

推荐做法：

- `/admin/` 是静态页面。
- 通过 GitHub API 读写 JSON 内容。
- GitHub Token 只保存在当前浏览器 session。
- 保存后提交到 GitHub。
- Cloudflare Pages 自动重新构建。

## Token 权限

GitHub fine-grained token:

```txt
Repository: target repository
Permission: Contents - Read and write
```

## 后台功能

至少支持：

- 产品新增、编辑、删除。
- 板面新增、编辑、删除。
- 文章新增、编辑、删除。
- 图片上传。
- 图库分类。
- 图片删除。
- 图集可视化增删。
- 文章像文档一样插入图片、段落、表格、CTA。

## 安全规则

- 删除图片前确认是否被页面使用。
- 修改图片分类不改变文件路径。
- 修改 slug 会改变 URL，保存前确认。
- 不要上传未经筛选的大量原始图。
- 不要把 GitHub Token 写进代码。

## 内容保存规则

内容保存到：

```txt
src/content/products/
src/content/slabs/
src/content/posts/
```

图片保存到：

```txt
public/assets/images/
```

图库清单：

```txt
public/assets/images/image-manifest.json
```

