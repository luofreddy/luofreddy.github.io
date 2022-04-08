---
title: '[Yarn] workspaces'
tags: 
  - yarn
  - workspace
---
## WHY

為什麼我們會需要 workspaces 的功能呢？

當不同的專案需要用到相同的模組的時候，最直接的解法大概就是 copy & past 來處理，但是寫程式重複寫一樣的程式畢竟不是一個好的處理方式，假設今天是個拿商品資料的程式，可能有好幾個地方需要用到，比如說有 APP 、Web frontend，甚至 frontend 可能根據不同語系分成幾個不同的專案，這樣假設 API response 有點異動的時候就需要到各個 repository 更改這段 fetch products 的程式。

又或者說環境的設定比如 ESLint ，在一個團隊中所使用的 ESLint 的規則應該是每個專案的會一樣，但是在起一個新專案的時候就會需要重新設定 ESLint 的規則。

因此 yarn workspaces 能幫忙解決在不同的專案中共用程式碼，以及只需設定一次環境及不必重複安裝依賴。

## Yarn Workspace Setting

yarn 的 workspace 在 v1 就可以使用並且預設為開啟。

首先建立一個專案資料夾做為 workspace root 而這個目錄下安裝的套件所產生的 node_modules 則稱為 root node_modules。

接著透過 `yarn init -y` 來初始化![yarn init](https://raw.githubusercontent.com/luofreddy/images/main/uPic/2022/04/05/截圖%202022-04-05%20下午10.27.30.png)

此時會產生 package.json

```json
{
  "name": "yarn-workspace",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT"
}

```

為了使用 worksapce 我們做一些調整，首先做為 workspace root 我們需要把 private 設定為 true，因為 workspace root 不該被發布出去。

而 workspaces 下的 packages 則說明了哪些子目錄會是工作區，所以照這樣調整的話會變成下面這樣

```json
{
  "name": "yarn-workspace",
  "version": "1.0.0",
  "private":true,
  "license": "MIT",
  "workspaces":{
    "packages": [
      "packages/*"
    ]
  }
}
```

接著建立幾個資料夾來作為工作區

```bash
.
├── package.json
└── packages
    ├── a-workspace
    ├── b-workspace
    └── c-workspace
```

進到各工作區執行 `yarn init` 並且把 package.json 改成像是下面這樣

```bash
// a-workspace/package.json
{
  "name": "@yarn-workspace/a-workspace",
	...
}

```

然後我們就可以通過下面兩個指令來對各個 workspace 安裝依賴

1. 在 root workspace

   ```bash
   yarn workspace @yarn-workspace/a-workspace add lodash

2. 在特定的 workspace

   ```bash
   cd b-workspace
   yarn add lodash
   ```

   

執行完上面這兩行可以看到只有 `lodash` 被安裝在 root node_dash 管理

![截圖 2022-04-06 下午10.21.50](https://raw.githubusercontent.com/luofreddy/images/main/uPic/2022/04/06/%E6%88%AA%E5%9C%96%202022-04-06%20%E4%B8%8B%E5%8D%8810.21.50.png)

```bash
// a-workspace/package.json
{
  "name": "@yarn-workspace/a-workspace",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "dependencies": {
    "lodash": "^4.17.21"
  }
}

//b-workspace/package.json

{
  "name": "@yarn-workspace/b-workspace",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "dependencies": {
    "lodash": "^4.17.21"
  }
}
```

## Yarn Workspace 範例

在 a-workspace 建立範例程式 index.js

```js
const _ = require('lodash')
const random = () => {
  console.log('a-workspace')
  return _.random(1, 100, false)
}
module.exports = random
```

接著在 b-workspace 引入

```bash
yarn workspace @yarn-workspace/b-workspace add @yarn-workspace/a-workspace@^1.0.0
```

> 這邊要記得加上版本號，而版本號就是在 package.json 裡面的 version

![截圖 2022-04-06 下午10.34.30](https://raw.githubusercontent.com/luofreddy/images/main/uPic/2022/04/06/%E6%88%AA%E5%9C%96%202022-04-06%20%E4%B8%8B%E5%8D%8810.34.30.png)

如此一來我們就可以共用程式碼了

## Yarn Workspace nohoist

在某些情況下可能某些依賴不想要拿到 root node_moudles ，又或是各個 workspace 在同一個套件下需要使用不同的版本，這時候就可以使用 nohoist ，會像下面這樣設定在 root workspace 的 package.json

```json
{
  "name": "yarn-workspace",
  "version": "1.0.0",
  "private":true,
  "license": "MIT",
  "workspaces":{
    "packages": [
      "packages/*"
    ],
    "nohoist": [
      "@yarn-workspace/a-workspace/redux"
    ]
  }
}
 
```

然後添加 redux 到 a-workspace

```bash
cd packages/a-workspace
yarn add redux
```

![截圖 2022-04-06 下午10.57.08](https://raw.githubusercontent.com/luofreddy/images/main/uPic/2022/04/07/yarn-workspaces-result.png)

可以看到 redux 被安裝在 a-workspace 下的 node_modules 而 root node_modules 就沒有被安裝 redux。

如果想看看更多也可以直接用我建好的 [repo](https://github.com/luofreddy/yarn-workspaces) 操作看看

---

## Ref

1. [[筆記] Yarn Workspaces 基礎教學](https://tokileecy.medium.com/%E7%AD%86%E8%A8%98-yarn-workspaces-%E5%9F%BA%E7%A4%8E%E6%95%99%E5%AD%B8-cbb16bb780ec)
2. [使用Yarn Workspace管理多project repo](https://hateonion.me/posts/b2b0/)