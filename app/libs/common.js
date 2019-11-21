document.addEventListener('DOMContentLoaded', function(e){

		var mobMenu = document.querySelector('.headerContainer__burger');
		var menuToggle = document.querySelector('.headerContainer__menu');

		mobMenu.addEventListener('click', function(e) {
			menuToggle.classList.toggle('headerContainer__menu_active');
			e.preventDefault;
		})

		var sliderHeader = new Swiper ('.headerBanner__slider', {
			direction: 'horizontal',
			loop: true,
			effect: 'fade',
			allowTouchMove: false,
			watchSlidesProgress: true,
			speed: 3000,
			fadeEffect: {
				crossFade: true
			},
			autoplay: {
				delay: 4000
			}
		});

		var sliderTeacher = new Swiper ('.teachersSlider', {
			direction: 'horizontal',
			loop: true,
			slidesPerView: 5,
			slidesPerGroup: 5,
			loopFillGroupWithBlank: true,
			watchSlidesProgress: true,
			speed: 3000,
			autoplay: {
				delay: 4000
			},
			breakpoints: {
				575: {
					slidesPerView: 1,
					slidesPerGroup: 1
				},
				767: {
					slidesPerView: 2,
					slidesPerGroup: 2
				},
				1024: {
					slidesPerView: 3,
					slidesPerGroup: 3
				},
				1280: {
					slidesPerView: 4,
					slidesPerGroup: 4
				}
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			}
		});

		var sliderCenter = new Swiper ('.centerSlider', {
			direction: 'horizontal',
			loop: true,
			speed: 2000,
			effect: 'coverflow',
			coverflowEffect: {
				rotate: 30,
				slideShadows: false,
			  },
			autoplay: {
				delay: 4000
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			}
		});

		$('[data-fancybox="gallery"]').fancybox({
			afterLoad : function(instance, current) {
				var pixelRatio = window.devicePixelRatio || 1;
		
				if ( pixelRatio > 1.5 ) {
					current.width  = current.width  / pixelRatio;
					current.height = current.height / pixelRatio;
				}
			},
			loop: true,
			selector : '.galleryMasonry a:visible',
			buttons: [
				"share",
				"slideShow",
				"fullScreen",
				"thumbs",
				"close"
			],
		});

		$('[data-fancybox="blog"]').fancybox({
			afterLoad : function(instance, current) {
				var pixelRatio = window.devicePixelRatio || 1;
		
				if ( pixelRatio > 1.5 ) {
					current.width  = current.width  / pixelRatio;
					current.height = current.height / pixelRatio;
				}
			},
			loop: true,
			selector : '.galleryMasonry a:visible',
			buttons: [
				"share",
				"slideShow",
				"fullScreen",
				"thumbs",
				"close"
			],
		});

});