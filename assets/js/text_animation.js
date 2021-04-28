

	function tm_animate_text(){
	
		"use strict";
		
		var animateSpan			= jQuery('.animation_text_word');
		
			animateSpan.typed({
				strings: [" ", "Heavy Metal", "Organic Solvents", "Oils and Dyes", "Pesticides", "Pharmaceutical"],
				loop: true,
				startDelay: 2,
				backDelay: 3
			});
	}

	jQuery(document).on('ready', function () {
		(function ($) {
			tm_animate_text();
		})(jQuery);
	});