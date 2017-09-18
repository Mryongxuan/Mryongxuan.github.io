$(function () {
	$(".J_tab_head .avtine").mouseenter(function () {
		$(".J_tab_head .avtine").css("top","-39px");
		$(".J_tab_contentend").css("top","30px");
		$(".red").css('border-top', '2px solid #fff')
		$(".red").eq($(this).index()).css("border-top","2px solid red");
	});
	$.each($('.red'),function (i,el) {
		el.i = i;
		$(el).mouseenter(function () {
			$('.itemed').css('display', 'none');
			$('.itemed').eq(this.i).css('display','block');
		});
	});
	$(".J_service_pop_close").click(function () {
		$(".J_tab_head .avtine").css("top","0px");
		$(".J_tab_contentend").css("top","210px");
		$(".red").css('border-top', '2px solid #fff')
	});
//	倒计时
	var starttime = new Date("2017/11/20");
  	setInterval(function () {
	    var nowtime = new Date();
	    var time = starttime - nowtime;
	    var day = buling(parseInt(time / 1000 / 60 / 60 / 24));
	    var hour = buling(parseInt(time / 1000 / 60 / 60 % 24));
	    var minute = buling(parseInt(time / 1000 / 60 % 60));
	    var seconds = buling(parseInt(time / 1000 % 60));
   		$('.cd_hour').html(hour);
   		$('.cd_minute').html(minute);
   		$('.cd_second').html(seconds);
  	}, 1000);
  
	  function buling(n) {
		return (n < 10) ? '0' + n : n;
	  };
//	//	翻页轮播图
	var $listBox = $('#list-box');
	var $ul = $('#list-1');		//ul
	var $lis = $('#list-1 li');	//li
	var $prev = $('#skleft');	//上一个
	var $next = $('#skright');	//下一个
	var listBoxW = $('#list-box').width();
	var now = 0;
	
	$prev.click(function () {
		now--;
		if (now === -1) {
			now = 1;
			$ul.css('left', -listBoxW * 2);
		};
		$ul.stop().animate({
			left: -listBoxW * now
		});
	});
	$next.click(function () {
		now++;
		if (now >= $lis.size() / 5) {
			now = 1;
			$ul.css('left', 0);
		};
		$ul.stop().animate({
			left: -listBoxW * now
		});
	});
//	翻页轮播图右边小轮播图
	var sk_special_list = $("#special_list");
	var sk_special_item_li = $("#special_list li");
	var sk_special_indlist = $(".sk_special_indlist");
	var sk_special_indlistspan = $(".sk_special_indlist span");
	var sk_Timer = 0;
//	移过点切换
	$.each(sk_special_indlistspan,function (i, el) {
		$(el).mouseenter(function () {
			$(el).css('background-color','#f00').siblings().css('background-color','#ccc');
			sk_special_item_li.eq(i).css({'opacity':1}).siblings().css({'opacity':0});
		});
	})
//	自动轮播
	sk_Timer = setInterval(function () {
		now ++;
		if(now === sk_special_indlistspan.size()){
			now = 0;
		}
		sk_special_item_li.eq(now).css("opacity",1).siblings().css('opacity',0);
		sk_special_indlistspan.eq(now).css('background-color','#f00').siblings().css('background-color','#ccc');
	},4000);
//	移入关闭计时器
	sk_special_list.mouseenter(function () {
		clearInterval(sk_Timer);
	});
//	开启计时器
	sk_special_list.mouseleave(function () {
		sk_Timer = setInterval(function () {
			now ++;
			if(now === sk_special_indlistspan.size()){
				now = 0;
			}
			sk_special_item_li.eq(now).css("opacity",1).siblings().css('opacity',0);
			sk_special_indlistspan.eq(now).css('background-color','#f00').siblings().css('background-color','#ccc');
		},4000);
	});
//轮播图
	var box_bd2 = $('.box_bd2');
	var box_bd2_sup = $('.box_bd2 .sup_page');
	var sup_ind_li = $('.sup_ind li');
	var btned_left = $('#btned_left');
	var btned_right = $('#btned_right');
	var tim = 0;
	var onoff = true;
	var oTimer = 0;

	function stoper (a,b,c,) {
			if (!onoff) return;
			tim += a;
			if(tim === b){
				tim = c;
			}
			box_bd2_sup.eq(tim).css('opacity',1).siblings('.sup_page').css('opacity',0);
			sup_ind_li.eq(tim).css('background-color','#f00').siblings( ).css('background','#c8c8c8');
			onoff = false;
			setTimeout(function () {
				onoff = true;
			},1000);
	}

	btned_left.click(function () {
		stoper (-1,-1,(sup_ind_li.size() - 1));
	});

	btned_right.click(function () {
		stoper (1,(sup_ind_li.size()),0);
	});
	
	sup_ind_li.mouseenter(function () {
		tim = $(this).index();
		sup_ind_li.eq(tim).css('background-color',"#f00").siblings().css('background-color','#c8c8c8');
		box_bd2_sup.eq(tim).css('opacity',1).siblings('.sup_page').css('opacity',0);
	});
	
	oTimer = setInterval(function () {
		stoper (1,(sup_ind_li.size()),0);
	},2000);
	
	box_bd2.mouseenter(function () {
		clearInterval(oTimer);
	});
	box_bd2.mouseleave(function () {
		oTimer = setInterval(function () {
			stoper (1,(sup_ind_li.size()),0);
		},2000);
	});
//切换
	var J_tab_head_item = $('.top_tab_head .J_tab_head_item');
	var J_tab_content_item = $('.top_tab_content .J_tab_content_item');
	var top_tab_active = $('.top_tab_active');
	var top_tab_active_width = $('.top_tab_active').width();
	
	$.each(J_tab_head_item,function (i,el) {
		$(el).mouseenter(function () {
			J_tab_content_item.eq(i).css('display','block').siblings().css('display','none');
			top_tab_active.css('left',i * top_tab_active_width);	
		});
	});
	
	(function ($) {
//		轮播图
		var mime_list = $('.mime_list');
		var mime_item = $('.mime_list .mime_item');
		var mime_ind_item = $('.mime_ind_list .mime_ind_item');
		var mimel = $('#mimel');
		var mimer = $('#mimer');
		var minow = 0;
		var mitimer = 0;
		var onoff = true;
		
		function mistop (a,b,c) {
			if ( !onoff ) return;
			minow += a;
			if(minow === b){
				minow = c;
			}
			mime_item.eq(minow).css('opacity',1).siblings('li').css('opacity',0);
			mime_ind_item.eq(minow).css('background-color','#f00').siblings('li').css('background-color','#c7c7c7');
			onoff = false;
			setTimeout(function () {
				onoff = true;
			},1000);
		}
		
		mimel.click(function () {
			mistop (-1,-1,mime_item.size() - 1);
		});
		
		mimer.click(function () {
			mistop (1,mime_item.size(),0);
		});
		
		mime_ind_item.mouseenter(function () {
			minow = $(this).index();
			mime_ind_item.eq(minow).css('background-color','#f00').siblings('li').css('background-color','#c7c7c7');
			mime_item.eq(minow).css('opacity',1).siblings('li').css('opacity',0);
		});	
		
		mitimer = setInterval(function () {
			mistop (1,mime_item.size(),0);
		},2000);
		
		mime_list.mouseenter(function () {
			clearTimeout(mitimer);
		});
		
		mime_list.mouseleave(function () {
			mitimer = setInterval(function () {
				mistop (1,mime_item.size(),0);
			},2000);
		});
	})(jQuery);
//	享品质：右边轮播图
	(function () {
		var now = 0;
		var timer = 0;
		var onoff = true;
		
		function replace () {
			$('.live_item').eq(now).stop().animate({'opacity':1}).siblings('.live_item').stop().animate({'opacity':0});
			$('.live_ind_item').eq(now).css('background','#f00').siblings('li').css('background-color','#fff');
		}
		
		function stop (a,b,c) {
			if(onoff){
				now += a;
				if(now === b){
					now = c;
				}
				replace ();
				onoff = false;
				setTimeout(function () {
					onoff = true;
				},1000);
			}
		}
		
		$('.J_live_btn_pre').click(function () {
			stop (-1,-1,$('.live_item').size() - 1);
		});
		
		$('.J_live_btn_next').click(function () {
			stop (1,$('.live_item').size(),0);
		});
		
		$('.live_ind_item').mouseenter(function () {
			now = $(this).index();
			replace ();
		});
		
		timer = setInterval(function () {
			stop (1,$('.live_item').size(),0);
		},2000);
		
		$('#live_inne').mouseenter(function () {
			clearInterval(timer);
		});
		
		$('#live_inne').mouseleave(function () {
			timer = setInterval(function () {
				stop (1,$('.live_item').size(),0);
			},2000);
		});
	})();
//小块封装函数：通用
var now3 = 0;
var onoff3 = true;
	
function J_pt_stop (a,b,c,d,e,f,g) {
	if(onoff3){
		now3 += a;
		if(now3 === b) {
			now3 = c;
			d.css({left : -e * 2});
		}
		f.stop().animate({left : -g * now3 });
		onoff3 = false;
		setTimeout(function () {
			onoff3 = true;
		},1000);
	}
}
//爱生活：爱逛，左侧轮播图
	(function ($) {
		var list_wrapperw = $('#list_wrapper').width();
		var $J_pt_logo_item = $('#list_wrapper .J_pt_logo_item');
		var $pt_logo_list = $('#pt_logo_list');
		var $J_pt_logo_pre = $('#J_pt_logo_pre');
		var $J_pt_logo_next = $('#J_pt_logo_next');
		
		$J_pt_logo_pre.click(function () {
			J_pt_stop(-1,-1,1,$pt_logo_list,list_wrapperw,$pt_logo_list,list_wrapperw);
		});
		
		$J_pt_logo_next.click(function () {
			J_pt_stop(1,$J_pt_logo_item.size() / 6,1,$pt_logo_list,0,$pt_logo_list,list_wrapperw);
		});
	})(jQuery);
//爱美丽轮播图右侧
	(function ($) {
		var $J_pt_logo_list_wrapper2 = $('#J_pt_logo_list_wrapper2').width();
		var $pt_logo_list2 = $('#J_pt_logo_list_wrapper2 .pt_logo_list');
		var $J_pt_logo_item = $('#J_pt_logo_list_wrapper2 .J_pt_logo_item');
		var $J_pt_logo_pre2 = $('#J_pt_logo_pre2');
		var $J_pt_logo_next2 = $('#J_pt_logo_next2');	
		
		$J_pt_logo_pre2.click(function () {
			J_pt_stop(-1,-1,1,$pt_logo_list2,$J_pt_logo_list_wrapper2,$pt_logo_list2,$J_pt_logo_list_wrapper2);	
		});
		
		$J_pt_logo_next2.click(function () {
			J_pt_stop(1,$J_pt_logo_item.size() / 6,1,$pt_logo_list2,0,$pt_logo_list2,$J_pt_logo_list_wrapper2);	
		});
	})(jQuery);	
	
//家电馆左右轮播
	(function () {
		var $logo_w2 = $('#logo_w2');
		var $logo_w2_w = $('#logo_w2').width();
		var $pt_logo_list = $('#logo_w2 .pt_logo_list');
		var $logo_w2_item = $('#logo_w2 .J_pt_logo_item');
		
		$('#logo_pre2').click(function () {
			J_pt_stop(-1,-1,1,$pt_logo_list,
						$logo_w2_w,$pt_logo_list,$logo_w2_w);
		});
		
		$('#logo_next2').click(function () {
			J_pt_stop(1,$logo_w2_item.size() / 6,1,$pt_logo_list,0,$pt_logo_list,$logo_w2_w);
		});
	})();
	
	(function () {
		var $logo_w3 = $('#logo_w3');
		var $logo_w3_w = $('#logo_w3').width();
		var $pt_logo_list = $('#logo_w3 .pt_logo_list');
		var $logo_w3_item = $('#logo_w3 .J_pt_logo_item');
		
		$('#logo_pre3').click(function () {
			J_pt_stop(-1,-1,1,$pt_logo_list,
						$logo_w3_w,$pt_logo_list,$logo_w3_w);
		});
		
		$('#logo_next3').click(function () {
			J_pt_stop(1,$logo_w3_item.size() / 6,1,$pt_logo_list,0,$pt_logo_list,$logo_w3_w);
		});
	})();
	
//	电脑数码轮播图
	(function () {
		var $logo_w4 = $('#logo_w4');
		var $logo_w4_w = $('#logo_w4').width();
		var $pt_logo_list = $('#logo_w4 .pt_logo_list');
		var $logo_w4_item = $('#logo_w4 .J_pt_logo_item');
		
		$('#logo_pre4').click(function () {
			J_pt_stop(-1,-1,1,$pt_logo_list,
						$logo_w4_w,$pt_logo_list,$logo_w4_w);
		});
		
		$('#logo_next4').click(function () {
			J_pt_stop(1,$logo_w4_item.size() / 12,1,$pt_logo_list,0,$pt_logo_list,$logo_w4_w);
		});
	})();
	
//玩3C、运动左右轮播图
	(function () {
		var $logo_w5 = $('#logo_w5');
		var $logo_w5_w = $('#logo_w5').width();
		var $pt_logo_list = $('#logo_w5 .pt_logo_list');
		var $logo_w5_item = $('#logo_w5 .J_pt_logo_item');
		
		$('#logo_pre5').click(function () {
			J_pt_stop(-1,-1,1,$pt_logo_list,
						$logo_w5_w,$pt_logo_list,$logo_w5_w);
		});
		
		$('#logo_next5').click(function () {
			J_pt_stop(1,$logo_w5_item.size() / 6,1,$pt_logo_list,0,$pt_logo_list,$logo_w5_w);
		});
	})();
	
	(function () {
		var $logo_w6 = $('#logo_w6');
		var $logo_w6_w = $('#logo_w6').width();
		var $pt_logo_list = $('#logo_w6 .pt_logo_list');
		var $logo_w6_item = $('#logo_w6 .J_pt_logo_item');
		
		$('#logo_pre6').click(function () {
			J_pt_stop(-1,-1,1,$pt_logo_list,
						$logo_w6_w,$pt_logo_list,$logo_w6_w);
		});
		
		$('#logo_next6').click(function () {
			J_pt_stop(1,$logo_w6_item.size() / 6,1,$pt_logo_list,0,$pt_logo_list,$logo_w6_w);
		});
	})();
	
//爱吃轮播图
	(function () {
		var $logo_w7 = $('#logo_w7');
		var $logo_w7_w = $('#logo_w7').width();
		var $pt_logo_list = $('#logo_w7 .pt_logo_list');
		var $logo_w7_item = $('#logo_w7 .J_pt_logo_item');
		
		$('#logo_pre7').click(function () {
			J_pt_stop(-1,-1,1,$pt_logo_list,
						$logo_w7_w,$pt_logo_list,$logo_w7_w);
		});
		
		$('#logo_next7').click(function () {
			J_pt_stop(1,$logo_w7_item.size() / 12,1,$pt_logo_list,0,$pt_logo_list,$logo_w7_w);
		});
	})();
	
//爱宝宝轮左右播图
	(function () {
		var $logo_w8 = $('#logo_w8');
		var $logo_w8_w = $('#logo_w8').width();
		var $pt_logo_list = $('#logo_w8 .pt_logo_list');
		var $logo_w8_item = $('#logo_w8 .J_pt_logo_item');
		
		$('#logo_pre8').click(function () {
			J_pt_stop(-1,-1,1,$pt_logo_list,
						$logo_w8_w,$pt_logo_list,$logo_w8_w);
		});
		
		$('#logo_next8').click(function () {
			J_pt_stop(1,$logo_w8_item.size() / 6,1,$pt_logo_list,0,$pt_logo_list,$logo_w8_w);
		});
	})();
	
	(function () {
		var $logo_w9 = $('#logo_w9');
		var $logo_w9_w = $('#logo_w9').width();
		var $pt_logo_list = $('#logo_w9 .pt_logo_list');
		var $logo_w9_item = $('#logo_w9 .J_pt_logo_item');
		
		$('#logo_pre9').click(function () {
			J_pt_stop(-1,-1,1,$pt_logo_list,
						$logo_w9_w,$pt_logo_list,$logo_w9_w);
		});
		
		$('#logo_next9').click(function () {
			J_pt_stop(1,$logo_w9_item.size() / 6,1,$pt_logo_list,0,$pt_logo_list,$logo_w9_w);
		});
	})();
	
	
//返回顶部左边、右边固定框
(function () {
	var scrollDiv = document.createElement('div');
 	$(scrollDiv).attr('class', 'toTop').html('^ 返回顶部').appendTo('body');
 	$(window).scroll(function() {
        if ($(this).scrollTop() != 0) {
            $('.toTop').fadeIn();
        } else {
            $('.toTop').fadeOut();
        }
	});
	$('.toTop').click(function() {
	    $('body,html').animate({ scrollTop: 0 }, 800);
	})
})();

//	左侧隐藏导航栏
//(function () {
//	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
//	var lift_acite = $('.lift_acite');
//	var lift_item = $('.lift_item');
//	
//	$.each(lift_item,function (i,el) {
//		if(lift_item.eq(i).offsetTop >= scrollTop){
//			lift_item.eq(i).css('background-color','#d70b1c').siblings().css('background-color','none');
//		}
//		$(el).click(function () {
//			lift_item.eq(i).css('background-color','#d70b1c').siblings().css('background-color','none');;
//			
//		});
//	});
//	
//	console.log(lift_item.eq().offsetTop)
//})();
	
});