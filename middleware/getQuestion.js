const questionModel = require("../models/questionModel").questionModel;

const getQuestion = async (req, res, next) => {
  try {
    const question = await questionModel.findOne({
      questionText: req.query.questionText,
    });
    res.content.question = question;
    next();
  } catch (err) {
    res.status(400);
    res.json({ message: err.message });
  }
};

module.exports = getQuestion;
