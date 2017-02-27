// Merge obj1 with obj2 and return obj3
function merge(obj1, obj2) {
	var obj3 = {};
    for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
    for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
    return obj3;
}

function Mustang(el, opt) {
	return new wheel(el, opt);
}

function wheel(el, opt) {
	this.defaults = '';
	this.parents = el;
	this.init(el, opt);
}

wheel.prototype.init = function(el, opt) {
	this.defaults = this.setOptions(opt);
	this.start();
};

wheel.prototype.setOptions = function(opt) {
	if (opt === null) { return; }

	var defaults = {
		item: '.item', // slide item
		time: 0, // time to wait for next slide
		transitionTime: 3000, // time effect
		effect: 'slide', // fade or slide
		direction: 'left', // if effect is slide, what direction?
		css3: true, // whether use css3 for effect or not
		css: false // if true, any master css settings will be handled by you(not by plugin)
	};

	return merge(defaults, opt);
};

wheel.prototype.start = function() {
	var parents = this.parents,
		child = document.querySelectorAll(this.defaults.item);
	
	if (this.defaults.css === false) {
		parents.style.position = 'relative';
		parents.style.overflow = 'hidden';

		if (this.defaults.css3 === true) {
			parents.style.display = 'flex';
			parents.style.flexFlow = 'nowrap row';

			for (var i = 0; i < child.length; i++) {
				child[i].style.flex = '0 0 100%';
				child[i].style.height = '100%';
			}
		} else {
			parents.style.display = 'block';

			for (var i = 0; i < child.length; i++) {
				child[i].style.position = 'relative';
				child[i].style.height = '100%';
			}
		}
	}
};