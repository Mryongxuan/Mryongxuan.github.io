var downTop = document.getElementById("downTop");
var oDwn = document.getElementById("down");
var ouName = document.getElementById("uName");
var ouNameLi = ouName.getElementsByTagName("li");
var oNa = ouName.getElementsByTagName("a");
//显示隐藏内容
downTop.onmouseenter = function () {
	downTop.style.backgroundColor = "#fff";
	ouName.style.display = "block";
}
//关闭
downTop.onmouseleave = function () {
	
	downTop.style.backgroundColor = "";
	ouName.style.display = "none";
}
//各种切换
for(var i=0; i<ouNameLi.length; i++){
	ouNameLi[i].index = i;
	//点击触发
	ouNameLi[i].onclick = function () {
		for(var j=0; j<ouNameLi.length; j++){
			ouNameLi[j].className = "";
		}
		for(var k=0; k<oNa.length; k++){
			oNa[k].id = "";
		}
		oNa[this.index].id = "dd-color";
		ouNameLi[this.index].className = "dd-spacer";
		oDwn.innerText = this.innerText;
		ouNameLi[this.index].style.backgroundColor = "";
		oNa[this.index].style.color = "";
	}
	//经过触发
	ouNameLi[i].onmouseenter = function () {
		if (this.className !== 'dd-spacer') {
			ouNameLi[this.index].style.backgroundColor = "#ddd";
			oNa[this.index].style.color = "#fff";
		}
	}
	//移出清除
	ouNameLi[i].onmouseleave = function () {
		ouNameLi[this.index].style.backgroundColor = "";
		oNa[this.index].style.color = "";
	}
}

var Fore3 = document.getElementsByClassName("fore3")[0];
var Fore3Box = document.getElementsByClassName("fore3Box")[0];
//显示		
Fore3.onmouseenter = function () {
	Fore3.style.backgroundColor = "#fff";
	Fore3.style.borderBottomColor = "#fff";
	Fore3Box.style.display = "block";
}
//隐藏
Fore3.onmouseleave = function () {
	Fore3.style.backgroundColor = "";
	Fore3Box.style.display = "none";
	Fore3.style.borderBottomColor = "transparent";
}

var Fore4 = document.getElementsByClassName("fore4")[0];
var confont = document.getElementsByClassName("confont")[0];

Fore4.onmouseenter = function () {
	Fore4.style.backgroundColor = "#fff";
	Fore4.style.borderBottomColor = "#fff";
	confont.style.display = "block";
}

Fore4.onmouseleave = function () {
	Fore4.style.backgroundColor = "";
	confont.style.display = "none";
	Fore4.style.borderBottomColor = "transparent";
}

var Fore5 = document.getElementsByClassName("fore5")[0];
var dorpdownk = document.getElementsByClassName("dorpdownk")[0];
var mobile = document.getElementsByClassName("mobile")[0];

Fore5.onmouseenter = function () {
	Fore5.style.backgroundColor = "#fff";
	Fore5.style.borderBottomColor = "#fff";
	mobile.style.display = "none";
	dorpdownk.style.display = "block";
}

Fore5.onmouseleave = function () {
	Fore5.style.backgroundColor = "";
	dorpdownk.style.display = "none";
	mobile.style.display = "block";
	Fore5.style.borderBottomColor = "transparent";
}

var Fore6 = document.getElementsByClassName("fore6")[0];
var mobilePop = document.getElementsByClassName("mobile_pop")[0]

Fore6.onmouseenter = function () {
	mobilePop.style.display = "block";
}

Fore6.onmouseleave = function () {
	mobilePop.style.display = "none";
}

var settleup = document.getElementsByClassName("settleup")[0];
var settleuptop = document.getElementsByClassName("settleup-top")[0];
var cartempty = document.getElementsByClassName("cartempty")[0];

settleup.onmouseenter = function () {
	settleuptop.style.borderBottomColor = "#fff";
	cartempty.style.display = "block";
}

settleup.onmouseleave = function () {
	settleuptop.style.borderBottomColor = "";
	cartempty.style.display = "none";
}
//左侧灰色栏
var fscol1 = document.getElementsByClassName("fs_col1")[0];
var Jsul = fscol1.getElementsByClassName("JS_navCtn")[0];
var JsulLi = Jsul.getElementsByTagName("li");
var JsPopCtn = document.getElementsByClassName("JS_popCtn")[0];
var catepartred = JsPopCtn.getElementsByClassName("cate_partred");

