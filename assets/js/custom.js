(function($) {
$(document).ready(function(){
    //hero slider
    $('.hero-slider').owlCarousel({
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        loop:true,
        margin:10,
        autoplay: false,
        responsiveClass:true,
        nav:true,
        dots:false,
        mouseDrag:true,
        touchDrag: true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:1,
                nav:true
            },
            1000:{
                items:1,
                nav:true,
                loop:true
            }
        }
    });
    //slider animation
    $('.hero-slider').on('translate.owl.carousel',function () {
        $('.hero-content h1, .hero-content button').removeClass('animated fadeInUp').css('opacity','0');
    });
    $('.hero-slider').on('translated.owl.carousel',function () {
        $('.hero-content h1, .hero-content button').addClass('animated fadeInUp').css('opacity','0');
    });




    //WoW js activation
    //new WOW().init();

    //responsive slick nav menu activation
    /*$('#nav').slicknav({
        prependTo:'.responsive-mobile-menu',
    });*/

    // magnific popup activation
   /* $('.popup-img').magnificPopup({
        gallery: {
            enabled: true
        },
        type: 'image'
    });*/

    //back to top show when scroll
    /*$(".back_to_top i.fa").css("display", "none");
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 300) {
            $(".back_to_top i.fa").css("display", "none");
        } else {
            $(".back_to_top i.fa").css("display", "block");
        }
    });
    $(".back_to_top i.fa").on("click",function () {
        $("html").animate({
            scrollTop: 0
        }, 800);
    });*/

});
})( jQuery );