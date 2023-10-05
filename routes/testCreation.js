const express = require("express");
const createTest = require("../middleware/createTest");
const router = express.Router();

router.post("/create_test", createTest, (req, res) => {
  res.status(201);
  res.json({ message: "Test created..." });
});

module.exports = router;
