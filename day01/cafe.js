console.log("소환사의 협곡에 오신걸 환영합니다!!");

const showMenu = () => {
  console.log("1. 주문하기");
  console.log("2. 포장하기");
  console.log("3. 종료하기");
};

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let isRunning = true;

const askQuestion = (query) =>
  new Promise((resolve) => rl.question(query, resolve));

const welcome = async () => {
  while (isRunning) {
    showMenu();
    const answer = await askQuestion("번호 입력 :");
    if (answer == 1) {
      console.log("주문 시작!");
    } else if (answer == 2) {
      console.log("포장 시작!");
    } else if (answer == 3) {
      console.log("꺼지셈 ㅂㅂ");
      isRunning = false; // isRunning 없이 true로 했으면 break 쓰셈
    } else console.log("숫자 이상함");
  }
  rl.close();
};

welcome();
