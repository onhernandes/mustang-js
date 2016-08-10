$(document).ready(function() {
	var Mustang = function(wrapper) {
		var wrapper = $(wrapper),
			slide = $(".banner"),
			total = slide.length,
			translate = 0,
			time = 3000,
			counter = 0;

		function move() {
			translate += 100;
			counter++;

			if (counter < total) {
				var final = "translateX(-" + translate + "%)";
			} else {
				var final = "translateX(0%)";
				counter = 0;
				translate = 0;
			}

			slide.css("transform", final);
		}
		
		var interval = setInterval(move, time);
	}

	Mustang(".slide", ".banner");
});

;(function($,) {
	"use strict";

		
	var plugin = "Mustang";

	// The actual plugin constructor
	function Plugin (element, options) {
		this.element = element;
		this.options = {
			translate: 0,
			time = 3000,
			final = "",
			counter = 0
		};

		this.init();
	}

	// Avoid Plugin.prototype conflicts
	$.extend( Plugin.prototype, {
		init: function() {
			$.extend(this.options, options);
            setInterval(this.move, this.time);
		},

		move: function() {
			this.options.translate += 100;
			this.options.counter++;

			if (this.options.counter < this.options.total) {
				this.options.final = "translateX(-" + this.options.translate + "%)";
			} else {
				this.options.final = "translateX(0%)";
				this.options.counter = 0;
				this.options.translate = 0;
			}

			this.element.css("transform", this.options.final);
		}
	} );

	// A really lightweight plugin wrapper around the constructor,
	// preventing against multiple instantiations
	$.fn[ plugin ] = function( options ) {
		return this.each( function() {
			if ( !$.data( this, "plugin_" + plugin ) ) {
				$.data( this, "plugin_" +
					plugin, new Plugin( this, options ) );
			}
		} );
	};
})(jQuery);