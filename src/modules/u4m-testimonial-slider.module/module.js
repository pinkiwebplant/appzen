$('.test-slider').slick({
 centerMode: true,            // Centers the current slide
  slidesToShow: 3,             // Shows 3 slides at a time
  centerPadding: '0',          // No padding for the center item (fully visible)
  focusOnSelect: true,         // Allows the user to select the item (optional)
  infinite: true,   
	  arrow: true,    // Infinite loop of slides
 responsive: [
    {
      breakpoint: 768,         // When screen width is 768px or smaller
      settings: {
        slidesToShow: 1,       // Show 1 slide for screens smaller than 768px
      }
    },
    {
      breakpoint: 992,         // When screen width is between 768px and 991px
      settings: {
        slidesToShow: 2,       // Show 2 slides between 768px and 991px
      }
    }
  ]
})
