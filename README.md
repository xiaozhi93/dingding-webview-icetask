# ice-stark-layout

## 使用

- 启动调试服务: `npm start`
- 构建 dist: `npm run build`

## 目录结构

- 应用配置: `src/app.js`
- 路由配置: `src/routes.js`
- 布局文件: `src/layouts`
- 通用组件: `src/components`
- 页面文件: `src/pages`

## 效果图

![screenshot](https://img.alicdn.com/tfs/TB14igtaVT7gK0jSZFpXXaTkpXa-2878-1368.png)


## FQA
1. 主应用按需加载样式不加载的问题
   1. 主应用的样式可以放在全局中，不需要按需加载
