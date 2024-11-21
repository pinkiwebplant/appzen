let allExpanded = false; // This flag will track if all items are expanded

$(".expand-btn .anchore-btn").click(function () {
  $(".accord-item-content").slideDown(250); // Slide down all content
  $(".accord-item").addClass("active-item"); // Add active class to all items
  allExpanded = true; // Set flag to true after expanding all items
});

$(".accord-item-title").click(function () {
  if (allExpanded) {
    // If all items are expanded, toggle only the clicked item's content
    $(this).next().slideToggle(250);
    $(this).parent().toggleClass("active-item");
  } else {
    // If not all are expanded, toggle normally as in the original script
    $(this).next().slideToggle(250);
    $(this).parent().siblings().removeClass("active-item");
    $(this).parent().toggleClass("active-item");
    $(this).parent().siblings().find(".accord-item-content").slideUp(250); // Close other items
  }
});
