# 寻迹历史

iOS 风格响应式 Web 原型。无需安装依赖，原生 ES Modules、CSS、Canvas 与 MediaDevices。

## 启动

在本目录执行 `python3 -m http.server 5173 --directory dist`，浏览器访问 http://localhost:5173。
无编译构建步骤，dist 即可部署的应用。主脚本可通过 `node --check dist/app.js` 检查语法。

## 页面与路由

- `#/home` 发现与朝代筛选
- `#/search/关键词` 人物、地点、事件与社区搜索
- `#/person/su`、`#/person/li`、`#/person/xin` 人物档案
- `#/event/rain`、`#/event/poetry` 事件档案
- `#/routes`、`#/route/dongpo`、`#/route/tang` 路线
- `#/place/red`、`#/place/lake`、`#/place/tower` 地点
- `#/community` 分类、关注
- `#/note/n1` 笔记详情，点赞、收藏、评论与分享
- `#/edit` 发布与草稿；`#/edit/本地笔记ID` 编辑
- `#/ar/red` 相机/模拟取景、二维叠印、照片下载、写笔记
- `#/me` 创作、收藏、到访、浏览历史、数据导出和清除
- `#/badges` 四类操作联动勋章
- `#/error` 错误重试演示，未知路由为 404

## 设计与数据

Design Tokens 位于 dist/style.css 的 :root；主色 #A62C2B，纸白 #FAF7F0，青黛 #526B68。
类型契约位于 dist/models.d.ts。应用数据访问集中于 app.js 的 db、save、notes、findNote 与 updateBadges。
图片为用户提供的参考插画，界面标注非实景。历史内容为附来源索引的简要演示档案；同人明确标识虚构。

## 能力边界

所有笔记、草稿、评论、点赞、收藏、勋章和到访记录存于当前浏览器 LocalStorage。图片作为 Data URL 存储，受浏览器配额限制；失败保留编辑器内容并提示重试。
没有后端、账号、云端上传、跨设备同步或真实社区。公开/关注/评论均为本地交互模型。
相机需要 localhost 或 HTTPS，主动点击后请求权限，离页或拍摄后停止流。相机拒绝时显示重试与模拟入口。Canvas 实现二维叠印，不含三维 AR、GPS 核验或真实导航。
路线是历史主题节点示意，开放时间、交通与票务未接入。
不依赖网络请求加载档案，因此未人为增加加载等待；错误页为明确标注的演示。离线提示不等于离线缓存，首次加载仍需能访问站点。
字体有系统回退，图片有 alt；移动端底部导航适配安全区并支持减少动态效果。
