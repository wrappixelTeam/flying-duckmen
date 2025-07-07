$(function () {
  // Header Scroll
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 60) {
      $("header").addClass("fixed-header");
    } else {
      $("header").removeClass("fixed-header");
    }
  });

  // Cart dropdown toggle
  const cartIcon = document.getElementById('cartIcon');
  const cartDropdown = document.getElementById('cartDropdown');
  document.addEventListener('click', function (e) {
    if (cartIcon.contains(e.target)) {
      e.preventDefault();
      cartDropdown.style.display = cartDropdown.style.display === 'block' ? 'none' : 'block';
    } else if (!cartDropdown.contains(e.target)) {
      cartDropdown.style.display = 'none';
    }
  });

  // product slider
  $(".product-slider").owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    margin: 4,
    startPosition: 0,
    navText: [
      "<iconify-icon icon='solar:alt-arrow-left-linear' class='bg-border scroll-control rounded-circle fs-5 p-3 text-white'></iconify-icon>",
      "<iconify-icon icon='solar:alt-arrow-right-linear' class='bg-border scroll-control rounded-circle fs-5 p-3 text-white'></iconify-icon>",
    ],
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
    center: false,
    startPosition: 0,
    onInitialized: setActiveEffect,
    onTranslated: setActiveEffect,
    navText: [
      "<iconify-icon icon='solar:alt-arrow-left-linear' class='bg-border scroll-control rounded-circle fs-5 p-3 text-white'></iconify-icon>",
      "<iconify-icon icon='solar:alt-arrow-right-linear' class='bg-border scroll-control rounded-circle fs-5 p-3 text-white'></iconify-icon>",
    ],
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

  function setActiveEffect(event) {
    // Remove existing active-effect classes
    $(".testimonial-slider .item").removeClass("active-effect");

    // Get currently visible items
    let visibleItems = $(".testimonial-slider .owl-item.active");

    // Add class only to the first visible item
    if (visibleItems.length > 0) {
      $(visibleItems[0]).find(".item").addClass("active-effect");
    }
  }

  // Aos
  AOS.init({
    once: true,
  });
});
