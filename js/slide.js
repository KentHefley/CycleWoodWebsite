// JavaScript Document

//get header nav height

var headerHeight = $('nav').outerHeight();

$(document).ready(function() {
	$('.slide-section').click(function(e) {
		var linkHref = $(this).attr('href');
		
		
		$('html, body').animate({
			scrollTop: $(linkHref).offset().top - headerHeight
		}, 1000);
		
		
		e.preventDefault();
		
		
	});
	
});

 
