function findById(arr, id){
  for (var i=0; i<arr.length; i++){
    if(arr[i].id == id){
      return arr[i]
    }
  }
}

function findAndDeleteById(arr, id){
  var output;
  for (var i=0; i<arr.length; i++){
    if(arr[i].id == id){
      return arr.splice(i, 1)[0];
    }
  }
}

function where(arr, properties){
  var output;
  var obj;
  for (var i=0; i<arr.length; i++){
    obj = arr[i];
    for (var key in obj){
      if (obj[key] === properties[key]){
          output = obj;
      }
    }
  }
  return output;
}

var data = [
  {id: 0, name: "Dr. Emmett Brown", knownFrom: "Back to the Future" , hairColor: "grey"},
  {id: 1, name: "Marty McFly", knownFrom: "Back to the Future", hairColor: "brown"},
  {id: 2, name: "Biff Tannen", knownFrom: "Back to the Future" , hairColor: "blonde"},
  {id: 3, name: "Jennifer Parker", knownFrom: "Back to the Future" , hairColor: "blonde"},
  {id: 4, name: "Lorraine Baines McFly", knownFrom: "Back to the Future" , hairColor: "brown"},
  {id: 5, name: "George McFly", knownFrom: "Back to the Future" , hairColor: "brown"},
  {id: 6, name: "Morty Smith", knownFrom: "Rick and Morty" , hairColor: "brown"},
  {id: 7, name: "Summer Smith", knownFrom: "Rick and Morty" , hairColor: "red" },
  {id: 6, name: "Beth Smith", knownFrom: "Rick and Morty" , hairColor: "blonde"},
  {id: 7, name: "Jerry Smith", knownFrom: "Rick and Morty" , hairColor: "brown"},
  {id: 8, name: "Rich Sanchez", knownFrom: "Rick and Morty" , hairColor: "grey"},
  {id: 9, name: "Mr. Meeseeks", knownFrom: "Rick and Morty" , hairColor: "NA"},
  {id: 10, name: "Birdperson", knownFrom: "Rick and Morty" , hairColor: "NA"},
]

console.log(where(data, {name: "Morty Smith"}));
console.log(findById(data, 8));

console.log(findAndDeleteById(data, 7));


