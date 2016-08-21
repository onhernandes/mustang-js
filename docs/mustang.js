/*
 *  Project: Mustang.js
 *  Description: A simple jQuery slider
 *  Author: Matheus Hernandes
 *  License: MIT License
 */

;(function ( $, window, document, undefined ) {

	var pluginName = 'mustang',
		defaults = {
			item: '.item',
			time: 2500,
			buttonActive: false,
			next: '#next',
			prev: '#prev'
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

		if (that.options.buttonActive) {
			that.button();
		}
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

	Plugin.prototype.button = function() {
		$(that.options.next).click(function() {
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
			console.log(that.wheel.counter);
			console.log(that.wheel.translate);
			console.log(that.wheel.result);
		});


		$(that.options.prev).click(function() {
			if (that.wheel.counter < that.total && that.wheel.counter !== 0) {
				that.wheel.counter--;
				that.wheel.translate -= 100;
				that.wheel.result = "translateX(-" + that.wheel.translate + "%)";
				$(that.options.item).css("transform", that.wheel.result);
			} else {
				return false;
			}
		});
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