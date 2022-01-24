const router = require("express").Router();
const RegisterController = require("../controllers/RegisterController");
const LoginController = require("../controllers/LoginController");
const {
  RegisterValidation,
  LoginValidation,
} = require("../validations/validation");

router.post(
  "/register",
  RegisterValidation,
  RegisterController.autheticationRegister
);
router.post("/login", LoginValidation, LoginController.autheticationLogin);

module.exports = router;
