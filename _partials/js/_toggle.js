//General toggle functions

;(function($){

	var $toggle = {

		init: (function(element, event){
			event.preventDefault();
			var $this = $(element);
			var type = $this.data('toggle-type');

			this.do_toggle($this, type);
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
			}else if(type === "slide" && veloExists) {
				if($toggle_target.is(':visible')){
					$toggle_target.Velocity('slideUp', 200);
				}
			}else if(type === "squish" && veloExists) {

			}else{
				if($toggle_target.is(':visible')){
					$this.removeClass(toggle_class[0]);
					$toggle_target.hide().removeClass(toggle_class[1]);
				}else{
					$this.addClass(toggle_class[0]);
					$toggle_target.show().addClass(toggle_class[1]);
				}
			}
		})

	};

	$('[data-toggle]').on('toggle', function(e, _options){
		$toggle.parse_options(e.target, _options);
	});

	$('body').on('click', '[data-toggle]', function(e){
		$toggle.init(this, e);
	});


}(jQuery));
