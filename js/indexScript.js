/**
 * Created by Joel_ on 2017-02-08.
 */

/* Gör så att hemsidan laddas först innan JQuery sätter igång.
 $(document).ready(something);
 */

$(document).ready(function() {
    $('footer').mouseenter(function() {
        $('footer').fadeTo('fast',1);
    });
    $('footer').mouseleave(function() {
        $('footer').fadeTo('fast', 0.5);
    });
	
	/*
	How to perform the fade efect on the button with JS instead of CSS3 
	
	$('#buttonOrder').on({
		mouseenter:function() {
		$('#buttonOrder').css('transition', 'black');
		$('#buttonOrder').css('color', 'floralwhite');
		},
		mouseleave:function(){
		$('#buttonOrder').css('background-color', 'floralwhite');
		$('#buttonOrder').css('color', '#000');
		}
	});
	*/
});
