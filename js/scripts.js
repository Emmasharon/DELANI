$(document).ready(function(){
   $("#par1,#design").onclick(function(){
       $("#par1").slideToggle();
       $("#design").slideToggle();
   });

   $("#par2,#development").onclick(function(){
       $("#par2").slideToggle();
       $("#development").slideToggle();
   });
   $("#par3,#product").onclick(function(){
       $("#par3").slideToggle();
       $("#product").slideToggle();
   });


  $('.A').hover(function () {
    $(this).animate({opacity:'0.9'});
  },
 function () {
   $(this).animate({opacity:'0'});
  }
 });
  $(".A").hide();
  $(".view").hover(function(){
    $(this).children(".A").toggle();
  });
  funt()
});
