$(document).ready(function(){
  $('.clickable').click(function(){
    $(this).children('.hide').toggle();
    $(this).children('img').toggle();
  })
});