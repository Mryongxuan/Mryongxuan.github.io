$(function () {
//	轮播图
	(function () {
		var $fade_img = $('#fade_img');
		var $nav_span = $('.nav_span');
		var $slideshow = $('.slideshow').width();
		var imgs = ["lunbo.jpg","lunbo.jpg"];
		var htmlspan = "";
		
		$(window).on('resize',function () {
			$slideshow = $('.slideshow').width();
			$nav_span.css('left',($slideshow - parseInt($nav_span.css('width')))/2);
		});
		
		$fade_img.attr("src","img/" + imgs[0]);
		
		$.each(imgs, function () {
			htmlspan += "<span></span>";
		});
		
		$nav_span.html(htmlspan);
		
		$nav_span.css('left',($slideshow - parseInt($nav_span.css('width')))/2);
		console.log($slideshow)
	})();
});
	