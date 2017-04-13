$(document).ready(function(){
  $(".menu-trigger").click(function() {
    $("nav ul").slideToggle(500);
  }); //end slide toggle function

$(window).resize(function() {
  if($(window).width() > 600) {
    $("nav ul").removeAttr("style");
  }
});//end resize

}); //end resize function
