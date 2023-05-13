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
  });

  $('#features-4').on('click', function() {
    $('.features-menu__link').removeClass('features-menu__link_active');
    $('#features-4').addClass('features-menu__link_active');
    $('.features__box').addClass('features__box_hidden');
    $('#features-box-4').removeClass('features__box_hidden');
  });

  //Features mobile-menu 
  $('#features-mobile-1').on('click', function() {
    $('.features-mobile__content').addClass('features-mobile__content_hidden');
    $('#features-mobile-block-1').removeClass('features-mobile__content_hidden');
    $('#features-mobile-1 .features-mobile__link').toggleClass('features-mobile__link_active');
  });

  $('#features-mobile-2').on('click', function() {
    $('.features-mobile__content').addClass('features-mobile__content_hidden');
    $('#features-mobile-block-2').removeClass('features-mobile__content_hidden');
    $('#features-mobile-2 .features-mobile__link').toggleClass('features-mobile__link_active');
  });

  $('#features-mobile-3').on('click', function() {
    $('.features-mobile__content').addClass('features-mobile__content_hidden');
    $('#features-mobile-block-3').removeClass('features-mobile__content_hidden');
    $('#features-mobile-3 .features-mobile__link').toggleClass('features-mobile__link_active');
  });

  $('#features-mobile-4').on('click', function() {
    $('.features-mobile__content').addClass('features-mobile__content_hidden');
    $('#features-mobile-block-4').removeClass('features-mobile__content_hidden');
    $('#features-mobile-4 .features-mobile__link').toggleClass('features-mobile__link_active');
    // $('.features-mobile-4').slideToggle('features-mobile__link_active');
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


    $('.accordion-item').on('click', function(e) {
        console.log(e.target)
    })
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
