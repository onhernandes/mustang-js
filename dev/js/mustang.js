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
	this.logic = {
		counter: 0, // slide counter
		translate: 0 // move counter, will be used with translate or margin-left
	};
	this.init(el, opt);
}

wheel.prototype.init = function(el, opt) {
	this.setOptions(opt);
	
	if (document.querySelectorAll(this.defaults.item).length < 1) {
		console.log('Your slide must has more than one item');
		console.log('Please, add more items and try again');
		return false;
	}

	if (document.querySelectorAll(this.element).length < 1) {
		console.log('Your slide parent does not exists');
		return false;
	}

	this.start();
};

wheel.prototype.setOptions = function(opt) {
	var defs = {
		item: '.item', // slide item selector
		time: 2500, // time to wait for next slide
		height: 300, // parent height in px
		transition: '0.1s linear 0.01s' // css3 transition for slide items
	};

	this.defaults = merge(defs, opt);

	return true;
};

wheel.prototype.start = function() {
	this.slide();
};

wheel.prototype.slide = function() {
	var parent = document.querySelector(this.element),
		child = parent.querySelectorAll(this.defaults.item);

	this.setBasicSlide(parent, child);
	this.interval = setInterval(this.moveSlide(child), this.
		defaults.time);
};

wheel.prototype.setBasicSlide = function(parent, child) {
	parent.style.position = 'relative';
	parent.style.display = 'flex';
	parent.style.flexFlow = 'wrap row';
	parent.style.overflow = 'hidden';
	parent.style.height = this.defaults.height + 'px';

	for (var i = 0; i < child.length; i++) {
		child[i].style.flex = '0 0 100%';
		child[i].style.height = '100%';
		child[i].style.boxSizing = 'border-box';
		child[i].style.transition = 'margin ' + this.defaults.transform;
	}

	return true;
};

wheel.prototype.moveSlide = function(child) {
	if (this.logic.counter >= child.length) {
		this.logic.counter = 0;
		this.logic.translate = 0;

		for (var i = 0; i < child.length; i++) {
			child[i].style.marginLeft = '0';
		}
		return true;
	}

	this.logic.counter++;
	this.logic.translate += 100;
	
	for (var i = 0; i < child.length; i++) {
		child[i].style.marginLeft = '-' + this.logic.translate + '%';
	}
};