const router = require("express").Router();
// CONTROLLERS
const UserController = new (require("../controllers/users"))();

router.get("/recent-users", UserController.recentUsers);

module.exports = router;
