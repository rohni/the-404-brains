import { RESTART_QUIZ_BUTTON_ID } from '../constants.js';

export const createFinishPageElement = () => {
    const finishPageElement = document.createElement('div');
    finishPageElement.innerHTML = String.raw`
        <h1>Well done!</h1>
        <button id="${RESTART_QUIZ_BUTTON_ID}">Try again!</button>
    `;
    return finishPageElement;
}