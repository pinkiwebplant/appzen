document.addEventListener("DOMContentLoaded", function () {
    const bannerSection = document.querySelector('.u4m-case-study-hero .banner_section');
    const bannerImage = bannerSection.querySelector('img');
    const pageCenter = document.querySelector('.page-center');

    const setInitialStyles = () => {
        bannerImage.style.transition = 'transform 0.8s ease, width 0.8s ease';
        bannerImage.style.width = '100%'; // Ensure full width initially
        bannerImage.style.transform = 'scale(1)'; // No zoom initially
    };

    const handleScroll = () => {
        const sectionTop = bannerSection.getBoundingClientRect().top;
        const sectionHeight = bannerSection.offsetHeight;

        if (sectionTop <= window.innerHeight / 2 && sectionTop + sectionHeight > 0) {
            // Calculate the desired width based on `.page-center`
            const pageCenterWidth = pageCenter.offsetWidth;
            bannerImage.style.width = `${pageCenterWidth}px`;
            bannerImage.style.transform = 'scale(1)'; // Reset zoom
        } else {
            // Reset image to full-width
            bannerImage.style.width = '100%';
            bannerImage.style.transform = 'scale(1.2)'; // Slight zoom
        }
    };

    setInitialStyles();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll); // Adjust on window resize
});
