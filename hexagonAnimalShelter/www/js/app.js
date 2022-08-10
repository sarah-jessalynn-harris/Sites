//make the miniNav sticky
function stickify() {
    //get the position of the mini nav\
    var stickyNavTop = $('.links').offset().top;
    
    //if the window has scrolled past the top of the mini nav stop it so that miniNav will stick
    var stickyNav = function(){
        var scrollTop = $(window).scrollTop();
        
        if (scrollTop > stickyNavTop) { 
            $('.links').addClass('sticky');
        } else {
            $('.links').removeClass('sticky'); 
        }
    };
    
    stickyNav();
    
    //check if the miniNav needs to stick when the window is scrolled
    $(window).scroll(function() {
        stickyNav();
    });
}

//load this on startup
$(document).ready (function (){

    //make the miniNav stick
    stickify();
});