const cardArray = [
    {
        name: 'fries',
        img: 'assets/fries.png',
    }, 
    {
        name: 'cheeseburger',
        img: 'assets/cheeseburger.png',
    }, 
    {
        name: 'hotdog',
        img: 'assets/hotdog.png',
    }, 
    {
        name: 'ice-cream',
        img: 'assets/ice-cream.png',
    }, 
    {
        name: 'milkshake',
        img: 'assets/milkshake.png',
    }, 
    {
        name: 'pizza',
        img: 'assets/pizza.png',
    }, 
    {
        name: 'fries',
        img: 'assets/fries.png',
    }, 
    {
        name: 'cheeseburger',
        img: 'assets/cheeseburger.png',
    }, 
    {
        name: 'hotdog',
        img: 'assets/hotdog.png',
    }, 
    {
        name: 'ice-cream',
        img: 'assets/ice-cream.png',
    }, 
    {
        name: 'milkshake',
        img: 'assets/milkshake.png',
    }, 
    {
        name: 'pizza',
        img: 'assets/pizza.png',
    }, 
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.getElementById('grid');
const scoreDisplay = document.getElementById('result');

let cardsChosen = [];
let cardsChosenIds =[];
let cardsWon = [];
let score = 0;

scoreDisplay.innerHTML = score;

function createBoard () {
    for(let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'assets/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        gridDisplay.append(card);
    }
}

function checkMatch() { 
    const cards = document.querySelectorAll('img');
    const fisrtCard = cards[cardsChosenIds[0]];
    const secondCard = cards[cardsChosenIds[1]];

    if (cardsChosenIds[0] == cardsChosenIds[1]) {
        fisrtCard.setAttribute('src', 'assets/blank.png');
        secondCard.setAttribute('src', 'assets/blank.png');
    } else {
        if(cardsChosen[0] === cardsChosen[1]) {
            score ++;
            scoreDisplay.textContent = score;
            fisrtCard.setAttribute('src', 'assets/white.png');
            secondCard.setAttribute('src', 'assets/white.png');
            fisrtCard.removeEventListener('click', flipCard);
            secondCard.removeEventListener('click', flipCard);
            cardsWon.push(...cardsChosen);

            console.log(cardsWon)
        } else {
            fisrtCard.setAttribute('src', 'assets/blank.png');
            secondCard.setAttribute('src', 'assets/blank.png');
        }
    }

    cardsChosen =[];
    cardsChosenIds = [];

    if (cardsWon.length >= cards.length) {
        alert('You win!!!');
    }
}

function flipCard () {
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length == 2) {
        setTimeout(checkMatch, 1000);
    
    }

}

createBoard();