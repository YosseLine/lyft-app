$(document).ready(function() {
/* Creamos la función que corresponde al cumplimiento de los 10 dígitos en el input*/
  $('#input-phone').keyup(function() {
    var numberPhone = $(this).val();
    for (var i = 0; i < numberPhone.length; i++) {
      if (numberPhone.length === 9) {
        $('#sign-up-next').removeAttr('disabled');
        $('#btn-gen-code').removeAttr('disabled');
      } else {
        $('#sign-up-next').attr('disabled', 'disabled');
        $('#btn-gen-code').attr('disabled', 'disabled');
      }
    }
  });
  /* Función Generate Code*/
  $('#btn-gen-code').click(function() {
    var codeLab = '';
    var str = '1234567890';
    for (var i = 0; i < 3; i++) {
      codeLab += str.charAt(Math.floor(Math.random() * str.length));
    };
    alert('Tu código es : LAB ' + codeLab);
  });
});
