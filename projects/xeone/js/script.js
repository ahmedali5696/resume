// Slider Height
$(function () {
  'use strict';
  var windowH = $(window).height(), navH = $('.navbar').innerHeight();
  $('.header').height(windowH - navH);
});

// Scroll Top Button
$(window).scroll(function () {
  'use strict';
  if ($(window).scrollTop() >= 800) {
    $('.scrollTop').fadeIn(500);
  } else {
    $('.scrollTop').fadeOut(500);
  }
});

$('.scrollTop').click(function (event) {
  'use strict';
  event.preventDefault();
  $('html , body').animate({
    scrollTop: 0
  }, 900);
});

// Call Owl Caruosel plugin
$(document).ready(function () {
  'use strict';
  $(".owl-carousel").owlCarousel();
});

//  Owl Caruosel Responsive
$('.testiCaro').owlCarousel({
  loop: true,
  nav: false,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
});

$('.clientsCaro').owlCarousel({
  loop: true,
  nav: false,
  dots: false,
  margin: 80,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1
    },
    540: {
      items: 2
    },
    720: {
      items: 3
    },
    960: {
      items: 4
    },
    1140: {
      items: 5
    }
  }
});

// contact Input Change border color
$(function () {
  'use strict';
  $('.contactInput').focusin(function () {
    $(this).addClass('border-black');
  });

  $('.contactInput').focusout(function () {
    $(this).removeClass('border-black');
  });
});