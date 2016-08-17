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
			time: 2000
        };

	var that = undefined;
	
	function Plugin(element, options) {
		this.element = element;
		this.options = $.extend({}, defaults, options);
		
		this.wheel = {
        	counter: 0,
        	translate: 0,
        	result: ''
        };
		
        this.total = $(this.options.item).length;

        this._defaults = defaults;
		this._name = pluginName;
		
		that = this;
		this.init();
	}

	Plugin.prototype.init = function() {
		setInterval(that.move, that.options.time);
	};

	Plugin.prototype.move = function() {
		that.wheel.translate += 100;
		that.wheel.counter++;

		if (that.wheel.counter < that.total) {
			that.wheel.result = "translateX(-" + that.wheel.translate + "%)";
		} else {
			that.wheel.result = "translateX(0%)";
			that.wheel.counter = 0;
			that.wheel.translate = 0;
		}

		$(that.options.item).css("transform", that.wheel.result);
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