---
title: '[jQuery] 筆記'

---

#### 使用 webApi 的 method

在 jQuery 中若要使用像是 `outerHtml` 這種 webApi 的話可以使用 `prop` 來呼叫

``` javascript
$('#root').prop('outerHtml', '<span>hello!</span>')
```

#### 判斷 checkbox

在 jQuery 若是想要判斷 checkbox 的值是 true 或 false 可以用 `is(':checked')`
> 記得打開 codepen 的 console

<iframe height="300" width= '100%' scrolling="no" title="jquery is checked" src="https://codepen.io/nqzfklpk-the-looper/embed/YzewLVE?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/nqzfklpk-the-looper/pen/YzewLVE">
  jquery is checked</a> by 羅國豐 (<a href="https://codepen.io/nqzfklpk-the-looper">@nqzfklpk-the-looper</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>



#### 尋找符合的父層

```javascript
// 只往上找一層
$("p").parent(".selected")

// 往上找到符合條件就停止
$("p").closest(".selected")

// 往上找到所有符合條件的
$("p").parents(".selected")
```