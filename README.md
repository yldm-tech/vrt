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
├── envs                          多环境配置文件
└── src                           工程核心代码
    ├── assets                    资源文件
    │   ├── i18n                     国际化翻译文件
    │   ├── images                   图片资源
    │   └── styles                   全局样式
    ├── components                 组件
    │   ├── CFooter                  头部
    │   └── Common                 通用组件
    │       ├── CButton
    │       ├── CContainer
    │       ├── CFullLoading
    │       ├── CInput
    │       ├── CLink
    │       ├── CNavLink
    │       └── CPartialLoading
    ├── i18n                         国际化代码实现
    ├── redux                        状态管理(slice和store)
    ├── service                      业务服务(http交互)
    ├── utils                        通用方法
    └── views                        页面
        ├── Add                        添加todo
        ├── Home                       todoList
        ├── Login                      登陆页面
        ├── NotFound                   404
        └── Task                       taskList
├── tsconfig.json                     ts配置
├── vite.config.ts                    vite配置
├── .eslintrc.js                      eslint配置
├── README.md                         项目说明文件
├── index.html                        项目入口文件
├── node_modules                      项目依赖包
├── package.json                      项目依赖声明文件
├── .env                              本地环境（如果没有的话会使用envs/.env.local）
└── yarn.lock                         yarn文件锁

```


# todoList screenshots
![launch](screenshots/launch.webp)
![add](screenshots/addTask.png)
![list](screenshots/list.png)
![task](screenshots/task.webp)
