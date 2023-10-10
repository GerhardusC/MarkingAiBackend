const express = require("express");
const validateBody = require("../middleware/validateBody");
const createAttempt = require("../middleware/createAttempt");
const getQuestionById = require("../middleware/getQuestionById");
const sendGradingPrompts = require("../middleware/sendGradingPrompts");
const router = express.Router();

router.post(
  "/mark_question",
  validateBody,
  getQuestionById,
  sendGradingPrompts.sendMarkingPrompt,
  sendGradingPrompts.sendFeedbackPrompt,
  sendGradingPrompts.sendJustificationPrompt,
  createAttempt
);

router.post("/save_question", (req, res) => {
  res.send("Question saved.");
});

router.get("/", async (req, res) => {
  res.json({ message: "Hello..." });
});

module.exports = router;
