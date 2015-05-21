(function($){

	var $toggle = {

		init: (function(element, event){
			event.preventDefault();
			var $this = $(element);
			var options = $this.data('toggle-options');

			this.parse_options($this, options);
		}),

		parse_options: (function($this, options){
			var toggle = $this.data('toggle');
			var $toggle_target = $(toggle);

			if(options){

			}else{
				if($toggle_target.is(':visible')){
					$toggle_target.hide().removeClass('toggletarget_active');
					$this.removeClass('toggle_active');
				}else{
					$this.addClass('toggle_active');
					$toggle_target.show().addClass('toggletarget_active');
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
