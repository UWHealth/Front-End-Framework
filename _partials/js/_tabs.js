(function($) {

    //Tab setup

    $.tabbed = function(user_options, callback, element) {
		//Scope to this function (prevents polluting the jQuery object)
        var t = this;
        //Used everywhere, so let's define it up top.
        var $this;

        t.default_options = {
            animation: {
                class: "tab_animating",
                speed: 300,
                easing: "easeOutCubic"
            },
            wrapper: {
                element: "section",
                class: "tabbed"
            },
            navigation: {
                element: "nav",
                class: "tabs"
            },
            tabs: {
                class: 'tab',
                active_class: 'active'
            },
            buttons: {
                class: 'tab_button',
                active_class: 'active'
            },
            content: {
                class: 'tab_content',
                active_class: 'tab_active'
            }
    	};

		t.init = function(user_options, callback, element) {

            //Create scope based on element
            t.scope = element;

            //Add options if passed by user
            //Check if function was passed as first parameter, assume it's meant as a callback
            if (typeof user_options == 'function'){
                callback = user_options;
                t.options = $.extend(true, {}, t.default_options, {});
            }else {
                t.options = $.extend(true, {}, t.default_options, user_options);
            }
            //Create class strings ('.foo') for easier code readability
            t.populate_options();
            //Start core functions
            t.collect_tabs();
			t.bind_events();

            //Callback (passed)
            if (typeof callback == 'function') {
                callback.call(this); // brings the scope to the callback
            }
		};

        //Loop over the provided options and add class strings for easier selection
        t.populate_options = function(){
            var new_key, new_class, option;
            //loop through keys
            for (var key in t.options){
                //Sanitize check. Make sure we don't reference another key
                if (t.options.hasOwnProperty(key)) {
                    option = t.options[key];
                    //Repeat one layer deeper
                    for (var prop in option){
                        if (option.hasOwnProperty(prop)) {
                            //Check for 'class' property
                            if (prop === 'class') {
                                //Take spaced notation and convert it to combined class strings
                                //e.g. 'foo bar' to '.foo.bar'
                                new_class = option.class.replace(',', '.').replace(' ','');
                                new_key = key + '_class';
                                //Store value directly beneath the tabbed object
                                // (above of t.options for easier typing)
                                t[new_key] = '.' + new_class;
                            }else if (prop === 'active_class'){
                                new_class = option.active_class;
                                new_key = [key + '_active'];
                                t[new_key] = new_class;
                            }
                        }
                    }
                }
            }
        };

		t.collect_tabs = function() {

			var b = t.options,
                tab_buttons = $(t.scope).find(t.buttons_class).not("[data-tabbed='true']"),
                tabs_length = tab_buttons.length,
                wrapper = $(document.createElement(b.wrapper.element)).addClass(b.wrapper.class).attr("data-tabbed", "true"),
                tab_groups = [],
                tab_parents = [],
				addons = "",
                $tab_parents;
        //  var new_wrapper = $(b.new_wrapper),
        //      new_wrapper_class = new_wrapper.attr('class'),

            //Do nothing if no tabs exist
            if (tabs_length > 0){
                //Loop over all tab_buttons
    			for( var i=0, this_group, this_parent;
                     i <= tabs_length;
                     i++, addons='', this_group=[], this_parent=[]
                ) {
    				//Select the current tab button
    				$this = $(tab_buttons[i]);

    				//Check if we've already added this tab to a grouping
                    //Using a string because the DOM attribute is also valid
    				if ($this.data("tabbed") !== true &&
                        $this.length > 0 ) {

                        //Grap all siblings(and self), stopping when an object isn't tab content or a tab button
                        this_group = $this.nextUntil(":not("+t.content_class+", "+t.buttons_class+")").addBack();

                        if ($this.parent(t.wrapper_class).data("tabbed") !== true){
                            //Insert wrapper before group.
                            this_parent = wrapper.clone().insertBefore(this_group[0]);

                            //Grab data-tab attributes (since they can be used as optional style alternatives)
                            if ($this.data("tab") !== undefined) {
                                addons = $this.data("tab");
                                //Add these as classes.
                                this_parent.addClass(addons);
                            }
                            //Move the group to wrapper.
                            this_group.appendTo(this_parent);
                        }else {
                            this_parent = $this.parent(t.wrapper_class);
                        }

                        this_group.not(t.content_class).attr("data-tabbed", "true");

                        //Move groups and parents into arrays for later use
                        tab_groups.push(this_group);
                        tab_parents.push(this_parent[0]);
    				}
    			}

                t.create_tab_environment($(tab_parents));
                t.activate_tabs($(tab_parents));
            }

        };

        t.create_tab_environment = function($tab_parents) {

            var $tab_buttons,
                $tab_nav;

			//Add a nav element to the top of the groups
			//only if they contain more than one tab_content child
			$tab_parents.each(function() {
				$this = $(this);
                $tab_nav = $(document.createElement(t.options.navigation.element)).addClass(t.options.navigation.class);
                $tab_buttons = $this.children(t.buttons_class);

				if ($tab_buttons.length > 1) {

                    if ($this.children(t.navigation_class).length === 0 ) {
    					$tab_nav = $tab_nav.clone().prependTo($this);

                        $tab_buttons.clone(false)
                            .appendTo($tab_nav)
                            .addClass(t.options.tabs.class)
                            .removeClass(t.options.buttons.class);
                    }

                    //Store active class variables to children
                    $tab_nav.children().data('tabbed-active', t.tabs_active);
                    $this.children(t.content_class).data('tabbed-active', t.content_active);
                    $tab_buttons.data('tabbed-active', t.buttons_active);

			    } else {
                    $this.attr("data-tabbed", "true").addClass("tab_single");
                }
			});
        };

		t.activate_tabs = function($tab_parents){
            //Make the first tab and tab_button in each grouping the active tab.
			$tab_parents.each(function() {
                $this = $(this);

                //Don't perform on previously tabbed items
                if ($this
                    .children(t.buttons_class+','+t.tabs_class)
                    .hasClass(t.buttons_active+','+t.tabs_active) !== true
                ){
                    t.current_item = $this.find(t.buttons_class).first() || $this.find(t.tabs_class).first();
                    t.change_tabs();
                    $this.attr("data-tabbed", "true");
                }
            });
        };




			//Hide all tab_content.
			// $tab_content.hide();
			// //Grab the hash/href value of each active tab.
			// var active_content = ""+$tabbed.find(".active").map(function(){
			// 	return this.hash;
			// }).get();
            // var $active_content = $(active_content);
            //
			// //Find cooresponding tab contents based on the
			// // hash/href ID we just grabbed and make them active.
			// $active_content.each(function(){$(this).show();});
            //
			// //Try to normalize heights of all tab groupings.
			// //This is particularly important for groupings with tab_sides.
			// $tab_content.each(function(){
			// 	$this = $(this);
			// 	var tab_height = $this.closest($tabbed).find('.tabs:first').outerHeight();
			// 	var baseline = parseInt($("body").css('line-height'), 10);
            //
			// 	//Align to baseline grid.
			// 	tab_height = Math.ceil(tab_height / baseline) * baseline - 1;
            //
			// 	$this.css("min-height", tab_height );
			// });

        t.is_tab = function(){
            if($(t.current_item).hasClass(t.options.tabs.class)){
                return true;
            }else{
                return false;
            }
        };

        t.hide_tabs = function() {
            t.target.addClass(t.content_active)
                .siblings(t.content_class)
                .hide()
                .removeClass(t.content_active);
            t.both_tabs
                .siblings(t.both_tabs)
                .removeClass(t.tabs_active+' '+t.buttons_active );
        };

        t.get_active = function(component) {
            var active_data = component.data('tabbed-active');

            if (active_data === undefined){
                return false;
            }else {
                return active_data;
            }
        }

        t.change_tabs = function() {
            t.hash = t.current_item.attr('href');
            t.target = $(t.hash);
            t.anim_config = {};
            t.both_tabs = $("[href='"+t.hash+"']");
            t.tabs_active = t.get_active($(t.tabs_class + "[href='"+t.hash+"']")) || 'active';
            t.buttons_active = t.get_active($(t.buttons_class + "[href='"+t.hash+"']")) || 'active';
            t.content_active = t.get_active(t.target) || 'active';

            $(t.both_tabs).not(t.buttons_class).addClass(t.tabs_active);
            $(t.both_tabs).not(t.tabs_class).addClass(t.buttons_active);

            t.hide_tabs();

            if ( t.is_tab() ){
                t.anim_config = {

                };
            }else{

            }

            t.target.show();
        };
		//----------------------------------------------------------
		//		Actions for tab clicks
		//----------------------------------------------------------
		t.bind_events = function(){

			$(t.scope).on('click', t.tabs_class+','+t.buttons_class, function(e) {
				e.preventDefault();
                t.current_item = $(this);
				// Just making sure we don't animate already active tabs.
				if (! $this.hasClass('active')){
                    t.change_tabs();
                }
            });
					//Grab the target's ID through the clicked tab's href/hash value.
					// var d = $(this).attr("href");
                    //
					// //Hiding all target siblings tab_content.
					// $(d).siblings(".tab_content").hide();
                    //
					// //Unhide the correct tab content.
					// $(d).fadeIn(c.options.speed);
                    //
					// //Finding tab and tab_button siblings
					// //And then removing "active" class.
					// $("[href^='" + d + "']")
					// 	.siblings(".tab, .tab_button")
					// 	.addBack()
					// 	.removeClass("active");
                    //
					// //Adding back the "active" class
					// //to the appropriate buttons.
					// $(this).addClass("active");
					// $("[href^='" + d + "'].tab_button").addClass("active");
			//}
			// })

			//Actions for accordion tab_buttons.
			//Nearly identical to the previous function,
			//but with a slide effect.
			// .on('click', '.tab_button', function(e) {
			// 	e.preventDefault();
			// 	if ($(this).hasClass('active') === false){
			// 		var d = $(this).attr("href");
            //
			// 		$(d).siblings(".tab_content")
			// 			.addBack()
			// 			.css("min-height","0")
			// 			.slideUp(c.options.speed);
			// 		$(d).slideToggle(c.options.speed);
			// 		$("a[href^='" + d + "']")
			// 			.siblings(".tab, .tab_button")
			// 			.addBack()
			// 			.removeClass("active");
			// 		$(this).addClass("active");
			// 		$("a[href^='" + d + "'].tab").addClass("active");
			// 	}
			// });

		};

		t.init(user_options, callback, element);
	};

	$.fn.tabbed = function(options, callback) {
		return this.each(function() {
			(new $.tabbed(options, callback, this));
		});
	};
})(jQuery);
