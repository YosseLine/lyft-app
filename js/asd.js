// Función para comparar si los códigos son iguales
$('#input-verify-phone').keyup(function() {
  var inputVerifyPhone = $(this).val();
  for (var i = 0; i <= inputVerifyPhone.length; i++) {
    console.log(inputVerifyPhone);
    if (inputVerifyPhone === codeLab || inputVerifyPhone === newCodeLab) {
      $('#verify-pho-next').removeAttr('disabled');
    } else {
      $('#verify-pho-next').attr('disabled', 'disabled');
    }
  }
  console.log(inputVerifyPhone);
});

// Función next

$('#verify-pho-next').click(function() {
  if ($('#verify-pho-next').attr('disabled')) {
    console.log('Ingresa el código');
  } else {
    document.location.href = '../views/send.html';
  }
});
