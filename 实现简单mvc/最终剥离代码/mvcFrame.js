function Model(value) {
	this._value = typeof value === 'undefined' ? '' : value;
	this._listeners = [];


}

Model.prototype.set = function(value) {
	var self = this;
	self._value = value;

	setTimeout(function() {
		self._listeners.forEach(function(listener) {
			listener.call(self, value);
		})
	});

}

Model.prototype.watch = function(listener) {

	this._listeners.push(listener);
}

Model.prototype.bind = function(node) {
	this.watch(function(value) {
		node.innerHTML = value;
	})
}


// 加入controller

function Controller(callback) {
	var models = {};
	var views = document.querySelectorAll('[bind]');
	views = Array.prototype.slice.call(views, 0);
	views.forEach(function(view) {
		var modelName = view.getAttribute('bind');
		models[modelName] = models[modelName] || new Model();
		models[modelName].bind(view);
	})

	callback.call(this, models);

}