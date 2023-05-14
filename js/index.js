jQuery(document).ready(function ( $ ) {
  
  //Burger-menu
  let burger = document.getElementById('burger');
  let mobileMenu = document.getElementById('mobile-menu');
  
  burger.addEventListener('click', function() {
    if(burger.classList.contains('burger-active')) {
      mobileMenu.style.display = "none";
      burger.classList.remove('burger-active');

      $("body").css("overflow", "auto");

    } else {
      mobileMenu.style.display = "flex";
      burger.classList.add('burger-active');

      $("body").css("overflow","hidden");
    }
  });

  // AOS init
  AOS.init({
    once: true
  });

  // HOME PAGE
  // Feauters
  $(document).ready(function() {
  $('.features-mobile__link').click(function() {
    $(this).parent('.features-mobile__block').toggleClass('active');
    $(this).next('.features-mobile__content').slideToggle();
    $('#features-mobile-1').addClass('features-mobile__link_active');
    $('#features-mobile-2').addClass('features-mobile__block_active');
    $('#features-mobile-3').addClass('features-mobile__block_active');
    $('#features-mobile-4').addClass('features-mobile__block_active');
  });

  $('#features-1').on('click', function() {
    $('.features-menu__link').removeClass('features-menu__link_active');
    $('#features-1').addClass('features-menu__link_active');
    $('.features__box').addClass('features__box_hidden');
    $('#features-box-1').removeClass('features__box_hidden');
  });

  $('#features-2').on('click', function() {
    $('.features-menu__link').removeClass('features-menu__link_active');
    $('#features-2').addClass('features-menu__link_active');
    $('.features__box').addClass('features__box_hidden');
    $('#features-box-2').removeClass('features__box_hidden');
  });

  $('#features-3').on('click', function() {
    $('.features-menu__link').removeClass('features-menu__link_active');
    $('#features-3').addClass('features-menu__link_active');
    $('.features__box').addClass('features__box_hidden');
    $('#features-box-3').removeClass('features__box_hidden');

    $('#features-3').click(function() {
          if (!$(this).hasClass('active')) {
            $('.#features-3').removeClass('active');
            $(this).addClass('active');
          }
        });
  });

  $('#features-4').on('click', function() {
    $('.features-menu__link').removeClass('features-menu__link_active');
    $('#features-4').addClass('features-menu__link_active');
    $('.features__box').addClass('features__box_hidden');
    $('#features-box-4').removeClass('features__box_hidden');
  });

  // Features-mobile
    $(document).ready(function() {
      $('.features-mobile-icon').click(function() {
        var content = $(this).closest('.features-mobile__link').next('.features-mobile__content');
        content.slideToggle();
        
        $(this).toggleClass('opened');
      });
    });
  });

  // //QUESTIONS
  $(document).ready(function() {
    $('.accordion-toggle').click(function() {
      var accordionItem = $(this).closest('.accordion-item');
      accordionItem.toggleClass('active');
      var accordionContent = accordionItem.find('.accordion-content');
      accordionContent.slideToggle();
      $('#accordion-1').addClass('accordion-item_active');
    });

    $('.accordion-close').click(function(event) {
      event.stopPropagation();
      var accordionItem = $(this).closest('.accordion-item');
      accordionItem.removeClass('active');
      var accordionContent = accordionItem.find('.accordion-content');
      accordionContent.slideUp();
    });

    // $('.accordion-item').on('click', function(e) {
    //     console.log(e.target)
    // })
  });
  
  // Slick-slider
  $('.slider-mobile').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    dots: true
  });
});
