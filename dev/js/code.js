$(function(){
	SameHeight();
	function SameHeight() {
		var browserMinWidth = $(window).width();
		if (browserMinWidth > 600) {
			$('.logo').css('height', $('.trade-4').height());
		}
		if (browserMinWidth > 800) {
			$('.advantagelist__try').css('height', $('.advantagelist__wrap-inner-left').height() - 30);
			
		}
		
	}
	$(window).resize(function(){
		SameHeight();
	});
});
