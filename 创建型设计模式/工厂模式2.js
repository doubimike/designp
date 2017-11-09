function CreatePerson(name,age,sex) {
	var obj = new Object();
	obj.name = name;
	obj.age = age;
	obj.sex = sex;
	obj.sayName = function () {
		return this.name;
	}

	return obj;
}

var p1 = new CreatePerson("longen",'28','男');
var p2 = new CreatePerson("tugenhua",'27','女');
// console.log(p1.name); // longen
// console.log(p1.age);  // 28
// console.log(p1.sex);  // 男
// console.log(p1.sayName()); // longen

// console.log(p2.name);  // tugenhua
// console.log(p2.age);   // 27
// console.log(p2.sex);   // 女
// console.log(p2.sayName()); // tugenhua

// console.log(typeof p1)


var BicycleShop  = function (name) {
	this.name = name;
	this.method = function () {
		return this.name;
	}
}

BicycleShop.prototype = {
	constructor: BicycleShop,
	/*
    * 买自行车这个方法
    * @param {model} 自行车型号
    */
    sellBicycle:function (model) {
    	var bicycle = this.createBicycle(model);
    	bicycle.A();
    	bicycle.B();
    	return bicycle;
    },
    createBicycle:function (model) {
    	throw new Error('父类是抽象类不能直接调用，需要子类重写该方法');
    }
}

function extend(Sub,Sup) {
	var F = function () {
		
	};
	F.prototype = Sup.prototype;
	Sub.prototype = new F();
	Sub.prototype.constructor = Sub;
	Sub.sup = Sup.prototype;
	
}