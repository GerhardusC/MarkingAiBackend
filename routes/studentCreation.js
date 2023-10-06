const express = require("express");
const createStudent = require("../middleware/createStudent");
const router = express.Router();

router.post("/add_student", createStudent, (req, res) => {
  res.status(201);
  res.json({ message: "Student created..." });
});

module.exports = router;
