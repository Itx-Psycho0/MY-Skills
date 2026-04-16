const counter = document.getElementById("counter");
const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");

let count = 0;

increment.addEventListener("click", () => {
    count++;
    counter.textContent = count;
});

decrement.addEventListener("click", () => {
    count--;
    counter.textContent = count;
});
