## History
History 接口允许操作浏览器的曾经在标签页或者框架里访问的会话记录。
### 属性
> History 接口属性不继承于任何属性
- History.length(只读)
    返回会话历史中元素的数目，包括当前加载的页。
- History.scrollRestoration
    允许Web应用程序在历史导航上显式的设置默认滚动恢复行为。此属性可以是自动的（auto）或者手动的（manual）。
- History.state(只读)
    返回一个表示历史堆栈顶部的状态值。这是一种可以不必等待popstate事件而查看状态的方式。
### 方法
> History 接口不继承任何方法
- History.back()
    返回页面，当浏览器会话历史记录处于第一页时调用此方法没有效果，而且也不会报错。
- History.forward(delta)
    跳转到浏览器历史的第几个页面，当浏览器历史栈处于最顶端时（当前页面处于最后一页时）调用次方法没有效果也不报错。
- History.go()
    通过当前页面的相对位置从浏览器历史记录加载页面。参数为-n的时候就是后退的n个页面，参数为n的时候，就是前进n个页面。
    如果超出浏览器历史记录，没有效果，也不报错。
- Histroy.pushState(state, title[, url])
    向当前浏览器会话历史堆栈中添加一个状态
    参数：
    - state 状态对象
    - title 会被大多数浏览器都忽略，最长用就是传入空字符串
    - url(可选) 新历史记录条目的URL由此参数指定。
- History.replaceState() 替换更新当前的state，用法同上

### popstate
    当活动历史记录条目更改时，将触发popstate事件。
> 调用history.pushState()或history.replaceState()不会触发popstate事件。只有在做出浏览器动作时，才会触发该事件，如用户点击浏览器的回退按钮（或者在Javascript代码中调用history.back()或者history.forward()方法）
>不同的浏览器在加载页面时处理popstate事件的形式存在差异。页面加载时Chrome和Safari通常会触发(emit)popstate事件，但Firefox则不会。

### hashchange
    当URL的片段标识符更改时，将触发hashchange事件（跟在#符号后面的url,包括#符号）