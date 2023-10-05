const mongoose = require("mongoose");

const testSchema = new mongoose.Schema({
  testName: {
    type: String,
    required: true,
  },
});

module.exports.testModel = mongoose.model("tests", testSchema);
