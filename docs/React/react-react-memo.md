---
title: '[React] React.memo'
tags:
  - react
---

`React.memo` 是一個 HOC，是為了避免在 props 不變的狀況下因為父層更新而導致子層不必要的更新。

使用方式如下

```jsx
const MyComponent = React.memo(function MyComponent(props) {
  /* render using props */
});
```

> React document
>
> 如果你的 function component 每次得到相同 prop 的時候都會 render 相同結果，你可以將其包在 `React.memo` 之中，透過快取 render 結果來在某些情況下加速。這表示 React 會跳過 render 這個 component，並直接重用上次的 render 結果。 

```jsx
const UseReactMemo = React.memo(({description}) => {
  const renderTimes = React.useRef(0);
  renderTimes.current += 1;
  return(
    <h2>{description} {renderTimes.current}</h2>
  )
})

const NoReactMemo = ({description}) => {
  const renderTimes = React.useRef(0);
  renderTimes.current += 1;
  return(
    <h2>{description} {renderTimes.current}</h2>
  )
}

const App = () => {
  const [count, setCount] = React.useState(0);
  const handleClick = () => {
    setCount(prev => prev + 1)
  }
  
  const testProps = true;
  return(
    <div> 
      <h1>{count}</h1>
      <button onClick={handleClick}>Click!</button>
      <NoReactMemo description='unuse React.memo'/>
      <UseReactMemo description='use React.memo'/>
    </div>
  )
}
```

