// Return the merge of two objects
function merge(obj1, obj2) {
	var obj3 = {};

    for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
    for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }

    return obj3;
}

// Mustang instantiates wheel object
function Mustang(el, opt) {
	return new wheel(el, opt);
}

// Fix for wheel object
var that = "";

// wheel object
function wheel(el, opt) {
	this.defaults = {};
	this.element = el;
	this.logic = {
		counter: 0, // slide counter
		translate: 0 // move counter, will be used with translate or margin-left
	};
	this.init(el, opt);

	that = this;
}

// Init function, verify item/parent and starts
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

// Set default options
wheel.prototype.setOptions = function(opt) {
	var defs = {
		item: '.item', // slide item selector
		time: 2500, // time to wait for next slide
		height: 300, // parent height in px
		transition: '1s ease 0.1s', // css3 transition for slide items
		next: false,
		prev: false
	};

	this.defaults = merge(defs, opt);

	return true;
};

// Set basic slide CSS attributes for parent/child
// Set setInterval()
// Set next/prev buttons if enabled
wheel.prototype.start = function() {
	var parent = document.querySelector(this.element),
		child = parent.querySelectorAll(this.defaults.item);

	this.setBasicSlide(parent, child);

	this.interval = setInterval(this.moveSlide, this.defaults.time);

	if (this.defaults.next !== false || this.defaults.prev !== false) {
		var next = document.querySelector(this.defaults.next),
			prev = document.querySelector(this.defaults.prev);

		next.addEventListener('click', this.buttonNext);
		prev.addEventListener('click', this.buttonPrev);
	}
};

// Basic CSS attributes
wheel.prototype.setBasicSlide = function(parent, child) {
	parent.style.position = 'relative';
	parent.style.display = 'flex';
	parent.style.flexFlow = 'nowrap row';
	parent.style.overflow = 'hidden';
	parent.style.boxSizing = 'border-box';
	parent.style.height = this.defaults.height + 'px';

	for (var i = 0; i < child.length; i++) {
		child[i].style.flex = '0 0 100%';
		child[i].style.height = '100%';
		child[i].style.boxSizing = 'border-box';
		child[i].style.transition = 'all ' + this.defaults.transition;
	}

	return true;
};

// Move slide to the next/prev
wheel.prototype.moveSlide = function() {
	var child = document.querySelectorAll(that.defaults.item);
	that.logic.counter++;

	if (that.logic.counter < child.length) {
		that.logic.translate += 100;
		
		for (var i = 0; i < child.length; i++) {
			child[i].style.transform = 'translateX(-' + that.logic.translate + '%)';
		}

		return true;
	} else {
		that.logic.counter = 0;
		that.logic.translate = 0;

		for (var i = 0; i < child.length; i++) {
			child[i].style.transform = 'translateX(0)';
		}

		return true;
	}
};

// Go to the next item
wheel.prototype.buttonNext = function() {
	if (that.logic.counter == document.querySelectorAll(that.defaults.item).length) { return true; }
	that.moveSlide();
	clearInterval(that.interval);
	that.interval = setInterval(that.moveSlide, that.
		defaults.time);
};

// Go to the previous item
wheel.prototype.buttonPrev = function() {
	if (that.logic.counter == 0) { return true; }
	that.logic.counter -= 2; 
	that.logic.translate -= 200; 
	that.moveSlide();
	clearInterval(that.interval);
	that.interval = setInterval(that.moveSlide, that.
		defaults.time);
};