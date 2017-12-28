$(document).ready(function() {
  var $name = $('#name');
  var $email = $('#email');
  var $checked = $('input[type="checkbox"]');

  var validateName = false;
  var validateEmail = false;
  var validateChecked = false;
  // Funciones para activar y desactivar los botones
  function activeButton() {
    if (validateName && validateEmail && validateChecked) {
      $('#btn-send').attr('disabled', false);
    }
  }

  function desactiveButton() {
    $('#btn-send').attr('disabled', 'disabled');
  }

  $name.on('input', function() {
    console.log($(this).val());
    if ($(this).val().length >= 5) {
      validateName = true;
      activeButton();
    } else {
      desactiveButton();
    }
  });

  $email.on('input', function(event) {
    // console.log(event.target.value);
    var REGEXEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    if (REGEXEMAIL.test($(this).val())) {
      validateEmail = true;
      activeButton();
    } else {
      desactiveButton();
    }
  });

  $checked.on('click', function(event) {
    if (event.target.checked) {
      validateChecked = true;
      activeButton();
    } else {
      desactiveButton();
    }
  });

  $('#btn-send').on('click', function(event) {
    event.preventDefault();
    localStorage.name = $name.val();
    localStorage.email = $email.val();
    window.location.href = '../views/welcome-to-lyft.html';
  });
});
