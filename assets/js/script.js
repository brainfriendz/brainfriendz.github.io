$(document).ready(function(){
    //Scroll on button press
    $('.js--scroll-product-description').click(function(){
        $('html, body').animate({scrollTop: $('.js--product-description').offset().top -100},1000);
    });

    $('.js--scroll-sign-up').click(function(){
        $('html, body').animate({scrollTop: $('.js--sign-up').offset().top },1000);
    });

    //Animations on scroll

});