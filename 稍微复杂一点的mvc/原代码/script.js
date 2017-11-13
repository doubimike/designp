console.log('mi',miApp = mi())

miApp.routes('/','TestController');

miApp.controller('TestController',[function () {
	console.log('TestController')
}])