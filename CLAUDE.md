# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

这是 Nerfies (Deformable Neural Radiance Fields) 的学术项目展示网站。这是一个纯静态网站，使用 HTML + CSS + JavaScript 构建，无需构建工具或包管理器。

网站地址: https://nerfies.github.io

## 项目结构

```
.
├── index.html                # 主页面，包含完整的论文展示内容
├── static/
│   ├── css/                  # 样式文件
│   │   ├── bulma.min.css    # Bulma CSS框架
│   │   ├── bulma-carousel.min.css
│   │   ├── bulma-slider.min.css
│   │   ├── fontawesome.all.min.css
│   │   └── index.css        # 自定义样式
│   ├── js/                   # JavaScript文件
│   │   ├── bulma-carousel.js/min.js
│   │   ├── bulma-slider.js/min.js
│   │   ├── fontawesome.all.min.js
│   │   └── index.js         # 主要交互逻辑
│   ├── images/              # 静态图片资源
│   ├── videos/              # 视频演示文件
│   └── interpolation/       # 插值动画帧序列
└── README.md
```

## 开发和预览

由于这是纯静态网站，可以通过以下方式预览：

1. **使用Python内置服务器**:
   ```bash
   python3 -m http.server 8000
   ```
   然后访问 http://localhost:8000

2. **直接打开HTML文件**:
   在浏览器中直接打开 `index.html`（某些功能可能受CORS限制）

## 核心功能说明

### 插值图像滑块 (Interpolation Slider)
- 位置: `static/js/index.js`
- 功能: 预加载240帧插值图像 (位于 `static/interpolation/stacked/`)，通过滑块控制显示
- 图像命名格式: `000000.jpg` 到 `000239.jpg`

### 轮播功能 (Carousel)
- 使用 Bulma Carousel 插件实现图片/内容轮播
- 配置: 显示3个项目，支持循环滚动

### 响应式导航栏
- 使用 Bulma CSS 框架
- 移动端显示汉堡菜单

## 技术栈

- **UI框架**: Bulma CSS
- **JavaScript库**: jQuery 3.5.1
- **图标**: Font Awesome + Academicons
- **组件**:
  - bulma-carousel: 轮播组件
  - bulma-slider: 滑块组件

## 修改注意事项

1. **添加新的插值图像**: 需要修改 `static/js/index.js` 中的 `NUM_INTERP_FRAMES` 变量
2. **修改样式**: 主要在 `static/css/index.css` 中进行自定义样式修改
3. **添加媒体资源**:
   - 图片放在 `static/images/`
   - 视频放在 `static/videos/`
4. **Google Analytics**: 页面包含 GA 追踪代码 (ID: G-PYVRSFMDRL)

## 许可证

网站内容采用 Creative Commons Attribution-ShareAlike 4.0 International License
