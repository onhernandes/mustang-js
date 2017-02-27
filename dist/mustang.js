// return the merge of two objects
function merge(obj1, obj2) {
	var obj3 = {};

    for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }

    for (var atrname in obj2) {
    	// if obj1 do not has the same property he won't merge

    	if (obj1[atrname]) {
    		obj3[atrname] = obj2[atrname];
    	}
    }

    return obj3;
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
	
	if (document.querySelectorAll(this.defaults.item).length < 1) {
		console.log('Your slide must has more than one item');
		console.log('Please, add more items and try again');
		return false;
	}

	this.start();
};

wheel.prototype.setOptions = function(opt) {
	var defs = {
		item: '.item', // slide item selector
		time: 2500, // time to wait for next slide
		effect: 'slide', // what effect, slide or fade
		css3: true // whether use css3 or not
	};

	this.defaults = merge(defs, opt);

	return true;
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