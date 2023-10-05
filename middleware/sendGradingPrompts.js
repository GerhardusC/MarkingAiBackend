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
    req.body.question,
    req.body.questionType,
    req.body.total,
    req.body.studentAnswer,
    req.body.memo,
    req.body.modelAnswer
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
    res.content = { mark: completion.choices[0].message.content };
    next();
  } catch (error) {
    res.json({ message: error.message });
  }
};

const sendFeedbackPrompt = async (req, res, next) => {
  const prompt = genPrompts.generateFeedbackPrompt(
    req.body.question,
    req.body.questionType,
    req.body.total,
    req.body.studentAnswer,
    req.body.memo
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
    res.content.feedback = completion.choices[0].message.content;
    next();
  } catch (error) {
    res.json({ message: error.message });
  }
};

const sendJustificationPrompt = async (req, res, next) => {
  const prompt = genPrompts.generateJustificationPrompt(
    req.body.question,
    req.body.questionType,
    req.body.total,
    req.body.studentAnswer,
    req.body.memo,
    req.body.modelAnswer,
    res.content.mark
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
    res.content.justification = completion.choices[0].message.content;
    next();
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = {
  sendMarkingPrompt,
  sendFeedbackPrompt,
  sendJustificationPrompt,
};
