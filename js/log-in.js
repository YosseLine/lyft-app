$(document).ready(function() {
  var $nameLogIn = $('#name-login');
  var $emailLogIn = $('#email-login');

  var validateName = false;
  var validateEmail = false;

  // Funciones para activar y desactivar los botones
  function activeButton() {
    if (validateEmail && validateEmail) {
      $('#btn-login').attr('disabled', false);
    }
  }

  function desactiveButton() {
    $('#btn-login').attr('disabled', 'disabled');
  }

  $nameLogIn.on('input', function() {
    console.log($(this).val());
    if ($(this).val().length >= 5) {
      validateName = true;
      activeButton();
    } else {
      desactiveButton();
    }
  });

  $emailLogIn.on('input', function(event) {
    var REGEXEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    if (REGEXEMAIL.test($(this).val())) {
      validateEmail = true;
      activeButton();
    } else {
      desactiveButton();
    }
  });

  $('#btn-login').on('click', function(event) {
    event.preventDefault();
    localStorage.name = $nameLogIn.val();
    localStorage.email = $emailLogIn.val();
    window.location.href = '../views/hello.html';
  });
});
