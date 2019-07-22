$(document).ready(function(){
  $(".overlay").hide();
$(".display").hover(function(){
    $(this).find(".overlay").toggle(400);
});

});
$(".click0").click(function(){
    $(".hide0").slideToggle(1000);
    $(".show0").slideToggle(1200);
  });

  $(".click1").click(function(){
    $(".hide1").slideToggle(1000);
    $(".show1").slideToggle(1200);
  });

  $(".click2").click(function(){
    $(".hide2").slideToggle(1000);
    $(".show2").slideToggle(1200);
  });

  $("#btn").click(function(party) {
       var client = document.getElementById('nameDetail').value;
       alert('Thanks ' + ' we have received your message successful. ' + '!');
       party.preventDefault();
   });
   $("#btn").on('click', function(){
     $('form').each(function(){
       this.reset();
     });
 });
