const studentModel = require("../models/studentModel").studentModel;

const getQuestions = async (req, res, next) => {
  try {
    const students = await studentModel.find();
    await res.json(students);
  } catch (err) {
    res.json({ message: err.message });
  }
};

module.exports = getQuestions;
