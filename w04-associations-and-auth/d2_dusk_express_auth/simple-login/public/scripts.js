$(document).ready(function() {
  $('#signup-form').submit(function(e) {
    e.preventDefault();

    var user = $(this).serialize();
    $.post('/users', user, function(data){
      console.log(data);
    })  
  })

  $('#login-form').submit(function(e) {
    e.preventDefault();

    var user = $(this).serialize();
    $.post('/login', user, function(data) {
      console.log(data);
    })
  })
});
