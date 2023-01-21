document.addEventListener("DOMContentLoaded", function() {
    
    cards = document.getElementsByClassName("card");

    for (let card of cards) {
        card.addEventListener("click", revealCard);
    }
})

let alreadyFlipped = false;
let first;
let second;

function revealCard() {
    this.classList.add('reveal');

    if (!alreadyFlipped) {
        // This means it's the first card flipped
        alreadyFlipped = true;
        first = this;
    } else {
        // This means it's the second card
        alreadyFlipped = false;
        second = this;

        checkIfMatch();
    }
}

function checkIfMatch() {
    if (first.dataset.name === second.dataset.name) {
        // if it matches
        removeMatchingPair();
    } else {
        // not a match
        first.classList.remove("reveal");
        second.classList.remove("reveal");
    }
}

function removeMatchingPair() {
    
}

function randomizeOrder() {

}

function restartGame() {
    
}

