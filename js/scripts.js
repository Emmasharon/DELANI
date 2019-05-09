$(document).ready(function(){
  $(".hidden").hide();
   $("#par1,#design").click(function(){
       $(this).children(".hidden").slideToggle();
       $(this).children("#design img").slideToggle();
   });
   // $("#par2,#development").click(function(){
   //     $("#par2").slideToggle();
   //     $("#development").slideToggle();
   // });
   // $("#par3,#product").click(function(){
   //     $("#par3").slideToggle();
   //     $("#product").slideToggle();
   // });

   $("#button-color").click(function(event){
     var name = $("#name").val();
     alert(name + " Thanks for your response!");
     event.preventDefault();
    });


  $('.A').hover(function () {
    $(this).animate({opacity:'0.9'});
  },
 function () {
   $(this).animate({opacity:'0'});
 });
 });
  $(".A").hide();
  $(".view").hover(function(){
    $(this).children(".A").toggle();
  });
