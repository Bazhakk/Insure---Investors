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

      // $('#features-3').click(function() {
      //       if (!$(this).hasClass('active')) {
      //         $('.#features-3').removeClass('active');
      //         $(this).addClass('active');
      //       }
      //     });

      // $('#features-3').on('click', function() {
      //   $('.features-menu__link .features-menu__link-other').addClass('features-menu__link .features-menu__link-other_active');
      // });
    });

    $('#features-4').on('click', function() {
      $('.features-menu__link').removeClass('features-menu__link_active');
      $('#features-4').addClass('features-menu__link_active');
      $('.features__box').addClass('features__box_hidden');
      $('#features-box-4').removeClass('features__box_hidden');
    });
  });

  //QUESTIONS
  $(document).ready(function() {
    $('.accordion-header').click(function() {
      var content = $(this).next('.accordion-content')
      
      // Проверяем, открыт ли текущий элемент
      if (content.is(':visible')) {
        // Если открыт, сворачиваем его
        content.slideUp()
        $(this).toggleClass('accordion-header_active')
      } else {
        // Если закрыт, сворачиваем все активные панели
        $('.accordion-content').slideUp();
        // Затем развернуть текущий элемент
        content.slideDown()
        $(this).toggleClass('accordion-header_active')
      }
    })
  })

  //FOOTER
  //Footer-mobile
  $(document).ready(function() {
    $('.footer-mobile__subtitle').click(function() {
      $(this).parent('.footer-mobile__item').toggleClass('active');
      $(this).next('.footer-mobile__content').slideToggle();
    });
  });

  // Slick-slider
  $('.slider-mobile').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    dots: true
  });

  //Arrow
  $(document).ready(function() {
    $(".arrow").click(function() {
      $(this).toggleClass("rotated");
    });
  });
});