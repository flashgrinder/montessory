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

		var mySwiper1 = new Swiper ('.headerBanner__slider', {
			// Optional parameters
			direction: 'horizontal',
			loop: true,
			effect: 'fade',
			allowTouchMove: false,
			watchSlidesProgress: true,
			autoplay: {
				delay: 4000
			}
		});

		var mySwiper2 = new Swiper ('.teachersSlider', {
			// Optional parameters
			direction: 'horizontal',
			loop: true,
			slidesPerView: 5,
			slidesPerGroup: 5,
			loopFillGroupWithBlank: true,
			watchSlidesProgress: true,
			autoplay: {
				delay: 4000
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			}
		});

});
//# sourceMappingURL=common.js.map
