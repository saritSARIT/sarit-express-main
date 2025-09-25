
const fs = require("fs");

function logger(req, res, next) {

  //console.log("a call was made");

  fs.appendFileSync("log.txt", "a call was made" + "\n");

  next();
}

module.exports = logger;