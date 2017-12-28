$(document).ready(function() {
  $inputPhone = $('#input-phone');
  $btnGenCode = $('#btn-gen-code');
  $signUpNext = $('#sign-up-next');
  $btnResCode = $('#btn-res-code');
  $inputVerifyPhone = $('#input-verify-phone');
  $verifyPhoNext = $('#verify-pho-next');
  var validatNumberPhone = false;
  var validateCode = false;
  /* Creamos la función que corresponde al cumplimiento de los 10 dígitos en el input*/
  $inputPhone.on('keyup', function() {
    var numberPhone = $(this).val();
    var addNumber = 0;
    var addNumberPhone = addNumber + numberPhone;
    for (var i = 0; i < addNumberPhone.length; i++) {
      if (addNumberPhone.length === 10) {
        $('#sign-up-next').attr('disabled', false);
        $('#btn-gen-code').attr('disabled', false);
        validatNumberPhone = true;
      } else {
        $('#sign-up-next').attr('disabled', 'disabled');
        $('#btn-gen-code').attr('disabled', 'disabled');
      }
    }
  });

  /* Función Generate Code*/
  $btnGenCode.on('click', function() {
    debugger;
    var code = '';
    var str = '1234567890';
    for (var i = 0; i < 3; i++) {
      code += str.charAt(Math.floor(Math.random() * str.length));
    };
    alert('Tu código es : LAB ' + code);
  });

  // Función next
  $signUpNext.on('click', function() {
    if ($('#sign-up-next').attr('disabled')) {
      console.log('Ingresa tus datos');
    } else {
      document.location.href = '../views/verify-phone.html';
      event.preventDefault();
    }
  });

  /* Funciones para VERIFY PHONE */

  // Función para generar un nuevo código
  $btnResCode.on('click', function() {
    var newCodeLab = '';
    var str = '1234567890';
    for (var i = 0; i < 3; i++) {
      newCodeLab += str.charAt(Math.floor(Math.random() * str.length));
    };
    alert('Tu código es : LAB ' + newCodeLab);
  });

  // Función para saber si el input del código no está vacío
  $inputVerifyPhone.on('keyup', function() {
    if ($(this).val().length > 2) {
      $('#verify-pho-next').removeAttr('disabled', false);
      validateCode = true;
    } else {
      $('#verify-pho-next').attr('disabled', 'disabled');
    }
  });

  // Función next
  $verifyPhoNext.on('click', function() {
    if ($verifyPhoNext.attr('disabled')) {
      console.log('Ingresa el código');
    } else {
      document.location.href = '../views/send.html';
    }
  });
});
