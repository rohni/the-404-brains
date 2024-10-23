import {
  ANSWERS_LIST_ID,
  SKIP_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
  FINAL_RESULT_BUTTON_ID
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { createStatusBar, updateStatusBar } from '../views/statusBarView.js';
import { initFinishPage } from './finishPage.js';

export let correctAnswersCount = 0;
let wrongAnswersCount = 0;

export const initQuestionPage = () => {
  let answerClicked = false; 
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];
  const questionElement = createQuestionElement(currentQuestion.text);

  const statusBar = createStatusBar(quizData.currentQuestionIndex + 1, quizData.questions.length)
  userInterface.prepend(statusBar);

  const questionPageContainer = document.createElement('div');
  questionPageContainer.classList.add('question-page-container');
  userInterface.appendChild(questionPageContainer);

  const imageWrapper = document.createElement('div');
  imageWrapper.classList.add('image-wrapper');

  questionPageContainer.appendChild(imageWrapper);

  const imageElement = document.createElement('img');
  imageElement.src = currentQuestion.image;
  imageElement.alt = 'Image of the question';
  imageElement.classList.add('question-image');

  imageWrapper.appendChild(imageElement);

  const questionBox = document.createElement('div');
  questionBox.classList.add('question-box');
  questionPageContainer.appendChild(questionBox);

  questionBox.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {   
    const answerElement = createAnswerElement(key, answerText);

    answerElement.addEventListener('click', () => {
      const skipButton = document.getElementById(SKIP_QUESTION_BUTTON_ID);
      skipButton.disabled = true;
      
      if (answerClicked) return;
      answerClicked = true;
      
      if (key === currentQuestion.correct) {
        correctAnswersCount++;
        answerElement.style.backgroundColor = 'green';
      } else {
        wrongAnswersCount++;
        const correctAnswerElement = Array.from(answersListElement.children).find((child) => 
          child.innerHTML.includes(currentQuestion.correct)
        );
        correctAnswerElement.style.backgroundColor = 'green';
        answerElement.style.backgroundColor = 'red';
      } 

      setTimeout(() => nextQuestion(statusBar), 2000);
    });    

    answersListElement.appendChild(answerElement);
  }

  document.getElementById(SKIP_QUESTION_BUTTON_ID)
    .addEventListener('click',() => nextQuestion(statusBar));
  
};

const nextQuestion = (statusBar) => {
  showCorrectAnswer();

  if (quizData.currentQuestionIndex < quizData.questions.length - 1) {
    quizData.currentQuestionIndex++;
    initQuestionPage();
  } else if (quizData.currentQuestionIndex === quizData.questions.length -1) {
    showEndOfTheQuiz();
  }
  
  updateStatusBar(statusBar, quizData.currentQuestionIndex + 1, quizData.questions.length, correctAnswersCount);
};

const showEndOfTheQuiz = () => {
  console.log("You have reached the last question!");

  const skipButton = document.getElementById(SKIP_QUESTION_BUTTON_ID);
  skipButton.disabled = true;

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
  initFinishPage();
};
 
const showCorrectAnswer = () => {
  console.log("correct answers", correctAnswersCount);
};

export const resetQuiz = () => {
  correctAnswersCount = 0;
  wrongAnswersCount = 0;
  quizData.currentQuestionIndex = 0;
};
