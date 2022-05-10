// JavaScript Document

$(".slide-section").on('click', function(e){
	e.preventDefault();
	
	if ($(window).width() < 584) {
	$('.navigation').toggleClass('open');
		}

});