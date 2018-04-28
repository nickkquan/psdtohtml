$(document).ready(initalizeWebsite);

function initalizeWebsite() {
	initializeCarousel();
	// enableHamburgerMenuResponsive();
	// enableHamburgerMenuClick();
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

// function enableHamburgerMenuResponsive() {
// 	window.addEventListener("resize", function() {
// 		console.log("yo am i working");
// 		navbarLayoutChange();
// 	});
// }

// function enableHamburgerMenuClick() {
// 	$(".navigation-bar--mobile").on("click", openHamburgerMenu);
// }

// function openHamburgerMenu() {
// 	$(".navigation-link a").toggleClass("responsive");
// 	$(".navigation-bar--mobile").toggle();
// }

// function navbarLayoutChange() {
// 	if (window.innerWidth > 768) {
// 		$(".navigation-link a").addClass("responsive");
// 		$(".navigation-bar--mobile").hide();
// 	} else if (window.innerWidth <= 768) {
// 		$(".navigation-link a").removeClass("responsive");
// 		$(".navigation-bar--mobile").show();
// 	}
// }
