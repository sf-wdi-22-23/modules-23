console.log("Sanity Check: JS is working!");

$(document).ready(function(){
	console.log("The DOM is ready!");

	// squash the bugs isn't showing up 
	function addSubHeader() {
		var subHeader = $('<small>&nbsp&nbspsquash the bugs!</small>')
		$('h1').append(subHeader);
	}

	addSubHeader;


	// the form redirects when it should just update the count of "E"s
	$('form').on('submit', function(e){
		console.log('form submitted');
		var input = $('input').eq(0).val();

		// should count occurrences of the letter "E"
		// and update the display. instead always shows 0
		for (var i = 0; i < 10; i++){
			var count = 0;
			if (input[i] === "e"){
				count = count +1;
			}
			$('#num-es').text(count);
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

    addLinks();
};
