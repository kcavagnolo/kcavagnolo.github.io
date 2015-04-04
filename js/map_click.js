$(document).ready(function () {
	$('#map_canvas1').addClass('scrolloff'); // set the pointer events to none on doc ready
	$('#canvas1').on('click', function () {
		$('#map_canvas1').removeClass('scrolloff'); // set the pointer events true on click
	    });
	$("#map_canvas1").mouseleave(function () {
		$('#map_canvas1').addClass('scrolloff'); // set the pointer events to none when mouse leaves the map area
	    });
    });


