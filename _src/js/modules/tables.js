//Responsive tables
// http://zurb.com/playground/projects/responsive-tables/index.html
(function($) {
	var switched = false;
	var updateTables = function() {
		if (($(window)[0].outerWidth < 640) && !switched) {
			switched = true;
			$(".table_responsive").each(function(i, element) {
				splitTable($(element));
			});
			return true;
		}
		else if (switched && ($(window)[0].outerWidth > 640)) {
			switched = false;
			$(".table_responsive").each(function(i, element) {
				unsplitTable($(element));
			});
		}
	};

	$(window).load(updateTables);
	$(window).bind("resize", updateTables);

    function splitTable(original)
	{
		original.wrap("<div class='table_wrapper' />");
		var copy = original.clone();
		copy.find("td:not(:first-child), th:not(:first-child)").css("display", "none");
		copy.removeClass("table_responsive");
		original.closest(".table_wrapper").append(copy);
		copy.wrap("<div class='table_pin' />");
		original.wrap("<div class='table_scroll' />");
	}

	function unsplitTable(original) {
		original.closest(".table_wrapper").find(".table_pin").remove();
		original.unwrap();
		original.unwrap();
	}

})(jQuery);
