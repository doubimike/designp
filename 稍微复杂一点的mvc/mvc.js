var app = MiApp();

app.factory('factory name',['dependancy1','dependancy2',function (dependancy1,dependancy2) {
	return {
		publicAccess:function () {
			return 'something'
		}
	}
}]);

app.constants('constant name',function () {
	return {
		'item1':'val1',
		'item2':'val2',
	}
})

app.routes('routeurlwithregularexpression','controllername')


app.Controller('TestController',['dependancy1','dependancy2',function (dependancy1,dependancy2) {
	
}])