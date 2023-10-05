const express = require("express");
const createQuestion = require("../middleware/createQuestion");
const router = express.Router();

router.post("/create_question", createQuestion, (req, res) => {
  res.status(201);
  res.json({ message: "Question created." });
});

module.exports = router;
