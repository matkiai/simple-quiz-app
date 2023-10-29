




jQuery("#my_styles  .btn1").click(function() {
  jQuery("#my_styles .btn1").removeClass('inactive');
  jQuery("#my_styles .btn").click('active');
  jQuery(this).toggleClass('inactive');
});

jQuery("#my_styles .btn").click(function() {
  jQuery("#my_styles .btn").removeClass('active');
  jQuery(this).toggleClass('active');
});






 

    jQuery("#my_styles .btn .btn1").click(function() {
    jQuery("#my_styles .btn .btn1").removeClass('inactive');
    jQuery(this).toggleClass('inactive');
  });





