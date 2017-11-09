var LoopImages = function (imgArr,container) {
	this.imagesArray = imgArr;
	this.container = container;
	
}

LoopImages.prototype = {
	createImage :function () {
		
	},
	changeImage :function () {
		
	},
	getImageLength :function () {
		return this.imagesArray.length;
	}
}

var SlideLoopImg = function (imgArr,container) {
	LoopImages.call(this,imgArr,container);
}

SlideLoopImg.prototype = new LoopImages();
SlideLoopImg.prototype.changeImage = function () {
		// body...
		console.log(' SlideLoopImg changeImage function');
	}

var FadeLoopImg = function (imgArr,container,arrow) {
	LoopImages.call(this,imgArr,container);
	this.arrow = arrow;

	this.changeImage = function () {
		// body...
		console.log(' FadeLoopImg changeImage function');
	}



}

var fadeImg = new FadeLoopImg(['1.jpg','2.jpg'],'slide',['left.jpg','right.jpg']);
fadeImg.changeImage();




function prototypeExtend() {
	var F = function () {
		
	},
	args = arguments,
	i=0,
	len = args.length;

	for(;i<len;i++){
		for(var j in args[i]){
			F.prototype[j]= args[i][j];
		}
	}

	return new F();
}


var penguin = prototypeExtend({
	speed:20,
	swim:function () {
		console.log('游泳速度'+this.speed)
	}
},{
	run:function (speed) {
		console.log('奔跑速度'+speed);
	}
})