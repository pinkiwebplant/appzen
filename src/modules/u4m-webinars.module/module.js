// Add event listener for play icon click
document.querySelectorAll(".play_icon").forEach(function (playIcon) {
  playIcon.addEventListener("click", function () {
    const webinarsItem = playIcon.closest(".webinars_item");
    if (webinarsItem) {
      webinarsItem.classList.add("pop-active");
    }
  });
});

// Add event listener for close icon click
document.querySelectorAll(".close_icon").forEach(function (closeIcon) {
  closeIcon.addEventListener("click", function () {
    const webinarsItem = closeIcon.closest(".webinars_item");
    if (webinarsItem) {
      webinarsItem.classList.remove("pop-active");
    }
  });
});

$(".play_icon").click(function () {
  var src = $(this)
    .parent()
    .closest(".webinars_item")
    .children()
    .find("iframe")
    .attr("data-src");
  $(this)
    .parent()
    .closest(".webinars_item")
    .children()
    .find("iframe")
    .attr("src", src);
});
$(".close_icon").click(function () {
  var src2 = $(this)
    .parent()
    .closest(".webinars_item")
    .children()
    .find("iframe")
    .attr("src");
  $(this)
    .parent()
    .closest(".webinars_item")
    .children()
    .find("iframe")
    .attr("src", " ");
});

document.addEventListener("DOMContentLoaded", function () {
  const playIcons = document.querySelectorAll(".play_icon");
  playIcons.forEach((icon) => {
    icon.addEventListener("click", function () {
      const iframe = icon.closest(".video_item").querySelector("iframe");
      const videoSrc = iframe.getAttribute("data-src");
      iframe.setAttribute("src", `${videoSrc}?autoplay=1`);
    });
  });
});




