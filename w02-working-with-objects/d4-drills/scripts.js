console.log("Sanity Check: JS is working!");

$(document).ready(function(){
	console.log("The DOM is ready!");

	// the form redirects when it should just console log
	$('form').on('submit', function(e){
		e.preventDefault();
		console.log('form submitted');

		var input = $('input').eq(0).val();
		// iterate over array, does something appear multiple times?
		// let's count occurrences of the letter "E"
		for (var i = 0; i < 10; i++){
			var count = 0;
			if (input[i] === "e"){
				count = count +1;
			}
		}
	});



	// all the links alert 5 :(
	function addLinks () {
	    var $link;
	    var $ul = $('ul');
	    for (var i=0; i<5; i++) {
	        $link = $('<a href="#"></a>');
	        $link.html('Link '+i);
	        $link.on('click', function () {
	            alert(i);
	        });
	        $ul.append($link);
	    }
    }

    // no links are getting added to the page :(
    addLinks();
});
