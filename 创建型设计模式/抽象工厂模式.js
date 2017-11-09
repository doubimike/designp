var Car = function () {
	
}

Car.prototype = {
	getPrice:function () {
		return new Error('抽象方法不能调用');
	},
	getSpeed:function () {
		return new Error('抽象方法不能调用');
	}
}


var VehicleFactory = function (subType,superType) {
	if(typeof VehicleFactory[superType]==='function'){
		function F() {
			
		};
		F.prototype = new VehicleFactory[superType]();

		subType.constructor = subType;
		subType.prototype = new F();
	}else {
		throw new Error('未创建该抽象类')
	}
}

VehicleFactory.Car = function () {
	this.type = 'car';
}

VehicleFactory.Car.prototype = {
	getPrice:function () {
		return new Error('抽象方法不能调用');
	},
	getSpeed:function () {
		return new Error('抽象方法不能调用');
	}	
}


VehicleFactory.Bus = function () {
	this.type = 'bus';
}

VehicleFactory.Bus.prototype = {
	getPrice:function () {
		return new Error('抽象方法不能调用');
	},
	getPassengerNum:function () {
		return new Error('抽象方法不能调用');
	}	
}



VehicleFactory.Truck = function () {
	this.type = 'truck';
}

VehicleFactory.Truck.prototype = {
	getPrice:function () {
		return new Error('抽象方法不能调用');
	},
	getTrainload:function () {
		return new Error('抽象方法不能调用');
	}	
}

var BMW = function (price,speed) {
	this.price = price;
	this.speed = speed;
}

VehicleFactory(BMW,'Car');
BMW.prototype.getPrice = function () {
	return this.price;
}

BMW.prototype.getSpeed = function () {
	return this.speed;
}



var bmw = new BMW(2000,300)
console.log(bmw.getPrice())
console.log(bmw.getSpeed())
console.log(bmw.type)