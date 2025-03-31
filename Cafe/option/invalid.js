const { Option } = require("./option");

class InvalidOption extends Option {
  async execute(data) {
    console.log("숫 자 없 음");
  }
}

module.exports = { InvalidOption };
