const jsonwebtoken = require("jsonwebtoken");

const jwtverify = async (req, res, next) => {
  const token = req.header("auth-token");

  if (!token) return res.status(401).json({ message: "token is missing" });

  try {
    //verify variable has the user id
    const verify = await jsonwebtoken.verify(token, process.env.TOKENSECRET);
    req.userid = verify._id;
    console.log(verify);
    next();
  } catch (err) {
    return res.status(401).json({ message: "acess denied" });
  }
};
module.exports = jwtverify;
