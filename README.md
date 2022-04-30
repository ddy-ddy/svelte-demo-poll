#### 内容介绍

- 记录一下跟着油管主net NinJa学习构建一个简单的svelte demo的过程
- 该demo是一个投票网站，能新增删除投票，用户进行投票，展示投票信息等功能
- 将构建的demo通过surge免费部署到网站上

------

#### demo最终实现效果

- 添加Header，Footer

- 展示投票信息及数据，用户点击投票

<img src="https://tva1.sinaimg.cn/large/e6c9d24egy1h1s33n0lhdj21c00u0wge.jpg" style="zoom:43%;" />

- 新增投票信息，同时显示错误信息

<img src="https://tva1.sinaimg.cn/large/e6c9d24egy1h1s33ogw4dj21c00u0jt2.jpg" style="zoom:43%;" />

- demo组件结构

<img src="https://tva1.sinaimg.cn/large/e6c9d24egy1h1s4m4bvlej216t0u0wgr.jpg" style="zoom:50%;" />
- 该demo效果可在该网站上预览：[https://ddy-poll.surge.sh/](https://ddy-poll.surge.sh/)

------

#### Svelte学习资源

-  官方文档：[https://www.sveltejs.cn/](https://www.sveltejs.cn/)

- net NinJa学习视频：[youtube](https://www.youtube.com/watch?v=zojEMeQGGHs&list=PL4cUxeGkcC9hlbrVO_2QFVqVPhlZmz7tO&index=1)
- 本demo代码：[https://github.com/ddy-ddy/svelte_demo_ddypoll](https://github.com/ddy-ddy/svelte_demo_ddypoll)

------

#### dem构建过程

1、使用脚手架工具`degit` setting up a svelte app

```bash
'''
#-g means installing this package globally on my compute so we can use it anywhere in any directory
'''
npm install -g degit    #install degit with npm
degit sveltejs/template svelte-demo-ddypoll   #create a project by degit
npm install #install dependency package with npm
npm run dev  #spin up a local development server to preview our project
```

2、跟着YouTube的视频不断添加新功能，每一个版本在我的github都有存档，这里就简单罗列每个版本添加的功能

v1：[Add header and footer]()

v2：[Resuable Tabs Component](https://github.com/ddy-ddy/svelte_demo_ddypoll/tree/v2)

v3: [Poll Form Component](https://github.com/ddy-ddy/svelte_demo_ddypoll/tree/v3)

V4: [Custom Button Component](https://github.com/ddy-ddy/svelte_demo_ddypoll/tree/v4)

v5: [Custom Form Validation](https://github.com/ddy-ddy/svelte_demo_ddypoll/tree/v5)

v6: [add new polls](https://github.com/ddy-ddy/svelte_demo_ddypoll/tree/v6)

v7: [Poll details component & Card component](https://github.com/ddy-ddy/svelte_demo_ddypoll/tree/v7)

v8: [Casting votes](https://github.com/ddy-ddy/svelte_demo_ddypoll/tree/v8)

v9: [Vote bars](https://github.com/ddy-ddy/svelte_demo_ddypoll/tree/v9)

v10: [Introduction to stores](https://github.com/ddy-ddy/svelte_demo_ddypoll/tree/v10)

v11: [Lifecycle hook & Updating Store Data](https://github.com/ddy-ddy/svelte_demo_ddypoll/tree/v11)

v12: [Deleting Polls](https://github.com/ddy-ddy/svelte_demo_ddypoll/tree/v12)

v13: [transition basics & tweens & animations](https://github.com/ddy-ddy/svelte_demo_ddypoll/tree/v13)

------

3、将app部署到surge上

```shell
#安装surge
npm install --global surge
#build project
npm run build
#deploy to website
surge public my-project-name.surge.sh
```

