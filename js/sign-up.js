$(document).ready(function() {
  $inputPhone = $('#input-phone');
  $btnGenCode = $('#btn-gen-code');
  $signUpNext = $('#sign-up-next');
  $selectCountry = $('#country');
  var validatNumberPhone = false;
  var validateCode = false;

  /* Creamos la fucnión que agregará el prefijo telefónico al input, dependiendo del país que el usuario escoja*/
  $selectCountry.on('change', function() {
    var countryOption = $(this).val();
    console.log($(this).val());
    if (countryOption === 'peru') {
      $inputPhone.val('51');
    } else if (countryOption === 'colombia') {
      $inputPhone.val('57');
    } else if (countryOption === 'mexico') {
      $inputPhone.val('52');
    } else if (countryOption === 'eeuu') {
      $inputPhone.val('.1');
    }
  });

  /* Creamos la función que corresponde al cumplimiento de los 10 dígitos en el input*/
  $inputPhone.on('keyup', function() {
    var numberPhone = $(this).val();
    for (var i = 0; i < numberPhone.length; i++) {
      if (numberPhone.length === 11) {
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
    var lab = 'LAB-';
    var labCode = 'LAB-' + parseInt(Math.random() * 1000);
    localStorage.labCode = labCode;
    alert('Tu código es : ' + lab + labCode);
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
});
