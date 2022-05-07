---
title: '[npm] eslint & prettier'

---

## ESLint

為什麼需要 ESlint ?

ESLint 可以提供語法檢查的功能，在開發時就會提醒可能錯誤的地方，提早發現問題所在，另外也可以制定 code style ，避免在協作時因為個人習慣所造成的風格不一致。

## Prettier

prettier 簡單來說就是個統一 code style 的工具，不管是  JS、TS、HTML、CSS、JSON、YML 和 GrapQL 等等都可以使用 prettier 進行 formatting

## Prettier vs ESLint

Prettier 以及 ESLint 都可以對 code 進行 formatting 那為什麼要一起使用呢？

### 排版的問題就交給 Prettier

像是 ESLint 這種 Linter 主要有兩類規則

1. Formatting rules：

   這類規則顧名思義就是負責 code format 的檢查，例如 max-len 、keyword-spacing 。


   而 Prettier 可以減少這類的規則需求。

2. Code-quality rules：

   這類規則則是負責進行 code 的品質檢驗，而 prettier 對於這些規則也不會有任何的干涉。

所以說我們可以透過 prettier 負責 code formatting 的設定，而檢查語法的動作則是交給 ESLinet 。



## Prettier 讓你不用手動修復排版問題

ESLint 的 formatting rules 有些可以讓 vscode 的 eslint extension 幫忙自動修復，但是有些還是沒有辦法

![image-20220507214626460](https://raw.githubusercontent.com/luofreddy/images/main/uPic/2022/05/07/image-20220507214626460.png)

[If eslint can auto fix/format code why to use Prettier? #101](https://github.com/prettier/prettier-eslint/issues/101) 這個 issue 裡面的討論串有個我認為非常實用的例子， Prettier 可以再不改變程式邏輯的狀況下幫你進行 code formatting。

## 總結

所以說加上 prettier 的好處我認為有兩大個

1.  JS、TS、HTML、CSS、JSON、YML 和 GrapQL 這些類型的檔案都會依照統一的 code style 排版

2. ESLint 可以接受 prettier 的 formatting 設定進行檢查

   ```yaml
   # .eslintrc.yml
   env:
     browser: true
     es2021: true
     jquery: true
   extends:
     - plugin:react/recommended
     - google
     - plugin:prettier/recommended
   parserOptions:
     ecmaFeatures:
       jsx: true
     ecmaVersion: 12
     sourceType: module
   plugins:
     - react
     - prettier
   rules: {'prettier/prettier': 'error'}
   ```

3. 另外也可以[husky](https://www.npmjs.com/package/husky) 跟[lint-staged](https://www.npmjs.com/package/lint-staged) 對要 commit 的 code 自動進行 code formatting 也不用擔心要 code review 時才會發現排版有問題

## Ref

1. [Why Prettier will make you a more productive programmer](https://blog.sethcorker.com/why-prettier-will-make-you-a-more-productive-programmer/)
2. [ESLint vs. Prettier](https://enlear.academy/eslint-vs-prettier-57882d0fec1d)

