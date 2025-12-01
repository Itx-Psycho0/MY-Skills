const btn = document.getElementById('changeBgBtn');
const body = document.body;

btn.addEventListener('click', function() {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0"); // random hexadecimal color generation
    body.style.backgroundColor = randomColor;
});