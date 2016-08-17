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
			time: 3000
        };
	
	var Omustang = undefined;
	
	function Mustang(element, options) {
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
		
		Omustang = this;
		this.init();		
		
		//setTimeout(Omustang.move, Omustang.options.time);
	}

	Mustang.prototype.init = function() {
		setTimeout(Omustang.move, Omustang.options.time);
	};

	Mustang.prototype.move = function() {
		o = this;
		if(typeof(this.element) == 'undefined' && typeof(Omustang) != 'undefined'){
			o = Omustang;	
		}
		o.wheel.translate += 100;
		o.wheel.counter++;

		if (o.wheel.counter < o.total) {
			o.result = "translateX(-" + o.wheel.translate + "%)";
		} else {
			o.result = "translateX(0%)";
			o.wheel.counter = 0;
			o.wheel.translate = 0;
		}

		$(o.options.banner).css("transform", o.wheel.result);
		console.log('Move Ok');
	};

	$.fn[pluginName] = function (options) {
		var args = arguments;
		if (options === undefined || typeof options === 'object') {
			return this.each(function () {
				if (!$.data(this, 'plugin_' + pluginName)) {
					$.data(this, 'plugin_' + pluginName, new Mustang(this, options));
				}
			});
		} else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {
			return this.each(function () {
				var instance = $.data(this, 'plugin_' + pluginName);
				if (instance instanceof Mustang && typeof instance[options] === 'function') {
					instance[options].apply(instance, Array.prototype.slice.call(args, 1));
				}
				if (options === 'destroy') {
					$.data(this, 'plugin_' + pluginName, null);
				}
			});
		}
	};

}(jQuery, window, document));