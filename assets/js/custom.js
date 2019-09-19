(function ($) {
    $(document).ready(function () {
        //sticky menu when scroll
        $(window).on('scroll', function () {
            var scroll = $(window).scrollTop();
            var topBarHeight = document.querySelector('.topbar-section').offsetHeight;
            if (scroll > topBarHeight) {
                $(".main-navigation-section").addClass("sticky_top_section");
            } else {
                $(".main-navigation-section").removeClass("sticky_top_section");
            }
        });


        //back to top show when scroll
        $(".back_to_top i.fa").css("display", "none");
        $(window).on('scroll', function () {
            var scroll = $(window).scrollTop();
            if (scroll < 250) {
                $(".back_to_top i.fa").css("display", "none");
            } else {
                $(".back_to_top i.fa").css("display", "block");
            }
        });
        $(".back_to_top i.fa").on("click", function () {
            $("html").animate({
                scrollTop: 0
            }, 800);
        });


        //mobile menu custom js
        $(".mobile-menu-btn").on("click", function () {
            $('ul.mobile-menu').css({
                'right': '0',
                'opacity': '1',
                'transition': 'all .5s',
            });
        });
        $("#close").on("click", function () {
            $('ul.mobile-menu').css({
                'right': '-100%',
                'opacity': '0',
                'transition': 'all .8s',
            });
        });
        $("ul.mobile-menu li a").on("click", function () {
            $('ul.mobile-menu').css({
                'right': '-100%',
                'opacity': '0',
                'transition': 'all .8s',
            });
        });


        /*mobile gallery filter items custom dropdown*/
        $('ul#mobile_filter li').click(function () {
            $('#select-gallery-item').html($(this).attr('data-value'));
            $('ul#mobile_filter').css("display", "none");
        });

        $('.mobile-gallery-filter-menu p').click(function () {
            $('ul#mobile_filter').css("display", "block");
        });


        //hero slider
        $('.hero-slider').owlCarousel({
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            loop: true,
            margin: 10,
            autoplay: false,
            responsiveClass: true,
            nav: true,
            dots: false,
            mouseDrag: true,
            touchDrag: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 1,
                    nav: true
                },
                1000: {
                    items: 1,
                    nav: true,
                    loop: true
                }
            }
        });
        //slider animation
        $('.hero-slider').on('translate.owl.carousel', function () {
            $('.hero-content h1, .hero-content button').removeClass('animated fadeInUp').css('opacity', '0');
        });
        $('.hero-slider').on('translated.owl.carousel', function () {
            $('.hero-content h1, .hero-content button').addClass('animated fadeInUp').css('opacity', '0');
        });


        //team-members slider
        $('.team-members').owlCarousel({
            loop: true,
            margin: 30,
            autoplay: true,
            autoplayHoverPause: true,
            responsiveClass: true,
            nav: true,
            dots: false,
            mouseDrag: true,
            touchDrag: true,
            responsive: {
                0: {
                    items: 2,
                    nav: true
                },
                768: {
                    items: 3,
                    nav: true
                },
                1000: {
                    items: 5,
                    nav: true,
                    loop: true
                }
            }
        });
    });
})(jQuery);



/*hero video background*/
var video = document.getElementById("video-bg");
var btn = document.getElementById("control-btn");

function myFunction() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "<i class='fa fa-pause'></i>";
    } else {
        video.pause();
        btn.innerHTML = "<i class='fa fa-play'></i>";
    }
}


// magnific popup activation
$('.popup-icon').magnificPopup({
    delegate: 'a',
    gallery: {
        enabled: true
    },
    type: 'image'
});

/*gallery area*/
$('#gallery_filter').mixItUp();

