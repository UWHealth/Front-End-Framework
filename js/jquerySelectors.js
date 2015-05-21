//Add selector based on jQuery data
// e.g. $('element').data('foo', 'whatever')
// $('[foo]')
// Would select all elements with 'foo' as a data key
(function($){
    var _dataFn = $.fn.data;
    $.fn.data = function(key, val){
        if (typeof val !== 'undefined'){
            $.expr.attrHandle[key] = function(elem){
                return $(elem).attr(key) || $(elem).data(key);
            };
        }
        return _dataFn.apply(this, arguments);
    };
})(jQuery);
