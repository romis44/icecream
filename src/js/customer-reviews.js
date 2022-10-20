$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
      items: 1,
      loop: true,
      dots: true,
      margin: 200,
      autoplay: true,
      autoplayTimeout: 4500,
      autoplayHoverPause: true,
      smartSpeed: 1750,
      dragEndSpeed: 500,
      dotsSpeed: 750,
      animateIn: 'false',
      animateOut: 'fadeOut',
    });
  });