const testModel = require("../models/testModel").testModel;

const getTests = async (req, res, next) => {
  try {
    const tests = await testModel.find();
    await res.json(tests);
  } catch (err) {
    res.status(400);
    res.json({ message: err.message });
  }
};

module.exports = getTests;
