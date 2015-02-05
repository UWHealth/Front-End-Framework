(function($) {

    //Tab setup

    $.tabbed = function(user_options, element) {
		//Scope to this function (prevents polluting the jQuery object)
        var c = this.tabbed;
        //Used everywhere, so let's define it up top.
        var $this;


		c.init = function(user_options, element) {
            //Create scope based on element
            c.scope = element;
            //Add options if passed by user
            c.options = $.extend(true, {}, c.defaultOptions, user_options);
            //Start functions
            c.populate_options();
            c.collect_tabs();
			c.bind_events();
		};

        //Loop over the provided options and add class strings for easier selection
        c.populate_options = function(){
            var new_key, new_class, option;
            for (var key in c.options){
                if (c.options.hasOwnProperty(key)) {
                    option = c.options[key];
                    for (var prop in option){
                        if (option.hasOwnProperty(prop)) {
                            if (prop === 'class') {
                                //Take spaced notation and convert it to combined class strings
                                //e.g. 'foo bar' to '.foo.bar'
                                new_class = option.class.replace(' ', '.');
                                new_key = key + '_class';
                                //Store it in options
                                c[new_key] = '.' + new_class;
                            }
                        }
                    }
                }
            }
            // c.elevate_options();
        };

        // c.elevate_options = function(){
        // // Elevate Make common classes easier to grab.
        //     c.tabs_class = c.options.tabs.class_str;
        //     c.buttons_class = c.options.buttons.class_str;
        //     c.content_class = c.options.content.class_str;
        //     c.wrapper_class = c.options.wrapper.class_str;
        // };

		c.collect_tabs = function() {

			var b = c.options,
                tab_buttons = $(c.scope).find(c.buttons_class).not("[data-tabbed='true']"),
                tabs_length = tab_buttons.length,
                new_wrapper = $(b.new_wrapper),
                new_wrapper_class = new_wrapper.attr('class'),
                wrapper = $(document.createElement(b.wrapper.element)).addClass(b.wrapper.class).data("tabbed", "true"),
                tab_groups = [],
                tab_parents = [],
				addons = "",
                tab_nav,
                $tab_parents,
                $tab_children;

			//Loop over all tab_buttons
			for( var i=0, this_group, this_parent;
                 i <= tabs_length;
                 i++, addons='', this_group=[], this_parent=[]
            ) {
				//Select the current tab button
				$this = $(tab_buttons[i]);

				//Check if we've already added this tab to a grouping
                //Using a string because the DOM attribute is also valid
				if ($this.data("tabbed") !== "true" &&
                    $this.parent(c.wrapper_class).data("tabbed") !== "true" &&
                    $this.length > 0 ) {

                    //Grap all siblings(and self), stopping when an object isn't tab content or a tab button
                    this_group = $this.nextUntil(":not("+c.content_class+", "+c.buttons_class+")").addBack();

                    //Insert wrapper before group.
                    this_parent = wrapper.clone().insertBefore(this_group[0]);

                    //Grab data-tab attributes (since they can be used as optional style alternatives)
                    if ($this.attr("data-tab") !== undefined) {
                        addons = $this.attr("data-tab");
                        //Add these as classes.
                        this_parent.addClass(addons);
                    }
                    //Move the group to wrapper.
                    this_group.appendTo(this_parent);
                    this_group.not(c.content_class).data("tabbed", "true");

                    //Move groups and parents into arrays for later use
                    tab_groups.push(this_group);
                    tab_parents.push(this_parent[0]);
				}
			}

            //Select the newly created tab parents
            $tab_parents = $(tab_parents);

			//Add a nav element to the top of the groups
			//only if they contain more than one tab_content child
			$tab_parents.each(function() {
				$this = $(this);
                $tab_children = $this.children(c.buttons_class);

				 if ($tab_children.length > 1) {
					$this.prepend("<nav class='tabs' />");

                    tab_nav = $this.children(".tabs");

                    $tab_children.clone(false)
                        .appendTo(tab_nav)
                        .addClass(b.tabs.class)
                        .removeClass(b.buttons.class);
			    }else {
                    $this.attr("data-tabbed", "true").addClass("tab_single");
                }
			});

			//Make the first tab and tab_button in each grouping the active tab.
			$tab_parents.each(function() {
                $this = $(this);

                //Don't perform on previously tabbed items
                if ($this.attr("data-tabbed") !== "true"){
                    c.current_item = $this.find($(c.buttons_class)).first();
                    c.change_tabs(true);
                    $this.attr("data-tabbed", "true");
                }
            });



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
		};
        c.is_tab = function(){
            if($(c.current_item).hasClass(c.options.tabs.class)){
                return true;
            }else{
                return false;
            }
        };

        c.hide_tabs = function() {

        };

        c.change_tabs = function() {
            c.hash = c.current_item.attr('href');
            c.target = $(c.hash);
            c.anim_config = {};
            c.both_tabs = $("[href='"+c.hash+"']");

            c.both_tabs
                .siblings(c.tabs_class+','+c.buttons_class)
                .removeClass('active');

            c.both_tabs.addClass('active');

            c.target.addClass('active_tab')
                .siblings(c.content_class)
                .removeClass('active_tab')
                .hide();

            if ( c.is_tab() ){
                anim_config = {

                };
            }else{

            }

            c.target.show();
        };
		//----------------------------------------------------------
		//		Actions for tab clicks
		//----------------------------------------------------------
		c.bind_events = function(){

			$(document).on('click', c.tabs_class+','+c.buttons_class, function(e) {
				e.preventDefault();
                c.current_item = $(this);
				// Just making sure we don't animate already active tabs.
				if (! $this.hasClass('active')){
                    c.change_tabs();
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

		c.init(user_options, element);
	};

	//Default options along with a targeted creation of
	$.tabbed.defaultOptions = {
        speed: 300,
        new_wrapper: '<section class="tabbed"/>',
        wrapper: {
            element: "section",
            class: "tabbed"
        },
        active_class: 'active_tab',
        tabs: {
            class: 'tab'
        },
        buttons: {
            class: 'tab_button'
        },
        content: {
            class: 'tab_content'
        }
	};

	$.fn.tabbed = function(options) {
		return this.each(function() {
			($.tabbed(options, this));
		});
	};
})(jQuery);
