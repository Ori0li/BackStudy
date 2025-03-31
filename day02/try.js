const fs = require("fs");

// 런타임 에러
// 파일 연결, 네트워크 연결(api), DB연결
// try - catch를 써서 프로그램 정상 작동화 시킴

// try {
//   const data = fs.readFileSync("coffee1234.txt", "utf-8");
//   console.log(data);
// } catch (e) {
//   console.log(e);
//   console.log("그런 파일 없음");
// }

const divied = (a, b) => {
  if (b == 0) throw new Error("0으로 못나눔");
  return a / b;
};

try {
  divied(10 / 3);
  divied(10 / 0);
} catch (e) {
  console.log(e, e.message);
}
