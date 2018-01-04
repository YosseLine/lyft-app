$(document).ready(function() {
  $btnResCode = $('#btn-res-code');
  $inputVerifyPhone = $('#input-verify-phone');
  $verifyPhoNext = $('#verify-pho-next');
  validateCode = false;

  // Función RESEND CODE
  $btnResCode.on('click', function() {
    var lab = 'LAB-';
    var labCode = parseInt(Math.random() * 1000);
    localStorage.labCode = labCode;
    alert('Tu código es : ' + lab + labCode);
  });

  // Función para saber si el input del código no está vacío y si el código cincide con el código mandado.
  $inputVerifyPhone.on('keyup', function() {
    if ($(this).val().length >= 3 && ($(this).val()) === localStorage.labCode) {
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
