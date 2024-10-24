import { RESTART_QUIZ_BUTTON_ID } from '../constants.js';
import { correctAnswersCount, skipAnswer } from '../pages/questionPage.js';
import { userName } from '../pages/welcomePage.js';

export const createFinishPageElement = () => {
    const finishPageElement = document.createElement('div');

    const resultMessage = correctAnswersCount < 5 
    ? '<div class="fail-message">You probably know something about the Netherlands!</div>' 
    : correctAnswersCount < 8 
    ? '<div class="good-job-message">Good job! You have definitely been to the Netherlands!!</div>' 
    : '<div class="expert-message">Great job! You are definitely a local from the Netherlands!!!</div>';

    finishPageElement.innerHTML = String.raw`
        <h1>Well done, ${userName}! </h1>
        <div> Your score is ${correctAnswersCount} </div>
        <div> The number of questions you have skipped is ${skipAnswer} </div>
        ${resultMessage}
        <button id="${RESTART_QUIZ_BUTTON_ID}">Try again!</button>
    `;
    return finishPageElement;
}