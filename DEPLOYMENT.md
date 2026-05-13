# 部署说明

这份文档用于减少 GitHub Pages 部署时的路径、资源和构建问题。

## 当前项目状态

项目里同时存在两类页面：

- React/Vite 版本：`src/`、`index.html`、`vite.config.js`。
- 静态 HTML 页面：例如 `personal-site.html`、`project-detail.html`、`annotate-preview.html`。

后续部署前必须先确认：最终要发布的是 Vite 构建结果，还是直接发布根目录静态 HTML。

## 路径原则

所有页面、图片、PDF、CSS、JS 都应该使用项目内相对路径。

推荐：

```text
./assets/project-thumb-1.jpg
./files/portfolio.pdf
./styles.css
```

不推荐：

```text
/assets/project-thumb-1.jpg
/files/portfolio.pdf
/Users/cp/Documents/...
file:///Users/cp/...
```

原因：

- `/assets/...` 在本地可能能用，但部署到 GitHub Pages 的仓库子路径时容易失效。
- `/Users/...` 和 `file:///...` 只在你的电脑上存在，别人和线上环境都打不开。

## Vite 部署

当前 `vite.config.js` 使用：

```js
base: './'
```

这个配置会让构建后的资源更适合静态目录和 GitHub Pages。非必要不要改成：

```js
base: '/'
```

因为 GitHub Pages 项目站点通常不是部署在域名根路径，而是类似：

```text
https://用户名.github.io/仓库名/
```

如果资源路径从 `/` 开始，线上容易找不到 CSS、JS 或图片。

## 本地检查流程

发布前建议按顺序检查：

1. 本地预览页面。
2. 检查首页图片是否正常显示。
3. 检查项目封面是否正常显示。
4. 检查简历 PDF 和作品集 PDF 是否能打开。
5. 检查手机宽度下是否错位。
6. 如果使用 Vite，执行构建并预览构建结果。

## GitHub Pages 发布方式

常见方式有两种。

### 方式一：直接发布静态文件

适合纯 HTML 版本。

需要上传：

- `index.html`
- `styles.css`
- `assets/`
- `files/`
- 其他被页面引用的 HTML、CSS、图片、PDF

注意：

- 不要只上传 `index.html`。
- 页面引用了什么文件，就要一起保留对应目录。
- 替换图片时尽量保持原文件名，减少路径修改。

### 方式二：发布 Vite 构建结果

适合 React/Vite 版本。

流程：

1. 安装依赖。
2. 执行构建。
3. 发布 `dist/` 目录。

注意：

- `public/` 里的内容会被复制到构建结果根目录。
- `src` 中引用的资源路径要确认构建后可访问。
- 发布前要预览 `dist/`，不要只看开发环境。

## 部署前资源清单

确认这些文件或目录存在：

- 首页需要的头像或主视觉图片。
- 项目缩略图。
- 项目详情图。
- 简历 PDF。
- 作品集 PDF。
- CSS 文件。
- 构建后的 JS 文件。

## 常见问题

### 本地正常，线上图片不显示

优先检查：

- 图片是否真的上传到了仓库。
- 文件名大小写是否一致。
- 路径是否用了 `/assets/...`。
- 图片是否只存在于 `assets/`，但 Vite 页面需要从 `public/assets/` 访问。

### 线上 CSS 丢失

优先检查：

- CSS 文件是否上传。
- HTML 里引用路径是否正确。
- Vite 的 `base` 是否被改掉。

### PDF 打不开

优先检查：

- PDF 是否在 `files/` 或 `public/files/`。
- 链接是否写成项目内相对路径。
- 文件名是否包含空格、中文或特殊符号。为了稳定，建议使用英文小写和连字符。

## 给 Codex 的部署排查指令

可以直接这样说：

```text
请帮我检查这个个人网站是否适合部署到 GitHub Pages。重点检查资源路径、Vite base 配置、图片/PDF 引用、构建结果和线上可能失效的地方。不要删除我的素材，只给出必要修改。
```

