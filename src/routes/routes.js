const express = require("express");
const router = express.Router();
const adminController = require("../../controller/adminController");

router.get("/test", adminController.getUser);
router.post("/postusers", adminController.postUsers)

module.exports = router;
