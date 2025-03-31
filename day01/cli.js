console.log("소환사의 협곡에 오신걸 환영합니다!!");
console.log("1. 주문하기");
console.log("2. 포장하기");
console.log("3. 종료하기");

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("번호를 고르세요", (answer) => {
  if (answer == 1) {
    console.log("주문 시작!");
  } else if (answer == 2) {
    console.log("포장 시작!");
  } else if (answer == 3) {
    console.log("꺼지셈 ㅂㅂ");
    isRunning = false;
  } else {
    console.log("숫자 이상함");
  }
});
