$(function () {
//	首页：拉式轮播图 + 拖拽
(function () {
	var $tm1_con = $('#tm1_con').width();
	var $video_no = $('.video_no');
	var $swiper_wrapper = $('.swiper_wrapper');
	var $guide_a = $('.guide a');
	var now = 0;
	var timer = 0;
	var downX = 0,downY = 0,moveX = 0,moveY = 0,upX = 0,upY = 0;
	
	$(window).on('resize', function () {
		$tm1_con = $('#tm1_con').width();
		$video_no.css({"left": -$tm1_con * now});
	});
	
	
	function stop () {
		now += 1;
		if(now === $swiper_wrapper.size()){
			now = 1;
			$video_no.css('left',0);
		}
		$video_no.stop().animate({"left": -$tm1_con * now});
		$guide_a.eq(now % ($swiper_wrapper.size() - 1)).addClass('active').siblings('.guide a').removeClass('active');
	}
	function abc () {
		timer = setInterval(function () {
			stop ();
		},4000);
	}
	abc();
	
	$guide_a.mouseenter(function () {
		now = $(this).index();
		$video_no.stop().animate({"left": -$tm1_con * now});
		$guide_a.eq(now % ($swiper_wrapper.size() - 1)).addClass('active').siblings('.guide a').removeClass('active');
	});
	
	$guide_a.mouseenter(function () {
		clearInterval(timer);
	});
	
	$guide_a.mouseleave(function () {
		abc();
	});
})();
//	上下：滚轮翻页
(function () {
	var $con = $('.content');
	var $c_head = $('.content .head');
	var $item = $('.item1').height();
	var $ltl = $('#ltl');
	var $ltl_li = $('#ltl li');
	var $pre = $('#pre');
	var $next = $('#next');
	var $line = $('#line_w');
	var $line_w = $('#line_w').width();
	var $movedown = $('.movedown');
	var $cert = $('.cert');
	var now = 0;
	var onoff = true;
	var downX = 0,downY = 0,upX = 0,upY = 0;
	
//	屏幕改变跟随
	$(window)
	.on('resize',function () {
		$item = $('.item1').height();
		anme ($con);
	})
	.on('mousedown',function (ev) {
		downX = ev.clientX;
		downY = ev.clientY;
		
	})
	.on('mouseup',function (ev) {
		upX = ev.clientX;
		upY = ev.clientY;
		
		var differenzX = upX - downX;
		var differenzY = upY - downY; 
		
		if(Math.abs(differenzY) >= 200 && Math.abs(differenzX) <= 200){
			if(differenzY > 0){
				now += -1;
				if(now === -1){
					now = 0;
				}
				$con.stop().animate({
					top: -$item * now
				});
				if(now === 0){
					$cert.stop().animate({top : 85})
				}
			}else {
				now++;
				if (now >= $c_head.size() - 1) {
					now = $c_head.size() - 1;
				}
				$con.stop().animate({
					top: -$item * now
				});
				if(now > 0){
					$cert.stop().animate({top : -25})
				}
			}
		}
	});
	
	function p_stop (a,b,c) {
		if(onoff){
			now += a;
			if(now === b){
				now = c;
			}
			onoff = false;
			setTimeout(function () {
				onoff = true;
			},500);
		}
	}
	
	function anme (name) {
		name.stop().animate({"top": -$item * now});
	}
//	首页：底下圆点
	$movedown.click(function () {
		now += 1;
		anme ($con);
		$cert.stop().animate({top : -25})
	});
//	右边固定： 上
	$pre.on('click',function () {
		p_stop (-1,-1,0);
		anme ($con);
		$ltl_li.eq(now).addClass('line_active').siblings().removeClass('line_active');
		$line.stop().animate({left : $line_w * now + 404 + (34 * now)});
		if(now === 0){
			$cert.stop().animate({top : 85})
		}
	});
//	右边固定： 下
	$next.on('click',function () {
		if(now >= $c_head.size()){
			now = $c_head.size() - 1;
		}
		p_stop (1,$c_head.size(),$c_head.size());
		anme ($con);
		$line.stop().animate({left : $line_w * now + 404 + (34 * now)});
		if(now === $c_head.size()){
			$line.stop().animate({left : $line_w * (now-1) + 404 + (34 * (now - 1))});
		}
		$ltl_li.eq(now).addClass('line_active').siblings().removeClass('line_active');
		$cert.stop().animate({top : -25})
	});
//	上下翻滚
	$(window).on('mousewheel', function (ev) {
		var  Eo = ev.originalEvent.wheelDelta;
		
		if (Eo > 0) {
			if(onoff){
				now += -1;
				if(now <= 0){
					now = 0;
				}
				anme ($con);
				$line.stop().animate({left : $line_w * now + 404 + (34 * now)});
				if(now === 0){
					$cert.stop().animate({top : 85})
				}
				onoff = false;
				setTimeout(function () {
					onoff = true;
				},500);
			}
		} else {
			if(onoff){
				now += 1;
				if(now > $c_head.size()){
					now = $c_head.size();
				}
				$line.stop().animate({left : $line_w * now + 404 + (34 * now)});
				if(now === $c_head.size()){
					$line.stop().animate({left : $line_w * (now-1) + 404 + (34 * (now - 1))});
				}
				anme ($con);
				if(now > 0){
					$cert.stop().animate({top : -25})
				}
				onoff = false;
				setTimeout(function () {
					onoff = true;
				},500);
			}
		}
		$ltl_li.eq(now).addClass('line_active').siblings().removeClass('line_active');
	});
	
	$ltl_li.hover(
		function () {
			$line.stop().animate({
				left : $(this).position().left
			});
		},
		function () {
			$line.stop().animate({
				left : parseInt($(this).css('width')) * now + 404 + (24 * now)
			});
		}
	)
	.click(function () {
		now = $(this).index();
		$line.stop().animate({
			left : $(this).position().left
		});
		$ltl_li.eq(now).addClass('line_active').siblings().removeClass('line_active');
		if(now > 0){
			$cert.stop().animate({top : -25})
		}else{
			$cert.stop().animate({top : 85})
		}
		anme ($con);	
	});

})();
//	首页：news
(function () {
	var $tw_ul = $('#tw_ul');
	var $li_w = $('#noe').height();
	var $tw_li = $('#tw_ul li');
	var now = 0;
	var timer = 0;
	
	timer = setInterval(function () {
		now += 1;
		if(now === $tw_li.size()){
			now = 1;
			$tw_ul.css('top',0);
		}
		$tw_ul.stop().animate({'top': -$li_w * now});
	},3000);
	
	
	
})();
//	关于：轮播图
(function () {
	var $mesed = $('#mes');
	var $m_o = $('.m_o');
	var $items = $('.items').width();
	var $mes = $('#switm');
	var $swiper_sli = $('.swiper_sli');
	var now = 0;
	var timer = 0;

	function stop () {
		timer = setInterval(function () {
			now += 1;
			if(now === $swiper_sli.size()){
				now = 1;
				$mes.css({'left':0});
			}
			$mes.stop().animate({'left': -$items * now});
			$m_o.eq(now%($swiper_sli.size() - 1)).addClass("m_o_acvite").siblings('.m_o').removeClass("m_o_acvite");
		},4000);
	}
	
	stop ();
	
	$m_o.mouseenter(function () {
		now = $(this).index()-1;
		$mes.stop().animate({'left': -$items * now});
		$m_o.eq($(this).index()-1).addClass('m_o_acvite').siblings('.m_o').removeClass('m_o_acvite');
	});
	
	$mesed.mouseenter(function () {
		clearInterval(timer);
	});
	
	$mesed.mouseleave(function () {
		stop ();
	});
})();
//	右边固定栏：点击隐藏
(function () {
	var $switch = $('.switch');
	var $ic_ul = $('#ic_ul');
	var onoff = true;
	var n = -55;
	var oright = -32;
	
	$switch.on('click',function () {
		n = onoff === true ? -55 : 0;
		oright = onoff === true ? -32 : 0;
		$ic_ul.stop().animate({right : n});
		$switch.css({"background-position-x" : oright});
		onoff = !onoff;
	});
	
})();
//	客户：跟随
(function () {
	var $im_lt_ul = $('#im_lt_ul'), $one = $('.one'), $i_ul_li = $('.i_ul_li');
	var otop = 0, oleft = 0;
	
	$im_lt_ul.hover(
		function () {
			$one.css({'display' : 'block'});
		},
		function () {
			$one.css({'display' : 'none'});
	});
	
	$i_ul_li.mouseenter(function () {
		otop = $(this).position().top;
		oleft = $(this).position().left;
		
		$one.css({top : otop});
		$one.css({left : oleft});
	});
})();

});
