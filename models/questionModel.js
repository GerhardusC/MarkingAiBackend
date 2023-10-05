const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  test: {
    type: mongoose.Types.ObjectId,
    ref: "tests",
    required: true,
  },
  totalMarks: {
    type: Number,
    required: true,
  },
  questionText: {
    type: String,
    required: true,
  },
  questionType: {
    type: String,
    required: true,
  },
  markingGuide: {
    type: String,
    required: true,
  },
  modelAnswer: {
    type: String,
    required: true,
  },
});

module.exports.questionModel = mongoose.model("questions", questionSchema);
