const attemptModel = require("../models/attemptModel").attemptModel;

const getAttempt = async (req, res, next) => {
  try {
    const attempt = await attemptModel.findById(req.query.attemptId);
    (await attempt.populate("question")).populate("student");
    await attempt.question.populate("test");
    res.json(attempt);
  } catch (err) {
    res.status(400);
    res.json({ message: err.message });
  }
};

module.exports = getAttempt;
