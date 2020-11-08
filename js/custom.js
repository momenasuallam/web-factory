// slim-scroll initialization 
$(".pkg-bottom-scroll").slimScroll({ height: "350px", color: "#71768c" }),
    0 != $(".scroll").length &&
    $(".scroll").slimScroll({
        height: "20px",
        size: "2px",
        color: "#71768c",
        alwaysVisible: !0,
        distance: "16px",
        railVisible: !0,
        railColor: " #71768c",
        railOpacity: 1,
        railBorderRadius: "0px",
        wheelStep: 10,
        disableFadeOut: !1,
});








$('.portfoilo-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        768:{
            items:1
        },
        991:{
            items:1
        }
    }
})
$('.packages_carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    
    rewind:false,
    dot:true,
    autoplay:false,
    autoplayTimeout:3500,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        1200:{
            items:3
        }
    }
  })
$('.testimonialSlider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        rewind:true,
        autoplay:true,
        autoplayHoverPause:true,
        arrows: true,
        prevArrow:"<button type='button' class='slick-prev'><i class='arrow'></i></button>",
        nextArrow:"<button type='button' class='slick-next'><i class='arrow'></i></button>",
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    })
if($( window ).width() <= 575){
    if($('.responsive-slider2').length != 0){
        $('.responsive-slider2').find('.display-none').remove();
        $('.responsive-slider2').addClass('owl-theme owl-carousel');
        $('.responsive-slider2').owlCarousel({
            loop:true,
            margin:0,
            nav:false,
            autoplay:true,
            rewind:true,
            autoplayTimeout:4000,
            autoplayHoverPause:true,
            responsiveClass:true,
            responsive:{
                0:{
                    items:2
                },
                360:{
                    items:2
                },
                575:{
                    items:3
                }
            }
        })
    }
}
if($( window ).width() <= 767){
    if($('.responsive-slider1').length != 0){
        $('.responsive-slider1').find('.display-none').remove();
        $('.responsive-slider1').addClass('owl-theme owl-carousel');
        $('.responsive-slider1').owlCarousel({
            loop:true,
            margin:0,
            nav:false,
            autoplay:true,
            autoplayTimeout:4000,
            autoplayHoverPause:true,
            responsiveClass:true,
            responsive:{
                0:{
                    items:2
                },
                767:{
                    items:2
                }
            }
        })
    }
}
    
    //-- pop up code start 

     $(function() {
    //----- OPEN
    $('[data-popup-open]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-open');
        $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
 
        e.preventDefault();
    });
 
    //----- CLOSE
    $('[data-popup-close]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-close');
        $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
 
        e.preventDefault();
    });
});

     //-- pop up code end