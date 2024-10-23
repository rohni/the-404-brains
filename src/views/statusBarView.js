import {correctAnswersCount} from '../pages/questionPage.js';
import { userName } from '../pages/welcomePage.js';

export const createStatusBar = (currentQuestion, totalQuestions, score = correctAnswersCount) => {
    const statusBar = document.createElement('div');
    statusBar.classList.add('status-bar');

    const progressBarContainer = document.createElement('div');
    progressBarContainer.classList.add('progress-bar-container');

    const progressBar = document.createElement('div');
    progressBar.classList.add('progress-bar');
    progressBar.style.width = `${(currentQuestion/totalQuestions) * 100}%`;

    progressBarContainer.appendChild(progressBar);
    statusBar.appendChild(progressBarContainer);

    const progressText = document.createElement('span');
    progressText.classList.add('progress-text');
    progressText.textContent = `${currentQuestion}/${totalQuestions}`;
    statusBar.appendChild(progressText);
    
    const playerInfoContainer = document.createElement('div');
    playerInfoContainer.classList.add('player-info-container');
    const scoreOfPlayer = document.createElement('span');
    const nameOfPlayer = document.createElement('span');
    scoreOfPlayer.textContent = `Score: ${score}`;
    nameOfPlayer.textContent = `Player: ${userName} `;
    scoreOfPlayer.classList.add('score');
    playerInfoContainer.appendChild(nameOfPlayer);
    playerInfoContainer.appendChild(scoreOfPlayer);
    statusBar.prepend(playerInfoContainer);

    return statusBar;
}

export const updateStatusBar = (statusBarElement, currentQuestion, totalQuestions, score) => {    
    const progressBar = statusBarElement.querySelector('.progress-bar');
    const progressBarWidth = (currentQuestion / totalQuestions) * 100;
    progressBar.style.width = `${progressBarWidth}%`;

    const progressText = statusBarElement.querySelector('.progress-text');
    progressText.textContent = `${currentQuestion}/${totalQuestions}`;

    const scoreElement = statusBarElement.querySelector('.score');
    scoreElement.textContent = `${score}`;
}