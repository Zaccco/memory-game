document.addEventListener("DOMContentLoaded", function() {
    
    const cards = document.getElementsByClassName("card");

    for (let card of cards) {
        card.addEventListener("click", revealCard);
    }

    const animals = [
        'dog1',
        'dog2',
        'cat1',
        'cat2',
        'bunny1',
        'bunny2',
        'tiger1',
        'tiger2'
    ]
    
    
    for (let animal in animals) {
        document.getElementById(animal).style.order = Math.floor(Math.random() * 8);
    }
});

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

    // Adds a "reveal" class to whatever card is being clicked
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
            }, 200);
        }
    } else {
        // not a match
        // Sets a 1 second delay after the second card is incorrect and turns them back over
        setTimeout(function() {
            first.classList.remove("reveal");
            second.classList.remove("reveal");
        }, 600);
    }
}

