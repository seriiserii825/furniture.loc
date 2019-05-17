$(function () {
  /*
      https://www.jqueryscript.net/animation/Smooth-Mouse-Wheel-Scrolling-Plugin-With-jQuery-easeScroll.html
      ===========================*/
	$("html").easeScroll({
		frameRate: 60,
		animationTime: 1000,
		stepSize: 90,
		pulseAlgorithm: 1,
		pulseScale: 8,
		pulseNormalize: 1,
		accelerationDelta: 20,
		accelerationMax: 1,
		keyboardSupport: true,
		arrowScroll: 50,
		touchpadSupport: true,
		fixedBackground: true
	});

	let langDropDown = function () {
		let langLink = $('#js-lang__link');
		let langList = $('#js-lang-list');

		langLink.on('click', function () {
			$('#js-lang-list').toggleClass('lang-list--down');
		});

		$('#js-lang-list .lang-list__item').on('click', function () {
			let langListItemText = $(this).text();
			langLink.text(langListItemText);
			langList.removeClass('lang-list--down');
		});
	};

	let sandwitch = function () {
		$(document).on('click', '.sandwitch__wrapper', function () {
			$(this).toggleClass('sandwitch__wrapper--active');
		});
	};

	let openMenu = function () {
		$(document).on('click', '.sandwitch__wrapper', function () {
			let $this = $(this);
			let menuWrapper = $('.menu__wrapper');

			if ($this.hasClass('sandwitch__wrapper--active') === false) {
				menuWrapper.removeClass('menu__wrapper--open');
			} else {
				menuWrapper.addClass('menu__wrapper--open');
			}
		});
	};

	langDropDown();
	sandwitch();
	openMenu();

});



