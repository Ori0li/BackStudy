const { SellOption } = require("./sell.js");
const { ReplenishOption } = require("./replenish.js");
const { SettlementOption } = require("./settle.js");
const { ExistOption } = require("./exit.js");

const menuOption = {
  1: new SellOption(),
  2: new ReplenishOption(),
  3: new SettlementOption(),
  4: new ExistOption(),
};

module.exports = { menuOption };
