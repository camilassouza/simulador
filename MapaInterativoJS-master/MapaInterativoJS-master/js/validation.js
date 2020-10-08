$("#datepicker-input").change(function() {
    if($('#datepicker-input').val() == "") {
        $('.simulador-btn-nascimento').prop('disabled')
        }else{
           $('.simulador-btn-nascimento').removeAttr('disabled');
      };
 });

