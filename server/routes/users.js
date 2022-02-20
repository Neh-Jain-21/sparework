const router = require("express").Router();
// CONTROLLERS
const UserController = new (require("../controllers/users"))();

router.get("/providers", UserController.recentProviders);
router.get("/workers", UserController.recentWorkers);

module.exports = router;
