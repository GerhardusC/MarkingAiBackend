const questionModel = require("../models/questionModel").questionModel;

const getQuestions = async (req, res, next) => {
  try {
    const questions = await questionModel.find();
    await res.json(questions);
  } catch (err) {
    res.json({ message: err.message });
  }
};

module.exports = getQuestions;
