(function ($) {

    "use strict";
    

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    })


    $('.brnad-contents').owlCarousel({
        loop:true,
        margin:0,
        items:1,
        autoplay:true,
        // // animateIn:'fadeIn',
        navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
        nav:false,
        // dots:true,
        responsive:{
            0:{
                items:5
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    // $('.service-active').owlCarousel({
    //     loop:true,
    //     margin:0,
    //     items:1,
    //     // autoplay:true,
    //     // // animateIn:'fadeIn',
    //     // navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
    //     // nav:false,
    //     // dots:true,
    //     responsive:{
    //         0:{
    //             items:5
    //         },
    //         600:{
    //             items:1
    //         },
    //         1000:{
    //             items:1
    //         }
    //     }
    // })

    })(jQuery);
