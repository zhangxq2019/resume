# vue-resume

## 预览链接

[在线简历](https://zhangxq2019.github.io/resume/dist/index.html#/)

## 设计图

![图](/src/assets/blog-img/design.png)

## 需求

**实现点击侧边栏导航，主页面跳转到相应页面**

方法： 将路由都用right命名，再以`<route-link to="">` 指定目标地址，点击导航主页面切换为目标地址

```js
 routes: [
        {
          path: '/',
          name: 'me',
          components: {
            right: me
          }
        },
        {
          path: '/skill',
          name: 'skill',
          components: {
            right: skill
          }
        },
        {
          path: '/project',
          name: 'project',
          components: {
            right: project
          }
        }
      ]
```

## 参考

[vue-router](https://juejin.im/post/6844904164259020814)——我自己写的学习笔记