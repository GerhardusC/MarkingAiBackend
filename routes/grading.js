const express = require("express");
const validateBody = require("../middleware/validateBody");
const sendGradingPrompts = require("../middleware/sendGradingPrompts");
const router = express.Router();

router.post(
  "/mark_question",
  validateBody,
  sendGradingPrompts.sendMarkingPrompt,
  sendGradingPrompts.sendFeedbackPrompt,
  sendGradingPrompts.sendJustificationPrompt,
  (req, res) => {
    res.json(res.content);
  }
);

router.post("/save_question", (req, res) => {
  res.send("Question saved.");
});

router.get("/", async (req, res) => {
  res.json({ message: "Hello..." });
});

module.exports = router;
