$(function(){
SameHeight();
function SameHeight() {
		var browserMinWidth = $(window).width()
			if (browserMinWidth > 600) {
				$('.logo').css('height', $('.trade-4').height());
			}
$(window).resize(function(){
	SameHeight();
});	
});
