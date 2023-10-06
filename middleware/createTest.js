const testModel = require("../models/testModel").testModel;

const createTest = async (req, res, next) => {
  try {
    const newTest = {
      testName: req.body.testName,
      marks: req.body.marks,
      questions: [...req.body.questions],
    };
    if (await testModel.exists({ testName: req.body.testName })) {
      res.status(300);
      res.json({ message: "Test name already in use..." });
    } else {
      const test = new testModel(newTest);
      await test.save();
      next();
    }
  } catch (err) {
    res.status(400);
    res.json({ message: err.message });
  }
};

module.exports = createTest;
