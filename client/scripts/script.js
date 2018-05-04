$(document).ready(() => site.initializeWebsite());

class Website {
	initializeWebsite() {
		this.initializeCarousel();
		this.activateHamburgerMenu();
		this.navBarTransparency();
	}

	initializeCarousel() {
		$(".carousel__gallery").slick({
			autoplay: true,
			autoplaySpeed: 5000,
			dots: true,
			infinite: true,
			mobileFirst: true
		});
	}

	activateHamburgerMenu() {
		$("#hamburger-menu").on("click", () => {
			$(".navigation-bar").toggleClass("responsive");
		});
	}

	navBarTransparency() {
		$(window).scroll(() => {
			if ($(window).scrollTop() >= 150) {
				$(".navigation").css("background", "black");
			} else {
				$(".navigation").css("background", "rgba(0, 0, 0, 0.75)");
			}
		});
	}
}

const site = new Website();
