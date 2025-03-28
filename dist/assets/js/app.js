$(window).on('load', function() {




	// $('body').removeClass('LoadingNow');
	// $('body').addClass('LoadingEnd');
		





	var documentHeight = $(document).height();
	var windowWidth = $(window).width();
	var windowHeight = window.innerHeight;
	var windowHeightHulf = windowHeight / 2;
	var windowSP = 480;
	var windowTB = 835;
	// var windowTBw = 1366;





	//-_-_-_-_-  height　デバイスサイズ取得
	var windowHeight = document.documentElement.clientHeight;
	var target = $('.deviseHeight');

	target.height(windowHeight)
	target.outerHeight(windowHeight)

	$(window).resize(function() {
		target.height( document.documentElement.clientHeight );
	});





	//-_-_-_-_-  ブラウザバックで強制リロード
	window.onpageshow = function(event) {
		if (event.persisted) {
			window.location.reload();
		}
	};





	//-_-_-_-_-  target & rel 追加
	var targetBlank = $('.targetBlank');

	targetBlank.attr({
		target: '_blank',
		rel: 'noopener'
	});





	//-_-_-_-_-  hover 無効
	var touch = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
	if(touch) {
		try {
			for (var si in document.styleSheets) {
				var styleSheet = document.styleSheets[si];
				if (!styleSheet.rules) continue;
				for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
					if (!styleSheet.rules[ri].selectorText) continue;
					if (styleSheet.rules[ri].selectorText.match(':hover')) {
						styleSheet.deleteRule(ri);
					}
				}
			}
		} catch (ex) {}
	}




	//-_-_-_-_-  page内link
	$('a').on('click', function(){
		var hash = location.hash;
		var hashFirst = hash.slice(0,1);
		if(hashFirst == '#') {
			var speed = 600;
			var target = $(hash == "#" || hash == "" ? 'html' : hash);
			var position = target.offset().top;
			$('body,html').animate({scrollTop:position}, speed, 'swing');
			console.log(position);

			return false;
		}
	});





	//-_-_-_-_-  span
	$(".spanAnim .row").each(function() {
		var content = $(this).html();
		var trimText = $.trim(this.textContent);
		var newText = "";

		trimText.split("").forEach(function(e) {
			if(e == ' '){
				newText += "<span class='Split'><b class='SplitInner space'></b><i></i></span>";
			} else {
				newText += "<span class='Split'><b class='SplitInner'>" + e + "</b><i></i></span>";
			}
		});
		$(this).html(newText);
	});





	//-_-_-_-_-  resize reload
	if (windowWidth <= windowTB) {
		// TB
	} else {
		// PC

		var timer = 0;
		var currentWidth = window.innerWidth;
		$(window).resize(function(){
			if (currentWidth == window.innerWidth) {
				return;
			}
			if (timer > 0) {
				clearTimeout(timer);
			}

			timer = setTimeout(function () {
				location.reload();
			}, 200);

		});

	}



	

	//-_-_-_-_-  Menu
	$('nav#sideMenu .Contents .RightBlock').click(function(){
		$('#Menu').addClass('active');
	});
	var closeList = $('#Menu .menuClose, #Menu .Section .Contents .MainMenu');
	closeList.click(function(){
		$('#Menu').removeClass('active');
	});
	












	//-_-_-_-_-  topPage
	if ( window.document.body.id === 'topPage' ) {

		if (windowWidth <= windowTB) {
			var headerH = $('header#Header').innerHeight();
		} else {
			var headerH = ($('header#Header').innerHeight()) / 2;
		}

		var s01 = $('section#KV .movieBlock:nth-child(1) .img');
		var n01 = s01.length;
		var s02 = $('section#KV .movieBlock:nth-child(2) .img');
		var n02 = s02.length;
		var s03 = $('section#KV .movieBlock:nth-child(3) .img');
		var n03 = s01.length;
		function replaceAddClass(i) {
			s01.eq(i).siblings().removeClass('active');
			s01.eq(i).addClass('active');
			s02.eq(i).siblings().removeClass('active');
			s02.eq(i).addClass('active');
			s03.eq(i).siblings().removeClass('active');
			s03.eq(i).addClass('active');
		}
		var i = 0; replaceAddClass(i);
		setInterval(function(){
			i++;
			if ( !(i < n01) ) { i = 0; }
			replaceAddClass(i);
		}, 5000);


		
		var posKV = 0;
		var pos01 = Math.round($("#ConceptMovie").offset().top);
		var pos02 = Math.round($("#MainContents").offset().top);
		var pos03 = Math.round($("#Instagram").offset().top);
		var pos04 = Math.round($("#News").offset().top);
		var pos05 = Math.round($("#ShopAccess").offset().top);
		var posFooter = Math.round($("#Footer").offset().top);

		var headerSec = $('#Header .Contents .sec');

		$(window).on('scroll',function(){
			var posScroll = $(window).scrollTop();

			if(posKV <= posScroll && posScroll < pos01  - headerH) {
				$('#Header').addClass('KV');
				$('nav#sideMenu').addClass('KV');
				headerSec.removeClass('sec01');
				headerSec.addClass('secKV');
			} else if(pos01  - headerH <= posScroll && posScroll < pos02 - headerH) {
				$('#Header').removeClass('KV');
				$('nav#sideMenu').removeClass('KV');
				headerSec.removeClass('secKV');
				headerSec.removeClass('sec02');
				headerSec.addClass('sec01');
			} else if(pos02 - headerH <= posScroll && posScroll < pos03 - headerH) {
				headerSec.removeClass('sec01');
				headerSec.removeClass('sec03');
				headerSec.addClass('sec02');
			} else if(pos03 - headerH <= posScroll && posScroll < pos04 - headerH) {
				headerSec.removeClass('sec02');
				headerSec.removeClass('sec04');
				headerSec.addClass('sec03');
			} else if(pos04 - headerH <= posScroll && posScroll < pos05 - headerH) {
				headerSec.removeClass('sec03');
				headerSec.removeClass('sec05');
				headerSec.addClass('sec04');
			} else if(pos05 - headerH <= posScroll && posScroll) {
				headerSec.removeClass('sec04');
				headerSec.addClass('sec05');
			}

			if(posFooter - windowHeight < posScroll) {
				console.log(posFooter);
				$('body nav#sideMenu .Contents .BottomBlock').css('transform', 'translateY(8rem)');
			} else {
				$('body nav#sideMenu .Contents .BottomBlock').css('transform', 'translateY(0)');
			}

		});
		


		$('.secLink').on('click', function(){
			if($(this).hasClass('ConceptMovie')) {
				$(window).scrollTop(pos01);
			} else if($(this).hasClass('MainContents')) {
				$(window).scrollTop(pos02);
			} else if($(this).hasClass('Instagram')) {
				$(window).scrollTop(pos03);
			} else if($(this).hasClass('News')) {
				$(window).scrollTop(pos04);
			} else if($(this).hasClass('ShopAccess')) {
				$(window).scrollTop(pos05);
			} else if($(this).hasClass('Foot')) {
				$(window).scrollTop(posFooter);
			}
		});



		var posOurBeer = Math.round($("#OurBeer").offset().top);
		var posOurConcept = Math.round($("#OurConcept").offset().top);
		
		$('.lwp').on('click', function(){
			var speed = 600;

			if (windowWidth <= windowTB) {
				if($(this).hasClass('OurBeer')) {
					$('body,html').animate({scrollTop:posOurBeer - headerH}, speed, 'swing');
				} else if($(this).hasClass('OurConcept')) {
					$('body,html').animate({scrollTop:posOurConcept - headerH}, speed, 'swing');
				} else if($(this).hasClass('Instagram')) {
					$('body,html').animate({scrollTop:pos03 - headerH}, speed, 'swing');
				} else if($(this).hasClass('ShopAccess')) {
					$('body,html').animate({scrollTop:pos05 - headerH}, speed, 'swing');
				} else if($(this).hasClass('News')) {
					$('body,html').animate({scrollTop:pos04 - headerH}, speed, 'swing');
				}
			} else {
				if($(this).hasClass('OurBeer')) {
					$('body,html').animate({scrollTop:posOurBeer}, speed, 'swing');
				} else if($(this).hasClass('OurConcept')) {
					$('body,html').animate({scrollTop:posOurConcept}, speed, 'swing');
				} else if($(this).hasClass('Instagram')) {
					$('body,html').animate({scrollTop:pos03}, speed, 'swing');
				} else if($(this).hasClass('ShopAccess')) {
					$('body,html').animate({scrollTop:pos05}, speed, 'swing');
				} else if($(this).hasClass('News')) {
					$('body,html').animate({scrollTop:pos04}, speed, 'swing');
				}
			}
	
		});


		// if (windowWidth <= windowTB) {
		// } else {
		// 	$(window).on('scroll',function(){
		// 		var posScroll = $(window).scrollTop();
		// 		var scrollNum = 1 + ((posScroll - pos01)) / 800;
		// 		if(1 <= scrollNum && scrollNum < 2) {
		// 			$('#topPage section#ConceptMovie .Section .Contents .bg').css('transform', 'scale('+scrollNum+')');
		// 		} else if(1 <= scrollNum && scrollNum > 2) {
		// 			$('#topPage section#ConceptMovie .Section .Contents .bg').css('transform', 'scale(2)');
		// 		}
		// 	});
		// }








	}
	












	//-_-_-_-_-  aboutusPage
	if ( window.document.body.id === 'aboutusPage' ) {
		const popup = $('#popup');
		const popupBtnOpen = $('section#Vision .Section .popupContents .Block ul li');
		const popupBtnClose = $('#popup .Section .Btn');


		popupBtnOpen.click(function(){
			popup.addClass('open');
			$('#popup .Section .Contents').scrollTop(0);
	
			const thisClass = $(this).attr('class');
			const titleJP = $(this).data('title_jp');
			const titleEN = $(this).data('title_en');
			const textJP = $(this).data('text_jp');
			const textEN = $(this).data('text_en');
			const img = $(this).data('image');


			popup.addClass(thisClass);
			popup.find('.Header h3').html(titleJP);
			popup.find('.Header .sub').html(titleEN);
			popup.find('.textArea p.JP').html(textJP);
			popup.find('.textArea p.EN').html(textEN);
			popup.find('img').attr('src', img);
		});
	
		popupBtnClose.click(function(){
			popup.removeClass();
			popup.addClass('widthM');
			$('#popup .Section .Contents').scrollTop(0);
		});
			


	}












	//-_-_-_-_-  breweryPage
	if ( window.document.body.id === 'breweryPage' ) {



		$(function(){

			if (windowWidth <= windowSP) {
				// SP
				slidesNum = '1'
			} else {
				// PC
				slidesNum = '3'
			}
				

			const swiper = new Swiper('.brandSlider', {
				slidesPerView: slidesNum,
				spaceBetween: 1,
				grabCursor: true,
				// pagination: {
				// 	el: '.swiper-pagination',
				// 	clickable: true,
				// },
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				speed: 1000,
				autoplay: {
					delay: 4000,
					disableOnInteraction: false,
				},
				loop: true,
				loopAdditionalSlides: 1,
			});

			

		});





	}
	












	//-_-_-_-_-  ourbeerPage
	if ( window.document.body.id === 'ourbeerPage' ) {


		const viewBtn = $('section.ourbeerSec#Projects .Section .Contents .Block .ViewBtn');
		const headerHeight = $('#Header').height();

		viewBtn.click(function(){
			$(this).parent('.Block').toggleClass('open');
			$(this).parent('.Block').find('.detailsContents').slideToggle();
			const thisTop = $(this).parent('.Block').offset().top;
			const thisHead = thisTop - headerHeight - 50 + 'px';
			$("html, body").animate({scrollTop:thisHead}, 250);
		});



		$(function(){

			const slideLength = document.querySelectorAll('.makerSlider .swiper-slide').length;

			const swiper = new Swiper('.makerSlider', {
				slidesPerView: 'auto',
				// spaceBetween: 16,
				loop: true,
				loopedSlides: slideLength,
				speed: 8000,
				autoplay: {
					delay: 0,
					disableOnInteraction: false,
				},
				freeMode: {
					enabled: true,
					momentum: false,
				},
				grabCursor: true,
				// breakpoints: {
				// 	1025: {
				// 		spaceBetween: 32,
				// 	}
				// },
				on: {
					touchEnd: (swiper) => {
						swiper.slideTo(swiper.activeIndex + 1);
					}
				}
			});
			window.addEventListener('load', function(){
				swiper(); // ページ読み込み後に初期化
			});

			

		});
	
			


	}


	

	//-_-_-_-_-  LowPage
	if($('body').hasClass('LowPage')) {
		$('nav#sideMenu').removeClass('KV');
	};












	//-_-_-_-_-  luxy
	if (windowWidth <= windowTB) {
		// TB
	} else {
		// PC
		luxy.init({
			wrapper: "#main", // 慣性スクロールを囲む要素のID
			targets: ".pallax", // パララックスの要素のclass名
			wrapperSpeed: 0.06, // スクロールスピード
		});
	}




	









	//-_-_-_-_- Other Animation
	var fadeIn = {
		distance: '0px',
		origin: 'bottom',
		interval: 400,
		duration: 2500,
		mobile: true,
		viewFactor: 0.1,
		scale: 1
	};

	var slideUp = {
		distance: '100px',
		origin: 'bottom',
		interval: 100,
		duration: 2500,
		mobile: true,
		scale: 1
	};

	var slideDown = {
		distance: '50px',
		origin: 'top',
		interval: 100,
		duration: 2500,
		mobile: true,
		scale: 1
	};

	var slideLeft = {
		distance: '50px',
		origin: 'left',
		interval: 100,
		duration: 2500,
		mobile: true,
		scale: 1
	};

	var slideRight = {
		distance: '50px',
		origin: 'right',
		interval: 100,
		duration: 2500,
		mobile: true,
		scale: 1
	};


	//-_-_-_-_- DOM animation
	var scroller = new ScrollReveal();

	scroller.reveal('.fadeIn', fadeIn);
	scroller.reveal('.fadeIn01, .fadeIn02, .fadeIn03, .fadeIn04', fadeIn, 100);

	scroller.reveal('.slideUp', slideUp);
	// scroller.reveal('.slideUp01, .slideUp02, .slideUp03', slideUp, 100);

	// scroller.reveal('.slideDown', slideDown);
	// scroller.reveal('.slideDown01', slideDown, 100);

	scroller.reveal('.slideLeft', slideLeft);
	// scroller.reveal('.slideLeft01', slideLeft, 100);
	// scroller.reveal('.slideLeft02', slideLeft, 100);
	// scroller.reveal('.slideLeft03', slideLeft, 100);

	scroller.reveal('.slideRight', slideRight);
	// scroller.reveal('.slideRight01', slideRight, 100);
	// scroller.reveal('.slideRight02', slideRight, 100);
	// scroller.reveal('.slideRight03', slideRight, 100);

	scroller.reveal('.spanAnim, section .Linear, #topPage section#Instagram .Section .Contents .Holder, #topPage section .sec .num', { afterReveal: MyAddClass });

	function MyAddClass(el){
		el.classList.add('active');
	}





});
