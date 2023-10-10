const mongoose = require("mongoose");

const attemptSchema = new mongoose.Schema({
  test: {
    type: mongoose.Types.ObjectId,
    ref: "tests",
    required: true,
  },
  question: {
    type: mongoose.Types.ObjectId,
    ref: "questions",
    required: true,
  },
  student: {
    type: mongoose.Types.ObjectId,
    ref: "students",
    required: true,
  },
  studentAnswer: {
    type: String,
    required: true,
  },
  mark: {
    type: Number,
  },
  feedback: {
    type: String,
  },
  justification: {
    type: String,
  },
});

module.exports.attemptModel = mongoose.model("attempts", attemptSchema);
