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
  let arrow = document.getElementById('arrow');
  let featuresMenu = document.getElementById('features-mobile');

    arrow.addEventListener('click', function() {
    $(this).toggleClass('active').next().slideToggle(300);
    if(arrow.classList.contains('arrow-active')) {
      featuresMenu.style.display = "none";
      arrow.classList.remove('arrow-active');
    } else {
      featuresMenu.style.display = "flex";
      arrow.classList.add('arrow-active');
    }
  });

  // AOS init
  AOS.init({
    once: true
  });
});
