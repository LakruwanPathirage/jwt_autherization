const User = require("../schemas/user");
const bcrypt = require("bcryptjs");
const jsonwebtoken = require("jsonwebtoken");

const autheticationLogin = async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return res
      .status(400)
      .json({ data: null, message: "email is not in the system" });
  }

  const validpassword = await bcrypt.compare(req.body.password, user.password);

  if (!validpassword) {
    return res
      .status(400)
      .json({ data: null, message: "paasword is not valid" });
  }

  const token = jsonwebtoken.sign({ _id: user._id }, process.env.TOKENSECRET);

  return res.header("auth-token", token).json({ message: "Login succesful" });
};

module.exports = { autheticationLogin };
