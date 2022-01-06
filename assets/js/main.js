$(document).ready(function() {
    // run function on initial page load
    clickableDiv();
    nav();
    smoothScroll();
    // run function on resize of the window
    $(window).resize(function() {

    })
    // run function on scroll
    $(window).scroll(function() {

    })
});

function clickableDiv() {
  $('.tutorial').click(function() {
    window.location = $(this).find("a").attr("href");
  });
}
function nav() {
  $('.mobile-nav').click(function(){
    $('#menu').removeClass('mobile-hide');
    $('body').addClass('scroll-lock');
    $('#menu').click(function(){
      $('#menu').addClass('mobile-hide');
      $('body').removeClass('scroll-lock');
    });
  });
}
function smoothScroll() {
  $(window).on("load", function(){
    $('[href*="#poster"], [href*="#kinetic"], [href*="#title"]').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('body, html').animate({
            scrollTop: target.offset().top - 50
          }, 1000);
          return false;
        }
      }
    });
  });
}
