const User = require("../schemas/user");

const autheticationLogic = async (req, res, next) => {
  console.log(req.body);
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const saveduser = await user.save();
    res.status(200).json({
      data: saveduser,
      message: "sucess",
    });
  } catch (err) {
    res.status(400).json({
      data: null,
      message: err.message,
    });
  }
};

module.exports = { autheticationLogic };
