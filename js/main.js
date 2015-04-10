//Helper for hiding/showing baseline-grid

$(function(){
    $('#toggles').children().click(function(e){
        var toggles = $(this).attr("id");
        $('body').toggleClass(toggles);
        e.preventDefault();
    });
});
