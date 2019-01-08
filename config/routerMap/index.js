let area = require("./area");
let file = require("./file");
let project = require("./project");
let sys = require("./sys");
let user = require("./user");

module.exports = Object.assign({}, area, file, project, sys, user);