

(function($) {
    'use strict';
/*-------------------------------------------
  01. 
--------------------------------------------- */
    
$('.mobile-menu nav').meanmenu({
      meanMenuContainer: '.mobile-menu-area',
      meanScreenWidth: "767",
      meanRevealPosition: "right",
    });

/*-------------------------------------------
  02.
--------------------------------------------- */
    new WOW().init();
    
/*-------------------------------------------
  03. 
--------------------------------------------- */ 
      $('.htc__portfolio__container').imagesLoaded( function() {
        var $container = $('.htc__portfolio__container');
        $container.isotope({
            itemSelector: '.pro__item',
            filter: '*',
            transitionDuration: '0.7s',
            masonry: {
                columnWidth: '.pro__item:not(.wide)'
            }
          });

       
        $('#htc__filters').on('click', 'li', function () {
            var filterValue = $(this).attr('data-filter');
            $container.isotope({ filter: filterValue });
        });
        
       
        $('#htc__filters li').on('click', function () {
            $('#htc__filters li').removeClass('is-checked');
            $(this).addClass('is-checked');
            var selector = $(this).attr('data-filter');
            $container.isotope({ filter: selector });
            return false;
        });
      });



/*-------------------------------------------
  04. 
--------------------------------------------- */ 
  $(window).on('scroll',function() {    
     var scroll = $(window).scrollTop();
     if (scroll < 245) {
      $("#sticky-header-with-topbar").removeClass("scroll-header");
     }else{
      $("#sticky-header-with-topbar").addClass("scroll-header");
     }
    });


/*--------------------------
  05. 
---------------------------- */
$.scrollUp({
    scrollText: '<i class="zmdi zmdi-chevron-up"></i>',
    easingType: 'linear',
    scrollSpeed: 900,
    animation: 'fade'
});

/*-----------------------------
  06.
-----------------------------*/
  $('.count').counterUp({
    delay: 60,
    time: 3000
  });

/*-----------------------------------------------
  07. 
-------------------------------------------------*/

var $newsletter_height = $(".newsletter__area");
$('.fixed-newslatter').css({'margin-bottom': $newsletter_height.height() + 'px'});

  if ($('.slider-activetion-wrap').length) {
    $('.slider-activetion-wrap').owlCarousel({
      loop:true,
      margin:0,
      nav:false,
      smartSpeed: 500,
      autoplayTimeout: 10000,
      autoplayHoverPause: true,
      autoplay: true,
      navText: [ '<i class="zmdi zmdi-arrow-left"></i>', '<i class="zmdi zmdi-arrow-right"></i>' ],
      dots: true,
      responsive:{
        0:{
          items:1
        },
        600:{
          items:1
        },
        800:{
          items:1
        },
        1024:{
          items:1
        },
        1200:{
          items:1
        },
        1400:{
          items:1
        },
        1920:{
          items:1
        }
      }
    });
  }
  
/*-----------------------------------------------
  08.
-------------------------------------------------*/

  if ($('.testimonial__carousel__active').length) {
    $('.testimonial__carousel__active').owlCarousel({
      loop:true,
      margin:50,
      nav:false,
      smartSpeed: 500,
      autoplay: true,
      navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
      dots: true,
      responsive:{
        0:{
          items:1
        },
        600:{
          items:1
        },
        800:{
          items:1
        },
        1024:{
          items:1
        },
        1200:{
          items:1
        },
        1400:{
          items:1
        },
        1920:{
          items:1
        }
      }
    });
  }
  

/*-----------------------------------------------
  09.
-------------------------------------------------*/

    $('[data-countdown]').each(function() {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
            $this.html(event.strftime('<span class="hast-count days"><span class="time-count-num">%-D</span></span> <span class="hast-count hour"><span class="time-count-num">%-H</span></span> <span class="hast-count minutes"><span class="time-count-num">%M</span> </span> <span class="hast-count second"> <span><span class="time-count-num">%S</span> </span>'));
        });
    });




})(jQuery);


