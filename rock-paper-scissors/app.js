const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');

const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (event) => {
    userChoice = event.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}));

function generateComputerChoice() {
    const computerChoices = ['rock', 'paper', 'scissors'];
    computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerChoice);
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'Draw!';
    }
    if ( (computerChoice === 'rock' && userChoice === 'scissors')
        || (computerChoice === 'paper' && userChoice === 'rock') 
        || (computerChoice === 'scissors' && userChoice === 'paper')) {
            result = 'Computer win!';
    } else {
        result = 'User win!';
    }

    resultDisplay.innerHTML = result;
}
