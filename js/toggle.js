//General toggle functions

;(function($){

	var $toggle = {

		init: (function(element, event){
			event.preventDefault();
			var $this = $(element);
			var type = $this.data('toggle-type');

			this.do_toggle($this, type);
		}),

		add_aria: (function($this, $target, expanded){
			$this.attr('aria-expanded', expanded);
			expanded = expanded ? false : true;
			$target.attr('aria-hidden', expanded);
		}),

		do_toggle: (function($this, type){
			var toggle = $this.data('toggle');
			var $toggle_target = $(toggle);
			var toggle_class = $this.data('toggle-class') || 'toggle_active, toggle_target_active';

			toggle_class = toggle_class.split(',');

			var veloExists = (typeof Velocity === "function") ? true : false;

			if (! Array.isArray(toggle_class)){
				toggle_class = ["", toggle_class];
			}

			if(type === "class"){
				$toggle_target.toggleClass(toggle_class[0]);
				$toggle_target.toggleClass(toggle_class[1]);

				if ($toggle_target.hasClass(toggle_class[1])){
					$toggle.add_aria($this, $toggle_target, true);
				}else {
					$toggle.add_aria($this, $toggle_target, false);
				}

			}else if(type === "slide" && veloExists) {
				if($toggle_target.is(':visible')){
					$toggle_target.velocity('slideUp', 200);
					$toggle.add_aria($this, $toggle_target, false);
				}else{
					$toggle_target.velocity('slideDown', 200);
					$toggle.add_aria($this, $toggle_target, true);
				}
			}else if(type === "squish" && veloExists) {

			}else{
				if($toggle_target.is(':visible')){
					$this.removeClass(toggle_class[0]);
					$toggle_target.hide().removeClass(toggle_class[1]);
					$toggle.add_aria($this, $toggle_target, false);
				}else{
					$this.addClass(toggle_class[0]);
					$toggle_target.show().addClass(toggle_class[1]);
					$toggle.add_aria($this, $toggle_target, true);
				}
			}
		})

	};

	$('[data-toggle]').on('toggle', function(e, _options){
		$toggle.do_toggle($(e.target), _options);
	});

	$('body').on('click', '[data-toggle]', function(e){
		$toggle.init(this, e);
	});


}(jQuery));

//# sourceMappingURL=maps/toggle.js.map