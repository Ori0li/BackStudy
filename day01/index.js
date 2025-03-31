//콘솔 readline 내장 모듈(라이브러리) 가져오기
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("최애 게임은?", (answer) => {
  console.log("가장 좋아하는 게임은 :" + answer);
  rl.close();
});
