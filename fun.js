$(function () {
  new WOW().init();
});

$(window).scroll(function () {
  if ($(document).scrollTop() > 500) {
    $("nav").addClass("color-change");
    $("a.nav-link").css("color", "rgb(187, 134, 236)");
  } else {
    $("nav").removeClass("color-change");
    $("a.nav-link").css("color", "white");
  }
});
