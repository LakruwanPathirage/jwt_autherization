const autheticationLogic = (req, res) => {
  console.log("hello");
};

const miidle = function (req, res, next) {
  console.log("middleware");
  next();
};

module.exports = { autheticationLogic, miidle };
