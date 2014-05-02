/*!
 *	jquery.eqHeight.js
 *
 *	License: MIT License
 *
 *	https://github.com/bukurocci/jquery.eqHeight.js
 */

;(function($, window, undefined) {

	var _toString = {}.toString;
	var _slice = [].slice;

	var methods = {};

	function equalizeHeight($items) {
		var heights = [];

		$items.each(function() {

			heights.push($(this).height());
		});

		$items.height(Math.max.apply(null, heights));
	}

	methods.init = function(options) {
		
		options = $.extend(true, {}, $.fn.eqHeight.defaultOptions, options);

		return this.each(function() {
			var $el = $(this);
			var $children = $el.children(':visible');
			var group = options.group;
			var numRows;

			console.log($children)

			if(group === 0) {

				equalizeHeight($children);
			} else {

				numRows = Math.ceil($children.length / group);

				for(var i=0, iz=numRows; i<iz; i++) {

					equalizeHeight($children.slice(group*i, group*i+group));
				}
			}

			$el.data('eqheightOption', options);
		});
	};

	methods.refresh = function(options) {

		if(!options) {
			options = this.data('eqheightOption');
		}

		this.children(':visible').css('height', 'auto').end().eqHeight(options);
	};

	methods.destroy = function() {

		this.children(':visible').css('height', 'auto').end().removeData('eqheightOption');
	};

	$.fn.eqHeight = function() {

		var first = arguments[0] ;
		var rest = _slice.call(arguments, 1);

		if(!arguments.length || $.isPlainObject(first)) {
			methods.init.call(this, first);
		}

		if(_toString.call(arguments[0]) === '[object String]') {
			
			if(first in methods) {

				methods[first].apply(this, rest);
			}
		}

		return this;
	}

	$.fn.eqHeight.defaultOptions = {
		group: 0
	};
})(jQuery, window);