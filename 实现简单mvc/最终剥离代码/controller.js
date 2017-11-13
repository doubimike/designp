new Controller(function(models) {
	var model1 = models.model1;
	model1.set('this is a div');

	// 实践
	function setTime() {
		var date = new Date();
		models.hour.set(date.getHours())
		models.minute.set(date.getMinutes())
		models.second.set(date.getSeconds())
	}

	setTime();
	setInterval(setTime, 1000)

})