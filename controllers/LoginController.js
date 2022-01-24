const User = require("../schemas/user");
const bcrypt = require("bcryptjs");

const autheticationLogin = async (req, res, next) => {
  console.log("Login controller");
};

module.exports = { autheticationLogin };
