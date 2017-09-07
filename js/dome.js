function  judge () {
	if(window.innerWidth >= 750){
		document.documentElement.style.fontSize = 750;
	} else {
		document.documentElement.style.fontSize = window.innerWidth / 750 * 100 + 'px';
	}
}
judge ()

window.onresize = function () {
	judge ();
}
