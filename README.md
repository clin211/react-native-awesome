# Awesome

## CLI 提效

- 创建 screen

```shell
yarn screen <screen name> # yarn screen card-detail
```

> 1.此命令输入后会在 `src/assets/styles/screens/<screen name>.ts` 的样式文件
> 2.创建 `<screen name>` 的默认类型，并添加到 `src/types/navigate.type.ts` 中
> 3.在 `src/screens/` 目录下创建 `<ScreenName>.tsx` 文件，并写入模版代码
> 4.在 `src/Navigate.tsx` 中配置路由相关的配置
