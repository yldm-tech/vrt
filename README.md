# feature
- vite作为构建工具，复杂度比webpack低，但速度却比webpack快很多
- 支持hmr,修改代码页面无缝更新
- 以typescript为开发语言，有类型约束不会写出难以查找的bug
- 支持别名@到根目录，@@到components目录
- 支持国际化，默认写了中文、英文、日语3种语言
- 配置了eslint，使用`yarn fix`可以自动修复代码格式问题
- 采用了tailwind作为开发的css样式框架，外加tailwind-classnames约束样式名字。
- 配置了多环境，默认为local、stg、prod3个环境，如果有特殊需求可根据需要扩展
- 状态管理采用redux-tool-kit，没有繁琐的redux流程(action、reducer等)，一个slice文件就是一个业务模块。
- 带一个todoList的demo，列举了react-router-dom相关用法

# 目录结构

```
├── README.md           项目说明文件
├── index.html          项目入口文件
├── node_modules        项目依赖包
├── package.json        项目依赖声明文件
├── src                 源码
│   ├── assets          资源目录
│   ├── components      组件目录
│   ├── service         http调用
│   ├── store           状态管理
│   ├── utils           通用方法
│   └── views           页面
│   ├── main.tsx        App根
├── tsconfig.json       ts配置
├── vite.config.ts      vite配置
└── yarn.lock           yarn文件锁

```
