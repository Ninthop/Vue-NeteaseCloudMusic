# vue-neteasecloudmusic

## 预览
[码云预览地址](http://ninthop.gitee.io/vue-neteasecloudmusic)

## 预览图
![预览](./src/assets/static/预览.png)

## 已完成
- 发现页
- 用户页，登录功能
- 歌单页
- 播放页，播放功能，迷你播放列表，最近播放
- 搜索页&搜索建议
- 歌手页
- 排行榜
- 基础动画

## 技术栈
- vue-cli3
- Axios
- Vuex
- Stylus
- element-ui　　loading功能

## 目录

```
├── src
│   ├── api　　　　　　　　　　　　// api
│   ├── assets                   // 样式及静态资源
│   ├── common                   // 基础动画、字典、基础组件
│   ├── components
│   │   ├──Home                  // 主页组件
│   │   ├──Player                // 播放器组件
│   │   ├──Search                // 搜索页组件
│   │   ├──Singer           　　　// 歌手页组件
│   │   ├──Singer           　　　// 歌单页组件
│   │   ├──homeHeader.vue   　　　// 主页头部
│   │   ├──homeTab.vue   　　　   // 主页tab
│   ├── lib                      // axios、http封装及公用方法
│   ├── router                   // 路由
│   ├── store                    // 状态管理
│   ├── views
│   |   ├── EverydayRec           //每日推荐
│   |   ├── Home              　  //主页
│   |   ├── Login                 // 登录页
│   |   ├── NewSong　　　　　　　 　// 新歌速递
│   |   ├── Player             　 // 播放器
│   |   ├── RecentSong　　　　　　 // 最近播放
│   |   ├── Search　　　　　　　 　// 搜索
│   |   ├── Singer　　　　　　　 　// 歌手页
│   |   ├── SongList              // 歌单页
│   │   ├── User               　 // 用户页
│   ├── App.vue
│   └── main.js
├── babel.config.js              // 按需引入组件的配置
├── .editorconfig　　　　　　　　　// 格式
├── package.json                 // 项目依赖
└── vue.config.js                // vue-cli 3.0配置
```

## 插件
- [fastClick](https://github.com/ftlabs/fastclick)
- [better-scroll](https://github.com/ustbhuangyi/better-scroll)
- [VueAwesomeSwiper](https://github.com/surmon-china/vue-awesome-swiper)
- [lyric-parse](https://github.com/ustbhuangyi/lyric-parser)

## 接口服务
[网易云音乐Api](https://binaryify.github.io/NeteaseCloudMusicApi)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
