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

  // HOME PAGE
  // Feauters
  $(document).ready(function() {
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

    $('#features-5').on('click', function() {
      $('.features-menu__link').removeClass('features-menu__link_active');
      $('#features-5').addClass('features-menu__link_active');
      $('.features__box').addClass('features__box_hidden');
      $('#features-box-5').removeClass('features__box_hidden');
    });

    $('#features-6').on('click', function() {
      $('.features-menu__link').removeClass('features-menu__link_active');
      $('#features-6').addClass('features-menu__link_active');
      $('.features__box').addClass('features__box_hidden');
      $('#features-box-6').removeClass('features__box_hidden');
    });
    // Обработчик событий при клике на элемент списка
    $(".features-menu__link").click(function() {
      // Удаляем класс 'active' у всех элементов
      $(".features-menu__link").removeClass("active");
      // Добавляем класс 'active' к текущему элементу
      $(this).addClass("active");
    });
  });

  // Features-mobile
  $(document).ready(function() {
    $('.features-mobile__link').click(function() {
      var content = $(this).next('.features-mobile__content');
      
      // Проверяем, открыт ли текущий элемент
      if (content.is(':visible')) {
        // Если открыт, сворачиваем его
        content.slideUp();
        $(this).toggleClass('features-mobile__link_active');
        $(this).toggleClass('features-mobile__block_active');
      } else {
        // Если закрыт, сворачиваем все активные панели
        $('.features-mobile__content').slideUp();
        
        // Затем развернуть текущий элемент
        content.slideDown();
        $(this).toggleClass('features-mobile__link_active');
        $(this).toggleClass('features-mobile__block_active');
        $(this).find('.features-mobile__toggle').toggleClass('rotate');
        
        // Сбрасываем состояние иконки предыдущего элемента
        $('.features-mobile__link').not(this).removeClass('features-mobile__link_active');
        $('.features-mobile__block').not(accordionItem).removeClass('features-mobile__block_active');
        $('.features-mobile__toggle').not($(this).find('.features-mobile__toggle')).removeClass('rotate');
      }
    });
  });

  //QUESTIONS
  $(document).ready(function() {
    $('.accordion-header').click(function() {
      var content = $(this).next('.accordion-content');
      var accordionItem = $(this).closest('.accordion-item');
      
      // Проверяем, открыт ли текущий элемент
      if (content.is(':visible')) {
        // Если открыт, сворачиваем его
        content.slideUp();
        accordionItem.removeClass('open').css('background-color', '#F7FBFD');
        $(this).toggleClass('accordion-header_active');
        $(this).toggleClass('accordion-item_active');
      } else {
        // Если закрыт, сворачиваем все активные панели
        $('.accordion-content').slideUp();
        $('.accordion-item.open').removeClass('open').css('background-color', '#F7FBFD');
        
        // Затем развернуть текущий элемент
        content.slideDown();
        accordionItem.addClass('open').css('background-color', 'white');
        $(this).toggleClass('accordion-header_active');
        $(this).toggleClass('accordion-item_active');
        
        // Сбрасываем состояние иконки предыдущего элемента
        $('.accordion-header').not(this).removeClass('accordion-header_active');
        $('.accordion-item').not(accordionItem).removeClass('accordion-item_active');
      }
    });
  });
  
  //CONTACT
  //FORM
  $(document).ready(function() {
    $('.form-group input, .form-group textarea').on('focus', function() {
      $(this).prev('label').addClass('active');
    });
  
    $('.form-group input, .form-group textarea').on('blur', function() {
      if ($(this).val() === '') {
        $(this).prev('label').removeClass('active');
      }
    });
  });

  //FOOTER
  //Footer-mobile
  $(document).ready(function() {
    $('.footer-mobile__subtitle').click(function() {
      var content = $(this).next('.footer-mobile__content');
      
      // Проверяем, открыт ли текущий элемент
      if (content.is(':visible')) {
        // Если открыт, сворачиваем его
        content.slideUp();
        $(this).toggleClass('footer-mobile__subtitle_active');
        $(this).toggleClass('footer-mobile__item_active');
      } else {
        // Если закрыт, сворачиваем все активные панели
        $('.footer-mobile__content').slideUp();
        
        // Затем развернуть текущий элемент
        content.slideDown();
        $(this).toggleClass('footer-mobile__subtitle_active');
        $(this).toggleClass('footer-mobile__item_active');
        $(this).find('.footer-mobile__toggle').toggleClass('rotate');
        
        // Сбрасываем состояние иконки предыдущего элемента
        $('.footer-mobile__subtitle').not(this).removeClass('footer-mobile__subtitle_active');
        $('.footer-mobile__item').not(accordionItem).removeClass('footer-mobile__item_active');
        $('.footer-mobile__toggle').not($(this).find('.footer-mobile__toggle')).removeClass('rotate');
      }
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

  // AOS init
  AOS.init({
    once: true
  });

  //PAGE-2
  //Properties
  

  //Types
  //Mobile-menu
  $(document).ready(function() {
    // Скрыть контент при загрузке страницы
    $("#hidden-content").hide();
    // Обработчик события клика на кнопке
    $("#toggle-button").click(function(event) {
    event.preventDefault(); // Предотвращение прыжка страницы вверх
    // Переключение видимости скрытого контента с анимацией
    $("#hidden-content").slideToggle("fast");
    });
  });

  //Customer
  //Slider
  $('.slider-customer').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    dots: false
  });

  //Page-6
  // Leaders
  //Leaders-slider/leaders-mobile
  $(document).ready(function() {
    var sliderLeaders = null;
  
    function initSlider() {
      if (window.innerWidth < 1220) {
        if (sliderLeaders === null) {
          // Инициализация слайдера для мобильной версии
          $('.leaders-mobile').slick({
            // настройки для мобильной версии
          });
        }
      } else {
        if (sliderLeaders) {
          sliderLeaders.slick('unslick');
          sliderLeaders = null;
        }
        // Инициализация слайдера для десктопной версии
        $('.slider-leaders').slick({
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 2,
          prevArrow: false,
          nextArrow: false
        });
      }
    }
  
    // Инициализация слайдера при загрузке страницы
    initSlider();
  
    // Повторная инициализация слайдера при изменении размера окна
    $(window).on('resize', function() {
      initSlider();
    });
  
    // Повторная инициализация слайдера при изменении ориентации устройства (для мобильных устройств)
    $(window).on('orientationchange', function() {
      initSlider();
    });


    $('#prevButton').click(function() {
      $('.slider-leaders').slick('slickPrev');
    });
  
    $('#nextButton').click(function() {
      $('.slider-leaders').slick('slickNext');
    });

    
    $('#prevButton').click(function() {
      $('.leaders-mobile').slick('slickPrev');
    });
  
    $('#nextButton').click(function() {
      $('.leaders-mobile').slick('slickNext');
    });
  });

  //Awards
  //Slider
  $(document).ready(function() {
    $('.slider').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 5,
      prevArrow: false,
      nextArrow: false
    });
  
    $('#prev-button').click(function() {
      $('.slider').slick('slickPrev');
    });
  
    $('#next-button').click(function() {
      $('.slider').slick('slickNext');
    });
  });

  // Slider-menu
  $(document).ready(function() {
    $('.slider-menu').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      prevArrow: false,
      nextArrow: false
    });
  
    $('#prev-btn').click(function() {
      $('.slider-menu').slick('slickPrev');
    });
  
    $('#next-btn').click(function() {
      $('.slider-menu').slick('slickNext');
    });
  });

