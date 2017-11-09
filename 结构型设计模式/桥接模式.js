function Speed(x,y) {
	this.x = x;
	this.y = y;
}

Speed.prototype.run = function () {
	console.log('run')
}

function Color(cl) {
	this.color = cl;
}

Color.prototype.draw = function () {
	console.log('draw')
}

function Shape(sp) {
	this.shape = sp;
}

Shape.prototype.change = function () {
	console.log('shape')
}

function Speek(wd) {
	this.word = wd;
}

Speek.prototype.say = function () {
	console.log('shape')
}


function Ball(x,y,c) {
	this.speed = new Speed(x,y);
	this.color = new Color(c);
}
Ball.prototype.init = function () {
	this.speed.run();
	this.color.draw();
}

function People(x,y,f) {
	this.speed = new Speed(x,y);
	this.font = new Speek(f);
}

People.prototype.init = function () {
	this.speed.run();
	this.font.say();
}


var p = new People(10,12,16)
p.init()