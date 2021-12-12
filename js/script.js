$(function(){
    $('.mobile').click(function(){
        var listaMenu = $('.mobile nav');
        listaMenu.slideToggle();
    });

    $('header a').add('.main > a').click(function(e){
        e.preventDefault();
        var id = $(this).attr('href'),
        targetOffset = $(id).offset().top
        $('html, body').animate({
            scrollTop: targetOffset
        }, 500);
    });
});