<iframe height="400" width='100%'  scrolling="no" title="Untitled" src="https://codepen.io/nqzfklpk-the-looper/embed/preview/GRyBbyR?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/nqzfklpk-the-looper/pen/GRyBbyR">
  Untitled</a> by 羅國豐 (<a href="https://codepen.io/nqzfklpk-the-looper">@nqzfklpk-the-looper</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## shallow compare

在 `React.memo` 中比較 props 是使用 shallow compare ，相信有一點了解 JS 的都會知道關於 JS 的 call by value 跟 call by reference ，也就是在比較 string 或是 number 這類的 type 的時候 不會有什麼太大的問題，但是比較像是 object 這種的 call by reference 的時候因為 props 回傳入新的記憶體位置，就造成每次比較都會不一樣而造成重複 render。



```jsx
const UseReactMemo = React.memo(({useReactMemo}) => {
  const renderTimes = React.useRef(0);
  renderTimes.current += 1;
  return(
    <h2>{useReactMemo.description} {renderTimes.current}</h2>
  )
})

const NoReactMemo = ({noReactMemo}) => {
  const renderTimes = React.useRef(0);
  renderTimes.current += 1;
  return(
    <h2>{noReactMemo.description} {renderTimes.current}</h2>
  )
}

const App = () => {
  const [count, setCount] = React.useState(0);
  const handleClick = () => {
    setCount(prev => prev + 1)
  }
  
  const noReactMemo = {
    description: 'unuse React.memo',
    isUsingReactMemo: false
  }
  
  const useReactMemo = {
    description: 'use React.memo',
    isUsingReactMemo: true
  }
  const testProps = true;
  return(
    <div> 
      <h1>{count}</h1>
      <button onClick={handleClick}>Click!</button>
      <NoReactMemo noReactMemo={noReactMemo}/>
      <UseReactMemo useReactMemo={useReactMemo}/>
    </div>
  )
}


ReactDOM.render(<App/>,document.getElementById("root"));
```

可以看到傳入 object 之後就變成都會重複 render

<iframe height="400" width='100%' scrolling="no" title="React.memo basic" src="https://codepen.io/nqzfklpk-the-looper/embed/preview/eYyLOOY?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/nqzfklpk-the-looper/pen/eYyLOOY">
  React.memo basic</a> by 羅國豐 (<a href="https://codepen.io/nqzfklpk-the-looper">@nqzfklpk-the-looper</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>



### areEqual

> `areEqual` function 當 prop 相等的時候回傳 `true`，不相等的時候回傳 `false`。

```jsx
const UseReactMemo = React.memo(({useReactMemo}) => {
  const renderTimes = React.useRef(0);
  renderTimes.current += 1;
  return(
    <h2>{useReactMemo.description} {renderTimes.current}</h2>
  )
}, function(prev, next){console.log({prev, next})})

```

我們來看一下傳入的 `arguments` 來看要怎麼實作 compare function

![截圖 2022-04-12 下午11.37.24](https://raw.githubusercontent.com/luofreddy/images/main/uPic/2022/04/12/%E6%88%AA%E5%9C%96%202022-04-12%20%E4%B8%8B%E5%8D%8811.37.24.png)



這邊可以看到傳入了兩個一樣的 `useReactMemo` 那我們就可以利用這個來建立 compare function

```jsx
const compareProps = (prev, next) => {
  for(const key in prev.useReactMemo){
    if(prev.useReactMemo[key] !== next.useReactMemo[key]){
      return false;
    }
  }
  
  return true;
}

const UseReactMemo = React.memo(({useReactMemo}) => {
  const renderTimes = React.useRef(0);
  renderTimes.current += 1;
  return(
    <h2>{useReactMemo.description} {renderTimes.current}</h2>
  )
}, compareProps)

const NoReactMemo = ({noReactMemo}) => {
  const renderTimes = React.useRef(0);
  renderTimes.current += 1;
  return(
    <h2>{noReactMemo.description} {renderTimes.current}</h2>
  )
}

const App = () => {
  const [count, setCount] = React.useState(0);
  const handleClick = () => {
    setCount(prev => prev + 1)
  }
  
  const noReactMemo = {
    description: 'unuse React.memo',
    isUsingReactMemo: false
  }
  
  const useReactMemo = {
    description: 'use React.memo',
    isUsingReactMemo: true
  }
  const testProps = true;
  return(
    <div> 
      <h1>{count}</h1>
      <button onClick={handleClick}>Click!</button>
      <NoReactMemo noReactMemo={noReactMemo}/>
      <UseReactMemo useReactMemo={useReactMemo}/>
    </div>
  )
}


ReactDOM.render(<App/>,document.getElementById("root"));
```

<iframe height="400" width='100%' scrolling="no" title="React.memo call reference error" src="https://codepen.io/nqzfklpk-the-looper/embed/preview/xxpaKVR?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/nqzfklpk-the-looper/pen/xxpaKVR">
  React.memo call reference error</a> by 羅國豐 (<a href="https://codepen.io/nqzfklpk-the-looper">@nqzfklpk-the-looper</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>



## state 更新

另外使用 `React.memo` 也可以記錄者自己的 state

```jsx
const compareProps = (prev, next) => {
  for(const key in prev.useReactMemo){
    if(prev.useReactMemo[key] !== next.useReactMemo[key]){
      return false;
    }
  }
  
  return true;
}

const UseReactMemo = React.memo(({useReactMemo}) => {
  const renderTimes = React.useRef(0);
  const [switchBoolean, setSwitchBoolean] = React.useState(true);
  renderTimes.current += 1;
  return(
    <>
      <h2>{useReactMemo.description} {renderTimes.current}</h2>
      <button onClick={()=>{
          setSwitchBoolean(prev => !prev)
        }}>
        {switchBoolean ? 'On' : 'Off'}
      </button>
    </>
  )
}, compareProps)

const NoReactMemo = ({noReactMemo}) => {
  const renderTimes = React.useRef(0);
  renderTimes.current += 1;
  return(
    <h2>{noReactMemo.description} {renderTimes.current}</h2>
  )
}

const App = () => {
  const [count, setCount] = React.useState(0);
  const handleClick = () => {
    setCount(prev => prev + 1)
  }
  
  const noReactMemo = {
    description: 'unuse React.memo',
    isUsingReactMemo: false
  }
  
  const useReactMemo = {
    description: 'use React.memo',
    isUsingReactMemo: true
  }
  const testProps = true;
  return(
    <div> 
      <h1>{count}</h1>
      <button onClick={handleClick}>Click!</button>
      <NoReactMemo noReactMemo={noReactMemo}/>
      <UseReactMemo useReactMemo={useReactMemo}/>
    </div>
  )
}


ReactDOM.render(<App/>,document.getElementById("root"));
```

<iframe height="400" width='100%' scrolling="no" title="React.memo call reference error  areEqual" src="https://codepen.io/nqzfklpk-the-looper/embed/preview/MWrqgPe?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/nqzfklpk-the-looper/pen/MWrqgPe">
  React.memo call reference error  areEqual</a> by 羅國豐 (<a href="https://codepen.io/nqzfklpk-the-looper">@nqzfklpk-the-looper</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Ref

1. [關於React，那些我不知道的](https://ithelp.ithome.com.tw/articles/10240296?sc=iThomeR)
2. [React 性能優化那件大事，使用 memo、useCallback、useMemo](https://medium.com/%E6%89%8B%E5%AF%AB%E7%AD%86%E8%A8%98/react-optimize-performance-using-memo-usecallback-usememo-a76b6b272df3)
3. [React 頂層 API](https://zh-hant.reactjs.org/docs/react-api.html)



