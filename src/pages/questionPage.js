import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';

let correctAnswersCount = 0;
let wrongAnswersCount = 0;

export const initQuestionPage = () => {
  let answerClicked = false;
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {   
    const answerElement = createAnswerElement(key, answerText);
    answerElement.addEventListener('click', () => {
      if (answerClicked) return;
      answerClicked = true;
      
      if (key === currentQuestion.correct) {
        correctAnswersCount++;
        answerElement.style.backgroundColor = 'green';
      } else {
        wrongAnswersCount++;
        const correctAnswerElement = Array.from(answersListElement.children).find(
          (child) => child.innerHTML.includes(currentQuestion.correct)
        );
        correctAnswerElement.style.backgroundColor = 'green';
        answerElement.style.backgroundColor = 'red';
      }
    });    
    answersListElement.appendChild(answerElement);
  }

  document
    .getElementById(NEXT_QUESTION_BUTTON_ID)
    .addEventListener('click', nextQuestion);
};

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;

  initQuestionPage();
};
