! function ($) {
  $(".js-showlayer").click(function () {
    layer.open({
      title: "",
      type: 1,
      area: ['800px', '560px'], //宽高
      content: $("#selectproduct").html()
    });
  })
}(jQuery);