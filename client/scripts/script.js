$(document).ready(initalizeWebsite);

function initalizeWebsite() {
	initializeCarousel();
	activateHamburgerMenu();
	navBarTransparency();
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

function navBarTransparency() {
	$(window).scroll(function() {
		if ($(window).scrollTop() >= 300) {
			$(".navigation").css("background", "black");
		} else {
			$(".navigation").css("background", "rgba(0, 0, 0, 0.75)");
		}
	});
}
