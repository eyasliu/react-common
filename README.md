# react 项目通用代码

 - actions: redux actions
 - components: react 组件
 - utils: 通用工具
 - style: 通用样式
 - config: 配置文件

# 使用方式

设置 webpack 的 resolve.root 配置属性值加入该项目目录

```js
const webpackConfig = {
    // other config
    // ...
    resolve: {
        root: ['../react-common', '......'],
        // other resolve config
        // ...
    }
} 
```

即可根据路径调用，如：

```js
import fetchJson from 'utils/fetchJson'
```
