const attemptModel = require("../models/attemptModel").attemptModel;

const getTestAttempt = async (req, res, next) => {
  try {
    const attempt = await attemptModel
      .find({ test: req.query.testId, student: req.query.studentId })
      .populate("question")
      .populate("student")
      .populate("test");
    await res.json(attempt);
  } catch (err) {
    res.status(400);
    res.json({ message: err.message });
  }
};

module.exports = getTestAttempt;
