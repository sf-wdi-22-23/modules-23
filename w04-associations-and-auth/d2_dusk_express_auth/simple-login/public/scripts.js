console.log('sanity check: client-side js loaded');

$(document).ready(function() {
  // $('#signup-form').on('submit', function(e) {
  //   e.preventDefault();

  //   // select the form and serialize its data
  //   var signupData = $("#signup-form").serialize();
  //   console.log(signupData);
  //   // send POST request to /users with the form data
  //   $.post('/users', signupData, function(response) {
  //     console.log(response);
  //   });
  // });

  // $('#login-form').on('submit', function(e) {
  //   e.preventDefault();

  //   // select the form and serialize its data
  //   // note: this is the form because the event handler
  //   //   was triggered from the form
  //   var loginData = $(this).serialize();
  //   // send POST request to /login with the form data
  //   $.post('/login', loginData, function(response) {
  //     console.log(response);
  //   });
  // });

});
