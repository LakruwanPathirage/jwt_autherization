const User = require("../schemas/user");
const bcrypt = require("bcryptjs");

const autheticationRegister = async (req, res, next) => {
  //check email is alrwady exist
  const existemail = await User.findOne({ email: req.body.email });

  console.log(existemail);
  if (existemail) {
    return res
      .status(400)
      .json({ data: null, message: "user already registered" });
  }

  //hash the password
  const salt = await bcrypt.genSalt();
  const hashedpasssword = await bcrypt.hash(req.body.password, salt);

  try {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedpasssword,
    });
    //create new user
    const saveduser = await user.save();
    res.status(200).json({
      data: { _id: saveduser._id },
      message: "sucess",
    });
  } catch (err) {
    res.status(400).json({
      data: null,
      message: err.message,
    });
  }
};

module.exports = { autheticationRegister };
