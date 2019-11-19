document.addEventListener('DOMContentLoaded', function(e){

		// var tl = anime.timeline({
		// 	easing: 'easeOutExpo',
		// 	});

		// function SliderStart (){
		// 	tl
		// 	.add({
		// 		targets: 'svg .letter_B',
		// 		scale: [0.01, 1.1, 1],
		// 		// duration: 1300,
		// 	})
		// 	.add({
		// 		targets: 'svg .letter_E-1',
		// 		scale: [0.01, 1.1, 1],
		// 		duration: 1300,
		// 	},200)
		// 	.add({
		// 		targets: 'svg .letter_S',
		// 		scale: [0.01, 1.1, 1],
		// 		duration: 1300,
		// 	},200)
		// 	.add({
		// 		targets: 'svg .letter_F',
		// 		scale: [0.01, 1.1, 1],
		// 		duration: 1300,
		// 	},400)
		// 	.add({
		// 		targets: 'svg .letter_D',
		// 		scale: [0.01, 1.1, 1],
		// 		duration: 1300,
		// 	},400)
		// 	.add({
		// 		targets: 'svg .letter_R',
		// 		scale: [0.01, 1.1, 1],
		// 		duration: 1300,
		// 	},500)
		// 	.add({
		// 		targets: 'svg .letter_N',
		// 		scale: [0.01, 1.1, 1],
		// 		duration: 1300,
		// 	},500)
		// 	.add({
		// 		targets: 'svg .letter_E-2',
		// 		scale: [0.01, 1.1, 1],
		// 		duration: 1300,
		// 	},700)
		// 	.add({
		// 		targets: 'svg .letter_I',
		// 		scale: [0.01, 1.2, 0.8, 1],
		// 		duration: 1300,
		// 	},1000)
		// 	.add({
		// 		targets: 'svg .hand',
		// 		opacity: [0, 1],
		// 		scale: [0.01, 1.05, 0.9],
		// 		duration: 1300,
		// 	},1800)
		// 	.add({
		// 		targets: 'svg .hand',
		// 		keyframes: [
		// 			{rotate: 0},
		// 			{rotate: 50},
		// 			{rotate: 0},
		// 			{rotate: 50},
		// 			{rotate: 0}
		// 		],
		// 		easing: 'easeInExpo',
		// 		duration: 1500,
		// 	})
		// 	.add({
		// 		targets: 'svg .star_top',
		// 		scale: [0.01, 1.1, 1],
		// 		duration: 1300,
		// 	},2800)
		// 	.add({
		// 		targets: 'svg .star_bottom',
		// 		scale: [0.01, 2.4, 1],
		// 		duration: 1300,
		// 	},3000)
		// 	.add({
		// 		targets: 'svg .star_middle',
		// 		scale: [0.01, 2, 1],
		// 		duration: 1300,
		// 	},3400)
		// 	.add({
		// 		targets: 'svg .letter_descr',
		// 		opacity: [0, 1],
		// 		duration: 1300,
		// 	},'-=800');
		// };

		var mobMenu = document.querySelector('.headerContainer__burger');
		var menuToggle = document.querySelector('.headerContainer__menu');

		mobMenu.addEventListener('click', function(e) {
			menuToggle.classList.toggle('headerContainer__menu_active');
			e.preventDefault;
		})

		var sliderHeader = new Swiper ('.headerBanner__slider', {
			// Optional parameters
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
			// Optional parameters
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
				992: {
					slidesPerView: 3,
					slidesPerGroup: 3
				},
				1024: {
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
			// Optional parameters
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
			selector : '.galleryMasonry__item a:visible',
			afterLoad : function(instance, current) {
				var pixelRatio = window.devicePixelRatio || 1;
		
				if ( pixelRatio > 1.5 ) {
					current.width  = current.width  / pixelRatio;
					current.height = current.height / pixelRatio;
				}
			},
			buttons: [
				"zoom",
				"share",
				"slideShow",
				"thumbs",
				"close"
			],
		});

});
//# sourceMappingURL=common.js.map
