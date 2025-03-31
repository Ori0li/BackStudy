// program : 어떠한 입력 값 넣으면 어떠한 출력이 나옴

const fs = require("fs");

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("폴더 이름: ", (folderName) => {
  rl.question("갯수 입력: ", (cnt) => {
    const count = parseInt(cnt);
    for (let i = 1; i <= count; i++) {
      const name = `${folderName}${i}`;
      fs.mkdirSync(name);
    }
    rl.close();
  });
});
