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

data = {
  people: [
    {
      name: "Ben",
      favoriteNumber: Math.floor(Math.random() * (100 - 1) + 1)
    }, {
      name: "Brianna",
      favoriteNumber: Math.floor(Math.random() * (100 - 1) + 1)
    }, {
      name: "Alex",
      favoriteNumber: Math.floor(Math.random() * (100 - 1) + 1)
    }
  ]
}


console.log(where(data.people, {name: "Alex"}));