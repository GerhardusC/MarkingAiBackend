const validateBody = (req, res, next) => {
  if (
    req.body.question &&
    req.body.questionType &&
    req.body.total &&
    req.body.studentAnswer &&
    req.body.memo &&
    req.body.modelAnswer
  ) {
    next();
  } else {
    res.json({ message: "Invalid prompt..." });
  }
};

module.exports = validateBody;
