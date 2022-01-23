const router = require("express").Router();
const authController = require("../controllers/authController");

router.get("/register", authController.autheticationLogic);

module.exports = router;
