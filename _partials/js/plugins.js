// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

//Tabs to accordions
(function(a) {
    a.accordionTabs = function(b) {
        var c = this;
        var tabGroups = [];
        var z = a(".accordion_tab");

        c.init = function() {
            for (var i=0; i < z.length; i++){
                var y = z[i];
                var x = a(y).next()[0];
                var w = a(y).next().next();

                tabGroups.push(y,x);

                if (a(w).hasClass("accordion_tab") === false ){
                    var addons = a(y).attr('class');
                    a(tabGroups).wrapAll("<section class = 'tabbed "+addons+"' />");
                    tabGroups = [];
                }
            };

            a('.tabbed').removeClass('accordion_tab').prepend("<nav class='tabs' />");
            a(".accordion_tab").each(function(){
                var tabNav = a(this).parent(".tabbed").children(".tabs");
                a(this).clone().appendTo(tabNav).addClass('tab').removeClass("accordion_tab");
            });

            a(".tabbed .accordion_tab:first-of-type, .tabbed .tab:first-child").addClass("active");
            a(".tab_content").hide();
            var d = ""+a(".tabbed .accordion_tab:first-of-type").map(function(){return a(this).attr("href");}).get();
            a(d).each(function(){a(this).show()});

            var sideHeight = a('.side_tabs .tabs').outerHeight();
            a('.side_tabs').find('.tab_content').css("min-height", sideHeight);

            c.options = a.extend({}, a.accordionTabs.defaultOptions, b);

            a(".tabs .tab").click(function(e) {
                if (a(this).hasClass('active') === false){
                    var d = a(this).attr("href");
                    a(this).closest('.tabbed').find(".tab_content:first").siblings(".tab_content").andSelf().hide();
                    a(d).fadeIn(c.options.speed);
                    a(this).closest('.tabbed').find(".tab:first, .accordion_tab:first").siblings(".tab,.accordion_tab").andSelf().removeClass("active");
                    a(this).addClass("active");
                    a(this).closest('.tabbed').find(".accordion_tab[href^='" + d + "']").addClass("active");
                }
                e.preventDefault();
            });
            a(".accordion_tab").click(function(e) {
                if (a(this).hasClass('active') === false){
                    var d = a(this).attr("href");
                    a(this).closest('.tabbed').find(".tab_content:first").siblings(".tab_content").andSelf().slideUp('fast');
                    a(d).css("min-height","0").slideDown(c.options.speed);
                    a(this).closest('.tabbed').find(".tab:first, .accordion_tab:first").siblings(".tab, .accordion_tab").andSelf().removeClass("active");
                    a(this).addClass("active");
                    a(this).closest('.tabbed').find(".tab[href^='" + d + "']").addClass("active");
                }
                e.preventDefault();
            })

        };
        c.init()
    };
    a.accordionTabs.defaultOptions = {speed: 300};
    a.fn.accordionTabs = function(b) {
        return this.each(function() {
            (new a.accordionTabs(b))
        })
    }
})(jQuery);

// Place any jQuery/helper plugins in here.
