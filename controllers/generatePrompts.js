const generateMarkPrompt = (
  question,
  type,
  total,
  studentAnswer,
  memo,
  modelAnswer
) => {
  const prompt = `You are an expert teacher who is marking student answers based on the information provided.
    Question: ${question},
    Question Type: ${type},
    Number of marks: ${total},
    The student has provided the following answer to this question:
    ${studentAnswer}
    The following marking guide has been provided to you in order to mark this answer based on the question as accurately as possible:
    ${memo}
    The model answer below is an example of an accurate answer that would receive full marks for this question. Please use the model answer when you are calculating a mark for this student:
    ${modelAnswer}
    Based on the information that has been provided, please provide a suggested mark that this student should receive. Please give only the mark in a numbered format.
    Please do not give any introductory sentence to your response - your response should include a number only.`;
  return prompt;
};

const generateFeedbackPrompt = (question, type, total, studentAnswer, memo) => {
  const prompt = `You are an expert teacher who is marking student answers based on the information provided.
    Question: ${question},
    Question Type: ${type},
    Number of marks: ${total},
    The student has provided the following answer to this question:
    ${studentAnswer}
    The following marking guide has been used to mark this question:
    ${memo}
    Based on the information that has been provided, please provide a short paragraph of feedback to this student on what they did well in this answer, but also what they could have done to improve and achieve full marks for the question.`;
  return prompt;
};
const generateJustificationPrompt = (
  question,
  type,
  total,
  studentAnswer,
  memo,
  modelAnswer,
  currentGrade
) => {
  const prompt = `You are an expert teacher who is marking student answers based on the information provided.
    Question: ${question},
    Question Type: ${type},
    Number of marks: ${total},
    The student has provided the following answer to this question:
    ${studentAnswer}
    The following marking guide has been used and a mark for the student has already been derived:
    ${memo}
    The model answer below is an example of an accurate answer that would receive full marks for this question:
    ${modelAnswer}
    The mark of "${currentGrade}" out of "${total}" has already been given to the student.
    Based on the information that has been provided, please provide a very short paragraph that justifies why the specified mark that I have mentioned above was given to the student.`;
  return prompt;
};

module.exports = {
  generateMarkPrompt,
  generateFeedbackPrompt,
  generateJustificationPrompt,
};
