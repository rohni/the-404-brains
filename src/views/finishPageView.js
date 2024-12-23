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

    const image = correctAnswersCount < 5
    ? 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcG42M284dnViZmFpenhscjlxbG1wYTNvOWl6OXYzZjY3ZDdidWV0cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3OhXBaoR1tVPW/giphy.gif'
    : correctAnswersCount < 8
    ? 'https://c.tenor.com/MKV-2xMdq28AAAAC/tenor.gif'
    : 'https://media.giphy.com/media/URurgslg2xhvYueMx1/giphy.gif'; 


    finishPageElement.innerHTML = String.raw`
        <h1>Well done, ${userName}! </h1>
        <img src="${image}" alt="Finish image"/>
        <div class= "score-text"> You have answered ${correctAnswersCount} questions correctly! </div>
        <div class= "skipped-questions"> The number of questions you have skipped is ${skipAnswer} </div>
        <div class= "result-message"> ${resultMessage} </div>
        <button id="${RESTART_QUIZ_BUTTON_ID}">Try again!</button>
    `;
    return finishPageElement;
}