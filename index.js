const button = document.querySelector("button");
const lamp = document.querySelector(".circle");

button.addEventListener('click', () => {
    lamp.classList.toggle('lighted-up');
});