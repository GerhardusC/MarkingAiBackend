const express = require("express");
const getAttempt = require("../middleware/getAttempt");
const getQuestion = require("../middleware/getQuestion");
const getStudent = require("../middleware/getStudent");
const getTest = require("../middleware/getTest");
const router = express.Router();

router.get("/get_test", getTest);

router.get("/get_attempt", getAttempt);

router.get("/get_student", getStudent);

router.get("/get_question", getQuestion);

module.exports = router;
