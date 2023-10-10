const attemptModel = require("../models/attemptModel").attemptModel;

const getTestAttempts = async (req, res, next) => {
  try {
    const attempts = await attemptModel
      .find()
      .sort({ student: 1, test: 1 })
      .populate("question")
      .populate("student");
    res.json(attempts);
  } catch (err) {
    res.status(400);
    res.json({ message: err.message });
  }
};

module.exports = getTestAttempts;
