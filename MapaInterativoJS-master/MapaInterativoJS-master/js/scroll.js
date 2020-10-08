$(window).on("load", function(){
    $('#modal-container').removeAttr('class').addClass('four');
    $('body').addClass('modal-active');
});  

$('.simulador-btn-avancar').click(function () {
    $('.modal-content-one').addClass('oculta-section');
    $('.modal-content-two').removeClass('oculta-section');
});

function sectionTwo(){
    var produtosIntTitulo = document.getElementById("regions_div");
    var orcamentoAssuntoForm = document.getElementById("simulador-campo-estado");
    orcamentoAssuntoForm.value = produtosIntTitulo.innerText;
    if($('#simulador-campo-estado').val() == "") {
    $('.simualdor-btn-mapa').prop('disabled')
    }else{
        $('.simualdor-btn-mapa').removeAttr('disabled');
        $('alerta-estado').css('display', 'block')
    };
}
function sectionTree(){
    $('.modal-content-two').css('display' , 'none');
    $('.modal-content-tree').fadeIn().removeClass('oculta-section');
}  

function sectionFour(){
    $('body').css('background-position', '-670px -679px, 0 100px');
    $('.number-four').css({'left': '1093px'});
    $('.number-four').css({'top': '40px'});
   
    $('.number-one').css('display', 'none');
    $('.number-two').css('display', 'none');
    $('.number-tree').css('display', 'none');
    $('.modal-content-tree').css('display' , 'none');
    $('.modal-content-four').removeClass('oculta-section');
}

function sectionFive(){
    $('body').css('background-position', '-270px -679px, 0px 100px');
    $('.modal-content-four').css('display' , 'none');
    $('.modal-content-five').removeClass('oculta-section');
}

function sectionSix(){
    $('.modal-content-five').css('display' , 'none');
    $('.modal-content-six').removeClass('oculta-section');
}

function sectionSeven(){
    $('.modal-content-six').css('display' , 'none');
    $('.modal-content-seven').removeClass('oculta-section');
}

function sectionEight(){
    $('.modal-content-seven').css('display' , 'none');
    $('.modal-content-eight').removeClass('oculta-section');

}