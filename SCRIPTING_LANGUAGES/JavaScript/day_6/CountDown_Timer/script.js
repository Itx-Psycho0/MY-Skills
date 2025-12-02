const timerElement = document.getElementById('timer');
const body = document.body;
let countdown = 10;


const intervalId = setInterval(() => {
    if (countdown >= 0) {
        timerElement.textContent = `${countdown} seconds`;
        countdown--;
    } else {
        clearInterval(intervalId);
        timerElement.textContent = 'Time is up!';
        const intervalEnd = setInterval(() => {
            const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
            body.style.backgroundColor = randomColor;
        }, 100);
    }
}, 1000);

