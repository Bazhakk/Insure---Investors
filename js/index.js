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

  //Partners
  // Slick-slider
  $('.partners-slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    dots: true
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

  // AOS init
  AOS.init({
    once: true
  });

  //PAGE-2
  //Properties
  $(document).ready(function() {
    // По умолчанию показываем первый контент
    var firstLink = $('nav ul li:first-child a');
    var defaultTarget = firstLink.data('target');
    $('#' + defaultTarget).addClass('active');
    firstLink.addClass('active');

    // Обработчик события клика на ссылки меню
    $('nav ul li a').click(function(e) {
      e.preventDefault();
      var target = $(this).data('target');
      
      // Удаляем класс 'active' у всех элементов контента и ссылок
      $('.content').removeClass('active');
      $('nav ul li a').removeClass('active');
      
      // Добавляем класс 'active' для выбранного контента и ссылки
      $('#' + target).addClass('active');
      $(this).addClass('active');
    });
  });

  //Mobile-properties
  $(document).ready(function() {
    $('.mobile-properties__link').click(function() {
      var content = $(this).next('.mobile-properties__content');
      
      // Проверяем, открыт ли текущий элемент
      if (content.is(':visible')) {
        // Если открыт, сворачиваем его
        content.slideUp();
        $(this).toggleClass('mobile-properties__link_active');
        $(this).toggleClass('mobile-properties__block_active');
      } else {
        // Если закрыт, сворачиваем все активные панели
        $('.mobile-properties__content').slideUp();
        
        // Затем развернуть текущий элемент
        content.slideDown();
        $(this).toggleClass('mobile-properties__link_active');
        $(this).toggleClass('mobile-properties__block_active');
        $(this).find('.mobile-properties__toggle').toggleClass('rotate');
        
        // Сбрасываем состояние иконки предыдущего элемента
        $('.mobile-properties__link').not(this).removeClass('mobile-properties__link_active');
        $('.mobile-properties__block').not(accordionItem).removeClass('mobile-properties__block_active');
        $('.mobile-properties__toggle').not($(this).find('.mobile-properties__toggle')).removeClass('rotate');
      }
    });
  });
  
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
  $(document).ready(function() {
    $('.customer-slider').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows: false,
      dots: false
    });
  
    $('.prev-button').click(function() {
      $('.customer-slider').slick('slickPrev');
    });
  
    $('.next-button').click(function() {
      $('.customer-slider').slick('slickNext');
    });
  });

  //Contact-us Page-6
  //Leaders
  // Leaders-slider
  $(document).ready(function() {

    $('.leaders-slider').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      dots: false
    });
  
    $('.slider-btn__prev').click(function() {
      $('.leaders-slider').slick('slickPrev');
    });
  
    $('.slider-btn__next').click(function() {
      $('.leaders-slider').slick('slickNext');
    });
  });

  //Leaders-mobile
  $(document).ready(function() {

    $('.leaders-mobile').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false
    });
  
    $('.slider-btn__prev').click(function() {
      $('.leaders-mobile').slick('slickPrev');
    });
  
    $('.slider-btn__next').click(function() {
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
});