const router = require("express").Router();
// CONTROLLERS
const AuthController = new (require("../controllers/auth"))();

router.post("/sign-up", AuthController.signUp);
router.post("/login", AuthController.login);
router.post("/profile", AuthController.userProfile);

module.exports = router;
