const User = require("../schemas/user");
const bcrypt = require("bcryptjs");

const autheticationLogin = async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return res
      .status(400)
      .json({ data: null, message: "email is not in the system" });
  }

  const validpassword = bcrypt.compare(req.body.password, user.password);

  if (!validpassword) {
    return res
      .status(400)
      .json({ data: null, message: "paasword is not valid" });
  }

  return res.json({ message: "Login succesful" });
};

module.exports = { autheticationLogin };
