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

  //Arrow
  // let arrow = document.getElementById('arrow');
  // let featuresMenu = document.getElementById('features-mobile');

  //   arrow.addEventListener('click', function() {
  //   $(this).toggleClass('active').next().slideToggle(300);
  //   if(arrow.classList.contains('arrow-active')) {
  //     featuresMenu.style.display = "none";
  //     arrow.classList.remove('arrow-active');
  //   } else {
  //     featuresMenu.style.display = "flex";
  //     arrow.classList.add('arrow-active');
  //   }
  // });

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
    $('#features-mobile-box-1').removeClass('features-mobile__content_hidden');
  });

});
