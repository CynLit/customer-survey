$(document).ready(function(){

	$('.gracias').hide();

	$('#faces').on('click', function(e){
		e.preventDefault();
		$('.survey').hide(1000);
		$('.gracias').show('slow').delay(2000).hide(1000);
		$('.survey').delay(2000).show('slow');
		
	});
    

	//submit customer score to database

// 	$('#button').click(function(){ // when user `click` element with `id="button"` (#button)
//  $.ajax({ // Start AJAX call
//   url: 'accept.php', // URL to send AJAX request
//   success: function(data) { // Function to execute on SUCCESS reply (reply data as paramenter)
//     var cc = $('#clicks_count').html(); // In your element with `id="clicks_count"` you store your click count (`<a id="clicks_count">21</a>`). Assign to `cc` javascript variable value of clicls_count
//     $('#clicks_count').html(cc + 1); // Increasing clicls_count on 1 and write it to `<a id="clicks_count">22</a>`
//   }
// });
// });

//     function submitCustomerScore() {  
          
//        {  
      
//             $.ajax({  
//                 type: "POST",  
//                 dataType: "json",  
//                 contentType: "application/json; charset=utf-8",  
//                 url: "",  
//                 data: "{'Score':'" + Name + "'}",  
//                 success: function (Record) {  
                       
//                         $(score); 
  
  
//                     if (Record.d == true) {  
                  
//                         $('#Result').text("Your Record insert");  
//                     }  
//                     else {  
//                         $('#Result').text("Your Record Not Insert");  
//                     }  
  
//                 },  
//                 Error: function (textMsg) {  
                      
//                     $('#Result').text("Error: " + Error);  
//                 }  
//             });  
//         }  
//         else {             
//             $('#Result').html('');  
//             $('#Result').html(Messege);  
//         }  
//         $('#Result').fadeIn();  
//     }  
	
});