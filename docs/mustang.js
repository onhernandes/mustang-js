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

;( function($, file) {
	"use strict";

		
	var plugin = "Mustang",
		settings = {
			translate: 0,
			time = 3000,
			counter = 0
		};

	// The actual plugin constructor
	function Plugin ( element, options ) {
		this.element = element;

		// jQuery has an extend method which merges the contents of two or
		// more objects, storing the result in the first object. The first object
		// is generally empty as we don't want to alter the default options for
		// future instances of the plugin
		this.settings = $.extend( {}, defaults, options );
		this._defaults = defaults;
		this._name = plugin;
		this.init();
	}

	// Avoid Plugin.prototype conflicts
	$.extend( Plugin.prototype, {
		init: function() {

			// Place initialization logic here
			// You already have access to the DOM element and
			// the options via the instance, e.g. this.element
			// and this.settings
			// you can add more functions like the one below and
			// call them like the example bellow
			this.yourOtherFunction( "jQuery Boilerplate" );
		},
		yourOtherFunction: function( text ) {

			// some logic
			$( this.element ).text( text );
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