---
title: '[TS] Any Unknown As'
tags: 
  - typescript

---

## Any

在 typescript 中 any 有著特殊的地位， TS 的型別檢查只要遇到 any 就會被跳過，所以 any 可以被任何型別附值也可以賦值給任何型別。

![any](https://raw.githubusercontent.com/luofreddy/images/main/uPic/2022/04/14/any.png)



而我們宣告變數時沒有附值也沒有給定型別時，型別推論 ( Type inference ) 就會推斷這個變數為 any type。

![any-inference](https://raw.githubusercontent.com/luofreddy/images/main/uPic/2022/04/14/any-inference.png) 

所以當宣告變數的時候我們最好給予型別。

![any-](https://raw.githubusercontent.com/luofreddy/images/main/uPic/2022/04/14/any-.png)

又或是直接附值讓聰明的 TS 幫你做型別推斷

![](https://raw.githubusercontent.com/luofreddy/images/main/uPic/2022/04/14/%E6%88%AA%E5%9C%96%202022-04-14%20%E4%B8%8A%E5%8D%8812.10.47.png)

不過在一般來說我們還是要盡量避免使用 `any` 畢竟使用了 any 就不會進行型別檢查，那麼就與寫 JS 一樣，失去了寫 TS 的意義。

## Unknown

但是在某些狀況下，我們還是可能需要用到 any 來註記我們不知道的型別，那個這是後我們就可以選擇 `unknown` ，可以理解為比較安全的 `any` 。

## As

`as` 又叫斷言，意思是你說什麼就是什麼，通常我們可以用在與後端拿回的資料，告訴 TS 這個 API 的 response 是什麼樣的資料型態，

![as](https://raw.githubusercontent.com/luofreddy/images/main/uPic/2022/04/17/%E6%88%AA%E5%9C%96%202022-04-17%20%E4%B8%8B%E5%8D%889.47.00.png)

![](https://raw.githubusercontent.com/luofreddy/images/main/uPic/2022/04/17/%E6%88%AA%E5%9C%96%202022-04-17%20%E4%B8%8B%E5%8D%889.51.28.png)

這邊因為 `resp` 是 Response type 所以先轉成 unknown 再轉成該有的格式



Any 跟 Unknown

![截圖 2022-04-17 下午10.04.33](https://raw.githubusercontent.com/luofreddy/images/main/uPic/2022/04/17/%E6%88%AA%E5%9C%96%202022-04-17%20%E4%B8%8B%E5%8D%8810.04.33.png)

在這個範例使用 any ，但是回傳的有可能會是 null ，這時候使用 split 就會有問題

![](https://raw.githubusercontent.com/luofreddy/images/main/uPic/2022/04/17/%E6%88%AA%E5%9C%96%202022-04-17%20%E4%B8%8B%E5%8D%8810.06.14.png)

但是如果是一樣的範例卻改用 unknown ，這時 TS 就會提醒你這邊有問題，因此我們就可以提前避免錯誤，在程式碼加上型別的判斷

![unknow](https://raw.githubusercontent.com/luofreddy/images/main/uPic/2022/04/17/unknow.png)
