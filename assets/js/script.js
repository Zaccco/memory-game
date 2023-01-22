document.addEventListener("DOMContentLoaded", function() {
    
    cards = document.getElementsByClassName("card");

    for (let card of cards) {
        card.addEventListener("click", revealCard);
    }
})

// Global variables
let alreadyFlipped = false;
let first;
let second;

/**
 * Reveals the card when clicked and also checks if it's the first or the second card revealed
 */
function revealCard() {
    // If the same card is clicked twice it will just return instead of continuing the function
    if (this === first) {
        return;
    }

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

/**
 * Checks if the two cards "first" and "second" are a match
 */
function checkIfMatch() {
    if (first.dataset.name === second.dataset.name) {
        // if it matches
        removeMatchingPair();
        first = null;
        second = null;
    } else {
        // not a match
        // Sets a 1 second delay after the second card is incorrect and turns them back over
        setTimeout(function() {
            first.classList.remove("reveal");
            second.classList.remove("reveal");
        }, 1000);
    }
}

/**
 * An idea that when two cards are matched they get removed from the board, possible future implementation
 */
function removeMatchingPair() {
    
}

/**
 * Check if all the pairs have been found
 */
function checkIfGameWon() {

}

(function randomizeOrder() {
    cards.forEach(card => {
        let randomPosition = Math.floor(Math.random() * 8);
        card.style.order = randomPosition;
    });
})();

/**
 * Restart the game by display a visible button that let's the user reload the page and play again
 */
function restartGame() {

}

