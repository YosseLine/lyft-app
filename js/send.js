$(document).ready(function() {
  $('#name,#email').keyup(function() {
    var name = $('#name').val();
    var email = $('#email').val();
    var checkbox = $('#checkbox');
    for (var i = 0; i < email.length; i++) {
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
