$(document).ready(function(){
    $('#menu').click(function()
    {
        $(this).toggleClass('fa-times');
        $('header').togglClass('toggle');
    });
    $(window).on('scroll load',function()
    {
        $('#menu'),removeClass('fa-times');
        $('header').removeClass('toggle');
    });
});