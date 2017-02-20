function mustang(options) {
	this.init(options);
}

mustang.prototype.init = function(options) {
	var defaults = {
			time: 0, // time between each slide
			duration: 0, // slide duration
			container: false, // html container tag
			item: false, // html item tag
			next: false, // html next item tag
			prev: false  // html prev item tag
		},
		counter = 0;
};

mustang.prototype.move = function() {
	// move to next slide
};