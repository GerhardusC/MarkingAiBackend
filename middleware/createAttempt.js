const attemptModel = require("../models/attemptModel").attemptModel;

const createAttempt = async (req, res, next) => {
  try {
    const newAttempt = {
      test: req.body.test,
      question: req.body.question,
      student: req.body.student,
      studentAnswer: req.body.studentAnswer,
      mark: res.mark,
      feedback: res.feedback,
      justification: res.justification,
    };
    const attempt = new attemptModel(newAttempt);
    await attempt.save();
    await res.json({ message: "Attempt recorded.", attempt: attempt });
  } catch (err) {
    res.status(400);
    res.json({ message: err.message });
  }
};

module.exports = createAttempt;
