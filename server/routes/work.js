const router = require("express").Router();
// CONTROLLERS
const WorkController = new (require("../controllers/work"))();

router.post("/addWork", WorkController.addWork);
router.get("/getWork", WorkController.getWork);

module.exports = router;
