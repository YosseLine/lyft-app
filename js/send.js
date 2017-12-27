$(document).ready(function() {
  $('#name,#email').keydown(function() {
    var name = $('#name').val();
    var email = $('#email').val();
    for (var i = 0; i < 1; i++) {
      if (name.length !== '' && email.length !== '') {
        $('#btn-send').removeAttr('disabled')
      } else {
        $('#btn-send').attr('disabled', 'disabled')
      };
    }
  });

  $('#btn-send').click(function() {
    if ($('#btn-send').attr('disabled')) {
      console.log('Ingresa tus datos');
    } else {
      document.location.href = '../views/welcome-to-lyft.html';
    }
  });
});
