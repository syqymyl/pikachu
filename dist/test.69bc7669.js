// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 样式限制在skin里是为了不影响button
var string = " \n.skin * {margin: 0; padding: 0; box-sizing: border-box;}\n.skin *::before, *::after {box-sizing: border-box;}\n.skin {\n  background: #ffe600;\n  min-height: 50vh;\n  position: relative;\n}\n.nose {\n  border: 10px solid black;\n  border-color: black transparent transparent transparent;\n  width: 0px;\n  height: 0px;\n  position: absolute;\n  left: 50%;\n  top: 140px;\n  margin-left: -10px;\n  z-index: 10;\n}\n@keyframes wave {\n  0% {\n    transform: rotate(0deg);\n  }\n  33% {\n    transform: rotate(5deg);\n  }\n  66% {\n    transform: rotate(-5deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n}\n.nose:hover {\n  animation: wave 300ms infinite linear;\n  transform-origin: center bottom;\n}\n.camber {\n  position: absolute;\n  background: black;\n  width: 20px;\n  height: 4px;\n  top: -14px;\n  left: -10px;\n  border-top-left-radius: 10px 4px;\n  border-top-right-radius: 10px 4px;\n}\n.eye {\n  border: 2px solid black;\n  width: 64px;\n  height: 64px;\n  position: absolute;\n  left: 50%;\n  top: 100px;\n  margin-left: -32px;\n  background: #2e2e2e;\n  border-radius: 50%;\n}\n.eye::before {\n  content: \"\";\n  display: block;\n  border: 2px solid black;\n  width: 30px;\n  height: 30px;\n  background: #fff;\n  border-radius: 50%;\n  position: relative;\n  left: 10px;\n}\n.eye.left {\n  transform: translateX(-118px);\n}\n.eye.right {\n  transform: translateX(118px);\n}\n.mouth {\n  width: 200px;\n  height: 200px;\n  position: absolute;\n  left: 50%;\n  margin-left: -100px;\n  top: 166px;\n}\n.mouth .up {\n  position: relative;\n  top: -20px;\n}\n.mouth .up .lip {\n  border: 3px solid black;\n  height: 30px;\n  width: 100px;\n  border-top-color: transparent;\n  position: relative;\n  position: absolute;\n  left: 50%;\n  margin-left: -50px;\n  z-index: 1;\n  background: #ffe600;\n}\n.mouth .up .lip.left {\n  border-radius: 0 0 0 50px;\n  border-right-color: transparent;\n  transform: rotate(-15deg) translateX(-53px);\n}\n.mouth .up .lip.right {\n  border-radius: 0 0 50px 0;\n  border-left-color: transparent;\n  transform: rotate(15deg) translateX(53px);\n}\n.mouth .up .lip::before {\n  content: \"\";\n  display: block;\n  width: 6px;\n  height: 30px;\n  position: absolute;\n  bottom: 0;\n  background: #ffe600;\n}\n.mouth .up .lip.left::before {\n  right: -5px;\n}\n\n.mouth .up .lip.right::before {\n  left: -5px;\n}\n.mouth .down {\n  height: 165px;\n  position: absolute;\n  top: 5px;\n  width: 100%;\n  overflow: hidden;\n}\n.mouth .down .circle {\n  border: 3px solid black;\n  width: 150px;\n  height: 1000px;\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  margin-left: -75px;\n  border-radius: 75px/300px;\n  background: #9b000a;\n  overflow: hidden;\n}\n.mouth .down .circle .tongue {\n  border: 1px solid green;\n  width: 200px;\n  height: 200px;\n  position: absolute;\n  background: #ff485f;\n  left: 50%;\n  bottom: -70px;\n  margin-left: -100px;\n  border-radius: 100px;\n}\n.cheek {\n  border: 3px solid black;\n  position: absolute;\n  width: 88px;\n  height: 88px;\n  left: 50%;\n  margin-left: -40px;\n  z-index: 1;\n  top: 220px;\n  background: #ff0000;\n  border-radius: 50%; \n}\n.cheek.left {\n  transform: translateX(-162px);\n}\n.cheek.right {\n  transform: translateX(162px);\n}\n";

exports.default = string;
},{}],"HdJB":[function(require,module,exports) {
"use strict";

var _css = require("./css.js");

var _css2 = _interopRequireDefault(_css);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 如果一个函数什么都没干，只是调用另一个函数，那么这个函数=里面的函数，直接省略写
var player = {
  n: 1,
  id: undefined,
  time: 100,
  ui: {
    demo1: document.querySelector("#demo1"),
    demo2: document.querySelector("#demo2")
  },
  events: {
    // 不能在定义player的时候就使用，所以不能写player.play
    "#btnPause": "pause",
    "#btnPlay": "play",
    "#btnSlow": "slow",
    "#btnNormal": "normal",
    "#btnFast": "fast"
  },
  init: function init() {
    player.ui.demo1.innerText = _css2.default.substr(0, player.n); // 写入字符内容
    player.ui.demo2.innerHTML = _css2.default.substr(0, player.n); // 插入标签
    player.bindEvents();
    player.play();
  },
  bindEvents: function bindEvents() {
    // 遍历key会遍历到它继承的东西，比如它继承toString,valueOf，如果有人写了以下这行代码，x就会被遍历到
    // object.prototype.x = 1;
    for (var key in player.events) {
      // 判断遍历到的key是否是player自身的属性
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key]; // pause / play / slow / normal / Fast
        document.querySelector(key).onclick = player[value]; // player[value]的值就是方法pause / play / slow / normal / Fast
      }
    }
  },
  run: function run() {
    player.n += 1;
    if (player.n > _css2.default.length) {
      window.clearInterval(player.id);
      return;
    }
    player.ui.demo1.innerText = _css2.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css2.default.substr(0, player.n);
    player.ui.demo1.scrollTop = player.ui.demo1.scrollHeight; // 当打印出的的行数达到底部，滚动条自动滚动
  },
  play: function play() {
    // 这里的run不能写成run()，setInterva()的参数是函数，run是函数，而run()是返回值
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 300;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 100;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
}; // 模块化


player.init(); // 这里id是要接收返回值
},{"./css.js":"K4Xi"}]},{},["HdJB"], null)
//# sourceMappingURL=test.69bc7669.map