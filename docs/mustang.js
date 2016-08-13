/*
 *  Project: 
 *  Description: 
 *  Author: 
 *  License: 
 */

// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.
;(function ( $, window, document, undefined ) {

	var pluginName = 'mustang',
		defaults = {
			item: '.banner',
			time: 100
        },
        wheel = {
        	counter: 0,
        	translate: 0,
        	result: ''
        };

	function Plugin(element, options) {
        this.element = element;
		this.options = $.extend(defaults, options);

		this.total = $(this.options.item).length;
		this.childs = this.options.item;

		//this.init();
		setInterval(this.move(), this.options.time);
		//setTimeout(this.move, this.options.time);
	}

	Plugin.prototype.init = function() {
		//var trye = this.move();
		setInterval(this.move(), this.options.time);
		//setInterval(this.move, this.options.time);
	};

	Plugin.prototype.move = function() {
		wheel.translate += 100;
		wheel.counter++;

		if (wheel.counter < this.total) {
			wheel.result = "translateX(-" + wheel.translate + "%)";
		} else {
			wheel.result = "translateX(0%)";
			wheel.counter = 0;
			wheel.translate = 0;
		}

		console.log(wheel.counter);
		console.log(wheel.translate);
		console.log(this.total);
		console.log(wheel.result);
		
		$(this.childs).css("transform", wheel.result);
	};

	$.fn[pluginName] = function (options) {
		var args = arguments;
		if (options === undefined || typeof options === 'object') {
			return this.each(function () {
				if (!$.data(this, 'plugin_' + pluginName)) {
					$.data(this, 'plugin_' + pluginName, new Plugin(this, options));
				}
			});
		} else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {
			return this.each(function () {
				var instance = $.data(this, 'plugin_' + pluginName);
				if (instance instanceof Plugin && typeof instance[options] === 'function') {
					instance[options].apply(instance, Array.prototype.slice.call(args, 1));
				}
				if (options === 'destroy') {
					$.data(this, 'plugin_' + pluginName, null);
				}
			});
		}
	};

}(jQuery, window, document));