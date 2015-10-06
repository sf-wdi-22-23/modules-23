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

DieHandler.prototype.addListeners = function() {
    $('#roller button.roll').on('click', this.rollDice.bind(this));
    $('#roller button.add').on('click', this.addDie.bind(this));
};

DieHandler.prototype.addDie = function() {
    // add die to dice array
    this.dice.push(new Die());
    // add die to DOM
    $('.dice').append('<div class="die"> 0 </div>');
};

DieHandler.prototype.rollDice = function() {
    for (var i = 0; i < this.dice.length; i++) {
        this.dice[i].roll();
    }

    for (var i = 0; i < this.dice.length; i++) {
        $('.die')[i].innerHTML = this.dice[i].currentSide;
    }
}

// // // Solution
// // $(document).ready(function() {
// //   new DieController();
// // });
// //
// // // Controller
// // // => Listens for clicks
// // // => Tell View to render
// // // => Tell Model to roll die
// // // => Tell Model to add die
// // function DieController() {
// //   this.model = new DieModel();
// //   // this.model refers to object being created & can use methods of DieModel
// //   this.view = new DieView();
// //   // this.view refers to the object being created & can use methods of DieView
// //   this.listenAddDie();
// //   this.listenRollDice();
// // }
// //
// // DieController.prototype.addDie = function() {
// //   this.model.addDie();
// //   this.view.renderDie();
// // };
// //
// // DieController.prototype.rollDice = function() {
// //   this.model.rollDice();
// //   this.view.updateDice(this.model.diceArray);
// // };
// //
// // DieController.prototype.listenAddDie = function() {
// //   $('#roller button.add').on('click', this.addDie.bind(this));
// // };
// //
// // DieController.prototype.listenRollDice = function() {
// //   $('#roller button.roll').on('click', this.rollDice.bind(this));
// // };
// //
// //
// // // Model ////////////////////////////
// // // => store current value of each die
// // // => store collection of dice
// // function DieModel() {
// //   this.diceArray = [];
// // }
// //
// // DieModel.prototype.addDie = function() {
// //   this.diceArray.push(new Die());
// // };
// //
// // DieModel.prototype.rollDice = function() {
// //   for (var i = 0; i < this.diceArray.length; i++) {
// //     console.log("in roll dice loop");
// //     this.diceArray[i].roll();
// //   }
// // };
// // // each Die object stores value of its current side
// // function Die() {
// //   this.currentSide = 0;
// // }
// //
// // Die.prototype.roll = function() {
// //   this.currentSide = Math.floor((Math.random()*6)+1);
// // };
// //
// // // View /////////////////////////////////////
// // function DieView() {
// // }
// // // => Render Board (based on info controller provides from model)
// // DieView.prototype.renderDie = function() {
// //   $('.dice').append('<div class="die"> 0 </div>');
// // };
// //
// // DieView.prototype.updateDice = function(data) {
// //   for (var i = 0; i < data.length; i++) {
// //   console.log('in updateDice loop');
// //      $('.die')[i].innerHTML = data[i].currentSide;
// //      console.log(data[i].currentSide);
// //   }
// // };