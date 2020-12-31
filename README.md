# china-lantern

新年新气象，网站中国新年灯笼挂件

*version: 1.0*

### 效果

[效果示例](http://fz6m.github.io/china-lantern/)

![](https://cdn.jsdelivr.net/gh/fz6m/Private-picgo@moe/img/20210101051855.png)

### 使用

```html
<body>

  <!-- 在页面最后引入 -->
  <script src="https://cdn.jsdelivr.net/gh/fz6m/china-lantern@1.0/dist/china-lantern.min.js"></script>

</body>
```

### 开发

1. 安装依赖

    ```bash
      yarn
    ```

2. 在 `./src/style.scss` 自定义样式，在 `./build/minifier.js` 自定义灯笼文字

3. 构建

    ```bash
      yarn build
    ```
    
    之后就可以在 `./dist/china-lantern.min.js` 得到你的自定义脚本

### 其他

当你发现灯笼大小不合适或者挡住 logo 等关键内容时，可以考虑自行修改灯笼位置的样式重新构建脚本，或使被挡住内容的 `z-index` 大于 `999` ：

```css
  .logo-class-name {
    z-index: 1000;
  }
```
