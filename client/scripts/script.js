$(document).ready(initalizeWebsite);

function initalizeWebsite() {
	initializeCarousel();
	activateHamburgerMenu();
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

function activateHamburgerMenu() {
	$("#hamburger-menu").on("click", function() {
		$(".navigation-bar").toggleClass("responsive");
	});
}
