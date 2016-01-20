$(document).ready(function() {
  $("h1").addClass("animated bounce");
  $("#link1").click(function () {
    $('html, body').animate({
      scrollTop: $("#home").offset(200).top
    }, 200);
  });
  $("#link2").click(function () {
    $('html, body').animate({
      scrollTop: $("#projects").offset().top
    }, 200);
  });
  $("#link3").click(function () {
    $('html, body').animate({
      scrollTop: $("#about").offset().top
    }, 200);
  });
});