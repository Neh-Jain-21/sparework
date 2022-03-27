const router = require("express").Router();
// CONTROLLERS
const WorkController = new (require("../controllers/work"))();

router.post("/addWork", WorkController.addWork);
router.get("/getWork", WorkController.getWork);
router.post("/getWork", WorkController.getUserWork);
router.post("/apply", WorkController.applyWork);
router.post("/completed", WorkController.workCompleted);

module.exports = router;
