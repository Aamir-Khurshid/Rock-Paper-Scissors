let hands = ['Rock', 'Paper', 'Scissor'];
let images = ['fist','hand-paper','scissors']

let playerOne = document.getElementById('playerOne');
let playerTwo = document.getElementById('playerTwo');
let playerOneSign = document.getElementById('playerOneSign');
let playerTwoSign = document.getElementById('playerTwoSign');

let result = document.getElementById('result');


function getRandom() {
    let randomIndex = Math.floor(Math.random() * 3);
    return(hands[randomIndex])
}

let one = getRandom()
playerOne.textContent = one;

let two = getRandom()
playerTwo.textContent = two;


if (one == hands[0]) {
    playerOneSign.innerHTML=`<img src='images/fist.png'>`
    if (two === hands[0]) {
        result.textContent = 'Draw'
        playerTwoSign.innerHTML=`<img src='images/fist.png'>`
         
    }
    else if (two === hands[1]) {
        result.textContent = 'Player 2 Won'
        playerTwoSign.innerHTML=`<img src='images/hand-paper.png'>`
    }
    else {
        result.textContent = 'Player 1 Won'
        playerTwoSign.innerHTML=`<img src='images/scissors.png'>`
    }
}
else if (one == hands[1]) {
    playerOneSign.innerHTML=`<img src='images/hand-paper.png'>`
    if (two === hands[0]) {
        result.textContent = 'Player 1 Won'
        playerTwoSign.innerHTML=`<img src='images/fist.png'>`
    }
    else if (two === hands[1]) {
        result.textContent = 'Draw'
        playerTwoSign.innerHTML=`<img src='images/hand-paper.png'>`
    }
    else {
        result.textContent = 'Player 2 Won'
        playerTwoSign.innerHTML=`<img src='images/scissors.png'>`
    }
}
else {
    playerOneSign.innerHTML=`<img src='images/scissors.png'>`
    if (two === hands[0]) {
        result.textContent = 'Player 2 Won'
        playerTwoSign.innerHTML=`<img src='images/fist.png'>`
    }
    else if (two === hands[1]) {
        result.textContent = 'Player 1 Won'
        playerTwoSign.innerHTML=`<img src='images/hand-paper.png'>`
    }
    else {
        result.textContent = 'Draw'
        playerTwoSign.innerHTML=`<img src='images/scissors.png'>`
    }
}

