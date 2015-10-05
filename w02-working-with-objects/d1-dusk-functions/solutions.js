// Looping Exercise 1 Solution:
for (var key in myFirstJSON){
    for (var i = 0; i < myFirstJSON['language basics'][0]['Spanish']['letters'].length; i++){
        console.log(myFirstJSON['language basics'][0]['Spanish']['letters'][i]);
    }
}

// Looping Exercise 2 Solution:
function languageBasics(language, type){
    var tempArrayRoot = myFirstJSON['language basics'];
    if(language === 'Spanish'){
      for (var i = 0; i < tempArrayRoot[0][language][type].length; i++){
        if (type === 'letters'){
          console.log(tempArrayRoot[0][language][type][i]);
        } else if (type === 'numbers') {
            console.log(tempArrayRoot[0][language][type][i]);
        }
      }
    } else if (language === 'Japanese'){
        for (var j = 0; j < tempArrayRoot[1][language][type].length; j++){
          if (type === 'letters') {
            console.log(tempArrayRoot[1][language][type][j]);
          } else if (type === 'numbers'){
            console.log(tempArrayRoot[1][language][type][j]);
          }
        }
    } else {
        console.log("Please enter either 'Spanish' or 'Japanese' and either 'letters' or 'numbers'");
    }
}

// Stretch:  Refactor the function above. There are many ways. Consider using forEach, map, reduce or similar jQuery methods



// Closure Exercise 1:
var closeCall = function(firstNum){
    var secondNum = 6;
    var addStuff = function(secondNum){
        return firstNum + secondNum;
    };
    return addStuff(secondNum);
};

// Closure Exercise 2:
var Animal = function(){
    return {
        'name': 'beaver',
        'age': 2,
        'gender': 'male',
        'catchPhrase': 'Dam!',
        speak: function(words){
            console.log("hi there, " + words); 
        },
        doSomething: function(placeholder){
            console.log(placeholder + " I just cut down a tree!");
        }
    };
};

var chucky = new Animal();

chucky.speak('I am a beaver!');


// Closure Exercise 3:

var Car = {};

Car.brand = "Toyota";
Car.model = "Corolla";
Car.year = 1984;
Car.horsePower = 250;
Car.hitPoints = 10;
Car.shields = 5;
Car.maxSpeed = 50;
Car.weapons = [{"machine gun": 80}, {"oil slick": 30}, {"wheel swords": 55}];
Car.attack = function(){
    var weapons = this.weapons;
    for(var i = 0; i < weapons.length; i++){
        for (var key in weapons[i]){
            console.log( key + ' attack! Damage done: ' + weapons[i][key] );
        }
    }
}



