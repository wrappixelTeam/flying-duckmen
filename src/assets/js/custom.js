$(function () {
  // Header Scroll
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 60) {
      $("header").addClass("fixed-header");
    } else {
      $("header").removeClass("fixed-header");
    }
  });

  // product slider
  $(".product-slider").owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    margin: 4,
    startPosition: 0,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });

  // testimonial slider
  $(".testimonial-slider").owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    margin: 50,
    center: true,
    startPosition: 0,
    responsive: {
      0: {
        items: 1,
      },
      769: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  });

  // Aos
  AOS.init({
    once: true,
  });
});
