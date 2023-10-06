const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: true,
  },
  studentEmail: {
    type: String,
    required: true,
  },
  studentId: {
    type: String,
    required: true,
  },
  tests: {
    type: [mongoose.Types.ObjectId],
    ref: "tests",
  },
});

module.exports.studentModel = mongoose.model("students", studentSchema);
