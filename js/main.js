
'use strict';
$(document).ready(function() {
	$(".ui-loader-header").hide(); 
	
 });

$(window).on('load', function() {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut(); 
	$("#preloder").delay(400).fadeOut("slow");
	$('.con-info').append("<li><i class='flaticon-phone-call'></i>(510)-214-6335</li><li id='#my-mail'><i class='flaticon-envelope'></i>kris.chanthasiriphan@gmail.com</li><li id='#my-addy'><i class='flaticon-placeholder'></i>Alameda, CA 94502</li>");
	
});

(function($) {

	/*------------------
		Navigation
	--------------------*/
	$('.nav-switch').on('click', function(event) {
		$('.main-menu').slideToggle(400);
		event.preventDefault();
	});

	window.onscroll = function() {scrollFunction()};
	
	$("#myBtn").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
	});

	
	
	function scrollFunction() {
		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
			document.getElementById("myBtn").style.display = "block";
		} else {
			document.getElementById("myBtn").style.display = "none";
		}
	}

	// When the user clicks on the button, scroll to the top of the document
	function topFunction() {
		document.body.scrollTop = 0; // For Safari
		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	}
	// nav scroll
	$("#aboutBtn").click(function() {
		$([document.documentElement, document.body]).animate({
			scrollTop: $("#about-me-section").offset().top
		}, 1000);
	});
	$("#portfolioBtn").click(function() {
		$([document.documentElement, document.body]).animate({
			scrollTop: $("#portfolio-section").offset().top
		}, 1000);
	});
	$("#socialBtn").click(function() {
		$([document.documentElement, document.body]).animate({
			scrollTop: $("#social-media-section").offset().top
		}, 1000);
	});
	$("#techBtn").click(function() {
		$([document.documentElement, document.body]).animate({
			scrollTop: $("#technologies-section").offset().top
		}, 1000);
	});
	$("#contactBtn").click(function() {
		$([document.documentElement, document.body]).animate({
			scrollTop: $("#contact-form-section").offset().top
		}, 1000);
	});

	/*------------------
		PORTFOLIO
	--------------------*/
	$('portfolio-info').on("tap", function(){
		$('portfolio-info').css("opacity","0.9");
	})

	if($('.portfolio-warp').length > 0 ) {
		var containerEl = document.querySelector('.portfolio-warp');
		var mixer = mixitup(containerEl);
	}

	// $(window).on('resize', function(){
	// 	var windowSize = $(this).width();
	// 	if(isLargeWindow < 800){
	// 		$('#link-getDev').removeAttr("href");
	// 	}
	// });

	/*------------------
		Background set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});




	/*------------------
		Hero Slider
	--------------------*/
	var w_height = $(window).innerHeight();
	$('.hs-item').height(w_height);
	
	$('.hero-slider').owlCarousel({
		loop: true,
		nav: true,
		dots: true,
		mouseDrag: false,
		animateOut: 'fadeOut',
    	animateIn: 'fadeIn',
		navText: [' ', '<i class="fa fa-angle-right"></i><i class="fa fa-angle-right"></i><i class="fa fa-angle-right"></i>'],
		items: 1,
		autoplay: true
	});
	var dot = $('.hero-slider .owl-dot');
	dot.each(function() {
		var index = $(this).index() + 1;
		if(index < 10){
			$(this).html('0').append(index);
			$(this).append('<span>.</span>');
		}else{
			$(this).html(index);
			$(this).append('<span>.</span>');
		}
	});



	/*------------------
		Work Slider
	--------------------*/
	$('.work-slider').owlCarousel({
		margin: 0,
		loop: true,
		nav: true,
		dots: false,
		items: 1,
		autoplay: true,
		animateOut: 'fadeOut',
    	animateIn: 'fadeIn',
	});


	/*------------------
		Circle progress
	--------------------*/
	$('.circle-progress').each(function() {
		var cpvalue = $(this).data("cpvalue");
		var cpcolor = $(this).data("cpcolor");
		var cptitle = $(this).data("cptitle");
		var cpid 	= $(this).data("cpid");

		$(this).append('<div class="'+ cpid +'"></div><div class="progress-info"><h2>'+ cpvalue +'%</h2><p>'+ cptitle +'</p></div>');

		if (cpvalue < 100) {

			$('.' + cpid).circleProgress({
				value: '0.' + cpvalue,
				size: 240,
				thickness: 3,
				fill: cpcolor,
				emptyFill: "rgba(0, 0, 0, 0)"
			});
		} else {
			$('.' + cpid).circleProgress({
				value: 1,
				size: 240,
				thickness: 3,
				fill: cpcolor,
				emptyFill: "rgba(0, 0, 0, 0)"
			});
		}

	});


	/*------------------
		Accordions
	--------------------*/
	$('.panel-link').on('click', function (e) {
		$('.panel-link').parent('.panel-header').removeClass('active');
		var $this = $(this).parent('.panel-header');
		if (!$this.hasClass('active')) {
			$this.addClass('active');
		}
		e.preventDefault();
	});


function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
})(jQuery);

// $('#videoHandlerDiv').on("click", function(){
// 	$('.videoModal').removeClass('hidden');
// })

/*----------------------
	Mailer
 -----------------------*/

//  error handling

$('#contact-sub-btn').on('click', function(){
	var name = $('#contact-name').val();
	var email = $('#contact-email').val();
	var subject = $('#contact-subject').val();
	if(name === "" || name === " " || /\d/.test(name)){
		$('#contact-name-container').addClass('has-error');
        $('#name-error').text('Invalid Name');
        $('#contact-name').bind('click keyup', function(){
          $('#contact-name-container').removeClass('has-error');
          $('#name-error').text("");
		});
	}
	if(email === ""  || !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gmi.test(email)){
		$('#contact-email-container').addClass('has-error');
        $('#email-error').text('Invalid Email');
        $('#contact-email').bind('click keyup', function(){
          $('#contact-email-container').removeClass('has-error');
		  $('#email-error').text("");
        });
	}
	if(subject === ""){
		$('#contact-subject-container').addClass('has-error');
        $('#subject-error').text('Please Enter Subject Message');
        $('#contact-subject').bind('click keyup', function(){
          $('#contact-subject-container').removeClass('has-error');
		  $('#subject-error').text("");
        });
	}
	else {
		// submitMail();
		$('.contact-loader').show();
		$('.contact-loader').hide();
			$('#contact-name').val('');
			$('#contact-email').val('');
			$('#contact-subject').val('');
			$('#contact-message').val('');
			$('.deliver-message').text('Message Sent')
			$('.deliver-status').css({
				"text-align": "center",
				"color": "green",
				"font-size": "20px",
				"padding-left": "15px"
			});
	}
})

 function submitMail() {
	$.ajax({
		url: 'phpmailer/PHPMailer/mail_handler.php',
		method: 'POST',
		data: {
			name: $('#contact-name').val(),
			email: $('#contact-email').val(),
			subject: $('#contact-subject').val(),
			message: $('#contact-message').val()
		},
		success: function(response) {
			$('.contact-loader').hide();
			$('#contact-name').val('');
			$('#contact-email').val('');
			$('#contact-subject').val('');
			$('#contact-message').val('');
			$('.deliver-message').text('Message Sent')
			$('.deliver-status').css({
				"text-align": "center",
				"color": "green",
				"font-size": "20px",
				"padding-left": "15px"
			});
		}, 
		error: function(response) {
			console.log('email not sent');
		}             
	});
};




