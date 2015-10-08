// note: fix - to get js included at all, need to link it in index.html:
//    <!-- APPLICATION SCRIPTS -->
//    <script src="scripts.js"></script>

console.log("Sanity Check: JS is working!");

$(document).ready(function(){
	console.log("The DOM is ready!");

	// the form redirects when it should just update the count of "E"s
	$('form').on('submit', function(e){
		console.log('form submitted');
		// fix - prevent default behavior
		e.preventDefault();

		var input = $('input').eq(0).val();

		// should count occurrences of the letter "E"
		// and update the display. instead always shows 0 

		// fix - move count=0 outside the loop so we don't reset it over and over!
		var count = 0;
		for (var i = 0; i < 10; i++){
			
			if (input[i] === "e"){
				count = count +1;
			}
			$('#num-es').text(count);
		}
	});

	// squash the bugs isn't showing up 
	function addSubHeader() {
		var subHeader = $('<small>&nbsp&nbspsquash the bugs!</small>')
		$('h1').append(subHeader);
	}

	// fix - actually invoke (call) this function
	addSubHeader();

	// all the links alert 5 :(
	function addLinks () {
		// fix - use .bind to save the scope 
	    var $link;
	    var $ul = $('ul');
	    for (var i=0; i<5; i++) {
	        $link = $('<a href="#"></a>');
	        $link.html('Link '+i);
	        $link.on('click', (function(index){
	        	console.log('this, ', this)
		        alert(index);
			}).bind(this, i));
	        $ul.append($link);
	    }
    }

    addLinks();
});
