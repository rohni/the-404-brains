import { START_QUIZ_BUTTON_ID, WELCOME_ELEMENT_ID } from '../constants.js';

/**
 * Create the welcome screen
 * @returns {Element}
 */

export const createTitle = ()=>{
  const title = document.getElementsByTagName('title')[0];
  title.textContent = 'c50-browsers-the-404-brains';
  return title;
};

export const createFavicon = ()=>{
  const favicon = document.createElement('link');
  favicon.href ='https://cdn.prod.website-files.com/62745a1007e49e2461fb7ecd/62745a1007e49e335ffb8025_hyfcartoon.svg'
  favicon.type = 'image/x-icon';
  favicon.rel = 'shortcut icon';
  return favicon;
};

export const createWelcomeElement = () => {
  const welcomeElement = document.createElement('div');
  welcomeElement.id = WELCOME_ELEMENT_ID;
  welcomeElement.innerHTML = String.raw`
    <h1>Welcome to the Netherlands Quiz!</h1>
    <p>What is your name?</p>
    <input type="text" id="name" placeholder="Enter your name" />
    <button id="${START_QUIZ_BUTTON_ID}">Start quiz</button>
  `;

  return welcomeElement;
};
