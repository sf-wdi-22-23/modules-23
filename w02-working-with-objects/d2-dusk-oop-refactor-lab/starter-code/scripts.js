//Original code -- refactor me!
$(document).ready(function() {

    // What does the next line do?
        $('#roller button.add').on('click', function() {
        console.log('add button was clicked');
        // What does the next line do?
        $('.dice-container').append('<div class="die">1</div>');
    });

    // What does the next line do?
    $('#roller button.roll').on('click', function() {
        // using jQuery's each method to loop through the die elements
        $('.die').each(function(index, die) {
            // What does the next line do?
            var value = Math.floor((Math.random() * 6) + 1);
            $(die).text(value);
        });
    });
});
