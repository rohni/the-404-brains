import { START_QUIZ_BUTTON_ID } from '../constants.js';

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
  const element = document.createElement('div');
  element.innerHTML = String.raw`
    <h1>Welcome</h1>
    <button id="${START_QUIZ_BUTTON_ID}">start quiz</button>
  `;
  return element;
};
