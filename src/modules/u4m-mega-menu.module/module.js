$(".mobileHide .childTrigger").click(function (event) {
  $(this).parents(".menuItem").siblings().removeClass("childOpen");
  $(this).parents(".menuItem").toggleClass("childOpen");
  $("html").toggleClass("hdrOpen");
  event.preventDefault();
});

$("html").click(function () {
  $(".menuItem").removeClass("childOpen");
  $("html").removeClass("hdrOpen");
});

$(".megaMenu").click(function (e) {
  e.stopPropagation();
});

$(".desktopHide .childTrigger").click(function () {
  $(this).parent().siblings(".menuItem").removeClass("childOpenMob");
  $(this).parent(".menuItem").siblings().find(".childMenu").slideUp();
  $(this).parent(".menuItem").toggleClass("childOpenMob");
  $(this).next(".childMenu").slideToggle();
});

$(".mobile-trigger").click(function () {
  $("body").toggleClass("mobile-open");
  $(".headerMenu").slideToggle();
  $(".desktopHide .menuItem").removeClass("childOpenMob");
  $(".desktopHide .childMenu").slideUp();
  $("html").toggleClass("hdrOpenMob");
});
