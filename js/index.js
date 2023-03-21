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
});
