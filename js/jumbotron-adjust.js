
// adjust the jumbotron to work properly on large screens


$(document).ready(function () {

	var docHeight = $( document ).height();
	console.log(docHeight);

	if( docHeight > 1060)
	{$(".jumbotron").css({ "height": docHeight
												,"background-size": "100%"
											})};
//$('.jumbotron').css({ height: $(document).height()})


});
