const express = require("express");
const getAttempt = require("../middleware/getAttempt");
const getQuestion = require("../middleware/getQuestion");
const getStudent = require("../middleware/getStudent");
const getTest = require("../middleware/getTest");
const getQuestions = require("../middleware/getQuestions");
const getStudents = require("../middleware/getStudents");
const getTests = require("../middleware/getTests");
const getTestAttempt = require("../middleware/getTestAttempt");
const getTestAttempts = require("../middleware/getTestAttempts");
const router = express.Router();

router.get("/get_test", getTest);

router.get("/get_tests", getTests);

router.get("/get_attempt", getAttempt);

router.get("/get_test_attempt", getTestAttempt);

router.get("/get_test_attempts", getTestAttempts);

router.get("/get_student", getStudent);

router.get("/get_students", getStudents);

router.get("/get_question", getQuestion, (req, res) => {
  res.json(res.content);
});

router.get("/get_questions", getQuestions);

module.exports = router;
