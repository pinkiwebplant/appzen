$(".accord-item-title").click(function () {
  $(this).next().slideToggle(250);
  $(this).parent().toggleClass("active-item");
  $(this).parent().siblings().find(".accord-item-content").slideUp(250);
});
