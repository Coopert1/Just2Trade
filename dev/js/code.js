$(function(){
SameHeight();
function SameHeight() {
		var browserMinWidth = $(window).width()
			if (browserMinWidth > 600) {
				$('.logo').css('height', $('.trade-4').height());
			}
			// else{
			// 	('.logo').css('width',100+ % +)	
			// }
		}
$(window).resize(function(){
	SameHeight();
});	
});
