const validateBody = (req, res, next) => {
  if (
    req.body.studentAnswer &&
    req.body.student &&
    req.body.question &&
    req.body.test
  ) {
    next();
  } else {
    res.json({ message: "Missing input." });
  }
};

module.exports = validateBody;
