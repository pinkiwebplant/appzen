$(".filter_sidebar button").click(function (mn) {
  mn.preventDefault();
  $(this).parent().addClass("active").siblings().removeClass("active");
  var winLoc = window.location.href.split("?")[0];
  var btnVal = $(this).attr("data-tag");
  var queryURL = winLoc + "?category=" + btnVal;
  $.get(queryURL, function (response) {
    var newItems = $(response).find(".case_listing_wrap .qryitem");
    $(".case_listing_wrap").html(newItems);
    if (newItems.length === 0) {
      $(".noText").show();
    } else {
      $(".noText").hide();
    }
    var newPagination = $(response).find(".pagin .loadmore_btn");
    $(".pagin").html(newPagination);
  });
});

$(document).on("click", "#load-more", function (kk) {
  kk.preventDefault();
  var paginurl = $(this).attr("href");
  $.get(paginurl, function (response) {
    var newItems = $(response).find(".case_listing_wrap .qryitem");
    $(".case_listing_wrap").append(newItems);

    var newPagination = $(response).find(".pagin .loadmore_btn");
    if (newPagination.length > 0) {
      $(".pagin").html(newPagination);
    } else {
      $(".pagin").empty();
    }
    //     $('html, body').animate({
    //       scrollTop: $('.case_listing_wrap').offset().top
    //     }, 500);
  });
});
