$(function(){
    $('#azul').click(function(){
        $('p').css("color", "blue");
        $('p').css("background-color", 
        "orange");
        $('p').fadeOut('slow');
        $('p').delay(1000);
        $('p').fadeIn('slow');
    });

    $('#vermelho').click(function(){
        $('p').css({color: "red", 
            backgroundColor: 'darkgreen'});
        $('p').fadeOut(3000);
        $('p').fadeIn(3000);
        $('#mensagem')
        .text("Cor alterada com sucesso")
        .css('color', 'red')
        .css('border', '1px solid red')
        .delay(1000)
        .fadeOut('slow')
        .addClass('green');
        $('button').removeClass('red');
    });
});