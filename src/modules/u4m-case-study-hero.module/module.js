document.addEventListener("DOMContentLoaded", function () {
  const bannerSection = document.querySelector(
    ".u4m-case-study-hero .banner_section"
  );
  const bannerImage = bannerSection.querySelector("img");
  const pageCenter = document.querySelector(".page-center");

  const setInitialStyles = () => {
    bannerImage.style.transition = "width 0.4s linear, transform 0.4s ease"; // Ensure smooth transition is applied
    bannerImage.style.width = "100%"; // Start with full width
  };

  const handleScroll = () => {
    const sectionTop = bannerSection.getBoundingClientRect().top;
    const sectionHeight = bannerSection.offsetHeight;
    const windowHeight = window.innerHeight;

    // Calculate the trigger point: when half of the section is above the viewport
    const triggerPoint = sectionTop + sectionHeight / 2 - windowHeight;

    // Get the width of `.page-center`
    const pageCenterWidth = pageCenter.offsetWidth;

    if (triggerPoint <= 0) {
      // Calculate the scroll progress relative to the trigger point
      const progress = Math.min(
        Math.max(
          (windowHeight - sectionTop) / (sectionHeight + windowHeight),
          0
        ),
        1
      );

      if (progress < 1) {
        // Zoom out effect: Interpolate width from 100% to page-center width
        const width =
          100 - progress * (100 - (pageCenterWidth / window.innerWidth) * 100);
        bannerImage.style.width = `${width}%`;
      } else {
        // Stuck at page-center width
        bannerImage.style.width = `${pageCenterWidth}px`;
      }
    } else {
      // Reset image to full width when scrolling back up
      bannerImage.style.width = "100%";
    }
  };

  // Apply initial styles and attach event listeners
  setInitialStyles();
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleScroll);
  handleScroll();
});
