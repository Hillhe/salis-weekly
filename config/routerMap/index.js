let area = require("./area");
let file = require("./file");
let project = require("./project");
let sys = require("./sys");
let user = require("./user");
let task = require("./task");

module.exports = Object.assign({}, area, file, project, sys, user, task);