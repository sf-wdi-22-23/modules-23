// //Original code
// $(document).ready(function() {
//     $('#roller button.add').on('click', function() {
//         console.log("WAT")
//         $('.dice').append('<div class="die">0</div>');
//     });

//     $('#roller button.roll').on('click', function() {
//         $('.die').each(function(k, die) {
//             var value = Math.floor((Math.random() * 6) + 1);
//             $(die).text(value);
//         });
//     });
// });

$(document).ready(function() {
    var game = new DieHandler();
    game.addListeners();
});

function Die() {
    this.currentSide = 0;
}

Die.prototype.roll = function() {
    this.currentSide = Math.floor((Math.random() * 6) + 1);
};

function DieHandler() {
    this.dice = [];
}

// add event listeners (to interact with DOM)
DieHandler.prototype.addListeners = function() {
    console.log('this in addListeners: ', this);
    // The bind method lets us say what a function should use
    // for its context, what its 'this' will be. 
    // We'll bind this -- the instance of DieHandler -- to the rollDice 
    // and addDie methods so they remember to affect the dice handler
    // instead of the button that was clicked.
    $('#roller button.roll').on('click', this.rollDice.bind(this));
    $('#roller button.add').on('click', this.addDie.bind(this));

    // THESE DO NOT WORK because it assumes we want to call 
    // rollDice with the button that was clicked
    // $('#roller button.roll').on('click', this.rollDice);
    // $('#roller button.add').on('click', this.addDie);
};

DieHandler.prototype.addDie = function() {
    console.log('this in addDie: ', this);
    // add die to dice array
    this.dice.push(new Die());
    // add die to DOM
    $('.dice-container').append('<div class="die"> 0 </div>');
};

DieHandler.prototype.rollDice = function() {
    for (var i = 0; i < this.dice.length; i++) {
        this.dice[i].roll();
    }

    for (var i = 0; i < this.dice.length; i++) {
        $('.die')[i].innerHTML = this.dice[i].currentSide;
    }
}
