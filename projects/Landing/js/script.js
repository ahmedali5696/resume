// Sticky Navigation
$(window).on('scroll', function () {
	if ($(window).scrollTop() > 400) {
		$('nav').removeClass('mynav');
		$('nav').addClass('sticky-nav');
		$('.header').addClass('mt-78');
	} else {
		$('nav').removeClass('sticky-nav');
		$('nav').addClass('mynav');
		$('.header').removeClass('mt-78');
	}
});

// Add and remove nav active class
$(document).ready(function () {
	$(document).on('click', '.sticky-nav ul li', function () {
		$(this).addClass('active').siblings().removeClass('active');
	});
});

// Owl Carousal activation
$(document).ready(function () {
	$(".owl-carousel").owlCarousel({
		loop: true,
		margin: 10,
	});
});

function onScroll(event){
  var scrollPos = $(document).scrollTop();
  $('.sticky-nav .navbar-collapse ul li a').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
          $('.sticky-nav .navbar-collapse ul li a').removeClass("active"); //added to remove active class from all a elements
          currLink.addClass("active");
      }
      else{
          currLink.removeClass("active");
      }
  });
}