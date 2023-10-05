const studentModel = require("../models/studentModel").studentModel;

const createStudent = async (req, res, next) => {
  try {
    const newStudent = {
      studentName: req.body.studentName,
      studentEmail: req.body.studentEmail,
      studentId: req.body.studentId,
    };
    if (await studentModel.exists({ studentId: req.body.studentId })) {
      res.status(304);
      res.json({ message: "Student ID already in use..." });
    } else {
      const student = new studentModel(newStudent);
      await student.save();
      next();
    }
  } catch (err) {
    res.status(400);
    res.json({ message: err.message });
  }
};

module.exports = createStudent;
