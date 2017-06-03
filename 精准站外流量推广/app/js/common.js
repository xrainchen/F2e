! function ($) {
  if (($(window).width() - 1200) / 2 >= 130) {
    $(".dz-contact").css({
      left:"0"
    }).find(".show-btn").hide();

  } else {

    $(".dz-contact").hover(function () {

      $(this).stop(true).animate({
        left: 0
      })
    }, function () {

      $(this).stop(true).animate({
        left: '-130px'
      })
    })
  }

}(jQuery);