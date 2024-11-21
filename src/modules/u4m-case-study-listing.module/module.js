
$('.filter_sidebar button').click(function() {
	var value = $(this).attr('data-tag');
	$(this).parents().siblings().removeClass('active');

	if ($(this).hasClass('active')) {
		$(this).parents().removeClass('active');

		$('.case_listing_wrap').load(window.location.href.split('?')[0] + '?category=-' + value + ' .case_listing_wrap > *');
		$('.loadmore_btn').load(window.location.href.split('?')[0] + '?category=-' + value + ' .loadmore_btn > *');
	} else {
		$(this).parents().addClass('active');

		$('.case_listing_wrap').load(window.location.href.split('?')[0] + '?category=' + value + ' .case_listing_wrap > *');
		$('.loadmore_btn').load(window.location.href.split('?')[0] + '?category=' + value + ' .loadmore_btn > *');
	}
});