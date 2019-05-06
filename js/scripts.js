$(document).ready(function(){
  $(
    
  )


//   $('.A').hover(function () {
//     $(this).animate({opacity:'0.9'});
//   },
//   function () {
//     $(this).animate({opacity:'0'});
//   }
// });
  $(".A").hide();
  $(".view").hover(function(){
    $(this).children(".A").toggle();
  });
  funt()
});
