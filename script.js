$(document).ready(function(){

	$('.gracias').hide();
	
	
	//post click need new screen

	$('#faces').on('click', function(){
		// e.preventDefault();
		$('.survey').hide(1000);
		$('.gracias').show('slow').delay(2000).hide(1000);
		$('.survey').delay(2000).show('slow');

		// setTimeout('reload()', 800);
		// setTimeout(location.reload() = ".", 600);
	});



	// $('#something').click(function() {
 //    location.reload();
	// });
});