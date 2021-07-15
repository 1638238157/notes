const wrapper = document.querySelector('.wrapper');
const child = document.querySelector('.child');
wrapper.addEventListener('click',event => {
    console.log(event.target.innerHTML,'事件冒泡');
},false);
child.addEventListener('click',event => {
    console.log(event.target.innerHTML,'事件捕获');
},true);

/**
 * 冒泡
 *      是从指定对象向上冒泡至不确定对象。
 * 捕获
 *      是从最外层不确定对象，定位至精准对象过程。
 * 
 * addEventListener 第三个参数 false 代表的是冒泡，true 代表的是捕获。
 * capture 捕获
 * propagation 传播
 */