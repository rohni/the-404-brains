export const createStatusBar = (currentQuestion, totalQuestions) => {
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
    progressText.textContent = `${currentQuestion}/${totalQuestions}`;
    statusBar.appendChild(progressText);

    return statusBar;
}

// Have to add Score too after Esen's feature

export const updateStatusBar = (statusBarElement, currentQuestion, totalQuestions) => {    
    const progressBar = statusBarElement.querySelector('.progress-bar');
    const progressBarWidth = (currentQuestion / totalQuestions) * 100;

    progressBar.style.width = `${progressBarWidth}%`;

    const progressText = statusBarElement.querySelector('span');
    progressText.textContent = `${currentQuestion}/${totalQuestions}`
}