const form = document.querySelector('form');
const input = document.querySelector('#amount');
const result = document.querySelector('#result');

const listeDesEleves = [
    "Manda", 
    "Ranto",
    "Doda"
];

form.addEventListener('submit', (event) => {
    event.preventDefault();
    result.innerText = `Votre somme en Ariary est ${parseInt(input.value) * 5000}`
})