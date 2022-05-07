---
title: '[Laravel] mac setup'
tags: 
  - PHP
  - Laravel
---

這邊筆者預設是已經安裝好 PHP 跟 Composer 只需要安裝 Laravel ，如果尚未裝好 PHP 跟 Composer 需要再找找他們的方式呦。

## 安裝 Laravel

```bash
composer global require "laravel/installer"
```

接著設定環境變數讓 command line 可以使用 `laravel` 

```bash
echo 'export PATH="$PATH:$HOME/.composer/vendor/bin"' >> ~/.bashrc
```

接著執行

```bash
laravel new [project name]
```

![laravel new project](https://raw.githubusercontent.com/luofreddy/images/main/uPic/2022/05/02/image-20220502171459995.png)

## Ref

1. [ Laravel 環境建置（MacOS）](https://ithelp.ithome.com.tw/articles/10216204)

2. [Laravel 入門：在 Mac 安裝與啟動 Laravel](https://simonallen.coderbridge.io/2020/04/06/install-laravel/)
