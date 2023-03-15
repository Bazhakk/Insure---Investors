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
  // $(document).ready(function(){
  //           var $menu = $("#mobile-menu");
  //           $(window).scroll(function(){
  //               if ( $(this).scrollTop() > 100 && $menu.hasClass("default") ){
  //                   $menu.removeClass("default").addClass("fixed");
  //               } else if($(this).scrollTop() <= 100 && $menu.hasClass("fixed")) 
  //               {$menu.removeClass("fixed").addClass("default");
  //   }});//scroll
  //       });
    

});
