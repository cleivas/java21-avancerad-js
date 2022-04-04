import { randomNumber, getGuess, compareNumbers } from "./modules/gameFunctions.js";

const btn = document.querySelector('button');
btn.addEventListener('click', guess);

function guess(event){
    event.preventDefault();
    const guess = getGuess();
    compareNumbers(guess);
}