fscol1.onmouseenter = function () {
	JsPopCtn.style.display = "block";
}

fscol1.onmouseleave = function () {
	JsPopCtn.style.display = "none";
	for(var i=0; i<JsulLi.length; i++){
		JsulLi[i].style.background = '';
	}
}

for(var i=0; i<JsulLi.length; i++){
	JsulLi[i].index = i;
	JsulLi[i].onmouseenter = function () {			
		for(var j=0; j<catepartred.length; j++){
			catepartred[j].style.display = "none";
			JsulLi[j].style.background = '';
		}
		JsulLi[this.index].style.backgroundColor = '#999395';
		catepartred[this.index].style.display = "block";
	}
}

//轮播图
var J_slider_main = document.getElementsByClassName('J_slider_main')[0];
var sliderList = document.getElementById("slider_list");
var aLi = sliderList.getElementsByTagName("li");
var jSliderIndicator = document.getElementsByClassName("J_slider_indicator")[0];
var sPan = jSliderIndicator.getElementsByTagName("span");
var oLeft = document.getElementById("left");
var oRight = document.getElementById("right");

var now = 0;
var timer = 0;
var onoff = true;

function spanColor (a) {
	for(var i=0; i<sPan.length; i++){
		sPan[i].className = "";
	}
	sPan[a].className = "avtite";
}
function aListyle (number) {
	for(var i=0; i<aLi.length; i++){
		aLi[i].className = "";
	}
	aLi[number].className = "avtoue";
}

//经过点
for(var i=0; i<sPan.length; i++){
	sPan[i].index = i;
	sPan[i].onmouseenter = function () {
		aListyle (this.index);
		spanColor(this.index);
		now = this.index;
	}
}
//右边按钮
oRight.onclick = function () {
	if(onoff){
		now += 1;
		if(now > aLi.length - 1) now = 0;
		aListyle (now);
		spanColor (now);
		onoff = false;
		setTimeout(function () {
			onoff = true;
		},1000);
	}
}
//左边按钮
oLeft.onclick = function () {
	if(onoff){
		now -= 1;
		if(now < 0) now = sPan.length - 1;
		aListyle (now);
		spanColor (now);
		onoff = false;
		setTimeout(function () {
			onoff = true;
		},1000);
	}
	
}
//自动轮播
timer = setInterval(function () {
	now += 1;
	if(now > aLi.length - 1) now = 0;
	aListyle (now);
	spanColor (now);
},2000);
//鼠标移入关闭计时器
J_slider_main.onmouseenter = function () {
	clearInterval(timer);
}
//移入开启计时器
J_slider_main.onmouseleave = function () {
	timer = setInterval(function () {
		now += 1;
		if(now > aLi.length - 1) now = 0;
		aListyle (now);
		spanColor (now);
	},2000);
}

//促销公告
var mod_tab_head_item = document.getElementsByClassName("mod_tab_head_item");
var news_tab_active = document.getElementsByClassName('news_tab_active')[0];
var mod_tab_content_item = document.getElementsByClassName('mod_tab_content_item');

for(var i=0; i<mod_tab_head_item.length; i++){
	mod_tab_head_item[i].index = i;
	mod_tab_head_item[i].onmouseenter = function () {		
		for(var j=0; j<mod_tab_content_item.length; j++){
			mod_tab_content_item[j].style.display = "none";
		}
		mod_tab_content_item[this.index].style.display = "block";
		news_tab_active.style.left = this.index * 50 +'px';
	}
}

window.onscroll = function () {
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	var conceal = document.getElementsByClassName("conceal")[0];
	if(scrollTop >= 300){
		conceal.style.top = "0px"
	}else{
		conceal.style.top = "-50px"
	}
}

window.onscroll = function () {
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	var lift_acite = document.getElementsByClassName('lift_acite');
	var lift = document.getElementsByClassName('lift')[0];
	var lift_ul = document.getElementsByClassName('lift_ul')[0];
	var lift_ul_li = lift_ul.getElementsByTagName('li');
	
	for (var i = 0; i < lift_acite.length; i++) {
		for (var j = 0; j < lift_ul_li.length; j++) {
			lift_ul_li[j].style.backgroundColor = "";
		}
		if (lift_acite[i].offsetTop >= scrollTop) {
			lift.style.display = "block";
			lift_ul_li[i].style.backgroundColor = "#d70b1c";
			break;
		}
	}
}
