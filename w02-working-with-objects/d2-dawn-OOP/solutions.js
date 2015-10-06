var data = {
    school: "General Assembly",
    city: "San Francisco",
    course: "Web Development Immersive",
    course_id: "WDI22",
    classrootm: "1",
    floor: 5,
    students: [{
        id: 0,
        last_name: "Aramayo",
        first_name: "Angelo",
        github_username: "angelo2dot0"
    }, {
        id: 1,
        last_name: "Bia",
        first_name: "Racha",
        github_username: "racha_bella"
    }, {
        id: 2,
        last_name: "Gabot",
        first_name: "Brian",
        github_username: "bgabot89"
    }],
    instructors: [{
    	id: 0,
    	last_name: "White",
        first_name: "Alex",
    }, {
        id: 1,
    	last_name: "Veenstra",
        first_name: "Brianna",
	}, {
        id: 2,
    	last_name: "Hulan",
        first_name: "Ben",
    }]
}

console.log(data.instructors[0].first_name) //=> Alex

	
	
 	

// He/ She Loves Me

function Flower(petals){
	this.petals = petals;
	this.countDown = function(pronoun){
		var lovesMe    = pronoun + " loves me!"
		var lovesMeNot = pronoun + " loves me not!"
		var n;
		for ( n=0; n <= this.petals; n++ ){
			if (n === this.petals){
				lovesMe = lovesMe.toUpperCase() + "!!!!";
				lovesMeNot = lovesMeNot.toUpperCase() + "!!!!";
			}
			var oddOrEven = n % 2
			console.log(oddOrEven)
			switch(oddOrEven){
				case 0:
					console.log(lovesMe);
					break;
				case 1:
					console.log(lovesMeNot);
			}
		}
	}
}

var bud = new Flower(12);
bud.countDown('She');

// ---------------------------------
// More Advanced Prototypal Solution
// ---------------------------------


// function Flower(petals){
// 	this.petals = petals;
// };

// Flower.prototype.countDown = function(pronoun){
// 	var lovesMe    = pronoun + " loves me!"
// 	var lovesMeNot = pronoun + " loves me not!"
// 	var n;
// 	for ( n=0; n <= this.petals; n++ ){
// 		if (n === this.petals){
// 			lovesMe = lovesMe.toUpperCase() + "!!!!";
// 			lovesMeNot = lovesMeNot.toUpperCase() + "!!!!";
// 		}
// 		var oddOrEven = n % 2
// 		console.log(oddOrEven)
// 		switch(oddOrEven){
// 			case 0:
// 				console.log(lovesMe);
// 				break;
// 			case 1:
// 				console.log(lovesMeNot);
// 		}
// 	}
// }

// var bud = new Flower(8);
// bud.countDown('She');
