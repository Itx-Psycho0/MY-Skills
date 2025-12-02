const timerElement = document.getElementById('timer');
let countdown = 10;
const intervalId = setInterval(() => {
    if (countdown >= 0) {
        timerElement.textContent = `Countdown: ${countdown} seconds`;
        countdown--;
    } else {
        clearInterval(intervalId);
        timerElement.textContent = 'Time is up!';
    }
}, 1000);

