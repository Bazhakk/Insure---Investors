jQuery(document).ready(function ( $ ) {
  
  $(document).on('click', '#burger', function() {
    $('#burger').toggleClass('burger-active');
    $('#mobile-menu').slideToggle().css('display', 'flex');
  });

  $(document).on('click', function(e) {
    if (!$(e.target).closest('#burger').length) {
      $('#mobile-menu').hide();
      $('#burger').removeClass('burger-active');
    }
    e.stopPropagation();
  });

  // AOS init
  AOS.init({
    once: true
  });

  //Mobile-menu
  $(function() {
    let header = $('.header');
     
    $(window).scroll(function() {
      if($(this).scrollTop() > 1) {
       header.addClass('header_fixed');
      } else {
       header.removeClass('header_fixed');
      }
    });
   });

   $(function() {
    let header = $('.header');
    let hederHeight = header.height(); // вычисляем высоту шапки
     
    $(window).scroll(function() {
      if($(this).scrollTop() > 1) {
       header.addClass('header_fixed');
       $('body').css({
          'paddingTop': hederHeight+'px' // делаем отступ у body, равный высоте шапки
       });
      } else {
       header.removeClass('header_fixed');
       $('body').css({
        'paddingTop': 0 // удаляю отступ у body, равный высоте шапки
       })
      }
    });
   });

});
