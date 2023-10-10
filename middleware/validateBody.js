const validateBody = (req, res, next) => {
  if (req.body.studentAnswer && req.body.student && req.body.question) {
    next();
  } else {
    res.json({ message: "Missing input." });
  }
};

module.exports = validateBody;
