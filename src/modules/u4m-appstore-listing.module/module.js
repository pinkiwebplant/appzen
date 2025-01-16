$(".popup-video-btn").click((function() {
  var popupContent = $(this).next(".video-popup-box");
  void 0 !== $.magnificPopup && $.magnificPopup.open({
    items: {
      src: popupContent,
      type: "inline"
    }
  })
}))


equalheight = function(container){

  var currentTallest = 0,
      currentRowStart = 0,
      rowDivs = new Array(),
      $el,
      topPosition = 0;
  $(container).each(function() {

    $el = $(this);
    $($el).height('auto')
    topPostion = $el.position().top;

    if (currentRowStart != topPostion) {
      for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
        rowDivs[currentDiv].height(currentTallest);
      }
      rowDivs.length = 0; // empty the array
      currentRowStart = topPostion;
      currentTallest = $el.height();
      rowDivs.push($el);
    } else {
      rowDivs.push($el);
      currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
    }
    for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
      rowDivs[currentDiv].height(currentTallest);
    }
  });
}

$(window).on('load', function() {
  equalheight('.card-block:visible .card-title');
  equalheight('.card-block:visible .card-details');

});


$(window).resize(function(){
  equalheight('.card-block:visible .card-title');
  equalheight('.card-block:visible .card-details');
});

$(document).ready(function() {
 // if ($("#pagination-2").length > 0) {
//    $((function() {
      let selectFilter = "",
          search = "",
          monthFilter = "";
      function filter() {
        return $(".card-container .card-block").addClass("filtered"), "" == selectFilter && "" == search && "" == monthFilter ? $(".card-container .card-block.filtered").removeClass("filtered") : $(".card-container .card-block").each((function(index) {
          let textVal = !0,
              text = $(this).find("h6").text().toLowerCase() + $(this).find("p").text().toLowerCase() + $(this).find("h9").text().toLowerCase();
          "" != search && (textVal = -1 !== text.indexOf(search)), ("" != selectFilter && "" == search && "" == monthFilter && $(this).hasClass(selectFilter) || "" == selectFilter && "" == monthFilter && "" != search && textVal || $(this).hasClass(selectFilter) && textVal && "" == monthFilter || "" == selectFilter && "" == search && $(this).hasClass(monthFilter) || "" == selectFilter && "" != search && textVal && $(this).hasClass(monthFilter) || $(this).hasClass(selectFilter) && "" != search && textVal && $(this).hasClass(monthFilter) || $(this).hasClass(selectFilter) && "" == search && $(this).hasClass(monthFilter)) && $(this).removeClass("filtered")
        }))//, pagination2.rebuild(), !1
      }
/*      pagination2 = new $.smFilteredPagination($("#pagination-2"), {
        showPagerHeader: false,
        pagerFooter: "pagerFooter2",
        itemsPerPage: 6
      }) */


      $(".filter-block #options-filter li input").change((function() {
        return selectFilter = $(this).val(), filter(), !1
      })) 
  
      $(".filter-block #options-filter-products li input").change((function() {
        return monthFilter = $(this).val(), filter(), !1
      })) 

      $("#search").keyup((function() {
        console.log($(this).val());
        return search = $(this).val().toLowerCase(), filter(), !1
      })) 


//    })) 

    $("#sortby").change((function() {
      
      if ( "a-z" == $(this).val()) {
        function sort_li_asc(c, d) {
          return $(d).data("position") < $(c).data("position") ? 1 : -1
        }
        return $(".card-container .card-block").not(".filtered").sort(sort_li_asc).appendTo(".card-container")//, pagination2.rebuild(), !1
      }
      else if ("date" == $(this).val()) {
        function sort_li_asc(c, d) {
          return $(d).data("date") > $(c).data("date") ? 1 : -1
        }
        return $(".card-container .card-block").not(".filtered").sort(sort_li_asc).appendTo(".card-container")//, pagination2.rebuild(), !1
      }else {
        function sort_li_asc(c, d) {
          return $(d).data("position") > $(c).data("position") ? 1 : -1
        }
        return $(".card-container .card-block").not(".filtered").sort(sort_li_asc).appendTo(".card-container")//, pagination2.rebuild(), !1
      }
    }))

  });
//});
/* End listing page scripts */

$(document).ready(function() {
  var iframe = document.getElementById('projectplayer');

  if (iframe) {
  // $f == Froogaloop
  var player = $f(iframe);

  // bind events
  var playButton = document.getElementById("play-button");

  playButton.addEventListener("click", function() {
    player.api("play");
    //reset volume
//     player.api('setVolume',1); 
//     player.api('volume',1); 
    $("#play-button").fadeOut('fast');
    $("#pause-button").css('display','flex');
    player.api('setVolume',1); 
    player.api('volume',1);
    console.log('play');
    //alert("Play Button Clicked New");
  });

  var pauseButton = document.getElementById("pause-button");
  pauseButton.addEventListener("click", function() {
    player.api("pause");
    $("#play-button").fadeIn('fast');
    $("#pause-button").fadeOut('fast');
    console.log('pause');
    //alert("Pause Button Clicked New");
  });

  // Video Play/Pause Buttons
  /*$("#play-button").click(function(){

    $("#play-button").fadeOut('fast');
    $("#pause-button").css('display','flex');

  });*/
  $("#pause-button").fadeOut('fast');
  /*$("#pause-button").click(function(){
    $("#play-button").fadeIn('fast');
    $("#pause-button").fadeOut('fast');
    //alert("pause Button Clicked");
  });*/
  }
});
