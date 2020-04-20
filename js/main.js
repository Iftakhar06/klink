(function ($) {
"use strict";

$('.slider-active').slick({
  dots: false,
  arrows: true,
  prevArrow: '<button class="slick-prev"  type="button"><i class="fas fa-chevron-right"></i></button>',
  nextArrow: '<button class="slick-next" type="button"><i class="fas fa-chevron-left"></i></button>',
  infinite: true,
  centerMode: false,
  autoplay: true,
  vertical: false,
  verticalSwiping: false,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
      {
          breakpoint: 1170,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
          }
      },
      {
          breakpoint: 992,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      },
      {
          breakpoint: 768,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }
  ]
});


$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  autoplay: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<button class="slick-prev"  type="button"><i class="fas fa-chevron-right"></i></button>',
  nextArrow: '<button class="slick-next" type="button"><i class="fas fa-chevron-left"></i></button>',
  asNavFor: '.slider-for',
  dots: false,
  arrows: true,
  centerMode: true,
  focusOnSelect: true,
  autoplay: true,
  centerPadding: '0',
  responsive: [
      {
    breakpoint: 1200,
    settings: {
      arrows: true,
      centerMode: true,
      centerPadding: '0px',
      slidesToShow: 3
    }
  },
  {
    breakpoint: 992,
    settings: {
      arrows: true,
      centerMode: true,
      centerPadding: '0px',
      slidesToShow: 3
    }
  },
  {
    breakpoint: 768,
    settings: {
      arrows: true,
      centerMode: true,
      centerPadding: '0px',
      slidesToShow: 1
    }
  }
]
});


 // video-popup start

$('.video-popup').magnificPopup({
  type: 'iframe',
  gallery:{
    enabled:true
  }
});

 // mailchimp start

 if ($('.mailchimp').length > 0) {
  /*  MAILCHIMP  */
  $('.mailchimp').ajaxChimp({
      language: 'es',
      callback: mailchimpCallback,
      url: "https://github.us19.list-manage.com/subscribe/post?u=f050131a100cfa7f06f4cd821&amp;id=7899a278d1" //Replace this with your own mailchimp post URL. Don't remove the "". Just paste the url inside "".
  });
}

function mailchimpCallback(resp) {
  if (resp.result === 'success') {
      $('.subscription-success').html('<i class="fa fa-check"></i><br/>' + resp.msg).fadeIn(1000);
      $('.subscription-error').fadeOut(500);

  } else if (resp.result === 'error') {
      $('.subscription-error').html('<i class="fa fa-times"></i><br/>' + resp.msg).fadeIn(1000);
  }
}
$.ajaxChimp.translations.es = {
  'submit': 'Submitting...',
  0: 'We have sent you a confirmation email',
  1: 'Please enter a value',
  2: 'An email address must contain a single @',
  3: 'The domain portion of the email address is invalid (the portion after the @: )',
  4: 'The username portion of the email address is invalid (the portion before the @: )',
  5: 'This email address looks fake or invalid. Please enter a real email address'
};


// WoW-Animation-JS 
       new WOW().init({
        mobile: true,
    });

// meanmenu
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "992"
    });

// one-page-nav active code
var top_offset = $('.header-area').height() - 10;
$('.main-menu nav ul').onePageNav({
    currentClass: 'active',
    scrolloffset: top_offset,
});

// TOP Menu Sticky code
        $(window).on('scroll',function() {
            if ($(this).scrollTop() > -0){  
                $('#sticky-header').addClass("sticky");
            }
            else{
                $('#sticky-header').removeClass("sticky");
            }
        });

})(jQuery);


