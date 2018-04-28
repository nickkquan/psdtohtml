$(document).ready(initalizeWebsite);

function initalizeWebsite() {
	initializeCarousel();
}

function initializeCarousel() {
	$(".carousel__gallery").slick({
		autoplay: true,
		autoplaySpeed: 5000,
		dots: true,
		infinite: true,
		mobileFirst: true
	});
}