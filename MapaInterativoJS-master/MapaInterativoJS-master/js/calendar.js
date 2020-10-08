$( function() {
    $( "#datepicker" ).datepicker({
        changeMonth: true,
        changeYear: true,
        onSelect: function(dateText, inst){ 
            $('#datepicker-input').val(dateText);
            if($('#datepicker-input').val() == "") {
                $('.simulador-btn-nascimento').prop('disabled')
                }else{
                   $('.simulador-btn-nascimento').removeAttr('disabled');
              };
         }
    });
  });
 
 $.datepicker.regional['pt-BR'] = {
                closeText: 'Fechar',
                prevText: '&#x3c;Anterior',
                nextText: 'Pr&oacute;ximo&#x3e;',
                currentText: 'Hoje',
                monthNames: ['Janeiro','Fevereiro','Mar&ccedil;o','Abril','Maio','Junho',
                'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
                monthNamesShort:  ['Janeiro','Fevereiro','Mar&ccedil;o','Abril','Maio','Junho',
                'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
                dayNames: ['Domingo','Segunda-feira','Ter&ccedil;a-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sabado'],
                dayNamesShort: ['D','Seg','Ter','Qua','Qui','Sex','Sab'],
                dayNamesMin: ['D','S','T','Q','Q','S','S'],
                weekHeader: 'Sm',
                dateFormat: 'dd/mm/yy',
                firstDay: 0,
                isRTL: false,
                showMonthAfterYear: false,
                yearSuffix: ''};
        $.datepicker.setDefaults($.datepicker.regional['pt-BR']);
