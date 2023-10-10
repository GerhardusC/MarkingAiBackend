const genPrompts = require("../controllers/generatePrompts");
const AIClass = require("openai").OpenAI;
require("dotenv").config();

const openai = new AIClass({ apiKey: process.env.GPT_API_KEY });

// const promptFormat = {
//   question: "What colour is the sky?",
//   questionType: "Short answer",
//   total: 2,
//   studentAnswer: "Purple",
//   memo: "The sky is blue.",
//   modelAnswer: "Blue",
// };

const sendMarkingPrompt = async (req, res, next) => {
  const prompt = genPrompts.generateMarkPrompt(
    res.question.questionText,
    res.question.questionType,
    res.question.totalMarks,
    req.body.studentAnswer,
    res.question.markingGuide,
    res.question.modelAnswer
  );
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      temperature: 0.2,
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      max_tokens: 3,
    });
    res.mark = completion.choices[0].message.content;
    await next();
  } catch (error) {
    res.json({ message: error.message });
  }
};

const sendFeedbackPrompt = async (req, res, next) => {
  const prompt = genPrompts.generateFeedbackPrompt(
    res.question.questionText,
    res.question.questionType,
    res.question.totalMarks,
    req.body.studentAnswer,
    res.question.modelAnswer
  );
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      temperature: 0.2,
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      max_tokens: 50,
    });
    res.feedback = completion.choices[0].message.content;
    await next();
  } catch (error) {
    res.json({ message: error.message });
  }
};

const sendJustificationPrompt = async (req, res, next) => {
  const prompt = genPrompts.generateJustificationPrompt(
    res.question.questionText,
    res.question.questionType,
    res.question.totalMarks,
    req.body.studentAnswer,
    res.question.markingGuide,
    res.question.modelAnswer,
    res.mark
  );
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      temperature: 0.2,
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      max_tokens: 50,
    });
    res.justification = completion.choices[0].message.content;
    await next();
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = {
  sendMarkingPrompt,
  sendFeedbackPrompt,
  sendJustificationPrompt,
};
