const express = require("express");
const createAttempt = require("../middleware/createAttempt");
const getAttempt = require("../middleware/getAttempt");
const router = express.Router();

router.post("/create_attempt", createAttempt);

router.get("/get_attempt", getAttempt);

module.exports = router;
