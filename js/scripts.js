$(document).ready(function() {
	$('.worker').hide();
	$('.image').on('click', function(event) {
		$(this).closest('.col-4').find('.worker').slideToggle();
  });	
});


