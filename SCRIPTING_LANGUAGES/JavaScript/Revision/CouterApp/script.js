const counter = document.getElementById("counter");
const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const saveEl = document.getElementById("save-el");
const saveBtn = document.getElementById("save");

let count = 0;

increment.addEventListener("click", () => {
    count++;
    counter.textContent = count;
});

decrement.addEventListener("click", () => {
    count--;
    counter.textContent = count;

});

saveBtn.addEventListener("click", () => {
    saveEl.textContent += count + " - ";
    count = 0;
    counter.textContent = count;
});