var MiApp = (function () {
	'use strict';

	var resources = {
		'constants':{},
		'factory':{},
		'mode':null,
		'root':'/',
		'routes':[],
		'controller':{},
		'controller_dependancy':{}
	}

	var api = {
		factory:function (key,arrayArg) {
			var last_index = arrayArg.length - 1;
			var dependancies = arrayArg.slice(0,-1);
			if(typeof arrayArg[last_index]==="function"){
				resources.factory[key] = arrayArg[last_index].apply(this,api.loadDependancies());
			}else {
				console.log('Nan')
			}
			
		},
		routes:function (route,controller) {
			
		},
		controller:function (controller,handler) {
			
		},
		constants:function (key,val) {
			resources.constants[key]=val();
		},
		loadDependancies:function (arrayArg) {
			var dependancy = [],iter;
			for(iter = 0;iter<arrayArg.length;iter++){
				if(typeof arrayArg[iter]=='string'){
					if(resources.hasOwnProperty(arrayArg[iter])){
						dependancy.push(api.loadModule(arrayArg[iter]));
					}else {
						if (resources.constants.hasOwnProperty(arrayArg[iter])) {
							dependancy.push(api.loadConstant(arrayArg[iter]));
						}else {
							if(arrayArg[iter]==='$mi'){
								dependancy.push({});
							}else {
								console.log('Error:'+arrayArg[iter]+" is not Found in constants and Factories");
							}
						}
					}
				}
			}

			return dependancy;
		}
	}

	function constants() {
		var key = arguments[0],value = arguments[1];
	}

	function routes() {
		
	}

	function controller() {
		
	}
	function factory() {
		
	}

	return {
		'factory':factory,
		'routes':routes,
		'controller':controller,
		'factory':factory,
	}

})()


