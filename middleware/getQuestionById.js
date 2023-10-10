const questionModel = require("../models/questionModel").questionModel;

const getQuestionById = async (req, res, next) => {
  try {
    const question = await questionModel.findById(req.body.question);
    res.question = question;
    next();
  } catch (err) {
    res.json({ message: err.message });
  }
};

module.exports = getQuestionById;
