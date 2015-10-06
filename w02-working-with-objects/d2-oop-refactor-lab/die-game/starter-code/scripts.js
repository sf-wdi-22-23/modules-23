//Original code -- refactor me!
$(document).ready(function() {
    $('#roller button.add').on('click', function() {
        console.log('add button was clicked');
        $('.dice-container').append('<div class="die">0</div>');
    });

    $('#roller button.roll').on('click', function() {
        $('.die').each(function(k, die) {
            var value = Math.floor((Math.random() * 6) + 1);
            $(die).text(value);
        });
    });
});
