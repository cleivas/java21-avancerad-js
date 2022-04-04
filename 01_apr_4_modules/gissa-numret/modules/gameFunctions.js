let randomNumber = getRandomNumber();
let numberOfGuesses = 0;

function getRandomNumber(){
    return Math.round( Math.random()*100 );
}

function getGuess(){
    numberOfGuesses++;
    document.querySelector('#guesses').innerText = 'Antal gissningar: ' + numberOfGuesses;

    const input = document.querySelector('input');
    const guess = input.value;
    input.value = '';
    return guess;
}

function compareNumbers(guess){
    const highLow = document.querySelector('#high-low');
    // const highLow = document.getElementById('high-low');

    if(guess == randomNumber){
        alert('Du gissade rätt!');
        reset();
    }
    else if(guess < randomNumber) highLow.innerText = 'Gissa på något högre';
    else if(guess > randomNumber) highLow.innerText = 'Gissa på något lägre';
}

function reset(){
    randomNumber = getRandomNumber();
    numberOfGuesses = 0;

    document.querySelector('#high-low').innerText = '';
    document.querySelector('#guesses').innerText = 'Antal gissningar: ' + numberOfGuesses;
}

export{randomNumber, getGuess, compareNumbers};