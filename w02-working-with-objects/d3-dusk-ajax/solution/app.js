console.log("Sanity Check: JS is working!");

$(document).ready(function(){
	var url = "http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC"
	$.ajax({
		// this is a GET request. I'm keeping it explicate for you, 
		// but all ajax calls are GET by default, so this next line isn't 
		// necessary in this case. 
		type: 'GET',
		// the URL where we are getting our data
		url: url,
		success: function(data, status){
         	console.log(data);
	    },
	    error: function(data, status){
	        console.log("There was an error!");
	    };
	});

});