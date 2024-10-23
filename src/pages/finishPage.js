import { RESTART_QUIZ_BUTTON_ID, USER_INTERFACE_ID } from '../constants.js';
import { createFinishPageElement } from '../views/finishPageView.js';
import { initWelcomePage } from './welcomePage.js';

export const initFinishPage = () => {
    const userInterface = document.getElementById(USER_INTERFACE_ID);
    userInterface.innerHTML = '';

    const finishPageElement = createFinishPageElement();
    userInterface.appendChild(finishPageElement);

    const restartQuizBtn = document.getElementById(RESTART_QUIZ_BUTTON_ID);
    restartQuizBtn.addEventListener('click', restartQuiz)
}

const restartQuiz = () => {
    initWelcomePage();
};
  