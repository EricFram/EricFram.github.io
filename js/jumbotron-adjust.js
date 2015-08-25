
// adjust the jumbotron to work properly on large screens
$(document).ready(function () {

	var docHeight = $( document ).height();

	if( docHeight > 1024)
	{$(".jumbotron").css({ "height": docHeight
												,"background-size": "100%"
												})};
//$('.jumbotron').css({ height: $(document).height()})


});
