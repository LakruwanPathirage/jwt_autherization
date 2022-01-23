const router = require("express").Router();
const authController = require("../controllers/authController");
const { RegisterValidation } = require("../validations/validation");
router.post("/register", RegisterValidation, authController.autheticationLogic);

module.exports = router;
