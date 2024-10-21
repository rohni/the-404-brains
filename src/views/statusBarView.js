export const createStatusBar = (currentQuestion, totalQuestions) => {
    const statusBar = document.createElement('div');
    statusBar.classList.add('status-bar');
    statusBar.innerHTML = `${currentQuestion}/${totalQuestions}`
    return statusBar;
}

// Have to add Score too after Esen's feature

export const updateStatusBar = (statusBarElement, currentQuestion, totalQuestions) => {
    statusBarElement.innerHTML = `${currentQuestion}/${totalQuestions}`
}