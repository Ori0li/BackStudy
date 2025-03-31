const { SellOption } = require("./sell.js");
const { ReplenishOption } = require("./replenish.js");
const { ExistOption } = require("./exit.js");
const { managers } = require("../manager/base.js");
const { SettlementOption } = require("./settlement.js");

const menuOption = {
  1: new SellOption(),
  2: new ReplenishOption(managers.inventory, managers.prompt, managers.data),
  3: new SettlementOption(),
  4: new ExistOption(),
};

module.exports = { menuOption };
