//Helper for hiding/showing baseline-grid

$(function(){
    $('html').addClass('baseline-off grid-off');
    $('#toggles').children().click(function(e){
        var toggles = $(this).attr("id");
        $('html').toggleClass(toggles);
        e.preventDefault();
    });
});