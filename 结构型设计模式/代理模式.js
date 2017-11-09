var Count = (function () {
	var img = new Image();
	return function (param) {
		var str = 'http:/a.gif?'
		for(var i in param ){
			str+= i+'='+param[i];
		}
		img.src = src;
	}
})()

Count({num:10});