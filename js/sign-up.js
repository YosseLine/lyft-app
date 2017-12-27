$(document).ready(function() {
  /* Creamos la función que corresponde al cumplimiento de los 10 dígitos en el input*/
  $('#input-phone').keyup(function() {
    var numberPhone = $(this).val();
    var addNumber = 0;
    var addNumberPhone = addNumber + numberPhone;
    for (var i = 0; i < addNumberPhone.length; i++) {
      if (addNumberPhone.length === 10) {
        $('#sign-up-next').removeAttr('disabled');
        $('#btn-gen-code').removeAttr('disabled');
      } else {
        $('#sign-up-next').attr('disabled');
        $('#btn-gen-code').attr('disabled');
      }
    }
  });

  /* Función Generate Code*/
  var codeLab;
  $('#btn-gen-code').click(function() {
    var str = '1234567890';
    for (var i = 0; i < 3; i++) {
      debugger;
      codeLab += str.charAt(Math.floor(Math.random() * str.length));
    };
    alert('Tu código es : LAB ' + codeLab);
  });

  // Función next
  $('#sign-up-next').click(function() {
    if ($('#sign-up-next').attr('disabled')) {
      console.log('Ingresa tus datos');
    } else {
      document.location.href = '../views/verify-phone.html';
      event.preventDefault();
    }
  });

  /* Funciones para VERIFY PHONE */

  // Función para generar un nuevo código
  var newCodeLab;
  $('#btn-res-code').click(function() {
    var str = '1234567890';
    for (var i = 0; i < 3; i++) {
      newCodeLab += str.charAt(Math.floor(Math.random() * str.length));
    };
    alert('Tu código es : LAB ' + newCodeLab);
    console.log(newCodeLab);
  });

  // Función para comparar si los códigos son iguales
  $('#input-verify-phone').keyup(function() {
    var validateCode = $(this).val();
    if (validateCode === codeLab || validateCode === newCodeLab) {
      $('#verify-pho-next').removeAttr('disabled');
    } else {
      $('#verify-pho-next').attr('disabled');
    }
  });

  // Función next
  $('#verify-pho-next').click(function() {
    if ($('#verify-pho-next').attr('disabled')) {
      console.log('Ingresa el código');
    } else {
      document.location.href = '../views/send.html';
    }
  });
});
