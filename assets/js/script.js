document.addEventListener("DOMContentLoaded", function() {
    
    const cards = document.getElementsByClassName("card");

    for (let card of cards) {
        card.addEventListener("click", revealCard);
    }

    shuffle();
})

// Global variables
let alreadyFlipped = false;
let first;
let second;
let totalMatches = 0;

/**
 * Reveals the card when clicked and also checks if it's the first or the second card revealed
 */
function revealCard() {
    // If the same card is clicked twice it will just return instead of continuing the function
    if (this === first) return;

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
        first = null;
        second = null;
        ++totalMatches;

        // Check if the game is won
        if(totalMatches === 4) {
            setTimeout(function() {
                alert('You won the game, Congratulations!');
            }, 200);
            setTimeout(function() {
                window.location.reload();
            }, 3000);
        }
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
 * Shuffles the cards into a random position
 */
function shuffle() {
    document.getElementById("dog1").style.order = Math.floor(Math.random() * 8);
    document.getElementById("dog2").style.order = Math.floor(Math.random() * 8);
    document.getElementById("cat1").style.order = Math.floor(Math.random() * 8);
    document.getElementById("cat2").style.order = Math.floor(Math.random() * 8);
    document.getElementById("bunny1").style.order = Math.floor(Math.random() * 8);
    document.getElementById("bunny2").style.order = Math.floor(Math.random() * 8);
    document.getElementById("tiger1").style.order = Math.floor(Math.random() * 8);
    document.getElementById("tiger2").style.order = Math.floor(Math.random() * 8);
}

