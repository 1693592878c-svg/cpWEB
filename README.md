# 陈萍个人作品集网站

这是陈萍的 UI/UX 设计师个人作品集网站，当前根目录 `index.html` 是主要发布入口，可以直接作为静态网站部署到 GitHub Pages。

项目中也保留了 Vite + React 版本的代码，后续如果要切换到 React 版本，需要先统一入口和资源路径，避免静态版与 React 版同时维护导致内容不一致。

## 项目结构

- `index.html`：当前主要发布入口
- `project-detail.html`：项目详情页
- `assets/styles.css`：当前主要样式文件
- `assets/`：网站图片与封面素材
- `files/`：简历和作品集 PDF
- `src/`：React 版本源码
- `public/`：Vite 构建时使用的静态资源
- `DESIGN_SYSTEM.md`：视觉与体验规范
- `REQUIREMENTS.md`：需求说明与验收标准
- `DEPLOYMENT.md`：部署说明
- `TESTING.md`：测试与排查说明

## 本地预览

直接用浏览器打开 `index.html` 即可预览，或者使用本地开发服务预览。

页面中的图片和 PDF 都应使用相对路径：

- `./assets/...`
- `./files/...`
- `./assets/styles.css`

## 构建预览

如果使用 Vite 流程：

```bash
npm install
npm run build
npm run preview
```

当前 `vite.config.js` 中保留 `base: './'`，用于适配 GitHub Pages 这类静态部署路径。

## GitHub Pages 部署

如果发布当前静态版，把整个项目上传到 GitHub 仓库，在仓库的 Pages 设置中选择从根目录发布即可。

不要只上传 `index.html`，需要同时保留 `assets/`、`files/`、`project-detail.html` 等被页面引用的文件，否则图片、样式、详情页或 PDF 会缺失。

替换项目图片时，建议保持原文件名不变，例如替换 `assets/project-thumb-1.jpg`，这样无需改 HTML 路径。

更多部署注意事项见 `DEPLOYMENT.md`。
