const mongoose = require("mongoose");

const testSchema = new mongoose.Schema({
  testName: {
    type: String,
    required: true,
  },
  marks: {
    type: Number,
    required: true,
  },
  questions: {
    type: [mongoose.Types.ObjectId],
    ref: "questions",
    required: true,
  },
});

module.exports.testModel = mongoose.model("tests", testSchema);
