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

		var posKV = 0;
		var pos01 = Math.round($("#ConceptMovie").offset().top) - headerH;
		var pos02 = Math.round($("#MainContents").offset().top) - headerH;
		var pos03 = Math.round($("#Instagram").offset().top) - headerH;
		var pos04 = Math.round($("#News").offset().top) - headerH;
		var pos05 = Math.round($("#VisitUs").offset().top) - headerH;
		var posFooter = Math.round($("#Footer").offset().top) - headerH;

		var headerSec = $('#Header .Contents .sec');

		$(window).on('scroll',function(){
			var posScroll = $(window).scrollTop();

			if(posKV <= posScroll && posScroll < pos01) {
				$('#Header').addClass('KV');
				$('nav#sideMenu').addClass('KV');
				headerSec.removeClass('sec01');
				headerSec.addClass('secKV');
			} else if(pos01 <= posScroll && posScroll < pos02) {
				$('#Header').removeClass('KV');
				$('nav#sideMenu').removeClass('KV');
				headerSec.removeClass('secKV');
				headerSec.removeClass('sec02');
				headerSec.addClass('sec01');
			} else if(pos02 <= posScroll && posScroll < pos03) {
				headerSec.removeClass('sec01');
				headerSec.removeClass('sec03');
				headerSec.addClass('sec02');
			} else if(pos03 <= posScroll && posScroll < pos04) {
				headerSec.removeClass('sec02');
				headerSec.removeClass('sec04');
				headerSec.addClass('sec03');
			} else if(pos04 <= posScroll && posScroll < pos05) {
				headerSec.removeClass('sec03');
				headerSec.removeClass('sec05');
				headerSec.addClass('sec04');
			} else if(pos05 <= posScroll && posScroll) {
				headerSec.removeClass('sec04');
				headerSec.addClass('sec05');
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
			} else if($(this).hasClass('VisitUs')) {
				$(window).scrollTop(pos05);
			} else if($(this).hasClass('Foot')) {
				$(window).scrollTop(posFooter);
			}
		});


		if (windowWidth <= windowTB) {
		} else {
			$(window).on('scroll',function(){
				var posScroll = $(window).scrollTop();
				var scrollNum = 1 + ((posScroll - pos01)) / 800;
				if(1 <= scrollNum && scrollNum < 2) {
					$('#topPage section#ConceptMovie .Section .Contents .bg').css('transform', 'scale('+scrollNum+')');
				} else if(1 <= scrollNum && scrollNum > 2) {
					$('#topPage section#ConceptMovie .Section .Contents .bg').css('transform', 'scale(2)');
				}
			});
		}








	}
	









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
		duration: 1000,
		mobile: true,
		viewFactor: 0.1,
		scale: 1
	};

	var slideUp = {
		distance: '100px',
		origin: 'bottom',
		interval: 100,
		duration: 1000,
		mobile: true,
		scale: 1
	};

	var slideDown = {
		distance: '50px',
		origin: 'top',
		interval: 100,
		duration: 1000,
		mobile: true,
		scale: 1
	};

	var slideLeft = {
		distance: '50px',
		origin: 'left',
		interval: 100,
		duration: 1000,
		mobile: true,
		scale: 1
	};

	var slideRight = {
		distance: '50px',
		origin: 'right',
		interval: 100,
		duration: 1000,
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

	scroller.reveal('.spanAnim, section .Linear, #topPage section#Instagram .Contents .Holder, #topPage section .sec .num', { afterReveal: MyAddClass });

	function MyAddClass(el){
		el.classList.add('active');
	}





});
