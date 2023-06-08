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

  //CONTACT
  //FORM
  $(document).ready(function() {
    $('.form__group .form__row').on('focus', function() {
      $(this).parent('.form__group').addClass('active');
    });
  
    $('.form__group .form__third-row').on('blur', function() {
      if ($(this).val() === '') {
        $(this).parent('.form__group').removeClass('active');
      }
    });
  });
});