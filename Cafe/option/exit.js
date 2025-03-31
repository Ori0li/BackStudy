const { Option } = require("./option");

class ExistOption extends Option {
  async execute(data) {
    console.log("시스템 종료 ㅂㅂ");
    process.exit(0);
  }
}

module.exports = { ExistOption };
