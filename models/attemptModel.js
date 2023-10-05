const mongoose = require("mongoose");

const attemptSchema = new mongoose.Schema({
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
});

module.exports.attemptModel = mongoose.model("attempts", attemptSchema);
