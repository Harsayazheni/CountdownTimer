let timer;
let timeInSeconds = 0; // Start from 0 seconds

function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

function updateTimerDisplay() {
    document.getElementById('timer').textContent = formatTime(timeInSeconds);
}

function startTimer() {
    if (!timer) {
        timer = setInterval(function () {
            timeInSeconds++;
            updateTimerDisplay();
        }, 1000);
    }
}

function stopTimer() {
    clearInterval(timer);
    timer = null;
}

function resetTimer() {
    stopTimer();
    timeInSeconds = 0;
    updateTimerDisplay();
}
