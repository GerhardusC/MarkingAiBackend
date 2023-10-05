const studentModel = require("../models/studentModel").studentModel;

const getStudent = async (req, res, next) => {
  try {
    const student = await studentModel.findOne({
      studentId: req.query.studentId,
    });
    res.json(student);
  } catch (err) {
    res.status(400);
    res.json({ message: err.message });
  }
};

module.exports = getStudent;
