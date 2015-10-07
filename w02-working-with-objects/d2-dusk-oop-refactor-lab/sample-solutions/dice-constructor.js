// sample refactor with a Die object type and a DieHandler object type
$(document).ready(function() {
    var game = new DieHandler();
    game.addListeners();
});

function Die() {
    this.currentSide = 1;
    this.roll = function() {
        this.currentSide = Math.floor((Math.random() * 6) + 1);
    };
}

function DieHandler() {
    this.dice = [];
    // add event listeners (to interact with DOM)
    this.addListeners = function() {
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
    this.addDie = function() {
        console.log('this in addDie: ', this);
        // add die to dice array
        this.dice.push(new Die());
        // add die to DOM, with current side matching Die's constructor
        // (note: could be more encapsulated... next time we refactor!)
        $('.dice-container').append('<div class="die"> 1 </div>');
    };
    this.rollDice = function() {
        for (var i = 0; i < this.dice.length; i++) {
            this.dice[i].roll();
        }

        for (var i = 0; i < this.dice.length; i++) {
            $('.die').eq(i).html(this.dice[i].currentSide);
        }
    };
}




