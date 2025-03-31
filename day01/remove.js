const fs = require("fs");

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("삭제할 폴더 이름: ", (folderName) => {
  fs.rmdirSync(folderName);
  rl.close;
});
