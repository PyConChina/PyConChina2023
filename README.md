# PyConChina 2022 官方网站

## 安装 PDM

请参考 [PDM 官方文档](https://pdm.fming.dev/latest/#installation) 安装 PDM

## 安装依赖

```bash
pdm install
```

## 启动开发服务器

```bash
pdm serve
```

支持热重载。

## 添加修改内容

本网站使用 [Lektor](https://www.getlektor.com/docs) 搭建，各目录作用如下：

- `assets` 存放静态资源
- `content` 存放网站内容数据
- `databags` 存放元数据配置信息
- `templates` (Jinja)模板文件

另外可以通过开发服务器的管理员界面（在页面右上角进入）在网页中进行修改、上传附件等操作。

## 构建静态文件

```bash
pdm run build
```

结果输出在 `_build` 目录下。

## 查看构建结果

```bash
pdm start
```

访问 http://localhost:8000 浏览构建结果。
