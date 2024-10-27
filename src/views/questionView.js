import { ANSWERS_LIST_ID } from '../constants.js';
import { SKIP_QUESTION_BUTTON_ID  } from '../constants.js';

export const createQuestionElement = (question) => {
  const element = document.createElement('div');

  element.innerHTML = String.raw`
    <h1>${question}</h1>
    <div id="content-container">
          <div id="image-wrapper"></div>
          <ul id="${ANSWERS_LIST_ID}">
          </ul>
    </div>
    <button id="${SKIP_QUESTION_BUTTON_ID}">
      Skip question
    </button>
  `;

  return element;
};
