const router = require("express").Router();
const Ctrl = require('../controllers');

router.post("/trm", Ctrl.addPrice);

router.get("/trm", Ctrl.getPrices);

module.exports = router;
