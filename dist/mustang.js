function merge(obj1, obj2) {
	// @TODO create merge function and return the merge of two objects
}

function Mustang(el, opt) {
	return new wheel(el, opt);
}

function wheel(el, opt) {
	this.defaults = {};
	this.init(el, opt);
}

wheel.prototype.init = function(el, opt) {
	this.setOptions(opt);
	this.start();
};

wheel.prototype.setOptions = function(opt) {
	// @TODO check if have more than 1 item
	
	this.defaults = {
		// @TODO add defaults
	};

	return merge(defaults, opt);
};

wheel.prototype.start = function() {
	// @TODO check which effect runs
	// @TODO call right effect method
};

wheel.prototype.fade = function() {
	// @TODO create fade effect
};

wheel.prototype.slide = function() {
	// @TODO create slide effect
};

wheel.prototype.css3 = function() {
	// @TODO configure items and element using css3
};

wheel.prototype.css = function() {
	// @TODO configure items and element using commom css
};