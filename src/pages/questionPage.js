import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
  FINAL_RESULT_BUTTON_ID
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { createStatusBar, updateStatusBar } from '../views/statusBarView.js';

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  const questionElement = createQuestionElement(currentQuestion.text);

  userInterface.appendChild(questionElement);

  // Status bar
  const statusBar = createStatusBar(quizData.currentQuestionIndex + 1, quizData.questions.length)
  userInterface.prepend(statusBar);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);
  }

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', () => nextQuestion(statusBar))
};

const nextQuestion = (statusBar) => {
  if (quizData.currentQuestionIndex < quizData.questions.length - 1) {
    quizData.currentQuestionIndex++;
    updateStatusBar(statusBar, quizData.currentQuestionIndex + 1, quizData.questions.length)
    initQuestionPage();
  } else if (quizData.currentQuestionIndex === quizData.questions.length -1) {
    showEndOfTheQuiz();
  }
};

const showEndOfTheQuiz = () => {
  console.log("You have reached the last question!");
  const nextButton = document.getElementById(NEXT_QUESTION_BUTTON_ID);
  nextButton.disabled = true;

  const userInterface = document.getElementById(USER_INTERFACE_ID);
  const finaleMessage = document.createElement('p');
  finaleMessage.textContent = 'Congratulations! You have completed the quiz.'
  const finalResultBtn = document.createElement('button');
  finalResultBtn.textContent = 'Show Final Result!';
  finalResultBtn.classList.add(FINAL_RESULT_BUTTON_ID);
  finalResultBtn.addEventListener('click', showFinalResult);

  userInterface.appendChild(finaleMessage);
  userInterface.appendChild(finalResultBtn);
};

const showFinalResult = () => {
  console.log("Redirect to Final result page");
};
 