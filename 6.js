// script.js
let progress = 0;
let progressInterval = null;

const progressBar = document.getElementById('progressBar');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const stopButton = document.getElementById('stop');

startButton.addEventListener('click', () => {
    clearInterval(progressInterval); // Clear existing interval
    progress = 0; // Reset progress
    updateProgressBar();
    progressInterval = setInterval(() => {
        if (progress >= 100) {
            clearInterval(progressInterval);
            return;
        }
        progress += 1;
        updateProgressBar();
    }, 100); // Update progress every 100 milliseconds
});

pauseButton.addEventListener('click', () => {
    clearInterval(progressInterval);
});

stopButton.addEventListener('click', () => {
    clearInterval(progressInterval);
    progress = 0;
    updateProgressBar();
});

function updateProgressBar() {
    progressBar.style.width = `${progress}%`;
}
