var A =  A ||{};

A.g = function (id) {
	return document.getElementById(id)
}


A.on = function (id,type,fn) {
	var dom = typeof id ==='string' ? this.g(id) : id;
	if(dom.addEventListener) {
		dom.addEventListener(type,fn,false);
	}else if (dom.attachEvent){
		dom.attachEvent('on'+type,fn)
	}else {
		dom['on'+type]=fn;
	}
}

A.on(window,'load',function () {
	A.on('mybutton','click',function () {
		
	})
})

A.g = function (id) {
	return $(id).get(0);
}

A.on = function (id,type,fn) {
	var dom = typeof id ==='string' ? $('#'+id) : $(id);
	dom.on(type,fn);
}


function doSomeThing(obj) {
	var _adapeter = {
		name:'mike',
		age:25
	}

	for(var i in _adapeter){
		_adapter[i] = obj[i]|| _adapter[i];

	}

	// extend(_adapter,obj)
	// 
}

var arr = ['1','2']

var obj = {
	name:'',
	type:''
}

function arrToObjAdapter(arr) {
	return {
		name:arr[0],
		type:arr[1]
	}
}

var adapterData = arrToObjAdapter(arr)


