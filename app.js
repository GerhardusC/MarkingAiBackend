const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const markingRouter = require("./routes/grading");
const testCreationRouter = require("./routes/testCreation");
const studentCreationRouter = require("./routes/studentCreation");
const questionCreationRouter = require("./routes/questionCreation");
const questionAttemptsRouter = require("./routes/questionAttempts");
const getDataRouter = require("./routes/getData");
const PORT = 3001 || process.env.PORT;
const app = express();

mongoose.connect(
  `mongodb+srv://harduscronje:${process.env.DB_KEY}@markingai.29bycbu.mongodb.net/marking`
);

app.use(cors());
app.use(express.json());
app.use("/grading", markingRouter);
app.use("/test_creation", testCreationRouter);
app.use("/student_creation", studentCreationRouter);
app.use("/question_creation", questionCreationRouter);
app.use("/question_attempts", questionAttemptsRouter);
app.use("/get_data", getDataRouter);

app.get("/", (req, res) => {
  res.send("Hello working...");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
