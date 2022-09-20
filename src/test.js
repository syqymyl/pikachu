// 模块化
import string from "./css.js";

// 如果一个函数什么都没干，只是调用另一个函数，那么这个函数=里面的函数，直接省略写
const player = {
  n: 1,
  id: undefined,
  time: 100,
  ui: {
    demo1: document.querySelector("#demo1"),
    demo2: document.querySelector("#demo2"),
  },
  events: {
    // 不能在定义player的时候就使用，所以不能写player.play
    "#btnPause": "pause",
    "#btnPlay": "play",
    "#btnSlow": "slow",
    "#btnNormal": "normal",
    "#btnFast": "fast",
  },
  init: () => {
    player.ui.demo1.innerText = string.substr(0, player.n); // 写入字符内容
    player.ui.demo2.innerHTML = string.substr(0, player.n); // 插入标签
    player.bindEvents();
    player.play();
  },
  bindEvents: () => {
    // 遍历key会遍历到它继承的东西，比如它继承toString,valueOf，如果有人写了以下这行代码，x就会被遍历到
    // object.prototype.x = 1;
    for (let key in player.events) {
      // 判断遍历到的key是否是player自身的属性
      if (player.events.hasOwnProperty(key)) {
        const value = player.events[key]; // pause / play / slow / normal / Fast
        document.querySelector(key).onclick = player[value]; // player[value]的值就是方法pause / play / slow / normal / Fast
      }
    }
  },
  run: () => {
    player.n += 1;
    if (player.n > string.length) {
      window.clearInterval(player.id);
      return;
    }
    player.ui.demo1.innerText = string.substr(0, player.n);
    player.ui.demo2.innerHTML = string.substr(0, player.n);
    player.ui.demo1.scrollTop = player.ui.demo1.scrollHeight; // 当打印出的的行数达到底部，滚动条自动滚动
  },
  play: () => {
    // 这里的run不能写成run()，setInterva()的参数是函数，run是函数，而run()是返回值
    player.id = setInterval(player.run, player.time);
  },
  pause: () => {
    window.clearInterval(player.id);
  },
  slow: () => {
    player.pause();
    player.time = 300;
    player.play();
  },
  normal: () => {
    player.pause();
    player.time = 100;
    player.play();
  },
  fast: () => {
    player.pause();
    player.time = 0;
    player.play();
  },
};

player.init(); // 这里id是要接收返回值
