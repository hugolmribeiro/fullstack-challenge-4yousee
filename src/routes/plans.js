const express = require("express");
const router = express.Router();
const controller = require("../controllers/PlansController");

router.get("/plans", controller.plans);

module.exports = router;