// properties
$('#properties-1').on('click', function() {
  $('.properties-menu__link').removeClass('properties-menu__link_active');
  $('#properties-1').addClass('properties-menu__link_active');
  $('.properties__description').addClass('properties__description_hidden');
  $('#properties-description-1').removeClass('properties-description_hidden');
});

$('#properties-2').on('click', function() {
  $('.properties-menu__link').removeClass('properties-menu__link_active');
  $('#properties-2').addClass('properties-menu__link_active');
  $('.properties__description').addClass('properties__description_hidden');
  $('#properties-description-1').removeClass('properties-description_hidden');
});

$('#properties-3').on('click', function() {
  $('.properties-menu__link').removeClass('properties-menu__link_active');
  $('#properties-3').addClass('properties-menu__link_active');
  $('.properties__description').addClass('properties__description_hidden');
  $('#properties-description-1').removeClass('properties-description_hidden');
});

$('#properties-4').on('click', function() {
  $('.properties-menu__link').removeClass('properties-menu__link_active');
  $('#properties-4').addClass('properties-menu__link_active');
  $('.properties__description').addClass('properties__description_hidden');
  $('#properties-description-1').removeClass('properties-description_hidden');
});

$('#properties-5').on('click', function() {
  $('.properties-menu__link').removeClass('properties-menu__link_active');
  $('#properties-5').addClass('properties-menu__link_active');
  $('.properties__description').addClass('properties__description_hidden');
  $('#properties-description-1').removeClass('properties-description_hidden');
});

$('#properties-6').on('click', function() {
  $('.properties-menu__link').removeClass('properties-menu__link_active');
  $('#properties-6').addClass('properties-menu__link_active');
  $('.properties__description').addClass('properties__description_hidden');
  $('#properties-description-1').removeClass('properties-description_hidden');
});
// Обработчик событий при клике на элемент списка
$(".properties-menu__link").click(function() {
  // Удаляем класс 'active' у всех элементов
  $(".properties-menu__link").removeClass("active");
  // Добавляем класс 'active' к текущему элементу
  $(this).addClass("active");
});

  
});