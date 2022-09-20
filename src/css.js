// 样式限制在skin里是为了不影响button
const string = ` 
.skin * {margin: 0; padding: 0; box-sizing: border-box;}
.skin *::before, *::after {box-sizing: border-box;}
.skin {
  background: #ffe600;
  min-height: 50vh;
  position: relative;
}
.nose {
  border: 10px solid black;
  border-color: black transparent transparent transparent;
  width: 0px;
  height: 0px;
  position: absolute;
  left: 50%;
  top: 140px;
  margin-left: -10px;
  z-index: 10;
}
@keyframes wave {
  0% {
    transform: rotate(0deg);
  }
  33% {
    transform: rotate(5deg);
  }
  66% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.nose:hover {
  animation: wave 300ms infinite linear;
  transform-origin: center bottom;
}
.camber {
  position: absolute;
  background: black;
  width: 20px;
  height: 4px;
  top: -14px;
  left: -10px;
  border-top-left-radius: 10px 4px;
  border-top-right-radius: 10px 4px;
}
.eye {
  border: 2px solid black;
  width: 64px;
  height: 64px;
  position: absolute;
  left: 50%;
  top: 100px;
  margin-left: -32px;
  background: #2e2e2e;
  border-radius: 50%;
}
.eye::before {
  content: "";
  display: block;
  border: 2px solid black;
  width: 30px;
  height: 30px;
  background: #fff;
  border-radius: 50%;
  position: relative;
  left: 10px;
}
.eye.left {
  transform: translateX(-118px);
}
.eye.right {
  transform: translateX(118px);
}
.mouth {
  width: 200px;
  height: 200px;
  position: absolute;
  left: 50%;
  margin-left: -100px;
  top: 166px;
}
.mouth .up {
  position: relative;
  top: -20px;
}
.mouth .up .lip {
  border: 3px solid black;
  height: 30px;
  width: 100px;
  border-top-color: transparent;
  position: relative;
  position: absolute;
  left: 50%;
  margin-left: -50px;
  z-index: 1;
  background: #ffe600;
}
.mouth .up .lip.left {
  border-radius: 0 0 0 50px;
  border-right-color: transparent;
  transform: rotate(-15deg) translateX(-53px);
}
.mouth .up .lip.right {
  border-radius: 0 0 50px 0;
  border-left-color: transparent;
  transform: rotate(15deg) translateX(53px);
}
.mouth .up .lip::before {
  content: "";
  display: block;
  width: 6px;
  height: 30px;
  position: absolute;
  bottom: 0;
  background: #ffe600;
}
.mouth .up .lip.left::before {
  right: -5px;
}

.mouth .up .lip.right::before {
  left: -5px;
}
.mouth .down {
  height: 165px;
  position: absolute;
  top: 5px;
  width: 100%;
  overflow: hidden;
}
.mouth .down .circle {
  border: 3px solid black;
  width: 150px;
  height: 1000px;
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -75px;
  border-radius: 75px/300px;
  background: #9b000a;
  overflow: hidden;
}
.mouth .down .circle .tongue {
  border: 1px solid green;
  width: 200px;
  height: 200px;
  position: absolute;
  background: #ff485f;
  left: 50%;
  bottom: -70px;
  margin-left: -100px;
  border-radius: 100px;
}
.cheek {
  border: 3px solid black;
  position: absolute;
  width: 88px;
  height: 88px;
  left: 50%;
  margin-left: -40px;
  z-index: 1;
  top: 220px;
  background: #ff0000;
  border-radius: 50%; 
}
.cheek.left {
  transform: translateX(-162px);
}
.cheek.right {
  transform: translateX(162px);
}
`;

export default string;
