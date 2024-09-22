let milliseconds = 0;
let interval;
let isRunning = false;

const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const laps = document.getElementById('laps');

startBtn.addEventListener('click', () => {
    if (!isRunning) {
        isRunning = true;
        startBtn.classList.add('active');
        stopBtn.classList.remove('active');
        resetBtn.classList.remove('active');
        lapBtn.classList.remove('active');
        startTimer();
    }
});

stopBtn.addEventListener('click', () => {
    isRunning = false;
    clearInterval(interval);
    startBtn.classList.remove('active');
    stopBtn.classList.add('active');
});

resetBtn.addEventListener('click', () => {
    clearInterval(interval);
    isRunning = false;
    milliseconds = 0;
    display.textContent = formatTime(milliseconds);
    startBtn.classList.remove('active');
    stopBtn.classList.remove('active');
    resetBtn.classList.remove('active');
    lapBtn.classList.remove('active');
    laps.innerHTML = ''; // Clear laps
});

lapBtn.addEventListener('click', () => {
    if (isRunning) {
        const lapTime = document.createElement('div');
        lapTime.textContent = `Lap: ${formatTime(milliseconds)}`;
        laps.appendChild(lapTime);
    }
});

function startTimer() {
    interval = setInterval(() => {
        milliseconds += 10; // Increment by 10 milliseconds
        display.textContent = formatTime(milliseconds);
    }, 10);
}

function formatTime(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    const ms = milliseconds % 1000;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}.${String(ms).padStart(3, '0')}`;
}
