var a= {
	Util:{
		util_method1:function () {
			
		},
		util_method2:function () {
			
		},
			
	}
}

var Conf = (function () {
	// 私有变量
	var conf = {
		MAX_NUM:100
	}
	return {
		// 取值器方法
		get:function (name) {
			return conf[name]?conf[name]:null;
		}
	}
})()

// 惰性单例
var LazySingle = (function () {
	var _instance = null;

	function Single() {
		return {
			publicMethod:function () {
				
			},
			publicProperty:'1.0'
		}
	}

	return function () {
		if(!_instance){
			_instance = Single();
		}	
		return _instance;
	}
})()

