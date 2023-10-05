// const questionModel = require('../models/questionModel').questionModel;
// const studentModel = require("../models/studentModel").studentModel;
const attemptModel = require("../models/attemptModel").attemptModel;

const createAttempt = async (req, res, next) => {
  try {
    const newAttempt = {
      question: req.body.question,
      student: req.body.student,
      studentAnswer: req.body.studentAnswer,
    };
    const attempt = new attemptModel(newAttempt);
    await attempt.save();
    res.json({ attemptId: attempt._id, message: "Attempt recorded." });
  } catch (err) {
    res.status(400);
    res.json({ message: err.message });
  }
};

module.exports = createAttempt;
