const express = require("express");
const router = express.Router();
const detectCtrl = require("../controller/detect");

router.post("/", detectCtrl.post).get("/", detectCtrl.post);

module.exports = router;
