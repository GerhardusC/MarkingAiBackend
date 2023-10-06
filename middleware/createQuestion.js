const questionModel = require("../models/questionModel").questionModel;
const testModel = require("../models/testModel").testModel;

const createQuestion = async (req, res, next) => {
  try {
    const newQuestion = {
      totalMarks: req.body.totalMarks,
      questionText: req.body.questionText,
      questionType: req.body.questionType,
      markingGuide: req.body.markingGuide,
      modelAnswer: req.body.modelAnswer,
    };

    if (
      await questionModel.exists({ questionText: newQuestion.questionText })
    ) {
      res.json({ message: "Question already exists." });
    } else {
      const question = new questionModel(newQuestion);
      await question.save();
      next();
    }
  } catch (err) {
    res.status(400);
    res.json({ message: err.message });
  }
};

module.exports = createQuestion;
