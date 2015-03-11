!function(root, factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = factory();
    /* AMD module. */
    } else if (typeof define === "function" && define.amd) {
        define(['jquery'], factory);
    /* Browser globals. */
    } else {
        factory(root.jQuery);
    }
}(this, function($) {


    var default_options = {
        //Uses Velocity syntax
        tabs_animation: {
            easing: "easeOutCubic",
            duration: 300
        },
        buttons_animation: {
            easing: "easeInOutCubic",
            duration: 300
        },
        wrapper: {
            element: "section",
            class: "tabbed",
            extra_classes: '',
            singular_class: 'tab_single'
        },
        navigation: {
            element: "nav",
            class: "tabs",
            extra_classes: ''
        },
        tabs: {
            class: 'tab',
            active_class: 'active',
            extra_classes: '',
            toggle: false,
            begin: null
        },
        buttons: {
            class: 'tab_button',
            active_class: 'active',
            toggle: false,
            begin: null
        },
        content: {
            class: 'tab_content',
            active_class: 'tab_active'
        }
    };

    //Tab setup

    $.fn.tabbed = function(user_options, callback) {

        var $this = this;

        $this.each(function(){

            var t = {},
                //Scope to this function (prevents polluting the jQuery object)
                element = this,
                //Default animation options so first run is fast
                no_animation = {opacity: [1,1], duration: 0};

    		t.init = function(user_options, callback, element) {

                //Create scope based on element
                t.scope = element;

                //Add options if passed by user
                //Check if function was passed as first parameter, assume it's meant as a callback
                if (typeof user_options === 'function'){
                    callback = user_options;
                    t.options = $.extend(true, {}, default_options, {});
                }else {
                    t.options = $.extend(true, {}, default_options, user_options);
                }
                //Create class strings ('.foo') for easier code readability
                t.populate_options();
                //Start core functions
                t.collect_tabs();
    			t.bind_events();

                //Callback (passed)
                if (typeof callback === 'function') {
                    callback.call(this, t.scope); // brings the scope to the callback
                }
    		};

            //Loop over the provided options and add class strings for easier selection
            t.populate_options = function(){

                // t.anim_props = t.options.animation.properties;
                t.tab_anim_opts = t.options.tab_animation;
                t.accordion_animation = t.options.buttons_animation;

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
                    wrapper = $(document.createElement(b.wrapper.element))
                        .addClass(b.wrapper.class)
                        .addClass(b.wrapper.extra_classes).attr("data-tabbed", "true"),
                    tab_groups = [],
                    tab_parents = [],
    				addons = "";

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
    			$tab_parents.each( function() {
    				$this = $(this);
                    //Create Tab navigation container
                    $tab_nav = $(document.createElement(t.options.navigation.element))
                        .addClass(t.options.navigation.class)
                        .addClass(t.options.navigation.extra_classes);
                    //Select tab/accordion buttons
                    $tab_buttons = $this.children(t.buttons_class);

    				if ($tab_buttons.length > 1) {
                        //Don't reapply navigation if it already exists
                        if ($this.children(t.navigation_class).length === 0 ) {
                            //Clone tab navigation to tab container (and select it)
                            $tab_nav = $tab_nav.clone().prependTo($this);

                            //Clone tab buttons and convert them into true tabs
                            $tab_buttons.clone(false)
                                .appendTo($tab_nav)
                                .addClass(t.options.tabs.class)
                                .addClass(t.options.tabs.extra_classes)
                                .removeClass(t.options.buttons.class);
                        }

    			    } else {
                        $this.attr("data-tabbed", "true").addClass(t.options.wrapper.single_class);
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
                        t.change_tabs(true);
                        $this.attr("data-tabbed", "true");
                    }
                });
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
    		};

            t.change_tabs = function(skip_animation) {

                skip_animation = skip_animation || false;

                t.hash = t.current_item.attr('href');
                t.target = $(t.hash);

                //Do not perform on already animating objects
                if (!t.target.hasClass('velocity-animating')){

                    //Grab button and tab
                    t.both_tabs = $("[href='"+t.hash+"']");

                    if (skip_animation) {
                        t.skip_animations();
                    }else {
                        if (t.is_tab()){
                            t.anim_opts = t.tab_anim_opts;

                            if(t.options.tabs.toggle) {
                                t.is_active() ? t.hide_tabs() : (t.hide_tabs(), t.show_tabs());
                            }else {
                                t.hide_tabs();
                                t.show_tabs();
                            }
                        }else {
                            t.anim_opts = t.accordion_anim_opts;

                            if(t.options.buttons.toggle) {
                                t.is_active() ? t.hide_accordions() : (t.hide_accordions(), t.show_accordions());
                            }else {
                                t.hide_accordions();
                                t.show_accordions();
                            }
                        }
                    }
                }
            };

            t.hide_tabs = function() {
                //Hide siblings and remove
                if (t.options.tabs.toggle){
                    t.target
                        .siblings(t.content_class)
                        .addBack()
                        .hide()
                        .removeClass(t.content_active);

                    t.both_tabs
                        .siblings(t.both_tabs)
                        .addBack()
                        .removeClass(t.tabs_active+' '+t.buttons_active );
                }else {
                    t.target
                        .siblings(t.content_class)
                        .hide()
                        .removeClass(t.content_active);

                    t.both_tabs
                        .siblings(t.both_tabs)
                        .removeClass(t.tabs_active+' '+t.buttons_active );
                }
            };

            t.show_tabs = function() {
                t.target.css('display', 'block');

                t.target.velocity(
                    t.anim_opts,
                    t.anim_opts
                );

                //Add active classes
                t.target.addClass(t.content_active);
                t.both_tabs
                    .not(t.buttons_class)
                    .addClass(t.tabs_active);
                t.both_tabs
                    .not(t.tabs_class)
                    .addClass(t.buttons_active);
            };

            t.hide_accordions = function(){

                //Call ahead function
                t.begin([t.current_item[0], t.target[0]]);

                if (t.options.buttons.toggle){
                    t.both_tabs
                        .siblings(t.both_tabs)
                        .addBack()
                        .removeClass(t.tabs_active+' '+t.buttons_active );

                    t.target
                        .siblings(t.content_class)
                        .velocity('slideUp',
                            t.anim_opts,
                            t.anim_opts
                        )
                        .addBack()
                        .removeClass(t.content_active);
                }else {
                    t.both_tabs
                        .siblings(t.both_tabs)
                        .removeClass(t.tabs_active+' '+t.buttons_active );

                    t.target
                        .siblings(t.content_class)
                        .velocity('slideUp',
                            t.anim_opts,
                            t.anim_opts
                        )
                        .removeClass(t.content_active);
                }
            };

            t.show_accordions = function(skip_animation){
                t.target.velocity('slideDown',
                    t.anim_opts,
                    t.anim_opts
                );

                //Add active classes
                t.target.addClass(t.content_active);
                t.both_tabs
                    .not(t.buttons_class)
                    .addClass(t.tabs_active);
                t.both_tabs
                    .not(t.tabs_class)
                    .addClass(t.buttons_active);
            };

            //Check if current item is a tab or a button
            t.is_tab = function(){
                if($(t.current_item).hasClass(t.options.tabs.class)){
                    return true;
                }else {
                    return false;
                }
            };

            t.is_active = function() {
                if(t.is_tab() &&
                    t.current_item.hasClass(t.options.tabs.active_class)){
                    return true;

                }else if (!t.is_tab() &&
                    t.current_item.hasClass(t.options.buttons.active_class)){
                    return true;

                }else {
                    return false;
                }
            }

            t.skip_animations = function(){
                t.target
                    .siblings(t.content_class)
                    .hide()
                    .removeClass(t.content_active);

                t.both_tabs
                    .siblings(t.both_tabs)
                    .removeClass(t.tabs_active+' '+t.buttons_active );

                t.target.show()

                //Add active classes
                t.target.addClass(t.content_active);
                t.both_tabs
                    .not(t.buttons_class)
                    .addClass(t.tabs_active);
                t.both_tabs
                    .not(t.tabs_class)
                    .addClass(t.buttons_active);
            };

            //Call ahead function
            t.begin = function(elements) {
                if (typeof t.options.tabs.begin === "function" ) {
                    t.options.tabs.begin.call(elements, elements);
                }else if (typeof t.options.buttons.begin === "function") {
                    t.options.buttons.begin.call(elements, elements);
                }
            };

    		t.init(user_options, callback, element);

        });
    };

    $.fn.tabbed.defaults = default_options;
});
