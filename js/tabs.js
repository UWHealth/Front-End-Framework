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
        "wrapper": {
            "element": "section",
            "class_string": "tabs",
            "extra_classes": "",
            "singular_class": "tab_single"
        },
        "navigation": {
            "element": "nav",
            "class_string": "tabs",
            "extra_classes": ""
        },
        "tabs": {
            "class_string": "tab",
            "active_class": "active",
            "extra_classes": '',
            "toggle": false,
            "begin": null,
            "animation": {
                easing: "easeOutCubic",
                duration: 300
            }
        },
        "buttons": { //Accorion Buttons
            "class_string": "tab_button",
            "active_class": "active",
            "toggle": false,
            begin: null,
            animation: {
                easing: "easeInOutCubic",
                duration: 300
            }
        },
        "content": {  //Tab panel content areas
            "class_string": "tab_content",
            "active_class": "tab_active"
        }
    };

    //Tab setup

    $.fn.tabbed = function(user_options, callback) {

        var $this = this;

            var t = {},
                element = this; //Scope to this function (prevents polluting the jQuery object)

    		t.init = function(user_options, callback, element) {
                t.scope = element; //Create scope based on element

                //Merge default and user options
                if (typeof user_options === 'function'){
                    //Check if function was passed as first parameter, assume it's meant as a callback
                    callback = user_options;
                    t.options = $.extend(true, {}, default_options, {});
                }else {
                    t.options = $.extend(true, {}, default_options, user_options);
                }
                //Add keys to options for class strings
                // (e.g.'.foo') for easier code readability
                t.populate_options();
                //Gather tab groupings
                t.collect_tabs();
                //Add click handlers and accessibility handlers
                t.add_aria_roles();
    			t.bind_events();
                //Completion Callback
                if (typeof callback === 'function') {
                    callback.call(this, t.scope); // brings the scope to the callback
                }
    		};

            //Loop over the provided options and add class strings for easier selection
            t.populate_options = function(){

                // t.anim_props = t.options.animation.properties;
                t.tabs_anim = t.options.tabs.animation;
                t.buttons_anim = t.options.buttons.animation;

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
                                if (prop === 'class_string') {
                                    //Take spaced notation and convert it to combined class strings
                                    //e.g. 'foo bar' to '.foo.bar'
                                    new_class = option.class_string.replace(',', '.').replace(' ','');
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
                            .addClass(b.wrapper.class_string)
                            .addClass(b.wrapper.extra_classes)
                            .attr("data-tabbed", "true"),
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

                                // //Grab data-tab attributes (since they can be used as optional style alternatives)
                                // if ($this.attr("data-tabbed-options") !== undefined) {
                                //     addons = $this.attr("data-tabbed-options");
                                //     //Add these as classes.
                                //     this_parent.addClass(addons);
                                // }

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

                    t.create_tab_nav($(tab_parents));
                    t.activate_tabs($(tab_parents));
                }

            };

            t.create_tab_nav = function($tab_parents) {

                var $tab_buttons,
                    $tab_nav;

    			//Add a nav element to the top of the groups
    			//only if they contain more than one tab_content child
    			$tab_parents.each( function() {
    				$this = $(this);
                    //Create Tab navigation container
                    $tab_nav = $(document.createElement(t.options.navigation.element))
                        .addClass(t.options.navigation.class_string)
                        .addClass(t.options.navigation.extra_classes)
                        .attr("role", "tablist");
                    //Select tab/accordion buttons
                    $tab_buttons = $this.children(t.buttons_class);

    				if ($tab_buttons.length > 1) {
                        //Don't reapply navigation if it already exists
                        if ($this.children(t.navigation_class).length === 0 ) {
                            //Clone tab navigation to tab container (and select it)
                            $tab_nav = $tab_nav.clone().prependTo($this);

                            //Clone tab buttons and convert them into true tabs
                            $tab_buttons
                                .attr({
                                    "aria-expanded": "false",
                                    "aria-selected": "false"
                                })
                                .clone(false)
                                .appendTo($tab_nav)
                                .addClass(t.options.tabs.class_string)
                                .addClass(t.options.tabs.extra_classes)
                                .removeClass(t.options.buttons.class_string);

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
                        .children(t.buttons_class)
                        .hasClass(t.buttons_active) !== true
                    ){
                        t.current_item = $this.children(t.buttons_class).first();
                        t.change_tabs(true);
                        $this.attr("data-tabbed", "true");
                    }
                });
            };

            //----------------------------------------------------------
    		//		Actions for tab clicks
    		//----------------------------------------------------------
    		t.bind_events = function(){
                $(t.scope).on('tab-change', t.tabs_class+','+t.buttons_class, function(e){

                    //Set current item
                    t.current_item = $(e.target);
                    t.change_tabs();
                });

    			$(t.scope).on('click', t.tabs_class+','+t.buttons_class, function(e) {
                    e.preventDefault();
                    $(e.target).trigger('tab-change');
                });
    		};

            // Tabs and Accordions toggling
            // NOTE: tabs and accordions are separated
            //   because accordions must use the 'slideUp' and 'slideDown' animation
            //   This is slightly confusing, but required
            //   because accordions animate together
            //   while tabs animate one after another
            t.change_tabs = function(skip_animation) {

                t.hash = t.current_item.attr('href');
                t.target = $(t.hash);

                //Do not perform on already animating objects
                if (!t.target.hasClass('velocity-animating')){

                    //Grab button and tab
                    t.both_tabs = $("[href='"+t.hash+"']");

                    if (skip_animation) {
                        //Used for first run; skips all animations.
                        t.skip_animations();
                    }else {
                        if (t.is_tab()){
                            //hide/show tabs
                            t.anim_opts = t.tabs_anim; //Set animations for simpler declaration later

                            if(t.options.tabs.toggle) {
                                //if toggle tabs are true, we determine
                                // whether to hide the current tab (if active)
                                // or do the normal switch (hide current active, show new selection)
                                t.is_active() ? t.hide_tabs() : (t.hide_tabs(), t.show_tabs()); // jshint ignore:line
                            }else if(! t.is_active()){
                                //If not a toggle, and not active, we switch current tab
                                t.hide_tabs();
                                t.show_tabs();
                            }
                        }else {
                            t.anim_opts = t.buttons_anim;

                            if(t.options.buttons.toggle) {
                                //if toggle buttons are true, we determine
                                // whether to hide the current accordion (if active)
                                // or do the normal switch (hide current active, show new selection)
                                t.is_active() ? t.hide_accordions() : (t.hide_accordions(), t.show_accordions()); // jshint ignore:line
                            }else if(! t.is_active()){
                                //If not a toggle, and not active, we switch current accordion
                                t.hide_accordions();
                                t.show_accordions();
                            }
                        }
                    }
                }
            };

            t.hide_tabs = function() {

                //Call ahead function(described by options.tabs.begin)
                t.begin([t.current_item[0], t.target[0]], t.options.tabs.begin);

                //Hide siblings and remove active attributes
                t.target
                    .siblings(t.content_class)
                    .hide()
                    .removeClass(t.content_active)
                    .attr('aria-hidden', 'true');

                //Hide tab siblings and remove active attributes
                t.both_tabs
                    .siblings(t.buttons_class+','+t.tabs_class)
                    .removeClass(t.tabs_active+' '+t.buttons_active )
                    .attr({
                        'aria-expanded': 'false',
                        'aria-selected': 'false'
                    });

                if (t.options.tabs.toggle){
                    //If tabs are toggles, hide everything and remove active attributes
                    t.target
                        .hide()
                        .removeClass(t.content_active)
                        .attr('aria-hidden', 'true');

                    t.both_tabs
                        .removeClass(t.tabs_active+' '+t.buttons_active )
                        .attr({
                            'aria-expanded': 'false',
                            'aria-selected': 'false'
                        });
                }
            };

            t.hide_accordions = function(){

                //Call ahead function(described by options.buttons.begin)
                t.begin([t.current_item[0], t.target[0]], t.options.buttons.begin);

                //Hide target siblings and remove active attributes
                t.target
                    .siblings(t.content_class)
                    .velocity('slideUp',
                        t.anim_opts,
                        t.anim_opts
                    )
                    .removeClass(t.content_active)
                    .attr('aria-hidden', 'true');

                //Hide accordion siblings and remove active attributes
                t.both_tabs
                    .siblings(t.buttons_class+','+t.tabs_class)
                    .removeClass(t.tabs_active+' '+t.buttons_active )
                    .attr({
                        'aria-expanded': 'false',
                        'aria-selected': 'false'
                    });

                if (t.options.buttons.toggle){

                    //If accordions are toggles, hide everything and remove active attributes
                    t.both_tabs
                        .removeClass(t.tabs_active+' '+t.buttons_active )
                        .attr({
                            'aria-expanded': 'false',
                            'aria-selected': 'false'
                        });

                    t.target
                        .velocity('slideUp',
                            t.anim_opts,
                            t.anim_opts
                        )
                        .removeClass(t.content_active)
                        .attr('aria-hidden', 'true');
                }
            };


            t.show_tabs = function() {
                //Animate target
                t.target
                    .css('display', 'block')
                    .velocity(
                        t.anim_opts,
                        t.anim_opts
                    );
                //add appropriate active attributes
                t.make_active();
            };

            t.show_accordions = function() {
                //Animate target
                t.target.velocity('slideDown',
                    t.anim_opts,
                    t.anim_opts
                );

                //add appropriate active attributes
                t.make_active();
            };

            t.make_active = function(){
                //Apply 'active' attributes to targets
                t.target.addClass(t.content_active).attr('aria-hidden', 'false');

                //Apply active attributes tabs and accordion buttons
                // This is done to both to keep
                // responsive tab/accordions in sync in case of browser resize
                t.both_tabs
                    .not(t.buttons_class)
                    .addClass(t.tabs_active);
                t.both_tabs
                    .not(t.tabs_class)
                    .addClass(t.buttons_active);

                t.both_tabs.attr({
                    'aria-expanded': 'true',
                    'aria-selected': 'true'
                });
            };

            t.is_active = function() {
                //Checks whether the currently clicked item is active or not

                if(t.current_item.attr('aria-expanded') === 'true'){
                    return true;
                }else{
                    return false;
                }

                // if(t.is_tab() &&
                //     t.current_item.hasClass(t.options.tabs.active_class)){
                //     return true;
                //
                // }else if (!t.is_tab() &&
                //     t.current_item.hasClass(t.options.buttons.active_class)){
                //     return true;
                //
                // }else {
                //     return false;
                // }
            };

            //Check if current item is a tab or a button
            t.is_tab = function(){
                if($(t.current_item).hasClass(t.options.tabs.class_string)){
                    return true;
                }else {
                    return false;
                }
            };

            //Used during first run of tab activation.
            // Just skips all animations
            t.skip_animations = function(){
                t.target
                    .siblings(t.content_class)
                    .hide()
                    .removeClass(t.content_active)
                    .attr('aria-hidden','true');

                t.both_tabs
                    .siblings(t.buttons_class+','+t.tabs_class)
                    .removeClass(t.tabs_active+' '+t.buttons_active )
                    .attr({
                        'aria-expanded': 'false',
                        'aria-selected': 'false'
                    });

                t.target.show().attr('aria-hidden', 'false');

                t.make_active();
            };

            //Call ahead function (begin option)
            t.begin = function(elements, callahead) {
                if (typeof callahead === "function" ) {
                    callahead.call(elements, elements);
                }
            };

            //Add accessibility attributes to elements
            t.add_aria_roles = function() {
                var hash = "";

                $(t.buttons_class+','+t.tabs_class).each(function(){
                    $this = $(this);
                    if ($this.attr('aria-controls') !== undefined &&
                        $this.attr('role') !== undefined){

                        hash = $this.attr('href');
                        hash = hash.substring(1);

                        $this.attr({
                            'aria-controls': hash,
                            'role': 'tab'
                        });
                    }
                });

                $(t.content_class).attr('aria-role', 'tabpanel');
            };

    		t.init(user_options, callback, element);

    };

    $.fn.tabbed.defaults = default_options;
}); // jshint ignore:line

//# sourceMappingURL=maps/tabs.js.map