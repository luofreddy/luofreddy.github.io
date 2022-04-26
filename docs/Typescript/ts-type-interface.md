---
title: '[TS] Type Interface'
tags: 
  - typescript

---

## Type

在 typescript 中，我們除了可以使用 js 原生的型別像是 string 、 number 之外，我們還可以像是定義變數一樣定義自己的型別。

![ts-type](https://raw.githubusercontent.com/luofreddy/images/main/uPic/2022/04/18/%E6%88%AA%E5%9C%96%202022-04-18%20%E4%B8%8B%E5%8D%8810.48.24.png)

像是這邊我們可以定義一個 customerInfo type ，讓其他變數用來型別標記。



![](https://raw.githubusercontent.com/luofreddy/images/main/uPic/2022/04/18/%E6%88%AA%E5%9C%96%202022-04-18%20%E4%B8%8B%E5%8D%8810.51.56.png)

另外我們也可以像是這樣使用，定義一個型別並放入特定值，後面變數在使用這個型別時就只能填入特定值。

## Interface

interface 與 type 一樣可以自行定義型別，但是宣告方式如下

```typescript
interface customerInfo{
  name: string
  id: number
}
```
