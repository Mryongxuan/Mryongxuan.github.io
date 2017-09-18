$(function () {
//	轮播图插件配合代码
	(function () {
		var swiper = new Swiper('.swiper-container', {
		    pagination: '.swiper-pagination',
		    paginationClickable: true
		});
	})();
	
//	自动轮播
	(function () {
		
	})();
//	倒计时
	(function () {
		var oldtime = new Date("2017/12/01");
		var time = null;
		var day = null,hour = null,minute = null,seconds = null;
		setInterval(function () {
			var newtime = new Date();
			time = oldtime - newtime;
			if(time <= 0){
				time = 0;
			}
			day = buling(parseInt(time / 1000 / 60 / 60 / 24)); 
			hour = buling(parseInt(time / 1000 / 60 / 60 % 24)); 
			miute = buling(parseInt(time / 1000 / 60 % 60)); 
			seconds = buling(parseInt(time / 1000 % 60 )); 
			$('#time_01').html(hour);
			$('#time_02').html(miute);
			$('#time_03').html(seconds);
		},1000);
		
		function buling (n) {
			return (n < 10) ? '0' + n : n;
		}
	})();
	
//	回到顶部
	(function () {
		$('.go').click(function () {
			$('html,body').animate({scrollTop:'0px'},800);
		});
	})();
});
	