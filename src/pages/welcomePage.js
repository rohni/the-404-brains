import { USER_INTERFACE_ID, START_QUIZ_BUTTON_ID } from '../constants.js';
import { createWelcomeElement, createTitle, createFavicon } from '../views/welcomeView.js';
import { initQuestionPage, resetQuiz } from './questionPage.js';

export let userName = '';

export const initWelcomePage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const welcomeElement = createWelcomeElement();
  const titleOfWebsite = createTitle();
  const favicon = createFavicon();
  const welcomeBox = document.createElement('div');
  welcomeBox.classList.add('welcome-box');
  userInterface.appendChild(welcomeBox);

  welcomeBox.appendChild(welcomeElement);
  document.head.appendChild(titleOfWebsite);
  document.head.appendChild(favicon);

  document
    .getElementById(START_QUIZ_BUTTON_ID)
    .addEventListener('click', startQuiz);
};

const startQuiz = () => {
  if (document.getElementById('name').value.length < 2) {
    alert('Name must be at least 2 characters long');
    return;
  } 
  saveUserName();
  resetQuiz();
  initQuestionPage();
};

const saveUserName = () => {
  userName = document.getElementById('name').value;  
  return userName;
}
