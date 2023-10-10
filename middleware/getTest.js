const testModel = require("../models/testModel").testModel;

const getTest = async (req, res, next) => {
  try {
    const test = await testModel.findById(req.query.testId);
    if (!test) {
      res.status(404);
      res.json({ message: "Test not found..." });
    } else {
      await test.populate("questions");
      await res.json(test);
    }
  } catch (err) {
    res.status(400);
    res.json({ message: err.message });
  }
};

module.exports = getTest;
