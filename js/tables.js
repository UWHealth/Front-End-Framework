//Responsive tables
(function(t) {
    var all_tables = t("table");
    var y = [];
    var z, current_cell = 0;
	var skip_cell = 0;
    var test = "this is a test";

    for (var i = 0; i < all_tables.length; i++) {

		var $current = t(all_tables[i]);

		$current.addClass('table_responsive');
		z = $current.find("thead th").map(function() {
			t(this).each(function() {
				return this.innerText;
			});
		});

		if (typeof y.push !== 'undefined')
			y.push(z.prevObject);
		if (typeof y[0] !== 'undefined')
			y = y[0];

		//Checking for colspans
		$current.find("tbody tr").each(function() {
			skip_cell = 0;
			t(this).children("td, th").each(function(j) {
				j = skip_cell + j;
				if (typeof y[j] !== 'undefined'){
						t(this).attr("data-th", y[j].innerText);
					if(this.colSpan > 1){
						skip_cell = this.colSpan;
						skip_cell = skip_cell - 1;
					}
				}
			});
		});
    }
})(jQuery);
