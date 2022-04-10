---
title: '[TS] Basic Type'
tags:
  - typescript
---
介紹幾種 Typescript 的基本型別

- Boolean
- Number
- String
- Array
- Tuple

## Boolean type

當變數宣告為 boolean 時我們就只能放入 `true` 跟 `false`

這邊要注意的是 new Boolean 在這邊是會報錯的

![boolean-has-type-error](https://raw.githubusercontent.com/luofreddy/images/main/uPic/2022/04/10/boolean-has-type-error.png)



## Number type

在 number type 中的 new Number 也是會報錯的，除了基本的整數跟浮點數以外，也可以放入十六進位、八進位、二進位的格式，另外像 `NaN` 跟 `Infinity` 也是沒問題的。

![截圖 2022-04-10 下午11.35.11](https://raw.githubusercontent.com/luofreddy/images/main/uPic/2022/04/10/%E6%88%AA%E5%9C%96%202022-04-10%20%E4%B8%8B%E5%8D%8811.35.11.png)

## String type

string type 除了 new String 以外其他轉變 string 方法的回傳值都是沒問題的。

![截圖 2022-04-10 下午11.40.01](https://raw.githubusercontent.com/luofreddy/images/main/uPic/2022/04/10/%E6%88%AA%E5%9C%96%202022-04-10%20%E4%B8%8B%E5%8D%8811.40.01.png)

## Array type

array type 只需要在原先的 `boolean` 、`number`、`string` 之後加上中括號 `[]` 就可以了。

![array-type-noBG](https://raw.githubusercontent.com/luofreddy/images/main/uPic/2022/04/11/array-type-noBG.png)

## Tuple type

tuple type 與 array 類似但是可以指定多個 type ，且必須按照指定 type 順序放入。

這邊可以看到要完全按照 type 順序放入，並且在最後也補充了 tuple ＋ array 的用法

![截圖 2022-04-10 下午11.56.08](https://raw.githubusercontent.com/luofreddy/images/main/uPic/2022/04/10/%E6%88%AA%E5%9C%96%202022-04-10%20%E4%B8%8B%E5%8D%8811.56.08.png)